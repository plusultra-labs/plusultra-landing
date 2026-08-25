<template>
  <div>
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid items-end gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-16 md:pt-[88px]">
          <div>
            <div class="pu-fade mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.work.kicker }}
            </div>
            <h1
              class="pu-rise mb-[26px] max-w-[20ch] font-display text-[clamp(40px,4.8vw,68px)] font-normal leading-[1.03] tracking-[-0.022em]"
            >
              {{ c.work.heading }}
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[19px] leading-[1.55] text-muted"
              style="animation-delay: 0.1s"
            >
              {{ c.work.lead }}
            </p>
          </div>
          <div class="pu-fade grid gap-5 border-line md:border-l md:pl-8" style="animation-delay: 0.3s">
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.work.kindsLabel }}
              </div>
              <div class="text-[15.5px] leading-[1.5]">
                {{ categories.map((cat) => cat.title).join(" · ") }}
              </div>
            </div>
            <div class="h-px bg-line" />
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.work.sectorsLabel }}
              </div>
              <div class="text-[15.5px] leading-[1.5]">{{ c.work.sectors }}</div>
            </div>
            <div class="h-px bg-line" />
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.work.countLabel }}
              </div>
              <div class="font-display text-[32px] leading-none">{{ work.length }} / 35</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The hero above closes on a hairline; without top padding the first
         case study and the sticky nav both start flush against it. -->
    <div
      class="mx-auto grid max-w-site gap-10 px-5 pb-20 pt-14 md:grid-cols-[240px_1fr] md:px-10 md:pb-28 md:pt-[88px]"
    >
      <!-- Sticky project nav -->
      <nav class="hidden md:block">
        <div class="sticky top-28 flex flex-col gap-6 border-l border-line pl-5 text-[14px]">
          <div v-for="group in grouped" :key="group.title">
            <div class="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {{ group.title }}
            </div>
            <ol class="flex flex-col gap-2">
              <li v-for="item in group.items" :key="item.slug">
                <a
                  :href="`#${item.slug}`"
                  class="block transition-colors"
                  :class="active === item.slug ? 'font-medium text-accent' : 'text-muted hover:text-ink'"
                >
                  {{ item.name }}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      <!-- Case studies -->
      <div>
        <article
          v-for="(item, i) in work"
          :id="item.slug"
          :key="item.slug"
          :ref="setSection"
          data-reveal
          class="scroll-mt-28 border-line py-12 first:pt-0 md:py-16"
          :class="{ 'border-t': i > 0 }"
        >
          <div class="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
            <span>{{ item.period }}</span>
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
          <h2 class="font-display text-[clamp(28px,3vw,42px)] font-normal leading-[1.06] tracking-[-0.02em]">
            {{ item.name }}
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              class="ml-2 align-middle font-mono text-[11px] uppercase tracking-[0.1em] text-accent"
            >{{ c.common.visit }} ↗</a>
          </h2>
          <p class="mt-2 text-[17px] text-muted">{{ item.tagline }}</p>

          <div class="mt-7 overflow-hidden border border-line bg-paper-2">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[16/9] w-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div class="mt-7 max-w-[68ch] space-y-4">
            <p
              v-for="(p, pi) in item.paragraphs"
              :key="pi"
              class="text-[16px] leading-[1.62] text-muted"
            >
              {{ p }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <section class="border-t border-line">
      <div
        class="mx-auto flex max-w-site flex-wrap items-center justify-between gap-10 px-5 py-16 md:px-10 md:py-[88px]"
      >
        <h2
          class="max-w-[24ch] font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.08] tracking-[-0.018em]"
        >
          {{ c.work.ctaHeading }}
        </h2>
        <BookCallButton size="lg" arrow />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { WorkItem } from "~/data/site";
import { localisedCategories, localisedWork } from "~/data/i18n";

const locale = useLocale();
const c = useCopy();

const work = computed(() => localisedWork(locale.value));
const categories = computed(() => localisedCategories(locale.value));

// Group the index by kind of build. Anything not named as a category example
// still gets listed, under "More work", so nothing silently disappears.
const grouped = computed(() => {
  const claimed = new Set<string>();
  const groups = categories.value.map((cat) => {
    const items = cat.examples
      .map((slug) => work.value.find((w) => w.slug === slug))
      .filter((w): w is WorkItem => Boolean(w));
    items.forEach((i) => claimed.add(i.slug));
    return { title: cat.title, items };
  });
  const rest = work.value.filter((w) => !claimed.has(w.slug));
  if (rest.length) groups.push({ title: c.value.work.moreWork, items: rest });
  return groups.filter((g) => g.items.length);
});

const active = ref(work.value[0].slug);
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
  title: () => c.value.work.meta.title,
  meta: [{ name: "description", content: () => c.value.work.meta.description }],
});
</script>
