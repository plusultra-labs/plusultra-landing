<template>
  <dialog
    ref="dialogEl"
    :aria-labelledby="headingId"
    class="fixed inset-0 m-0 h-full max-h-full w-full max-w-full overflow-hidden bg-transparent p-0 font-sans text-ink"
    @close="closeBooking"
  >
    <!-- Phones: a full-height sheet. Larger screens: a centred panel. -->
    <div
      class="flex h-full w-full items-stretch justify-center overflow-y-auto sm:min-h-full sm:items-center sm:p-6"
      @click.self="closeBooking"
    >
      <div class="flex min-h-full w-full max-w-[920px] flex-col bg-paper sm:min-h-0">
        <div class="flex items-start justify-between gap-5 bg-ultra px-5 pb-6 pt-5 text-white md:px-9 md:pb-8 md:pt-8">
          <div class="flex flex-col gap-4">
            <RouteMark
              :step="step === 'slot' ? 1 : step === 'details' ? 3 : 4"
              :width="70"
              class="text-white"
              unlit="var(--on-ultra-line)"
            />
            <div>
              <p class="text-[15px] font-bold text-ultra-muted">{{ c.booking.kicker }}</p>
              <h2
                :id="headingId"
                class="mt-2 font-display text-[30px] font-extrabold leading-[1.02] md:text-[44px]"
                style="letter-spacing: -0.035em"
              >
                {{ heading }}
              </h2>
              <p v-if="lead" class="mt-3 max-w-[54ch] text-[15px] leading-[1.5] text-ultra-soft md:text-[16px]">
                {{ lead }}
              </p>
            </div>
          </div>
          <button
            type="button"
            :aria-label="c.booking.close"
            class="-mr-2 -mt-1 flex h-11 w-11 shrink-0 items-center justify-center text-white transition-colors duration-[250ms] hover:bg-ultra-deep"
            @click="closeBooking"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 2 L16 16 M16 2 L2 16" stroke="currentColor" stroke-width="2.5" fill="none" />
            </svg>
          </button>
        </div>

        <!-- Step 1 - which slot -->
        <div v-if="step === 'slot'" class="flex-1">
          <p v-if="pending" class="px-5 py-16 text-center text-[16px] font-semibold text-muted md:px-9">
            {{ c.booking.loading }}&hellip;
          </p>

          <div v-else-if="loadFailed" class="px-5 py-10 md:px-9 md:py-12">
            <p class="text-[17px] font-semibold">{{ c.booking.loadError }}</p>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex h-12 items-center bg-ultra px-5 text-[15px] font-bold text-white transition-colors duration-[250ms] hover:bg-ultra-deep"
                @click="load"
              >
                {{ c.booking.retry }}
              </button>
              <a
                :href="bookingFallbackUrl"
                target="_blank"
                rel="noopener"
                class="group inline-flex h-12 items-center gap-3 border-2 border-ink px-5 text-[15px] font-bold transition-colors duration-[250ms] hover:bg-ink hover:text-paper"
              >
                {{ c.booking.fallbackLink }}
                <ChevronIcon :size="11" class="text-accent group-hover:text-current" />
              </a>
            </div>
          </div>

          <div v-else-if="!days.length" class="px-5 py-10 md:px-9 md:py-12">
            <p class="max-w-[46ch] text-[17px] leading-[1.55]">
              {{ fill(c.booking.noSlots, { days: booking.windowDays }) }}
            </p>
            <a
              :href="`mailto:${org.email}`"
              class="group mt-5 inline-flex h-12 items-center gap-3 border-2 border-ink px-5 text-[15px] font-bold transition-colors duration-[250ms] hover:bg-ink hover:text-paper"
            >
              {{ org.email }}
              <ChevronIcon :size="11" class="text-accent group-hover:text-current" />
            </a>
          </div>

          <div v-else class="grid md:grid-cols-[minmax(0,260px)_1fr]">
            <div class="max-h-[34vh] overflow-y-auto bg-paper-2 md:max-h-[460px]">
              <button
                v-for="day in days"
                :key="day.date"
                type="button"
                :aria-pressed="day.date === activeDate"
                class="flex min-h-[56px] w-full items-center justify-between gap-3 border-b-[1.5px] border-paper px-5 text-left transition-colors duration-[250ms] md:px-6"
                :class="day.date === activeDate ? 'bg-ultra text-white' : 'hover:bg-accent-soft'"
                @click="activeDate = day.date"
              >
                <span class="text-[15px] font-bold leading-tight first-letter:uppercase">{{ dayLabel(day) }}</span>
                <span
                  class="shrink-0 text-[14px] font-semibold"
                  :class="day.date === activeDate ? 'text-ultra-muted' : 'text-muted'"
                >
                  {{ fill(c.booking.slotCount, { n: day.slots.length }) }}
                </span>
              </button>
            </div>

            <div class="px-5 py-5 md:max-h-[460px] md:overflow-y-auto md:px-8 md:py-7">
              <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
                <button
                  v-for="slot in activeSlots"
                  :key="slot"
                  type="button"
                  class="h-12 bg-paper-2 text-[15px] font-bold tabular-nums transition-colors duration-[250ms] hover:bg-ultra hover:text-white focus-visible:bg-ultra focus-visible:text-white"
                  @click="pick(slot)"
                >
                  {{ timeFmt.format(new Date(slot)) }}
                </button>
              </div>
              <p class="mt-6 text-[14px] font-semibold text-muted">
                {{ fill(c.booking.timezoneNote, { tz: timeZone }) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 2 - who, and what about -->
        <form
          v-else-if="step === 'details'"
          class="flex-1 px-5 py-6 md:px-9 md:py-8"
          @submit.prevent="submit"
        >
          <div class="mb-7 flex flex-wrap items-center justify-between gap-3 bg-accent-soft px-5 py-3">
            <span class="text-[16px] font-bold first-letter:uppercase">{{ chosenLabel }}</span>
            <button
              type="button"
              class="-mr-2 inline-flex h-11 items-center px-2 text-[15px] font-bold text-accent underline underline-offset-4"
              @click="step = 'slot'"
            >
              {{ c.booking.change }}
            </button>
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <label class="block">
              <span :class="labelClass">{{ c.booking.nameLabel }}</span>
              <input v-model="form.name" type="text" required autocomplete="name" :class="fieldClass" />
            </label>
            <label class="block">
              <span :class="labelClass">{{ c.booking.emailLabel }}</span>
              <input v-model="form.email" type="email" required autocomplete="email" :class="fieldClass" />
            </label>
          </div>

          <label class="mt-5 block">
            <span :class="labelClass">
              {{ c.booking.noteLabel }}
              <span class="ml-1.5 font-semibold text-muted">({{ c.booking.optional }})</span>
            </span>
            <textarea
              v-model="form.note"
              rows="4"
              :placeholder="c.booking.notePlaceholder"
              :class="[fieldBase, 'min-h-[132px] resize-y py-3 leading-[1.55]']"
            />
          </label>

          <p v-if="submitFailed" class="mt-5 border-l-[3px] border-accent pl-4 text-[15px] leading-[1.5] text-muted">
            {{ c.booking.submitError }}
            <a
              :href="bookingFallbackUrl"
              target="_blank"
              rel="noopener"
              class="font-bold text-accent underline underline-offset-4"
            >
              {{ c.booking.fallbackLink }}
            </a>
          </p>

          <button
            type="submit"
            :disabled="submitting"
            class="group mt-7 flex h-16 w-full items-center justify-between gap-3 bg-ultra px-7 text-[17px] font-bold text-white transition-colors duration-[250ms] hover:bg-ultra-deep disabled:pointer-events-none disabled:opacity-60 md:inline-flex md:w-auto md:min-w-[320px]"
          >
            {{ submitting ? `${c.booking.submitting}…` : c.booking.submit }}
            <ChevronIcon
              v-if="!submitting"
              :size="14"
              class="transition-transform duration-[250ms] group-hover:translate-x-0.5"
            />
          </button>
        </form>

        <!-- Step 3 - booked -->
        <div v-else class="flex-1 px-5 py-10 md:px-9 md:py-12">
          <p class="font-display text-[26px] font-extrabold leading-[1.15] first-letter:uppercase md:text-[34px]">
            {{ chosenLabel }}
          </p>
          <p class="mt-4 max-w-[52ch] text-[16px] leading-[1.55] text-muted md:text-[17px]">
            {{ fill(c.booking.doneLead, { email: form.email }) }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              class="inline-flex h-14 items-center justify-center bg-ultra px-7 text-[16px] font-bold text-white transition-colors duration-[250ms] hover:bg-ultra-deep"
              @click="closeBooking"
            >
              {{ c.booking.done }}
            </button>
            <a
              v-if="joinUrl"
              :href="joinUrl"
              target="_blank"
              rel="noopener"
              class="group inline-flex h-14 items-center justify-between gap-3 border-2 border-ink px-6 text-[16px] font-bold transition-colors duration-[250ms] hover:bg-ink hover:text-paper"
            >
              {{ c.booking.joinLink }}
              <ChevronIcon :size="12" class="text-accent group-hover:text-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
// The whole booking happens here rather than on cal.com, so the visitor can
// leave a note in the same breath as picking a time. Both API calls are
// unauthenticated and CORS-open - see data/booking.ts for why that is safe.
import { booking, bookingFallbackUrl } from "~/data/booking";
import { org } from "~/data/org";
import { LOCALE_TAGS } from "~/data/routes";
import { createBooking, fetchSlots, type DaySlots } from "~/composables/useCalCom";

const c = useCopy();
const locale = useLocale();
const { isOpen, closeBooking } = useBookCall();
const headingId = useId();

const dialogEl = ref<HTMLDialogElement | null>(null);
const step = ref<"slot" | "details" | "done">("slot");

const pending = ref(false);
const loadFailed = ref(false);
const days = ref<DaySlots[]>([]);
const activeDate = ref("");
const chosen = ref("");

const submitting = ref(false);
const submitFailed = ref(false);
const joinUrl = ref("");
const form = reactive({ name: "", email: "", note: "" });

// Resolved on the client only: on the server this would be the build machine's
// zone, which is nobody's. Nothing is shown before the dialog opens anyway.
const timeZone = ref("UTC");
onMounted(() => {
  timeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
});

const tag = computed(() => LOCALE_TAGS[locale.value]);
const dayFmt = computed(
  () =>
    new Intl.DateTimeFormat(tag.value, {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: timeZone.value,
    }),
);
const timeFmt = computed(
  () =>
    new Intl.DateTimeFormat(tag.value, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timeZone.value,
    }),
);
const chosenFmt = computed(
  () =>
    new Intl.DateTimeFormat(tag.value, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timeZone.value,
    }),
);

// Formatted from the first slot, not from the YYYY-MM-DD key: parsing that key
// gives midnight UTC, which lands on the day before for anyone west of London.
const dayLabel = (day: DaySlots) => dayFmt.value.format(new Date(day.slots[0]));

const activeSlots = computed(() => days.value.find((d) => d.date === activeDate.value)?.slots ?? []);
const chosenLabel = computed(() =>
  chosen.value ? chosenFmt.value.format(new Date(chosen.value)) : "",
);

const heading = computed(() =>
  step.value === "slot"
    ? c.value.booking.pickHeading
    : step.value === "details"
      ? c.value.booking.detailsHeading
      : c.value.booking.doneHeading,
);
const lead = computed(() =>
  step.value === "slot"
    ? fill(c.value.booking.pickLead, { duration: booking.durationMinutes })
    : step.value === "details"
      ? c.value.booking.detailsLead
      : "",
);

const labelClass = "mb-2 block text-[15px] font-bold";
// 16px text so iOS Safari does not zoom the page when a field takes focus.
const fieldBase =
  "block w-full border-2 border-line bg-paper-2 px-4 text-[16px] text-ink outline-none transition-[border-color,background-color] duration-[250ms] placeholder:text-muted hover:border-line-2 focus:border-accent focus:bg-paper";
const fieldClass = `${fieldBase} h-[52px]`;

async function load() {
  pending.value = true;
  loadFailed.value = false;
  try {
    days.value = await fetchSlots(timeZone.value);
    activeDate.value = days.value[0]?.date ?? "";
  } catch {
    loadFailed.value = true;
  } finally {
    pending.value = false;
  }
}

function pick(slot: string) {
  chosen.value = slot;
  submitFailed.value = false;
  step.value = "details";
}

async function submit() {
  submitting.value = true;
  submitFailed.value = false;
  try {
    const result = await createBooking({
      start: chosen.value,
      name: form.name.trim(),
      email: form.email.trim(),
      note: form.note.trim(),
      timeZone: timeZone.value,
      language: locale.value,
    });
    joinUrl.value = result.location?.startsWith("http") ? result.location : "";
    step.value = "done";
  } catch {
    submitFailed.value = true;
    // The usual cause is someone else taking the slot while this form was open,
    // so refresh the calendar rather than offer the dead time again.
    void load();
  } finally {
    submitting.value = false;
  }
}

function reset() {
  step.value = "slot";
  chosen.value = "";
  joinUrl.value = "";
  submitFailed.value = false;
  form.name = "";
  form.email = "";
  form.note = "";
}

function lockScroll(locked: boolean) {
  // showModal() traps focus but leaves the page behind it scrollable.
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

watch(isOpen, (open) => {
  const el = dialogEl.value;
  if (!el) return;
  if (open) {
    if (step.value === "done") reset();
    if (!el.open) el.showModal();
    lockScroll(true);
    if (!days.value.length && !pending.value) load();
  } else {
    if (el.open) el.close();
    lockScroll(false);
  }
});

onBeforeUnmount(() => lockScroll(false));
</script>

<style scoped>
/* ::backdrop is unreachable from a utility class in Tailwind 3, and it is the
   only part of the dialog chrome the visitor actually sees. */
dialog::backdrop {
  background: rgb(0 0 0 / 0.55);
}

dialog[open],
dialog[open]::backdrop {
  animation: pu-fade 0.28s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
</style>
