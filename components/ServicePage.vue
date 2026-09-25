<template>
  <div>
    <!-- Hero: the blue field, like the homepage. -->
    <section class="bg-ultra text-white">
      <div class="mx-auto max-w-site px-5 pb-12 pt-8 md:px-10 md:pb-20 md:pt-[72px]">
        <nav class="pu-fade mb-5 text-[15px] font-semibold text-ultra-muted md:mb-10" :aria-label="c.servicePage.breadcrumb">
          <NuxtLink :to="lp('services')" class="underline-offset-4 hover:text-white hover:underline">
            {{ c.servicePage.breadcrumb }}
          </NuxtLink>
          <span aria-hidden="true"> / </span>
          <span class="text-white">{{ content.cardTitle }}</span>
        </nav>
        <h1
          class="pu-rise max-w-[20ch] font-display text-[clamp(38px,6vw,84px)] font-extrabold leading-[0.98] md:leading-[0.95]"
          style="letter-spacing: -0.04em"
        >
          {{ content.title }}
        </h1>

        <div class="mt-6 grid gap-8 md:mt-12 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-20">
          <div class="pu-rise flex flex-col gap-8" style="animation-delay: 0.1s">
            <p class="max-w-[56ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]">
              {{ content.lead }}
            </p>
            <div>
              <BookCallButton variant="onInk" size="lg" arrow>{{ c.common.bookScopingCall }}</BookCallButton>
            </div>
          </div>

          <div class="pu-fade" style="animation-delay: 0.25s">
            <p class="mb-4 text-[15px] font-bold text-ultra-muted">{{ c.servicePage.atAGlance }}</p>
            <dl class="grid gap-5 sm:grid-cols-3 sm:gap-6">
              <div v-for="spec in content.specs" :key="spec.label" class="border-t-[3px] border-white pt-3 md:pt-4">
                <dd class="font-display text-[22px] font-extrabold leading-[1.1] md:text-[24px]">{{ spec.value }}</dd>
                <dt class="mt-2 text-[14px] leading-[1.3] text-ultra-soft md:text-[15px]">{{ spec.label }}</dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative -->
    <section class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="grid gap-8 md:grid-cols-[0.8fr_1fr] md:gap-20">
          <h2 class="font-display text-[30px] font-extrabold leading-[1.04] md:text-[48px] md:leading-[1.02]">
            {{ content.narrative.heading }}
          </h2>
          <div>
            <p
              v-for="p in content.narrative.paragraphs"
              :key="p"
              class="mb-5 text-[16px] leading-[1.6] text-muted last:mb-0 md:text-[18px]"
            >
              {{ p }}
            </p>
            <p
              class="mt-8 border-t-[3px] border-accent pt-5 font-display text-[22px] font-extrabold leading-[1.25] text-accent md:mt-10 md:text-[28px]"
            >
              {{ content.narrative.pullQuote }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 1 · Capability points -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-14 md:gap-6">
          <SectionKicker :step="1" :text="c.servicePage.pointsKicker" />
          <h2 class="max-w-[22ch] font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.servicePage.pointsHeading }}
          </h2>
        </div>
        <div class="grid gap-3 md:grid-cols-3 md:gap-6">
          <div
            v-for="item in content.points"
            :key="item.title"
            data-reveal
            class="flex flex-col gap-3 bg-paper p-6 md:p-8"
          >
            <h3 class="font-display text-[20px] font-extrabold leading-[1.15] md:text-[22px]">{{ item.title }}</h3>
            <p class="text-[15px] leading-[1.6] text-muted md:text-[16px]">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 2 · Pipeline: the dashes grow, the last stage is the arrow. -->
    <section class="bg-night-block py-14 text-white md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-16 md:gap-6">
          <SectionKicker
            :step="2"
            :text="c.servicePage.pipelineKicker"
            mark-class="text-periwinkle"
            unlit="var(--night-line)"
          />
          <h2 class="max-w-[20ch] font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.servicePage.pipelineHeading }}
          </h2>
          <p class="max-w-[62ch] text-[16px] leading-[1.6] text-night-muted md:text-[18px]">
            {{ content.pipeline.intro }}
          </p>
        </div>

        <ol class="grid gap-8 md:grid-cols-4 md:gap-8">
          <li
            v-for="(stage, i) in content.pipeline.stages"
            :key="stage.title"
            data-reveal
            class="grid grid-cols-[36px_1fr] gap-x-4 md:flex md:flex-col md:gap-4"
          >
            <span class="flex justify-center pt-1 md:h-9 md:items-center md:justify-start md:pt-0">
              <span
                v-if="i < content.pipeline.stages.length - 1"
                class="block w-1.5 bg-periwinkle md:!h-2 md:w-[var(--w)]"
                :style="{ height: `${stageBar(i).h}px`, '--w': `${stageBar(i).w}%` }"
              />
              <ChevronIcon v-else :size="26" :weight="5" class="rotate-90 text-periwinkle md:rotate-0" />
            </span>
            <div class="flex flex-col gap-2 md:gap-3">
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <span class="text-[14px] font-extrabold text-periwinkle md:text-[15px]">{{ stage.duration }}</span>
                <span class="text-[14px] font-bold text-night-muted">{{ stage.basis }}</span>
              </div>
              <h3 class="font-display text-[22px] font-extrabold leading-[1.1] md:text-[24px]">{{ stage.title }}</h3>
              <p class="text-[15px] leading-[1.6] text-night-muted md:text-[16px]">{{ stage.body }}</p>
              <ul class="mt-2 space-y-2.5 border-t border-night-line pt-4">
                <li v-for="out in stage.outputs" :key="out" class="flex gap-3 text-[14px] leading-[1.55] text-night-muted">
                  <ChevronIcon :size="8" :weight="6" class="mt-[6px] text-periwinkle" />
                  <span>{{ out }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <p class="mt-10 max-w-[70ch] text-[15px] font-semibold leading-[1.55] text-night-muted md:mt-14">
          {{ content.pipeline.footnote }}
        </p>
      </div>
    </section>

    <!-- Step 3 · Deliverables -->
    <section class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="mb-8 grid gap-5 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="3" :text="c.servicePage.deliverablesKicker" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ c.servicePage.deliverablesHeading }}
            </h2>
          </div>
          <p data-reveal class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ c.servicePage.deliverablesIntro }}
          </p>
        </div>
        <div class="grid gap-3 md:grid-cols-3 md:gap-6">
          <div
            v-for="group in content.deliverables"
            :key="group.group"
            data-reveal
            class="bg-paper-2 px-6 pb-3 pt-6 md:px-8 md:pt-8"
          >
            <h3 class="font-display text-[20px] font-extrabold text-accent md:text-[22px]">{{ group.group }}</h3>
            <ul class="mt-4">
              <li
                v-for="item in group.items"
                :key="item"
                class="border-t-[1.5px] border-line py-3.5 text-[15px] leading-[1.55] md:text-[16px]"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What we decline -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="grid items-start gap-8 md:grid-cols-[0.8fr_1fr] md:gap-20">
          <div class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="3" :text="c.servicePage.boundariesKicker" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[48px]">
              {{ c.servicePage.boundariesHeading }}
            </h2>
            <p class="text-[16px] leading-[1.6] text-muted md:text-[18px]">
              {{ c.servicePage.boundariesBody }}
            </p>
          </div>
          <ul class="flex flex-col gap-2.5">
            <li
              v-for="item in content.notDoing"
              :key="item"
              class="flex items-start gap-4 bg-paper px-5 py-4 md:px-6 md:py-5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" class="mt-[5px] shrink-0 text-accent" aria-hidden="true">
                <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" stroke-width="2.5" />
              </svg>
              <span class="text-[16px] leading-[1.55] md:text-[17px]">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Step 4 · Pricing -->
    <section class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="mb-8 grid gap-5 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="4" :text="c.servicePage.pricingKicker" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ onRequest ? c.servicePage.pricingHeadingOnRequest : c.servicePage.pricingHeading }}
            </h2>
          </div>
          <p data-reveal class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ onRequest ? c.servicePage.pricingNoteOnRequest : c.servicePage.pricingNote }}
          </p>
        </div>
        <div class="grid gap-3 md:grid-cols-3 md:gap-6">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.title"
            data-reveal
            class="flex flex-col gap-4 p-6 md:min-h-[300px] md:p-8"
            :class="tierTone[i % 3].card"
          >
            <span class="text-[15px] font-bold" :class="tierTone[i % 3].label">{{ tier.title }}</span>
            <div
              class="font-display font-extrabold leading-[1.05]"
              :class="[onRequest ? 'text-[24px] md:text-[26px]' : 'text-[34px] md:text-[44px]', tierTone[i % 3].price]"
              style="letter-spacing: -0.03em"
            >
              {{ tier.price }}
            </div>
            <p class="text-[15px] leading-[1.6] md:text-[16px]" :class="tierTone[i % 3].body">{{ tier.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-12 md:gap-6">
          <SectionKicker :step="4" :text="c.servicePage.faqKicker" />
          <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.servicePage.faqHeading }}
          </h2>
        </div>
        <div class="grid gap-2.5 md:grid-cols-2 md:gap-3">
          <details v-for="item in content.faq" :key="item.q" class="group self-start bg-paper">
            <summary
              class="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6 [&::-webkit-details-marker]:hidden"
            >
              <h3 class="text-[16px] font-bold leading-[1.35] md:text-[17px]">{{ item.q }}</h3>
              <ChevronIcon
                :size="12"
                :weight="5"
                class="text-accent transition-transform duration-[250ms] group-open:rotate-90"
              />
            </summary>
            <p class="px-5 pb-5 text-[15px] leading-[1.6] text-muted md:px-6 md:text-[16px]">{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Related work -->
    <section v-if="related.length" class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="mb-8 grid gap-5 md:mb-12 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div data-reveal class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="4" :text="c.servicePage.relatedKicker" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[48px]">
              {{ c.servicePage.relatedHeading }}
            </h2>
          </div>
          <p data-reveal class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ c.servicePage.relatedNote }}
          </p>
        </div>
        <ul class="grid gap-x-6 md:grid-cols-2">
          <li v-for="item in related" :key="item.slug">
            <NuxtLink
              :to="lp('work', `#${item.slug}`)"
              class="group -mx-3 flex min-h-[72px] items-center justify-between gap-4 border-t-[1.5px] border-line px-3 transition-colors duration-[250ms] hover:border-accent hover:bg-paper-2 md:-mx-4 md:px-4"
            >
              <span class="flex flex-col gap-0.5 py-3">
                <span class="text-[17px] font-bold transition-colors duration-[250ms] group-hover:text-accent md:text-[18px]">
                  {{ item.name }}
                </span>
                <span class="text-[15px] text-muted">{{ item.outcome || item.tagline }}</span>
              </span>
              <ChevronIcon :size="13" :weight="5" class="text-accent transition-transform duration-[250ms] group-hover:translate-x-1" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Other services -->
    <section class="bg-paper-2 py-14 md:py-20">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <h2 class="mb-6 font-display text-[24px] font-extrabold md:mb-8 md:text-[32px]">
          {{ c.servicePage.otherServices }}
        </h2>
        <div class="grid gap-2.5 md:grid-cols-3 md:gap-6">
          <NuxtLink
            v-for="other in otherServices"
            :key="other.to"
            :to="other.to"
            class="group flex flex-col gap-3 bg-paper p-5 transition-colors duration-[250ms] hover:bg-accent-soft md:p-8"
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="font-display text-[22px] font-extrabold leading-[1.1] md:text-[24px]">{{ other.cardTitle }}</h3>
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center bg-ultra text-white transition-transform duration-[250ms] group-hover:translate-x-1"
              >
                <ChevronIcon :size="13" />
              </span>
            </div>
            <p class="text-[15px] leading-[1.6] text-muted md:text-[16px]">{{ other.cardBody }}</p>
            <span class="sr-only">{{ c.common.explore }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA: the arrowhead. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[120px] top-6 h-[340px] w-[300px] md:-right-[60px] md:top-6 md:h-[480px] md:w-[420px]"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto flex max-w-site flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:gap-20 md:px-10 md:py-24"
      >
        <h2
          class="max-w-[22ch] font-display text-[34px] font-extrabold leading-none md:text-[clamp(44px,4.6vw,64px)] md:leading-[0.98]"
          style="letter-spacing: -0.04em"
        >
          {{ content.cta }}
        </h2>
        <BookCallButton variant="onInk" size="lg" class="shrink-0 justify-between" arrow>
          {{ c.common.bookScopingCall }}
        </BookCallButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { localisedPricing, localisedService, localisedServices, localisedWork } from "~/data/i18n";
import { pagePath, type ServiceSlug } from "~/data/routes";
import { SITE_URL, org } from "~/data/org";
import { fill } from "~/composables/useLocale";

const props = defineProps<{ slug: ServiceSlug }>();

const locale = useLocale();
const c = useCopy();
const lp = useLocalePath();

const content = computed(() => localisedService(locale.value, props.slug));
const tiers = computed(() => localisedPricing(locale.value, props.slug));
// A service with no public price must not sit under "Prices published".
const onRequest = computed(() => !tiers.value.some((t) => /\d/.test(t.price)));
const related = computed(() =>
  localisedWork(locale.value)
    .filter((w) => w.service === props.slug)
    .slice(0, 6),
);
// Pipeline bars grow stage by stage: taller on phones, wider on desktop.
function stageBar(i: number) {
  return { h: [24, 44, 72, 96][i] ?? 96, w: [22, 45, 80, 100][i] ?? 100 };
}

// Ice, blue, ink: the tiers never share a colour.
const tierTone = [
  { card: "bg-paper-2", label: "text-accent", price: "", body: "text-muted" },
  { card: "bg-ultra text-white", label: "text-ultra-muted", price: "", body: "text-ultra-soft" },
  { card: "bg-night-block text-white", label: "text-periwinkle", price: "", body: "text-night-muted" },
];

const otherServices = computed(() =>
  localisedServices(locale.value).filter((s) => s.slug !== props.slug),
);

const schema = computed(() => {
  const url = `${SITE_URL}${pagePath(locale.value, props.slug)}`;
  const sp = c.value.servicePage;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.value.cardTitle,
        description: content.value.cardBody,
        serviceType: content.value.cardTitle,
        inLanguage: locale.value,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: org.areaServed.map((a) => ({ "@type": "Place", name: a })),
        offers: tiers.value.map((t) => ({
          "@type": "Offer",
          name: t.title,
          description: t.body,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            description: t.price,
          },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: content.value.cardTitle,
          itemListElement: content.value.deliverables.flatMap((g) =>
            g.items.map((item) => ({
              "@type": "OfferCatalog",
              name: g.group,
              itemListElement: [{ "@type": "Offer", name: item }],
            })),
          ),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale.value,
        mainEntity: content.value.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${url}#process`,
        name: fill(sp.howToName, { service: content.value.cardTitle.toLowerCase() }),
        description: content.value.pipeline.intro,
        inLanguage: locale.value,
        step: content.value.pipeline.stages.map((st, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: st.title,
          text: `${st.body} (${st.duration}, ${st.basis})`,
          itemListElement: st.outputs.map((o) => ({
            "@type": "HowToDirection",
            text: o,
          })),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: c.value.common.breadcrumbHome,
            item: `${SITE_URL}${pagePath(locale.value, "home")}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: sp.breadcrumb,
            item: `${SITE_URL}${pagePath(locale.value, "services")}`,
          },
          { "@type": "ListItem", position: 3, name: content.value.cardTitle },
        ],
      },
    ],
  });
});

useHead({
  title: () => content.value.meta.title,
  meta: [{ name: "description", content: () => content.value.meta.description }],
  script: [{ type: "application/ld+json", innerHTML: schema }],
});
</script>
