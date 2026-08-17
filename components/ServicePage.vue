<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-14 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[24ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        {{ title }}
      </h1>
      <p class="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
        {{ lead }}
      </p>
      <div class="mt-8">
        <BookCallButton variant="accent" />
      </div>
    </header>

    <section class="border-y border-line">
      <div class="mx-auto grid max-w-site md:grid-cols-2">
        <div
          v-for="(item, i) in points"
          :key="item.title"
          class="border-b border-line p-6 last:border-b-0 md:px-10 md:py-9"
          :class="{ 'md:border-r': i % 2 === 0, 'md:border-b-0': i >= points.length - 2 }"
        >
          <h2 class="mb-2 text-lg font-medium">{{ item.title }}</h2>
          <p class="text-[15px] leading-relaxed text-ink-soft">{{ item.body }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-24">
      <h2 class="mb-10 text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.025em]">
        How it works
      </h2>
      <ol class="grid gap-8 md:grid-cols-4 md:gap-6">
        <li v-for="step in steps" :key="step.title">
          <h3 class="mb-2 text-[17px] font-medium">{{ step.title }}</h3>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">{{ step.body }}</p>
        </li>
      </ol>
    </section>

    <!-- Pricing -->
    <section class="border-y border-line bg-white/50">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-20">
        <h2 class="text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.025em]">
          What your budget gets you
        </h2>
        <p class="mt-3 max-w-[58ch] text-[15px] text-ink-soft">
          Every project is quoted on its real scope; these ranges show the
          order of magnitude so you know where you stand before the first call.
        </p>
        <div class="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          <div v-for="tier in tiers" :key="tier.title" class="bg-paper p-8">
            <div class="font-mono text-[22px] font-medium text-accent">{{ tier.price }}</div>
            <h3 class="mb-2 mt-3 text-lg font-medium">{{ tier.title }}</h3>
            <p class="text-[14.5px] leading-relaxed text-ink-soft">{{ tier.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related work -->
    <section class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-24">
      <h2 class="mb-10 text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.025em]">
        Projects from this service
      </h2>
      <div class="grid gap-x-7 gap-y-10 md:grid-cols-3">
        <NuxtLink
          v-for="item in related"
          :key="item.slug"
          :to="`/work#${item.slug}`"
          class="group block"
        >
          <div class="overflow-hidden border border-line bg-[#e7e7e2]">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[8/5] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div class="pt-3.5">
            <b class="text-[16px] font-medium">{{ item.name }}</b>
            <p class="mt-0.5 text-[13.5px] text-ink-soft">{{ item.tagline }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="bg-ink py-20 text-paper md:py-24">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <h2 class="mb-8 max-w-[24ch] text-[clamp(28px,3.2vw,44px)] font-bold tracking-[-0.03em]">
          {{ cta }}
        </h2>
        <BookCallButton variant="accent" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { allWork, pricing, type WorkItem } from "~/data/site";

const props = defineProps<{
  title: string;
  lead: string;
  points: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  cta: string;
  service: WorkItem["service"];
}>();

const tiers = computed(() => pricing[props.service]);
const related = computed(() =>
  allWork.filter((w) => w.service === props.service).slice(0, 6),
);
</script>
