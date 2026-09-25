<template>
  <div>
    <!-- Hero: the blue field, and the booking card as the thing to do here. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[140px] top-10 hidden h-[600px] w-[520px] md:block"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto grid max-w-site gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-20 md:px-10 md:pb-24 md:pt-[88px]"
      >
        <div>
          <p class="pu-fade mb-5 text-[15px] font-semibold text-ultra-muted md:mb-8 md:text-[18px]">
            {{ c.contact.kicker }}
          </p>
          <h1
            class="pu-rise mb-6 max-w-[14ch] font-display text-[clamp(40px,6.4vw,92px)] font-extrabold leading-[0.95] md:mb-8"
            style="letter-spacing: -0.04em"
          >
            {{ c.contact.heading }} <span class="text-periwinkle">{{ c.contact.headingEmphasis }}</span>
          </h1>
          <p
            class="pu-rise max-w-[52ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]"
            style="animation-delay: 0.1s"
          >
            {{ c.contact.lead }}
          </p>
        </div>

        <div class="pu-fade flex flex-col gap-3" style="animation-delay: 0.3s">
          <div class="mb-2 flex items-center gap-4 md:gap-5">
            <img
              src="/alberto.jpg"
              :alt="c.about.founderAlt"
              width="96"
              height="96"
              class="h-20 w-20 shrink-0 object-cover md:h-24 md:w-24"
            />
            <div>
              <div class="text-[14px] font-bold text-ultra-muted">{{ c.contact.speakingWith }}</div>
              <div class="mt-1 font-display text-[26px] font-extrabold leading-tight">Alberto</div>
              <div class="mt-1 text-[15px] leading-[1.45] text-ultra-soft">{{ c.contact.founderNote }}</div>
            </div>
          </div>
          <BookCallButton variant="onInk" size="lg" class="justify-between" arrow>
            {{ c.common.bookScopingCall }}
          </BookCallButton>
          <a
            :href="`mailto:${org.email}`"
            class="group flex h-16 items-center justify-between gap-3 border-2 border-white px-7 text-[16px] font-semibold transition-colors duration-[250ms] hover:bg-white hover:text-ultra md:text-[17px]"
          >
            <span class="truncate">{{ org.email }}</span>
            <ChevronIcon :size="14" class="transition-transform duration-[250ms] group-hover:translate-x-1" />
          </a>
          <div class="pt-1 text-[14px] text-ultra-muted md:text-[15px]">{{ c.common.repliesWithinTz }}</div>
        </div>
      </div>
    </section>

    <!-- Step 1 · What makes the first call useful -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-14 md:gap-6">
          <SectionKicker :step="1" :text="c.contact.prepKicker" />
          <h2 class="max-w-[20ch] font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.contact.prepHeading }}
          </h2>
        </div>
        <ol class="grid gap-3 md:grid-cols-2 md:gap-6">
          <li
            v-for="(item, i) in c.contact.prep"
            :key="item.title"
            data-reveal
            class="flex gap-5 bg-paper p-6 md:gap-7 md:p-9"
          >
            <span
              class="font-display text-[40px] font-extrabold leading-none text-accent md:text-[52px]"
              aria-hidden="true"
            >{{ i + 1 }}</span>
            <div class="flex flex-col gap-2 pt-1">
              <h3 class="font-display text-[20px] font-extrabold leading-[1.15] md:text-[24px]">{{ item.title }}</h3>
              <p class="text-[16px] leading-[1.6] text-muted">{{ item.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { org } from "~/data/org";

const c = useCopy();

useHead({
  title: () => c.value.contact.meta.title,
  meta: [{ name: "description", content: () => c.value.contact.meta.description }],
});
</script>
