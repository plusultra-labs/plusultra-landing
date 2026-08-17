<template>
  <div>
    <header class="mx-auto max-w-site px-5 pb-12 pt-14 md:px-10 md:pt-20">
      <h1 class="max-w-[22ch] text-[clamp(36px,4.2vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Some of our most notable projects
      </h1>
      <p class="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
        Our own products and a selection of client work, from 2016 to today.
        Everything here shipped and is (or was) used by real people.
      </p>
    </header>

    <div class="mx-auto grid max-w-site gap-10 px-5 pb-20 md:grid-cols-[240px_1fr] md:px-10 md:pb-28">
      <!-- Sticky project nav -->
      <nav class="hidden md:block">
        <ol class="sticky top-8 flex flex-col gap-2.5 border-l border-line pl-5 text-[14px]">
          <li v-for="item in allWork" :key="item.slug">
            <a
              :href="`#${item.slug}`"
              class="block transition-colors"
              :class="active === item.slug ? 'font-medium text-accent' : 'text-ink-soft hover:text-ink'"
            >
              {{ item.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Case studies -->
      <div>
        <article
          v-for="(item, i) in allWork"
          :id="item.slug"
          :key="item.slug"
          :ref="setSection"
          class="scroll-mt-8 border-line py-12 first:pt-0 md:py-16"
          :class="{ 'border-t': i > 0 }"
        >
          <div class="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[13.5px] text-ink-soft">
            <span>{{ item.period }}</span>
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
          <h2 class="text-[clamp(26px,2.6vw,38px)] font-bold tracking-[-0.025em]">
            {{ item.name }}
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              class="ml-1 align-middle text-[15px] font-normal text-accent"
            >visit ↗</a>
          </h2>
          <p class="mt-1 text-[17px] font-medium text-ink-soft">{{ item.tagline }}</p>

          <div class="mt-7 overflow-hidden border border-line bg-[#e7e7e2]">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[8/5] w-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div class="mt-7 max-w-[68ch] space-y-4">
            <p
              v-for="(p, pi) in item.paragraphs"
              :key="pi"
              class="text-[15.5px] leading-relaxed text-ink-soft"
            >
              {{ p }}
            </p>
          </div>
        </article>
      </div>
    </div>

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

const active = ref(allWork[0].slug);
const sections: HTMLElement[] = [];
const setSection = (el: unknown) => {
  if (el) sections.push(el as HTMLElement);
};

let observer: IntersectionObserver | undefined;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id;
      }
    },
    { rootMargin: "-20% 0px -70% 0px" },
  );
  sections.forEach((s) => observer!.observe(s));
});
onUnmounted(() => observer?.disconnect());

useHead({
  title: "Our Work - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Notable projects by Plusultra Labs: BuzzWatch, TourScanner, IntelligoAI, ItaSign, Artupia, and client platforms across healthcare, travel, real estate, and finance.",
    },
  ],
});
</script>
