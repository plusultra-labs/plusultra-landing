<template>
  <div>
    <!-- Hero: the blue field; what every engagement includes sits beside it. -->
    <section class="bg-ultra text-white">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid gap-10 py-12 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-20 md:pb-20 md:pt-[88px]">
          <div>
            <p class="pu-fade mb-5 text-[15px] font-bold text-ultra-muted md:mb-8 md:text-[18px]">
              {{ c.services.kicker }}
            </p>
            <h1
              class="pu-rise mb-6 max-w-[18ch] font-display text-[clamp(38px,5.4vw,80px)] font-extrabold leading-[0.96] md:mb-8"
              style="letter-spacing: -0.04em"
            >
              {{ c.services.heading }}
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]"
              style="animation-delay: 0.1s"
            >
              {{ c.services.lead }}
            </p>
          </div>

          <div class="pu-fade border-t-[3px] border-white pt-4" style="animation-delay: 0.3s">
            <h2 class="mb-4 text-[15px] font-extrabold md:text-[16px]">{{ c.services.includedLabel }}</h2>
            <ul class="grid gap-3">
              <li
                v-for="item in c.services.included"
                :key="item"
                class="flex items-start gap-3 text-[16px] font-semibold leading-[1.4] md:text-[17px]"
              >
                <ChevronIcon :size="10" :weight="6" class="mt-[5px] text-ultra-muted" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- One block per service -->
    <section class="bg-paper-2 py-12 md:py-24">
      <div class="mx-auto flex max-w-site flex-col gap-4 px-5 md:gap-6 md:px-10">
        <SectionKicker :step="1" class="mb-2 md:mb-4" />
        <article
          v-for="svc in services"
          :key="svc.to"
          data-reveal
          class="grid gap-8 bg-paper p-5 md:grid-cols-[0.9fr_1fr] md:gap-14 md:p-10"
        >
          <div class="flex flex-col">
            <h2
              class="font-display text-[30px] font-extrabold leading-[1.04] md:text-[44px]"
              style="letter-spacing: -0.035em"
            >
              <NuxtLink :to="svc.to" class="transition-colors duration-[250ms] hover:text-accent">
                {{ svc.cardTitle }}
              </NuxtLink>
            </h2>
            <p class="mt-4 text-[16px] leading-[1.55] text-muted md:text-[17px]">{{ svc.cardBody }}</p>

            <dl class="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 md:mt-8" :class="svc.specs.length > 2 ? 'md:grid-cols-3' : ''">
              <div
                v-for="spec in svc.specs"
                :key="spec.label"
                class="border-t-[3px] border-accent pt-3"
              >
                <dt class="text-[14px] font-semibold text-muted">{{ spec.label }}</dt>
                <dd class="mt-1 text-[16px] font-extrabold leading-[1.3] md:text-[18px]">{{ spec.value }}</dd>
              </div>
            </dl>

            <div class="flex-1" />
            <NuxtLink
              :to="svc.to"
              class="group mt-8 flex h-14 items-center justify-between gap-4 bg-ultra px-6 text-[16px] font-bold text-white transition-colors duration-[250ms] hover:bg-ultra-deep md:self-start"
            >
              {{ c.common.readFullService }}
              <ChevronIcon :size="13" class="transition-transform duration-[250ms] group-hover:translate-x-1" />
            </NuxtLink>
          </div>

          <div class="flex flex-col gap-3">
            <NuxtLink v-if="cover(svc)" :to="svc.to" class="group block overflow-hidden bg-paper-2 p-2 md:p-3">
              <img
                :src="cover(svc)!.image"
                :alt="cover(svc)!.name"
                class="block aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </NuxtLink>
            <div class="grid gap-3 sm:grid-cols-2">
              <!-- Phones keep two points so four services stay scannable. -->
              <div
                v-for="(point, pi) in svc.points.slice(0, 4)"
                :key="point.title"
                class="bg-paper-2 p-5"
                :class="pi > 1 ? 'hidden sm:block' : ''"
              >
                <h3 class="mb-2 text-[16px] font-bold leading-[1.3]">{{ point.title }}</h3>
                <p class="text-[15px] leading-[1.55] text-muted">{{ point.body }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Boundaries -->
    <section class="bg-night-block py-12 text-white md:py-24">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div class="flex flex-col gap-5 md:sticky md:top-28 md:gap-6">
            <SectionKicker
              :step="2"
              :text="c.services.boundariesKicker"
              mark-class="text-periwinkle"
              unlit="var(--night-line)"
            />
            <h2
              class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none"
              style="letter-spacing: -0.035em"
            >
              {{ c.services.boundariesHeading }}
            </h2>
            <p class="max-w-[44ch] text-[16px] leading-[1.55] text-night-muted md:text-[18px]">
              {{ c.services.boundariesBody }}
            </p>
          </div>
          <ul class="grid gap-3">
            <li
              v-for="item in c.services.declined"
              :key="item.title"
              class="grid grid-cols-[36px_1fr] gap-x-4 bg-white/[0.06] p-5 md:p-6"
            >
              <span
                class="flex h-9 w-9 items-center justify-center bg-periwinkle text-night"
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" stroke-width="2.6" /></svg>
              </span>
              <div class="flex flex-col gap-1.5">
                <span class="text-[17px] font-bold leading-[1.35] md:text-[18px]">{{ item.title }}</span>
                <span class="text-[15px] leading-[1.55] text-night-muted md:text-[16px]">{{ item.body }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- The arrowhead: the call. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[120px] top-6 h-[340px] w-[300px] md:-right-[60px] md:top-6 md:h-[480px] md:w-[420px]"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto flex max-w-site flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:gap-16 md:px-10 md:py-28"
      >
        <h2
          class="max-w-[20ch] font-display text-[36px] font-extrabold leading-none md:text-[clamp(44px,4.6vw,64px)] md:leading-[0.98]"
          style="letter-spacing: -0.04em"
        >
          {{ c.services.ctaHeading }}
        </h2>
        <BookCallButton variant="onInk" size="lg" class="justify-between md:min-w-[300px]" arrow>
          {{ c.common.bookScopingCall }}
        </BookCallButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ServiceContent } from "~/data/services";
import { localisedServices, localisedWork } from "~/data/i18n";

const locale = useLocale();
const c = useCopy();

const services = computed(() => localisedServices(locale.value));
const work = computed(() => localisedWork(locale.value));

const cover = (svc: ServiceContent) => work.value.find((w) => w.service === svc.slug);

useHead({
  title: () => c.value.services.meta.title,
  meta: [{ name: "description", content: () => c.value.services.meta.description }],
});
</script>
