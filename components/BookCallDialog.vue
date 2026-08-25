<template>
  <dialog
    ref="dialogEl"
    :aria-labelledby="headingId"
    class="fixed inset-0 m-0 h-full max-h-full w-full max-w-full overflow-hidden bg-transparent p-0 text-ink"
    @close="closeBooking"
  >
    <div
      class="flex min-h-full w-full items-end justify-center overflow-y-auto sm:items-center sm:p-6"
      @click.self="closeBooking"
    >
      <div class="w-full max-w-[880px] border border-line bg-paper">
        <div
          class="flex items-start justify-between gap-6 border-b border-line px-5 py-5 md:px-8 md:py-6"
        >
          <div>
            <div class="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.booking.kicker }}
            </div>
            <h2
              :id="headingId"
              class="mt-2.5 font-display text-[26px] font-normal leading-[1.1] tracking-[-0.018em] md:text-[32px]"
            >
              {{ heading }}
            </h2>
            <p v-if="lead" class="mt-2.5 max-w-[54ch] text-[14.5px] leading-[1.55] text-muted">
              {{ lead }}
            </p>
          </div>
          <button
            type="button"
            :aria-label="c.booking.close"
            class="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line text-[17px] leading-none text-muted transition-[border-color,color] duration-[250ms] hover:border-ink hover:text-ink"
            @click="closeBooking"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- Step 1 - which slot -->
        <div v-if="step === 'slot'">
          <p v-if="pending" class="px-5 py-16 text-center text-[15px] text-muted md:px-8">
            {{ c.booking.loading }}&hellip;
          </p>

          <div v-else-if="loadFailed" class="px-5 py-12 md:px-8">
            <p class="text-[16px]">{{ c.booking.loadError }}</p>
            <div class="mt-4 flex flex-wrap items-center gap-6">
              <button
                type="button"
                class="text-[15px] underline underline-offset-4 hover:text-accent"
                @click="load"
              >
                {{ c.booking.retry }}
              </button>
              <a
                :href="bookingFallbackUrl"
                target="_blank"
                rel="noopener"
                class="text-[15px] text-muted underline underline-offset-4 hover:text-ink"
              >
                {{ c.booking.fallbackLink }} &rarr;
              </a>
            </div>
          </div>

          <div v-else-if="!days.length" class="px-5 py-12 md:px-8">
            <p class="max-w-[46ch] text-[16px] leading-[1.55]">
              {{ fill(c.booking.noSlots, { days: booking.windowDays }) }}
            </p>
            <a
              :href="`mailto:${org.email}`"
              class="mt-4 inline-block text-[15px] underline underline-offset-4 hover:text-accent"
            >
              {{ org.email }}
            </a>
          </div>

          <div v-else class="grid md:grid-cols-[minmax(0,238px)_1fr]">
            <div
              class="max-h-[38vh] overflow-y-auto border-b border-line md:max-h-[430px] md:border-b-0 md:border-r"
            >
              <button
                v-for="day in days"
                :key="day.date"
                type="button"
                :aria-pressed="day.date === activeDate"
                class="flex w-full items-baseline justify-between gap-3 border-b border-line px-5 py-3.5 text-left transition-[background-color] duration-[250ms] md:px-6"
                :class="day.date === activeDate ? 'bg-accent-soft' : 'hover:bg-paper-2'"
                @click="activeDate = day.date"
              >
                <span class="text-[15px] leading-tight">{{ dayLabel(day) }}</span>
                <span class="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
                  {{ fill(c.booking.slotCount, { n: day.slots.length }) }}
                </span>
              </button>
            </div>

            <div class="max-h-[42vh] overflow-y-auto px-5 py-5 md:max-h-[430px] md:px-7 md:py-6">
              <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
                <button
                  v-for="slot in activeSlots"
                  :key="slot"
                  type="button"
                  class="h-11 rounded-sm border border-line-2 font-mono text-[12.5px] transition-[border-color,background-color,color,transform] duration-[250ms] hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper"
                  @click="pick(slot)"
                >
                  {{ timeFmt.format(new Date(slot)) }}
                </button>
              </div>
              <p class="mt-6 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
                {{ fill(c.booking.timezoneNote, { tz: timeZone }) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Step 2 - who, and what about -->
        <form
          v-else-if="step === 'details'"
          class="px-5 py-6 md:px-8 md:py-7"
          @submit.prevent="submit"
        >
          <div
            class="mb-7 flex flex-wrap items-center justify-between gap-3 border border-line bg-paper-2 px-4 py-3.5"
          >
            <span class="text-[15.5px]">{{ chosenLabel }}</span>
            <button
              type="button"
              class="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted underline underline-offset-4 hover:text-ink"
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
              <span class="ml-2 normal-case tracking-normal text-muted">({{ c.booking.optional }})</span>
            </span>
            <textarea
              v-model="form.note"
              rows="4"
              :placeholder="c.booking.notePlaceholder"
              :class="[fieldClass, 'h-auto resize-y py-3 leading-[1.55]']"
            />
          </label>

          <p v-if="submitFailed" class="mt-5 border-l-2 border-accent pl-4 text-[14.5px] text-muted">
            {{ c.booking.submitError }}
            <a
              :href="bookingFallbackUrl"
              target="_blank"
              rel="noopener"
              class="underline underline-offset-4 hover:text-ink"
            >
              {{ c.booking.fallbackLink }} &rarr;
            </a>
          </p>

          <button
            type="submit"
            :disabled="submitting"
            class="mt-7 inline-flex h-[52px] items-center gap-2.5 rounded-sm bg-ink px-6 text-[15px] font-medium text-paper transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-accent disabled:pointer-events-none disabled:opacity-60"
          >
            {{ submitting ? `${c.booking.submitting}…` : c.booking.submit }}
            <span v-if="!submitting" aria-hidden="true">&rarr;</span>
          </button>
        </form>

        <!-- Step 3 - booked -->
        <div v-else class="px-5 py-10 md:px-8 md:py-12">
          <p class="font-display text-[22px] leading-[1.25] md:text-[26px]">{{ chosenLabel }}</p>
          <p class="mt-3.5 max-w-[52ch] text-[16px] leading-[1.55] text-muted">
            {{ fill(c.booking.doneLead, { email: form.email }) }}
          </p>
          <div class="mt-7 flex flex-wrap items-center gap-6">
            <button
              type="button"
              class="inline-flex h-[52px] items-center rounded-sm bg-ink px-6 text-[15px] font-medium text-paper transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-accent"
              @click="closeBooking"
            >
              {{ c.booking.done }}
            </button>
            <a
              v-if="joinUrl"
              :href="joinUrl"
              target="_blank"
              rel="noopener"
              class="text-[15px] underline underline-offset-4 hover:text-accent"
            >
              {{ c.booking.joinLink }} &rarr;
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

const labelClass =
  "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted";
const fieldClass =
  "block h-12 w-full rounded-sm border border-line-2 bg-paper px-4 text-[15px] text-ink transition-[border-color] duration-[250ms] placeholder:text-muted hover:border-ink focus:border-ink";

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
