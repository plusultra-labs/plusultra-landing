<template>
  <div>
    <!-- Hero -->
    <section class="overflow-hidden border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div
          class="grid items-end gap-12 py-16 md:grid-cols-[1.4fr_0.6fr] md:gap-16 md:pb-[76px] md:pt-[104px]"
        >
          <div>
            <div class="pu-fade mb-9 flex items-center gap-3">
              <span class="block h-1.5 w-1.5 bg-accent" />
              <span
                class="font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted"
              >{{ c.home.kicker }}</span>
            </div>
            <h1
              class="mb-8 max-w-[19ch] font-display text-[clamp(46px,5.6vw,82px)] font-normal leading-[1.01] tracking-[-0.024em]"
            >
              <span
                v-for="(line, i) in c.home.heroLines"
                :key="i"
                class="pu-rise block"
                :style="{ animationDelay: `${i * 0.09}s` }"
              >
                <template v-if="i < c.home.heroLines.length - 1">{{ line }}</template>
                <template v-else>{{ line }} <em class="italic text-accent">{{ c.home.heroEmphasis }}</em></template>
              </span>
            </h1>
            <p
              class="pu-rise mb-[42px] max-w-[58ch] text-[19.5px] leading-[1.55] text-muted"
              style="animation-delay: 0.28s"
            >
              {{ c.home.lead }}
            </p>
            <div
              class="pu-rise flex flex-wrap items-center gap-3.5"
              style="animation-delay: 0.36s"
            >
              <BookCallButton arrow>{{ c.common.bookScopingCall }}</BookCallButton>
              <NuxtLink
                :to="lp('work')"
                class="inline-flex h-[52px] items-center rounded-sm border border-line-2 px-6 text-[15px] font-medium transition-[border-color,background-color] duration-[250ms] hover:border-ink hover:bg-paper-2"
              >
                {{ c.common.seeSelectedWork }}
              </NuxtLink>
            </div>
          </div>

          <div
            class="pu-fade grid gap-6 border-line md:border-l md:pl-[34px]"
            style="animation-delay: 0.4s"
          >
            <template v-for="(stat, i) in c.home.stats" :key="stat.label">
              <div v-if="i > 0" class="h-px bg-line" />
              <div>
                <div
                  class="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted"
                >
                  {{ stat.label }}
                </div>
                <div class="font-display text-[32px] leading-none">{{ stat.value }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof band -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <!-- padding lives on the wrapper: bg-line on a padded element would
             paint the container gutters, not just the 1px cell gaps -->
        <div class="grid gap-px bg-line md:grid-cols-4">
          <div
            v-for="proof in c.home.proofs"
            :key="proof.label"
            data-reveal
            class="bg-paper-2 py-7 md:px-[26px] md:first:pl-0 md:last:pr-0"
          >
            <div class="mb-2.5 font-display text-[34px] leading-none">{{ proof.value }}</div>
            <div class="text-[14.5px] leading-[1.5] text-muted">{{ proof.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid gap-8 pb-9 pt-16 md:grid-cols-[0.44fr_1fr] md:gap-16 md:pt-[92px]">
          <div data-reveal>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.home.servicesKicker }}
            </div>
            <h2
              class="font-display text-[clamp(30px,3.2vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
            >
              {{ c.home.servicesHeading }}
            </h2>
          </div>
          <p
            data-reveal
            class="max-w-[60ch] self-end text-[17.5px] leading-[1.62] text-muted"
          >
            {{ c.home.servicesIntro }}
          </p>
        </div>

        <div class="border-t border-line">
          <NuxtLink
            v-for="(svc, i) in services"
            :key="svc.to"
            :to="svc.to"
            data-reveal
            class="group -mx-3 grid items-start gap-6 border-b border-line px-3 py-9 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-[72px_1.05fr_1fr_130px] md:gap-8 md:py-10"
          >
            <span class="font-mono text-[12px] text-muted md:pt-[7px]">
              A.{{ String(i + 1).padStart(2, "0") }}
            </span>
            <h3
              class="font-display text-[clamp(24px,2.4vw,30px)] font-normal leading-[1.14] tracking-[-0.014em]"
            >
              {{ svc.cardTitle }}
            </h3>
            <p class="text-[16px] leading-[1.62] text-muted">{{ svc.cardBody }}</p>
            <span
              class="font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent md:pt-[9px] md:text-right"
            >
              {{ c.common.explore }} &rarr;
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What we build -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div class="grid gap-8 md:grid-cols-[0.44fr_1fr] md:gap-16">
          <div data-reveal>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.home.buildKicker }}
            </div>
            <h2
              class="font-display text-[clamp(30px,3.2vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
            >
              {{ c.home.buildHeading }}
            </h2>
          </div>
          <p data-reveal class="max-w-[60ch] self-end text-[17.5px] leading-[1.62] text-muted">
            {{ c.home.buildIntro }}
          </p>
        </div>

        <div class="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          <div
            v-for="cat in categories"
            :key="cat.slug"
            data-reveal
            class="flex flex-col bg-paper-2 px-7 py-8 md:px-8 md:py-9"
          >
            <h3 class="font-display text-[26px] font-normal leading-tight tracking-[-0.012em]">
              {{ cat.title }}
            </h3>
            <p class="mt-2.5 text-[15.5px] leading-[1.6] text-muted">{{ cat.blurb }}</p>
            <p class="mt-3.5 text-[14.5px] italic leading-[1.55] text-muted">
              {{ cat.forWho }}
            </p>

            <ul class="mt-6 border-t border-line">
              <li v-for="ex in categoryExamples(cat, work)" :key="ex.slug">
                <NuxtLink
                  :to="lp('work', `#${ex.slug}`)"
                  class="group flex items-baseline justify-between gap-4 border-b border-line py-3 transition-colors duration-[250ms] hover:text-accent"
                >
                  <span class="text-[15px] font-medium">{{ ex.name }}</span>
                  <span class="text-right font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
                    {{ ex.tags[0] }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap items-center justify-between gap-5">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {{ c.home.buildNote }}
          </p>
          <NuxtLink
            :to="lp('work')"
            class="inline-flex h-11 items-center rounded-sm border border-line-2 px-5 text-[14.5px] font-medium transition-[border-color,background-color] duration-[250ms] hover:border-ink hover:bg-paper"
          >
            {{ c.common.seeFullList }} &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- A few we can show -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2
            data-reveal
            class="max-w-[26ch] font-display text-[clamp(26px,2.8vw,34px)] font-normal leading-[1.1] tracking-[-0.018em]"
          >
            {{ c.home.showcaseHeading }}
          </h2>
          <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {{ c.home.showcaseLabel }}
          </span>
        </div>

        <div class="grid gap-x-7 gap-y-10 md:grid-cols-3">
          <NuxtLink
            v-for="item in featured"
            :key="item.slug"
            :to="lp('work', `#${item.slug}`)"
            data-reveal
            class="group block"
          >
            <div class="mb-[11px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {{ item.tags[0] }} · {{ item.tags[item.tags.length - 1] }}
            </div>
            <div class="overflow-hidden border border-line bg-paper-2">
              <img
                :src="item.image"
                :alt="item.name"
                class="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <h3 class="mt-4 font-display text-[26px] font-normal leading-tight">
              {{ item.name }}
            </h3>
            <p class="mt-1.5 text-[15.5px] leading-[1.55] text-muted">{{ item.tagline }}</p>
            <div class="mt-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
              {{ item.period }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.home.processKicker }}
        </div>
        <h2
          data-reveal
          class="mb-14 max-w-[24ch] font-display text-[clamp(30px,3.2vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.home.processHeading }}
        </h2>
        <div class="grid gap-px border-y border-line bg-line md:grid-cols-4">
          <!-- edge-bordered band: first/last cells align to the container,
               the same rule the proof band follows -->
          <div
            v-for="step in c.home.process"
            :key="step.title"
            data-reveal
            class="bg-paper px-6 py-8 md:py-9 md:first:pl-0 md:last:pr-0"
          >
            <div class="mb-6 font-mono text-[11px] tracking-[0.12em] text-accent">
              {{ step.when }}
            </div>
            <h3 class="mb-3 text-[17px] font-semibold">{{ step.title }}</h3>
            <p class="text-[15px] leading-[1.6] text-muted">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-b border-line">
      <div
        class="mx-auto grid max-w-site items-center gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:gap-[72px] md:px-10 md:py-24"
      >
        <div data-reveal>
          <h2
            class="mb-6 max-w-[22ch] font-display text-[clamp(34px,3.8vw,54px)] font-normal leading-[1.06] tracking-[-0.02em]"
          >
            {{ c.home.ctaHeading }} <em class="italic text-accent">{{ c.home.ctaEmphasis }}</em>
          </h2>
          <p class="max-w-[50ch] text-[18px] leading-[1.6] text-muted">
            {{ c.home.ctaBody }}
          </p>
        </div>
        <div data-reveal class="grid gap-4">
          <BookCallButton size="lg" class="justify-between" arrow />
          <a
            :href="`mailto:${org.email}`"
            class="flex h-[58px] items-center justify-between rounded-sm border border-line-2 px-6 text-[16px] transition-[border-color,background-color] duration-[250ms] hover:border-ink hover:bg-paper-2"
          >
            {{ org.email }}
            <span aria-hidden="true">&rarr;</span>
          </a>
          <div class="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {{ c.common.repliesWithin }}
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

const locale = useLocale();
const c = useCopy();
const lp = useLocalePath();

const services = computed(() => localisedServices(locale.value));
const categories = computed(() => localisedCategories(locale.value));
const work = computed(() => localisedWork(locale.value));
// The strip is labelled "Own products", so it may only contain them.
const featured = computed(() => work.value.filter((w) => w.kind === "own").slice(0, 3));

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
