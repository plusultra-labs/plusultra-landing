<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-14 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[22ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        A product studio, run like a product
      </h1>
      <p class="mt-6 max-w-[60ch] text-lg leading-[1.6] text-ink-soft">
        Plusultra Labs was born building its own software: a travel search
        engine grown into an international success, then a portfolio of
        products across AI, e-signature, healthcare, and finance. Client work
        came after, and it gets the same team and the same standards. We're
        based in Singapore and work with clients across Europe and Asia.
      </p>
    </header>

    <section class="border-y border-line">
      <div class="mx-auto grid max-w-site md:grid-cols-3">
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">Small and senior</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            A tight team plus a trusted network of specialists, AI-leveraged
            at every step. You always talk to the people doing the work.
          </p>
        </div>
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">AI-first for real</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            Our own operations run on AI assistants we built: dispatching
            work and triaging messages for us every day. We sell what we use.
          </p>
        </div>
        <div class="p-6 md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">Shipped beats perfect</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            Something you can click every week, live from the very start.
            Software is real when people use it, not when it demos well.
          </p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-24">
      <h2 class="text-[clamp(26px,2.8vw,38px)] font-bold tracking-[-0.025em]">
        The team
      </h2>
      <p class="mt-3 max-w-[58ch] text-[15px] text-ink-soft">
        Twelve people across product, design, engineering, and delivery, plus
        a wider network of specialists we bring in when a project needs them.
      </p>
      <div class="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="member in team" :key="member.name" class="flex flex-col items-center text-center">
          <TeamAvatar :person="member.avatar" :size="128" />
          <b class="mt-4 block text-[16px] font-medium">{{ member.name }}</b>
          <p class="text-[13.5px] text-ink-soft">{{ member.role }}</p>
        </div>
      </div>
    </section>

    <section class="bg-ink py-20 text-paper md:py-24">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <h2 class="mb-8 max-w-[22ch] text-[clamp(28px,3.2vw,44px)] font-bold tracking-[-0.03em]">
          Want to see how we'd approach your problem?
        </h2>
        <BookCallButton variant="accent" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { team } from "~/data/site";

useHead({
  title: "About - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Plusultra Labs is a Singapore-based AI product studio: a senior team across product, design, and engineering that builds its own products and brings the same standards to client work.",
    },
  ],
});
</script>
