<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-12 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[22ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Our own products are our R&amp;D lab
      </h1>
      <p class="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
        We design, ship, and operate our own SaaS. Client work gets the
        patterns that already survived production here.
      </p>
    </header>

    <section class="border-y border-line">
      <div class="mx-auto max-w-site">
        <component
          :is="p.url ? 'a' : 'div'"
          v-for="p in products"
          :key="p.name"
          :href="p.url"
          :target="p.url ? '_blank' : undefined"
          class="flex flex-col justify-between gap-2 border-b border-line px-5 py-7 last:border-b-0 md:flex-row md:items-baseline md:px-10"
          :class="p.url ? 'transition-colors hover:bg-white' : ''"
        >
          <b class="text-xl font-medium">
            {{ p.name }}
            <span v-if="p.url" class="ml-1 text-[13px] font-normal text-accent">↗</span>
          </b>
          <span class="max-w-[60ch] text-[15px] text-ink-soft md:text-right">{{ p.line }}</span>
        </component>
      </div>
    </section>

    <section class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-24">
      <p class="max-w-[62ch] text-lg leading-[1.65] text-ink-soft">
        We also run the company itself on AI agents we engineered: an
        orchestrator that dispatches work, triages messages, and drafts
        invoices, every day, in production. When we say we build AI-native
        systems, this is what we mean.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from "~/data/site";

useHead({
  title: "Products - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "The SaaS products Plusultra Labs builds and operates: BuzzWatch, InsightFlow, ItaSign, IntelligoAI, Patrimo.",
    },
  ],
});
</script>
