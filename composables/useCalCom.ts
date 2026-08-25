import { booking } from "~/data/booking";

/** One calendar day that has at least one free slot. */
export interface DaySlots {
  /** YYYY-MM-DD, in the visitor's timezone. */
  date: string;
  /** ISO start times, already offset to the visitor's timezone. */
  slots: string[];
}

export interface BookingInput {
  start: string;
  name: string;
  email: string;
  note: string;
  timeZone: string;
  language: string;
}

export interface BookingResult {
  uid: string;
  start: string;
  end: string;
  /** A Meet/Cal video URL when the event type has one; free text otherwise. */
  location?: string;
}

/** YYYY-MM-DD as it reads in `timeZone`, not in the browser's own zone. */
function isoDate(date: Date, timeZone: string) {
  // en-CA is the shortest way to an ISO-shaped date out of Intl.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Free slots for the next `windowDays`, grouped by day and stripped of empties. */
export async function fetchSlots(timeZone: string): Promise<DaySlots[]> {
  const now = new Date();
  const end = new Date(now.getTime() + booking.windowDays * 86_400_000);

  const response = await $fetch<{ data: Record<string, { start: string }[]> }>(
    `${booking.apiBase}/slots`,
    {
      headers: { "cal-api-version": booking.slotsApiVersion },
      query: {
        eventTypeId: booking.eventTypeId,
        start: isoDate(now, timeZone),
        end: isoDate(end, timeZone),
        timeZone,
      },
    },
  );

  return Object.entries(response.data ?? {})
    .map(([date, slots]) => ({ date, slots: slots.map((s) => s.start) }))
    .filter((day) => day.slots.length > 0)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Books the slot. The visitor's note goes into cal.com's own "Additional
 * notes" booking field, so it lands in the calendar event and the confirmation
 * email rather than in a separate inbox somewhere.
 */
export async function createBooking(input: BookingInput): Promise<BookingResult> {
  const response = await $fetch<{ data: BookingResult }>(`${booking.apiBase}/bookings`, {
    method: "POST",
    headers: { "cal-api-version": booking.bookingApiVersion },
    body: {
      start: input.start,
      eventTypeId: booking.eventTypeId,
      attendee: {
        name: input.name,
        email: input.email,
        timeZone: input.timeZone,
        language: input.language,
      },
      bookingFieldsResponses: { notes: input.note },
      // Tells us the lead came from the site, and in which language.
      metadata: { source: "plusultralabs.com", locale: input.language },
    },
  });

  return response.data;
}
