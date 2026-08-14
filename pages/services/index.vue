<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-12 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[20ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Three ways we work
      </h1>
      <p class="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
        Whatever the shape of the engagement, the team is the same one that
        builds and operates our own products.
      </p>
    </header>

    <section class="mx-auto max-w-site px-5 pb-20 md:px-10 md:pb-28">
      <div class="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        <NuxtLink
          v-for="svc in services"
          :key="svc.to"
          :to="svc.to"
          class="group bg-paper p-8 transition-colors hover:bg-white md:p-9"
        >
          <h2 class="mb-3 text-xl font-medium">{{ svc.title }}</h2>
          <p class="text-[15px] leading-relaxed text-ink-soft">{{ svc.body }}</p>
          <div class="mt-7 text-[14px] font-medium text-accent">
            Explore
            <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    to: "/services/ai-product-development",
    title: "AI product development",
    body: "From idea to production SaaS. Design, build, launch, operate: the full arc, the way we do it for our own products.",
  },
  {
    to: "/services/ai-integration",
    title: "AI integration",
    body: "LLMs inside the systems your company already runs. EU-compliant architecture and costs you can predict.",
  },
  {
    to: "/services/custom-platforms",
    title: "Custom platforms",
    body: "Portals, CRMs, internal tools, marketplaces. Production-grade in weeks, operated after launch.",
  },
];

useHead({
  title: "Services - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "AI product development, AI integration engineering, and custom platform development by the team behind BuzzWatch, TourScanner, and 10+ production SaaS products.",
    },
  ],
});
</script>
