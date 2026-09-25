<template>
  <div>
    <!-- Hero: the blue field, the promise, and the logo rule unrolled into
         the founder timeline. -->
    <section class="bg-ultra text-white">
      <div class="mx-auto max-w-site px-5 pt-8 md:px-10 md:pt-[72px]">
        <p class="pu-fade mb-5 max-w-[60ch] text-[15px] font-semibold text-ultra-muted md:mb-10 md:text-[18px]">
          {{ c.home.kicker }}
        </p>
        <h1
          class="font-display text-[clamp(44px,8.2vw,116px)] font-extrabold leading-[0.94] md:leading-[0.92]"
          style="letter-spacing: -0.04em"
        >
          <!-- Lines stack on desktop and flow on phones; the explicit space
               keeps words apart when they flow (Vue trims trailing spaces). -->
          <template v-for="(line, i) in c.home.heroLines" :key="i">
            <span class="pu-rise md:block" :style="{ animationDelay: `${i * 0.08}s` }">{{ line }}</span>{{ " " }}
          </template>
          <span class="pu-rise md:block" :style="{ animationDelay: `${c.home.heroLines.length * 0.08}s` }">{{
            c.home.heroEmphasis
          }}</span>
        </h1>

        <div class="mt-6 grid gap-8 md:mt-12 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-20">
          <div class="pu-rise flex flex-col gap-8" style="animation-delay: 0.3s">
            <p class="max-w-[50ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[21px]">
              {{ c.home.lead }}
            </p>
            <div class="hidden flex-wrap gap-3.5 md:flex">
              <BookCallButton variant="onInk" size="lg" arrow>{{ c.common.bookScopingCall }}</BookCallButton>
              <a
                href="#numbers"
                class="inline-flex h-16 items-center border-2 border-white px-7 text-[17px] font-bold transition-colors duration-[250ms] hover:bg-white hover:text-ultra"
              >
                {{ c.home.seeNumbers }}
              </a>
            </div>
          </div>

          <dl class="pu-fade grid grid-cols-3 gap-3 md:gap-6" style="animation-delay: 0.4s">
            <div v-for="stat in c.home.stats" :key="stat.label" class="border-t-[3px] border-white pt-3 md:pt-4">
              <dd class="font-display text-[26px] font-extrabold leading-none md:text-[36px]">
                {{ stat.value }}
              </dd>
              <dt class="mt-2 text-[14px] leading-[1.3] text-ultra-soft md:text-[16px]">{{ stat.label }}</dt>
            </div>
          </dl>
        </div>

        <!-- Desktop: the rule runs across, dashes growing into the arrow. -->
        <ol class="hidden grid-cols-[16fr_26fr_42fr_180px] items-center gap-x-5 gap-y-4 pb-16 pt-12 md:grid">
          <li v-for="(t, i) in c.home.timeline" :key="t.year" class="contents">
            <span v-if="i < 3" class="block h-2.5 bg-white" :style="{ gridColumn: i + 1, gridRow: 1 }" />
            <ChevronIcon v-else :size="40" :weight="4.5" class="text-white" :style="{ gridColumn: 4, gridRow: 1 }" />
            <span class="text-[15px] leading-[1.4] text-ultra-soft" :style="{ gridColumn: i + 1, gridRow: 2 }">
              <strong class="block font-bold text-white">{{ t.year }}</strong>{{ t.label }}
            </span>
          </li>
        </ol>

        <!-- Phones: the same rule, turned to run down the screen. -->
        <ol class="grid grid-cols-[44px_1fr] gap-x-4 pb-8 pt-8 md:hidden">
          <li v-for="(t, i) in c.home.timeline" :key="t.year" class="contents">
            <span class="flex justify-center">
              <span v-if="i < 3" class="block w-2 bg-white" :style="{ height: `${[22, 34, 52][i]}px` }" />
              <ChevronIcon v-else :size="26" :weight="4.5" class="rotate-90 text-white" />
            </span>
            <span class="pb-3 text-[15px] leading-[1.35] text-ultra-soft">
              <strong class="font-bold text-white">{{ t.year }}</strong> {{ t.label }}
            </span>
          </li>
        </ol>
      </div>

      <div class="bg-ultra-deep">
        <div class="mx-auto flex max-w-site flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:gap-7 md:px-10">
          <span class="text-[15px] font-bold md:text-[16px]">{{ c.home.sectorsLabel }}</span>
          <ul class="flex flex-wrap gap-2 md:gap-2.5">
            <li
              v-for="sector in sectors"
              :key="sector"
              class="border-[1.5px] border-ultra-line px-3 py-[7px] text-[15px] font-semibold md:px-3.5 md:py-2"
            >
              {{ sector }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Step 1 · Proof: each card leads with its number. -->
    <section id="numbers" class="scroll-mt-20 py-14 md:py-28">
      <div class="mx-auto max-w-site md:px-10">
        <div class="mb-6 grid gap-5 px-5 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20 md:px-0">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="1" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ c.home.showcaseHeading }}
            </h2>
          </div>
          <p data-reveal class="hidden text-[18px] leading-[1.55] text-muted md:block">
            {{ c.home.showcaseLabel }}
          </p>
        </div>

        <!-- Phones swipe the cards sideways; desktop lays them in a row. -->
        <div
          class="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          style="scroll-padding-left: 20px"
        >
          <NuxtLink
            v-for="(item, i) in featured"
            :key="item.slug"
            :to="lp('work', `#${item.slug}`)"
            class="group flex min-h-[440px] w-[300px] shrink-0 snap-start flex-col gap-3.5 p-6 md:min-h-[580px] md:w-auto md:gap-5 md:p-9"
            :class="cardTone[i % 3].card"
          >
            <span class="self-start border-[1.5px] px-2.5 py-1.5 text-[14px] font-bold" :class="cardTone[i % 3].chip">
              {{ c.home.kindLabels[item.kind] }}
            </span>
            <template v-if="item.metrics?.length">
              <div
                class="pt-2 font-display text-[76px] font-extrabold leading-[0.9] md:pt-4 md:text-[clamp(64px,6vw,88px)]"
                :class="cardTone[i % 3].number"
                style="letter-spacing: -0.045em"
              >
                {{ item.metrics[0].value }}
              </div>
              <p class="text-[16px] leading-[1.45] md:text-[19px]" :class="cardTone[i % 3].body">
                {{ item.metrics[0].label }}
              </p>
            </template>
            <div class="flex-1" />
            <dl
              v-if="item.metrics && item.metrics.length > 1"
              class="grid grid-cols-2 gap-4 border-t-[1.5px] pt-3 text-[15px] leading-[1.4] md:pt-4"
              :class="[cardTone[i % 3].rule, cardTone[i % 3].body]"
            >
              <div v-for="m in item.metrics.slice(1)" :key="m.value">
                <dt class="font-display text-[22px] font-extrabold md:text-[24px]" :class="cardTone[i % 3].strong">
                  {{ m.value }}
                </dt>
                <dd>{{ m.label }}</dd>
              </div>
            </dl>
            <div class="flex items-end justify-between gap-4">
              <div>
                <h3 class="font-display text-[22px] font-extrabold leading-[1.1] md:text-[24px]">{{ item.name }}</h3>
                <p class="pt-1 text-[14px] leading-[1.45] md:text-[15px]" :class="cardTone[i % 3].note">
                  {{ item.outcome }}
                </p>
              </div>
              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-[250ms] group-hover:translate-x-1 md:h-[52px] md:w-[52px]"
                :class="cardTone[i % 3].button"
              >
                <ChevronIcon :size="15" />
              </span>
            </div>
          </NuxtLink>
          <span class="w-2 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>

    <!-- Step 2 · Services -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="mb-6 grid gap-5 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="2" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ c.home.servicesHeading }}
            </h2>
          </div>
          <p data-reveal class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ c.home.servicesIntro }}
          </p>
        </div>

        <div class="flex flex-col gap-2.5 md:gap-3">
          <NuxtLink
            v-for="svc in services"
            :key="svc.to"
            :to="svc.to"
            data-reveal
            class="group grid grid-cols-[1fr_44px] gap-x-3 gap-y-2.5 bg-paper p-5 transition-colors duration-[250ms] hover:bg-accent-soft md:grid-cols-[0.9fr_1.2fr_200px_64px] md:items-center md:gap-10 md:py-8 md:pl-10 md:pr-8"
          >
            <h3 class="font-display text-[24px] font-extrabold leading-[1.08] md:text-[32px] md:leading-[1.05]">
              {{ svc.cardTitle }}
            </h3>
            <span
              class="row-span-1 flex h-11 w-11 items-center justify-center bg-ultra text-white transition-transform duration-[250ms] group-hover:translate-x-1 md:order-last md:h-16 md:w-16"
            >
              <ChevronIcon :size="14" />
            </span>
            <p class="col-span-2 text-[16px] leading-[1.5] text-muted md:col-span-1 md:text-[17px]">{{ svc.cardBody }}</p>
            <p class="col-span-2 text-[15px] leading-[1.5] md:col-span-1">
              <strong class="font-extrabold md:block md:text-[20px]">{{ svc.specs[0]?.value }}</strong>
              <span class="text-muted"><span class="md:hidden"> · </span>{{ priceLine(svc) }}</span>
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Step 3 · What we build: kinds of build, sectors, every row an outcome. -->
    <section class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="mb-6 grid gap-5 md:mb-12 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="3" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ c.home.buildHeading }}
            </h2>
          </div>
          <p data-reveal class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ c.home.buildIntro }}
          </p>
        </div>

        <div data-reveal class="mb-6 flex flex-col gap-1.5 bg-accent-soft p-4 md:mb-12 md:flex-row md:items-center md:gap-5 md:px-6 md:py-5">
          <span class="text-[14px] font-bold text-accent md:text-[16px]">{{ c.home.sectorsNote }}</span>
          <span class="text-[15px] font-semibold leading-[1.5] md:text-[16px]">{{ c.work.sectors }}</span>
        </div>

        <div class="grid gap-3 md:grid-cols-2 md:gap-6">
          <div
            v-for="cat in categories"
            :key="cat.slug"
            data-reveal
            class="flex flex-col gap-2.5 bg-paper-2 px-5 pb-2 pt-6 md:gap-3 md:px-9 md:pb-5 md:pt-9"
          >
            <h3 class="font-display text-[24px] font-extrabold leading-[1.1] md:text-[30px]">{{ cat.title }}</h3>
            <p class="text-[15px] leading-[1.55] text-muted md:text-[16px]">{{ cat.blurb }}</p>
            <p class="text-[15px] font-bold leading-[1.45] text-accent md:text-[16px]">{{ cat.forWho }}</p>

            <ul class="pt-1.5 md:pt-3">
              <li v-for="ex in categoryExamples(cat, work)" :key="ex.slug">
                <NuxtLink
                  :to="lp('work', `#${ex.slug}`)"
                  class="group -mx-3 flex min-h-[68px] items-center justify-between gap-4 border-t-[1.5px] border-line px-3 transition-colors duration-[250ms] hover:border-accent hover:bg-paper md:-mx-4 md:min-h-[72px] md:px-4"
                >
                  <span class="flex flex-col gap-0.5 py-2.5">
                    <span class="text-[17px] font-bold transition-colors duration-[250ms] group-hover:text-accent md:text-[18px]">
                      {{ ex.name }}
                    </span>
                    <span v-if="ex.outcome" class="text-[15px] text-muted">{{ ex.outcome }}</span>
                  </span>
                  <span class="flex items-center gap-2.5 text-accent">
                    <span
                      class="hidden text-[14px] font-bold opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100 md:inline"
                    >{{ c.home.readCase }}</span>
                    <ChevronIcon
                      :size="13"
                      :weight="5"
                      class="transition-transform duration-[250ms] group-hover:translate-x-1"
                    />
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <p class="text-[15px] text-muted md:text-[16px]">{{ c.home.buildNote }}</p>
          <NuxtLink
            :to="lp('work')"
            class="group flex h-14 items-center justify-between gap-3.5 border-2 border-ink px-5 text-[16px] font-bold transition-colors duration-[250ms] hover:bg-ink hover:text-paper md:inline-flex md:px-6"
          >
            {{ c.common.seeFullList }}
            <ChevronIcon :size="13" class="text-accent transition-transform duration-[250ms] group-hover:translate-x-1 group-hover:text-current" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Step 4 · Process: the arrow lights up, the next block is the call. -->
    <section class="bg-night-block py-14 text-white md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-16 md:gap-6">
          <SectionKicker :step="4" mark-class="text-periwinkle" unlit="var(--night-line)" />
          <h2 class="max-w-[18ch] font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.home.processHeading }}
          </h2>
        </div>
        <ol class="grid gap-6 md:grid-cols-4 md:gap-8">
          <li
            v-for="(step, i) in c.home.process"
            :key="step.title"
            data-reveal
            class="grid grid-cols-[36px_1fr] gap-x-4 md:flex md:flex-col md:gap-3.5"
          >
            <span class="flex justify-center pt-1 md:h-9 md:items-center md:justify-start md:pt-0">
              <span
                v-if="i < 3"
                class="block w-1.5 bg-periwinkle md:!h-2 md:w-[var(--w)]"
                :style="{ height: `${[24, 44, 72][i]}px`, '--w': `${[22, 45, 80][i]}%` }"
              />
              <ChevronIcon v-else :size="26" :weight="5" class="rotate-90 text-periwinkle md:rotate-0" />
            </span>
            <div class="flex flex-col gap-1.5 md:gap-3.5">
              <span class="text-[14px] font-extrabold text-periwinkle md:text-[16px]">{{ step.when }}</span>
              <h3 class="font-display text-[20px] font-extrabold md:text-[24px]">{{ step.title }}</h3>
              <p class="text-[15px] leading-[1.55] text-night-muted md:text-[16px]">{{ step.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- The arrowhead: the call. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[120px] top-6 h-[340px] w-[300px] md:-right-[60px] md:top-10 md:h-[600px] md:w-[520px]"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto grid max-w-site gap-6 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-20 md:px-10 md:py-28"
      >
        <div data-reveal class="flex flex-col gap-6 md:gap-7">
          <h2
            class="font-display text-[38px] font-extrabold leading-none md:text-[clamp(48px,5vw,72px)] md:leading-[0.98]"
            style="letter-spacing: -0.04em"
          >
            {{ c.home.ctaHeading }} {{ c.home.ctaEmphasis }}
          </h2>
          <p class="max-w-[46ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]">
            {{ c.home.ctaBody }}
          </p>
        </div>
        <div data-reveal class="flex flex-col gap-3.5">
          <div class="flex items-center gap-4 pb-2.5">
            <img
              src="/alberto.jpg"
              :alt="c.about.founderAlt"
              class="h-16 w-16 shrink-0 object-cover md:h-[84px] md:w-[84px]"
              loading="lazy"
            />
            <p class="text-[15px] leading-[1.45] text-ultra-soft md:text-[17px]">
              <strong class="text-white">{{ c.contact.speakingWith }} Alberto.</strong>
              {{ c.contact.founderNote }}
            </p>
          </div>
          <BookCallButton variant="onInk" size="lg" class="justify-between" arrow>
            {{ c.common.bookScopingCall }}
          </BookCallButton>
          <a
            :href="`mailto:${org.email}`"
            class="group flex h-16 items-center justify-between border-2 border-white px-7 text-[16px] font-semibold transition-colors duration-[250ms] hover:bg-white hover:text-ultra md:text-[18px]"
          >
            {{ org.email }}
            <ChevronIcon :size="14" class="transition-transform duration-[250ms] group-hover:translate-x-1" />
          </a>
          <div class="pt-1 text-[14px] text-ultra-muted md:text-[15px]">
            {{ c.common.repliesWithinTz }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { categoryExamples } from "~/data/categories";
import { localisedCategories, localisedServices, localisedWork } from "~/data/i18n";
import { org } from "~/data/org";
import { featuredSlugs, type WorkItem } from "~/data/site";

const locale = useLocale();
const c = useCopy();
const lp = useLocalePath();

const services = computed(() => localisedServices(locale.value));
const categories = computed(() => localisedCategories(locale.value));
const work = computed(() => localisedWork(locale.value));
// Chosen by slug, not by kind: TourScanner is a "role", and the strip no
// longer claims to show only our own products.
const featured = computed(() =>
  featuredSlugs
    .map((slug) => work.value.find((w) => w.slug === slug))
    .filter((w): w is WorkItem => Boolean(w)),
);

const sectors = computed(() => c.value.work.sectors.split("·").map((s) => s.trim()));

// Blue, ink, ice: the three cards never share a colour, so a swipe on a
// phone always shows a change.
const cardTone = [
  {
    card: "bg-ultra text-white",
    chip: "border-ultra-line",
    number: "",
    body: "text-ultra-soft",
    rule: "border-ultra-line",
    strong: "text-white",
    note: "text-ultra-muted",
    button: "bg-white text-ultra",
  },
  {
    card: "bg-night-block text-white",
    chip: "border-night-line",
    number: "text-periwinkle",
    body: "text-night-muted",
    rule: "border-night-line",
    strong: "text-white",
    note: "text-night-muted",
    button: "bg-ultra text-white",
  },
  {
    card: "bg-accent-soft text-ink",
    chip: "border-accent-soft-line",
    number: "text-accent",
    body: "text-muted",
    rule: "border-accent-soft-line",
    strong: "text-ink",
    note: "text-muted",
    button: "bg-ultra text-white",
  },
];

/** "from ~ EUR 15k" style line: the service's last spec. */
function priceLine(svc: { specs: { label: string; value: string }[] }) {
  const last = svc.specs[svc.specs.length - 1];
  if (!last) return "";
  // "Quoted after the scoping call" reads on its own; "~ EUR 15k" needs "from".
  return /\d/.test(last.value) ? `${last.label.toLowerCase()} ${last.value}` : last.value;
}

useHead({
  title: () => c.value.home.meta.title,
  meta: [
    { name: "description", content: () => c.value.home.meta.description },
    { property: "og:title", content: () => c.value.home.meta.ogTitle },
    { property: "og:description", content: () => c.value.home.meta.ogDescription },
    { property: "og:image", content: "/og_image.png" },
    { property: "og:type", content: "website" },
  ],
});
</script>
