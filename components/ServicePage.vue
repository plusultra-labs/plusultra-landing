<template>
  <div>
    <!-- Hero -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid items-end gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-[68px] md:pt-[88px]">
          <div>
            <div class="pu-fade mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.servicePage.breadcrumb }} / {{ content.cardTitle }}
            </div>
            <h1
              class="pu-rise mb-[26px] max-w-[22ch] font-display text-[clamp(40px,4.8vw,68px)] font-normal leading-[1.03] tracking-[-0.022em]"
            >
              {{ content.title }}
            </h1>
            <p
              class="pu-rise mb-9 max-w-[58ch] text-[19px] leading-[1.55] text-muted"
              style="animation-delay: 0.1s"
            >
              {{ content.lead }}
            </p>
            <div class="pu-rise" style="animation-delay: 0.2s">
              <BookCallButton arrow>{{ c.common.bookScopingCall }}</BookCallButton>
            </div>
          </div>

          <div class="pu-fade grid gap-4 border-line text-[15px] md:border-l md:pl-8" style="animation-delay: 0.3s">
            <div class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {{ c.servicePage.atAGlance }}
            </div>
            <div
              v-for="spec in content.specs"
              :key="spec.label"
              class="flex justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
            >
              <span class="text-muted">{{ spec.label }}</span>
              <span>{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Narrative -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="grid gap-10 md:grid-cols-[0.44fr_1fr] md:gap-16">
          <h2
            class="max-w-[20ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
          >
            {{ content.narrative.heading }}
          </h2>
          <div>
            <p
              v-for="p in content.narrative.paragraphs"
              :key="p"
              class="mb-5 text-[17.5px] leading-[1.62] text-muted last:mb-0"
            >
              {{ p }}
            </p>
            <p
              class="mt-9 border-l-2 border-accent pl-6 font-display text-[22px] leading-[1.4]"
            >
              {{ content.narrative.pullQuote }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Capability points -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.pointsKicker }}
        </div>
        <h2
          data-reveal
          class="mb-12 max-w-[24ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.servicePage.pointsHeading }}
        </h2>
        <div class="grid gap-px border border-line bg-line md:grid-cols-3">
          <div
            v-for="item in content.points"
            :key="item.title"
            data-reveal
            class="bg-paper-2 px-7 py-8"
          >
            <h3 class="mb-2.5 text-[17px] font-semibold">{{ item.title }}</h3>
            <p class="text-[15px] leading-[1.6] text-muted">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works: pipeline -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.pipelineKicker }}
        </div>
        <h2
          data-reveal
          class="mb-5 max-w-[24ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.servicePage.pipelineHeading }}
        </h2>
        <p data-reveal class="mb-12 max-w-[62ch] text-[16.5px] leading-[1.62] text-muted">
          {{ content.pipeline.intro }}
        </p>

        <div class="grid gap-px border border-line bg-line md:grid-cols-4">
          <div
            v-for="(stage, i) in content.pipeline.stages"
            :key="stage.title"
            data-reveal
            class="relative flex flex-col bg-paper px-6 py-7 md:px-7"
          >
            <!-- connector, sits on the hairline between stages -->
            <span
              v-if="i > 0"
              class="absolute -left-2 top-[30px] hidden h-4 w-4 items-center justify-center bg-paper md:flex"
              aria-hidden="true"
            >
              <svg viewBox="0 0 16 16" class="h-3 w-3 text-accent" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M5 2.5 L10.5 8 L5 13.5" stroke-linecap="square" />
              </svg>
            </span>

            <div class="flex items-baseline justify-between gap-3">
              <span class="font-mono text-[12px] tracking-[0.12em] text-accent">
                {{ String(i + 1).padStart(2, "0") }}
              </span>
              <span class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ stage.duration }}
              </span>
            </div>

            <h3 class="mt-5 font-display text-[24px] font-normal leading-tight tracking-[-0.012em]">
              {{ stage.title }}
            </h3>
            <p class="mt-3 text-[14.5px] leading-[1.6] text-muted">{{ stage.body }}</p>

            <ul class="mt-6 space-y-2.5 border-t border-line pt-5">
              <li
                v-for="out in stage.outputs"
                :key="out"
                class="flex gap-3 text-[13.5px] leading-[1.55] text-muted"
              >
                <span class="text-accent" aria-hidden="true">·</span>
                <span>{{ out }}</span>
              </li>
            </ul>

            <div class="mt-auto pt-6">
              <span class="font-mono text-[10.5px] uppercase tracking-[0.14em]">
                {{ stage.basis }}
              </span>
            </div>
          </div>
        </div>

        <p class="mt-5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted">
          {{ content.pipeline.footnote }}
        </p>
      </div>
    </section>

    <!-- Deliverables -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.deliverablesKicker }}
        </div>
        <h2
          data-reveal
          class="mb-5 font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.servicePage.deliverablesHeading }}
        </h2>
        <p data-reveal class="mb-12 max-w-[58ch] text-[16.5px] leading-[1.62] text-muted">
          {{ c.servicePage.deliverablesIntro }}
        </p>
        <div class="grid gap-px border border-line bg-line md:grid-cols-3">
          <div
            v-for="group in content.deliverables"
            :key="group.group"
            data-reveal
            class="bg-paper-2 px-7 py-8"
          >
            <h3 class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">
              {{ group.group }}
            </h3>
            <ul class="mt-5">
              <li
                v-for="item in group.items"
                :key="item"
                class="border-b border-line py-3 text-[14.5px] leading-[1.6] text-muted first:pt-0 last:border-b-0 last:pb-0"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What we decline -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="grid items-start gap-10 md:grid-cols-[0.44fr_1fr] md:gap-16">
          <div>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.servicePage.boundariesKicker }}
            </div>
            <h2
              class="mb-5 font-display text-[clamp(28px,3vw,36px)] font-normal leading-[1.1] tracking-[-0.016em]"
            >
              {{ c.servicePage.boundariesHeading }}
            </h2>
            <p class="text-[16.5px] leading-[1.62] text-muted">
              {{ c.servicePage.boundariesBody }}
            </p>
          </div>
          <div class="border-t border-line-2">
            <div
              v-for="item in content.notDoing"
              :key="item"
              class="flex gap-5 border-b border-line py-5"
            >
              <span class="font-mono text-[13px] text-muted" aria-hidden="true">&#10005;</span>
              <span class="text-[16px] leading-[1.6] text-muted">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-10">
          <div data-reveal>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.servicePage.pricingKicker }}
            </div>
            <h2
              class="max-w-[24ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
            >
              {{ c.servicePage.pricingHeading }}
            </h2>
          </div>
          <p class="m-0 max-w-[38ch] text-[15px] leading-[1.6] text-muted">
            {{ c.servicePage.pricingNote }}
          </p>
        </div>
        <div class="grid gap-px border border-line bg-line md:grid-cols-3">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.title"
            data-reveal
            class="flex flex-col gap-4 bg-paper px-7 py-8"
          >
            <div class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {{ String(i + 1).padStart(2, "0") }} · {{ tier.title }}
            </div>
            <div class="font-display text-[30px] leading-none">{{ tier.price }}</div>
            <p class="text-[15px] leading-[1.6] text-muted">{{ tier.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.faqKicker }}
        </div>
        <h2
          data-reveal
          class="mb-12 font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.servicePage.faqHeading }}
        </h2>
        <div class="grid md:grid-cols-2 md:gap-x-16">
          <div
            v-for="item in content.faq"
            :key="item.q"
            class="border-b border-line py-6 first:pt-0 md:[&:nth-child(2)]:pt-0"
          >
            <h3 class="text-[16.5px] font-semibold leading-snug">{{ item.q }}</h3>
            <p class="mt-3 text-[15.5px] leading-[1.6] text-muted">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related work -->
    <section v-if="related.length" class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.relatedKicker }}
        </div>
        <h2
          data-reveal
          class="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.servicePage.relatedHeading }}
        </h2>
        <p data-reveal class="mb-12 mt-4 max-w-[58ch] text-[16px] leading-[1.62] text-muted">
          {{ c.servicePage.relatedNote }}
        </p>
        <div class="grid gap-x-7 gap-y-10 md:grid-cols-3">
          <NuxtLink
            v-for="item in related"
            :key="item.slug"
            :to="lp('work', `#${item.slug}`)"
            data-reveal
            class="group block"
          >
            <div class="overflow-hidden border border-line bg-paper">
              <img
                :src="item.image"
                :alt="item.name"
                class="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <h3 class="mt-4 font-display text-[24px] font-normal leading-tight">{{ item.name }}</h3>
            <p class="mt-1.5 text-[15px] text-muted">{{ item.tagline }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Other services -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-14 md:px-10 md:py-16">
        <div class="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.servicePage.otherServices }}
        </div>
        <div class="mt-7 grid gap-px border border-line bg-line md:grid-cols-2">
          <NuxtLink
            v-for="other in otherServices"
            :key="other.to"
            :to="other.to"
            class="group bg-paper px-7 py-8 transition-colors duration-300 hover:bg-paper-2"
          >
            <h3 class="mb-2.5 font-display text-[24px] font-normal leading-tight">
              {{ other.cardTitle }}
            </h3>
            <p class="text-[15px] leading-[1.6] text-muted">{{ other.cardBody }}</p>
            <div class="mt-6 font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent">
              {{ c.common.explore }} &rarr;
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-b border-line">
      <div
        class="mx-auto flex max-w-site flex-wrap items-center justify-between gap-10 px-5 py-16 md:px-10 md:py-[88px]"
      >
        <h2
          class="max-w-[24ch] font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.08] tracking-[-0.018em]"
        >
          {{ content.cta }}
        </h2>
        <BookCallButton size="lg" arrow />
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
const related = computed(() =>
  localisedWork(locale.value)
    .filter((w) => w.service === props.slug)
    .slice(0, 6),
);
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
