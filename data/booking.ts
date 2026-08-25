// Cal.com booking, pointed at Alberto's own calendar.
//
// Both endpoints this site uses are public: GET /v2/slots and POST /v2/bookings
// accept unauthenticated calls and answer with `access-control-allow-origin: *`.
// So the whole flow runs in the browser and there is no API key anywhere. That
// matters here — the site is prerendered onto Cloudflare Pages, and a server
// route existing only to hold a secret would be the one dynamic thing on it.
export const booking = {
  /** cal.com/albertolina/meeting - the short intro call. */
  eventTypeId: 311703,
  username: "albertolina",
  eventTypeSlug: "meeting",
  /** Matches the event type; shown in the dialog, not sent to the API. */
  durationMinutes: 25,
  /** How far ahead the day picker looks. */
  windowDays: 21,

  apiBase: "https://api.cal.com/v2",
  // Pinned deliberately: cal.com serves an older response shape when the
  // version header is missing, and the two endpoints are versioned separately.
  slotsApiVersion: "2024-09-04",
  bookingApiVersion: "2026-02-25",
} as const;

/** Cal.com's own page, for when the in-page flow cannot load. */
export const bookingFallbackUrl = `https://cal.com/${booking.username}/${booking.eventTypeSlug}`;
