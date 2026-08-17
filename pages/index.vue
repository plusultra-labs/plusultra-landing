<template>
  <div>
    <!-- Hero -->
    <header class="mx-auto grid max-w-site items-end gap-9 px-5 pb-16 pt-14 md:grid-cols-[7fr_5fr] md:gap-16 md:px-10 md:pb-20 md:pt-24">
      <h1 class="text-[clamp(42px,5.2vw,76px)] font-bold leading-[1.02] tracking-[-0.035em]">
        We ship our own AI products.<br />
        Then we ship
        <em class="inline-block pb-1 italic leading-[1.1] text-accent">yours.</em>
      </h1>
      <div class="pb-2.5">
        <p class="mb-7 max-w-[42ch] text-lg leading-[1.55] text-ink-soft">
          Plusultra Labs is an AI product studio. Everything we recommend, we
          already use ourselves every day: our own products, our own AI tools,
          our own systems.
        </p>
        <div class="flex items-center gap-4">
          <BookCallButton variant="accent" />
          <NuxtLink to="/work" class="border-b-2 border-ink pb-0.5 text-[15px] font-medium">
            See the work
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Proof band -->
    <section class="border-y border-line">
      <div class="mx-auto grid max-w-site md:grid-cols-3">
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <div class="text-[40px] font-bold tracking-tight">35</div>
          <p class="mt-1.5 text-[14.5px] leading-snug text-ink-soft">
            digital products designed, built, and running today, for ourselves
            and for clients
          </p>
        </div>
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <div class="text-[40px] font-bold tracking-tight">1</div>
          <p class="mt-1.5 text-[14.5px] leading-snug text-ink-soft">
            travel product grown from an idea into an international success
            used by millions
          </p>
        </div>
        <div class="p-6 md:px-10 md:py-9">
          <div class="text-[40px] font-bold tracking-tight">24/7</div>
          <p class="mt-1.5 text-[14.5px] leading-snug text-ink-soft">
            our own AI assistants run the company's daily operations, so we
            know it works
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="mx-auto max-w-site px-5 py-20 md:px-10 md:py-28">
      <h2 class="mb-12 max-w-[22ch] text-[clamp(30px,3.2vw,46px)] font-bold tracking-[-0.03em]">
        Three ways we work
      </h2>
      <div class="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        <NuxtLink
          v-for="svc in services"
          :key="svc.to"
          :to="svc.to"
          class="group bg-paper p-8 transition-colors hover:bg-white md:p-9"
        >
          <h3 class="mb-3 text-xl font-medium">{{ svc.title }}</h3>
          <p class="text-[15px] leading-relaxed text-ink-soft">{{ svc.body }}</p>
          <div class="mt-7 text-[14px] font-medium text-accent">
            Explore
            <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Work -->
    <section class="mx-auto max-w-site px-5 pb-20 md:px-10 md:pb-28">
      <h2 class="mb-12 max-w-[20ch] text-[clamp(30px,3.2vw,46px)] font-bold tracking-[-0.03em]">
        Some of our most notable projects
      </h2>
      <div class="grid gap-7 md:grid-cols-[2fr_1fr]">
        <NuxtLink :to="`/work#${featuredWork[0].slug}`" class="flex flex-col md:row-span-2">
          <div class="flex-1 overflow-hidden border border-line bg-[#e7e7e2]">
            <img
              :src="featuredWork[0].image"
              :alt="featuredWork[0].name"
              class="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div class="flex items-baseline justify-between pt-4">
            <b class="text-[17px] font-medium">{{ featuredWork[0].name }}</b>
            <span class="text-[13px] text-ink-soft">{{ featuredWork[0].tagline }}</span>
          </div>
        </NuxtLink>
        <NuxtLink v-for="item in featuredWork.slice(1)" :key="item.slug" :to="`/work#${item.slug}`">
          <div class="overflow-hidden border border-line bg-[#e7e7e2]">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[8/5] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div class="flex items-baseline justify-between pt-3.5">
            <b class="text-[17px] font-medium">{{ item.name }}</b>
            <span class="text-[13px] text-ink-soft">{{ item.tagline }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-ink py-24 text-paper md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <h2 class="mb-9 max-w-[20ch] text-[clamp(32px,3.8vw,56px)] font-bold tracking-[-0.03em]">
          Have a product to build, or a system that needs AI
          <em class="italic text-accent-soft">inside it?</em>
        </h2>
        <BookCallButton variant="accent" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { featuredWork } from "~/data/site";

const services = [
  {
    to: "/services/ai-product-development",
    title: "AI product development",
    body: "From idea to finished product. We design, build, and run digital products the same way we build our own: first version live in weeks, built to last.",
  },
  {
    to: "/services/ai-integration",
    title: "AI integration",
    body: "AI inside the tools your company already uses. Privacy-compliant, costs you can predict, and the people you talk to are the people who build it.",
  },
  {
    to: "/services/custom-platforms",
    title: "Custom platforms",
    body: "Portals, management systems, internal tools, marketplaces. Solid platforms delivered in weeks and looked after once they're live.",
  },
];

useHead({
  title: "Plusultra Labs - AI Product Studio",
  meta: [
    {
      name: "description",
      content:
        "Plusultra Labs is an AI product studio. We ship our own AI products, then bring the same engineering team to yours. AI product development, AI integration, custom SaaS.",
    },
    { property: "og:title", content: "Plusultra Labs - AI Product Studio" },
    {
      property: "og:description",
      content:
        "We ship our own AI products. Then we ship yours. AI product development, AI integration, custom platforms.",
    },
    { property: "og:image", content: "/og_image.png" },
    { property: "og:type", content: "website" },
  ],
});
</script>
