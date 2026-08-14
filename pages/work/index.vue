<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-12 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[20ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Work that runs in production
      </h1>
      <p class="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
        Our own products and a selection of client platforms. Everything here
        is live software with real users, not concept work.
      </p>
    </header>

    <section class="mx-auto max-w-site px-5 pb-20 md:px-10 md:pb-28">
      <div class="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in allWork" :key="item.slug">
          <div class="overflow-hidden bg-[#e7e7e2]">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[8/5] w-full object-cover contrast-[1.02] grayscale-[35%]"
              loading="lazy"
            />
          </div>
          <div class="pt-4">
            <b class="text-[17px] font-medium">{{ item.name }}</b>
            <p class="mt-1 text-[14px] text-ink-soft">{{ item.tagline }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-ink py-20 text-paper md:py-24">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <h2 class="mb-8 max-w-[22ch] text-[clamp(28px,3.2vw,44px)] font-bold tracking-[-0.03em]">
          The next thing on this page could be yours.
        </h2>
        <BookCallButton variant="accent" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { allWork } from "~/data/site";

useHead({
  title: "Work - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Production software by Plusultra Labs: BuzzWatch, TourScanner, IntelligoAI, ItaSign, and client platforms across healthcare, real estate, travel, and finance.",
    },
  ],
});
</script>
