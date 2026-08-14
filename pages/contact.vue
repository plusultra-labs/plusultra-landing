<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-14 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[20ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Talk to the people who write the code
      </h1>
      <p class="mt-6 max-w-[52ch] text-lg leading-[1.6] text-ink-soft">
        A 30-minute call is the fastest way to find out if we're the right
        team for your build. No deck required.
      </p>
      <div class="mt-8 flex items-center gap-5">
        <BookCallButton variant="accent" />
        <a
          href="mailto:alberto@plusultralabs.com"
          class="border-b-2 border-ink pb-0.5 font-mono text-[15px]"
        >
          alberto@plusultralabs.com
        </a>
      </div>
    </header>

    <section class="mx-auto max-w-site px-5 pb-20 md:px-10 md:pb-28">
      <div class="max-w-[62ch] border-t border-line pt-8 text-[15px] leading-relaxed text-ink-soft">
        <p>
          Before the call, it helps if you can describe in a few lines what
          you want to build or which system needs AI inside it. If it exists
          already, a link is worth a thousand words.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Book a call with Plusultra Labs to discuss your AI product, AI integration, or custom platform.",
    },
  ],
});
</script>
