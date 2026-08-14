<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-14 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[22ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        A product studio, run like a product
      </h1>
      <p class="mt-6 max-w-[60ch] text-lg leading-[1.6] text-ink-soft">
        Plusultra Labs was born building its own software: a travel search
        engine scaled internationally, then a portfolio of SaaS products
        across AI visibility, e-signature, healthcare, and finance. Client
        work came after, and it gets the same team and the same standards.
      </p>
    </header>

    <section class="border-y border-line">
      <div class="mx-auto grid max-w-site md:grid-cols-3">
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">Small and senior</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            A core team plus a trusted network of specialists, AI-leveraged at
            every step. You always talk to the people writing the code.
          </p>
        </div>
        <div class="border-b border-line p-6 md:border-b-0 md:border-r md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">AI-native for real</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            Our own operations run on agents we engineered: dispatching work,
            triaging messages, drafting invoices. We sell what we use.
          </p>
        </div>
        <div class="p-6 md:px-10 md:py-9">
          <h2 class="mb-2 text-lg font-medium">Production first</h2>
          <p class="text-[14.5px] leading-relaxed text-ink-soft">
            Weekly shippable increments on live environments. Software is real
            when it runs, not when it demos.
          </p>
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
useHead({
  title: "About - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Plusultra Labs is an AI product studio from Milan: a small senior team that builds and operates its own SaaS products and brings the same standards to client work.",
    },
  ],
});
</script>
