<template>
  <div>
    <!-- Hero -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid items-end gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-[68px] md:pt-[88px]">
          <div>
            <div class="pu-fade mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.services.kicker }}
            </div>
            <h1
              class="pu-rise mb-[26px] max-w-[20ch] font-display text-[clamp(40px,4.8vw,68px)] font-normal leading-[1.03] tracking-[-0.022em]"
            >
              {{ c.services.heading }}
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[19px] leading-[1.55] text-muted"
              style="animation-delay: 0.1s"
            >
              {{ c.services.lead }}
            </p>
          </div>

          <div class="pu-fade grid gap-[18px] border-line text-[15px] md:border-l md:pl-8" style="animation-delay: 0.3s">
            <div class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {{ c.services.includedLabel }}
            </div>
            <div class="grid gap-2.5 leading-[1.5] text-muted">
              <div v-for="item in c.services.included" :key="item" class="flex gap-3">
                <span class="text-accent" aria-hidden="true">·</span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- One block per service -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div
          v-for="(svc, i) in services"
          :key="svc.to"
          data-reveal
          class="grid gap-10 border-line py-14 md:grid-cols-[0.34fr_1fr] md:gap-14 md:py-[76px]"
          :class="{ 'border-b': i < services.length - 1 }"
        >
          <div>
            <div class="mb-4 font-mono text-[12px] text-accent">
              A.{{ String(i + 1).padStart(2, "0") }}
            </div>
            <h2
              class="mb-[18px] font-display text-[clamp(27px,2.9vw,34px)] font-normal leading-[1.1] tracking-[-0.016em]"
            >
              {{ svc.cardTitle }}
            </h2>
            <p class="mb-[26px] text-[16.5px] leading-[1.62] text-muted">{{ svc.cardBody }}</p>

            <div class="grid gap-2.5 border-t border-line pt-4 text-[14.5px]">
              <div
                v-for="spec in svc.specs"
                :key="spec.label"
                class="flex justify-between gap-4"
              >
                <span class="text-muted">{{ spec.label }}</span>
                <span>{{ spec.value }}</span>
              </div>
            </div>

            <NuxtLink
              :to="svc.to"
              class="mt-7 inline-flex h-11 items-center rounded-sm border border-line-2 px-5 text-[14.5px] font-medium transition-[border-color,background-color] duration-[250ms] hover:border-ink hover:bg-paper-2"
            >
              {{ c.common.readFullService }} &rarr;
            </NuxtLink>
          </div>

          <div>
            <NuxtLink v-if="cover(svc)" :to="svc.to" class="group block">
              <div class="mb-px overflow-hidden border border-line bg-paper-2">
                <img
                  :src="cover(svc)!.image"
                  :alt="cover(svc)!.name"
                  class="aspect-[16/9] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </NuxtLink>
            <div class="grid gap-px border border-line bg-line sm:grid-cols-2">
              <div
                v-for="point in svc.points.slice(0, 4)"
                :key="point.title"
                class="bg-paper px-6 py-6"
              >
                <h3 class="mb-2.5 text-[15.5px] font-semibold">{{ point.title }}</h3>
                <p class="text-[14.5px] leading-[1.6] text-muted">{{ point.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Boundaries -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[88px]">
        <div data-reveal class="grid items-start gap-10 md:grid-cols-[0.44fr_1fr] md:gap-16">
          <div>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.services.boundariesKicker }}
            </div>
            <h2
              class="mb-5 font-display text-[clamp(28px,3vw,36px)] font-normal leading-[1.1] tracking-[-0.016em]"
            >
              {{ c.services.boundariesHeading }}
            </h2>
            <p class="text-[16.5px] leading-[1.62] text-muted">
              {{ c.services.boundariesBody }}
            </p>
          </div>
          <div class="border-t border-line-2">
            <div
              v-for="item in c.services.declined"
              :key="item.title"
              class="grid gap-4 border-b border-line py-5 md:grid-cols-[1fr_1.4fr] md:gap-8"
            >
              <span class="text-[16px] font-medium">{{ item.title }}</span>
              <span class="text-[15.5px] leading-[1.6] text-muted">{{ item.body }}</span>
            </div>
          </div>
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
          {{ c.services.ctaHeading }}
        </h2>
        <BookCallButton size="lg" arrow />
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
