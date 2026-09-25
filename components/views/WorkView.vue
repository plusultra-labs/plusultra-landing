<template>
  <div>
    <!-- Hero: the blue field, with the index facts as stat blocks. -->
    <section class="bg-ultra text-white">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid gap-10 py-12 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-20 md:pb-20 md:pt-[88px]">
          <div>
            <p class="pu-fade mb-5 text-[15px] font-bold text-ultra-muted md:mb-8 md:text-[18px]">
              {{ c.work.kicker }}
            </p>
            <h1
              class="pu-rise mb-6 max-w-[20ch] font-display text-[clamp(38px,5.4vw,80px)] font-extrabold leading-[0.96] md:mb-8"
              style="letter-spacing: -0.04em"
            >
              {{ c.work.heading }}
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]"
              style="animation-delay: 0.1s"
            >
              {{ c.work.lead }}
            </p>
          </div>
          <dl class="pu-fade grid gap-6" style="animation-delay: 0.3s">
            <div class="border-t-[3px] border-white pt-3 md:pt-4">
              <dt class="text-[14px] font-bold text-ultra-muted md:text-[15px]">{{ c.work.countLabel }}</dt>
              <dd class="mt-1.5 font-display text-[40px] font-extrabold leading-none md:text-[52px]">
                {{ work.length }} / 35
              </dd>
            </div>
            <div class="border-t-[3px] border-white pt-3 md:pt-4">
              <dt class="text-[14px] font-bold text-ultra-muted md:text-[15px]">{{ c.work.kindsLabel }}</dt>
              <dd class="mt-1.5 text-[16px] font-semibold leading-[1.45]">
                {{ categories.map((cat) => cat.title).join(" · ") }}
              </dd>
            </div>
            <div class="border-t-[3px] border-white pt-3 md:pt-4">
              <dt class="text-[14px] font-bold text-ultra-muted md:text-[15px]">{{ c.work.sectorsLabel }}</dt>
              <dd class="mt-1.5 text-[16px] font-semibold leading-[1.45]">{{ c.work.sectors }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Phones: the index as a row of chips that scrolls sideways. -->
    <nav class="border-b border-line bg-paper-2 md:hidden" :aria-label="c.nav.work">
      <ol class="flex gap-2 overflow-x-auto px-5 py-3.5 [scrollbar-width:none]">
        <li v-for="item in flatIndex" :key="item.slug" class="shrink-0">
          <a
            :href="`#${item.slug}`"
            class="flex h-11 items-center whitespace-nowrap px-3.5 text-[15px] font-semibold transition-colors"
            :class="active === item.slug ? 'bg-ultra text-white' : 'bg-paper text-ink'"
          >
            {{ item.name }}
          </a>
        </li>
      </ol>
    </nav>

    <div
      class="mx-auto grid max-w-site gap-10 px-5 pb-16 pt-10 md:grid-cols-[250px_1fr] md:gap-14 md:px-10 md:pb-28 md:pt-20"
    >
      <!-- Desktop: sticky index, the current case lit in blue. -->
      <nav class="hidden md:block" :aria-label="c.nav.work">
        <div class="sticky top-28 flex flex-col gap-7">
          <RouteMark :step="1" :width="84" class="text-accent" />
          <div v-for="group in grouped" :key="group.title">
            <div class="mb-2.5 text-[15px] font-extrabold">{{ group.title }}</div>
            <ol class="flex flex-col">
              <li v-for="item in group.items" :key="item.slug">
                <a
                  :href="`#${item.slug}`"
                  class="group flex min-h-[34px] items-center gap-2 text-[15px] transition-colors"
                  :class="active === item.slug ? 'font-bold text-accent' : 'text-muted hover:text-ink'"
                >
                  <ChevronIcon
                    :size="9"
                    :weight="6"
                    class="transition-opacity"
                    :class="active === item.slug ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'"
                  />
                  {{ item.name }}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      <!-- Case studies -->
      <div class="flex flex-col gap-4 md:gap-6">
        <article
          v-for="item in work"
          :id="item.slug"
          :key="item.slug"
          :ref="setSection"
          data-reveal
          class="scroll-mt-24 bg-paper-2 p-5 md:scroll-mt-28 md:p-10"
        >
          <div class="mb-4 flex flex-wrap items-center gap-2 md:mb-5">
            <span class="bg-ultra px-2.5 py-1.5 text-[14px] font-bold text-white">
              {{ c.home.kindLabels[item.kind] }}
            </span>
            <span class="px-1 text-[14px] font-bold text-muted">{{ item.period }}</span>
            <span
              v-for="tag in item.tags.slice(1)"
              :key="tag"
              class="border-[1.5px] border-line-2 px-2.5 py-1 text-[14px] font-semibold text-muted"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
            <div class="min-w-0">
              <h2 class="font-display text-[30px] font-extrabold leading-[1.04] md:text-[44px]" style="letter-spacing: -0.035em">
                {{ item.name }}
              </h2>
              <p class="mt-2 text-[16px] text-muted md:text-[18px]">{{ item.tagline }}</p>
              <p v-if="item.outcome" class="mt-2.5 text-[16px] font-bold leading-[1.4] text-accent md:text-[17px]">
                {{ item.outcome }}
              </p>
            </div>
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="group flex h-12 shrink-0 items-center gap-3 bg-ultra px-5 text-[15px] font-bold capitalize text-white transition-colors duration-[250ms] hover:bg-ultra-deep"
            >
              {{ c.common.visit }}
              <ChevronIcon :size="12" class="transition-transform duration-[250ms] group-hover:translate-x-0.5" />
            </a>
          </div>

          <div
            v-if="item.metrics?.length"
            class="mt-6 grid gap-5 bg-paper p-5 md:mt-8 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-10 md:p-7"
          >
            <div>
              <div
                class="font-display text-[56px] font-extrabold leading-[0.9] text-accent md:text-[80px]"
                style="letter-spacing: -0.045em"
              >
                {{ item.metrics[0].value }}
              </div>
              <p class="mt-3 max-w-[44ch] text-[16px] leading-[1.45] text-muted md:text-[17px]">
                {{ item.metrics[0].label }}
              </p>
            </div>
            <dl v-if="item.metrics.length > 1" class="grid grid-cols-2 gap-4">
              <div v-for="m in item.metrics.slice(1)" :key="m.value" class="border-t-[3px] border-accent pt-3">
                <dt class="font-display text-[26px] font-extrabold leading-none md:text-[30px]">{{ m.value }}</dt>
                <dd class="mt-1.5 text-[14px] leading-[1.4] text-muted md:text-[15px]">{{ m.label }}</dd>
              </div>
            </dl>
          </div>

          <div class="mt-6 overflow-hidden bg-paper p-2 md:mt-8 md:p-3">
            <img
              :src="item.image"
              :alt="item.name"
              class="block aspect-[16/9] w-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div class="mt-6 max-w-[68ch] space-y-4 md:mt-8">
            <p
              v-for="(p, pi) in item.paragraphs"
              :key="pi"
              class="text-[16px] leading-[1.62] text-muted md:text-[17px]"
            >
              {{ p }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- The arrowhead: the call. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[120px] top-6 h-[340px] w-[300px] md:-right-[60px] md:top-6 md:h-[480px] md:w-[420px]"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto flex max-w-site flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:gap-16 md:px-10 md:py-28"
      >
        <h2
          class="max-w-[20ch] font-display text-[36px] font-extrabold leading-none md:text-[clamp(44px,4.6vw,64px)] md:leading-[0.98]"
          style="letter-spacing: -0.04em"
        >
          {{ c.work.ctaHeading }}
        </h2>
        <BookCallButton variant="onInk" size="lg" class="justify-between md:min-w-[300px]" arrow>
          {{ c.common.bookScopingCall }}
        </BookCallButton>
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

const flatIndex = computed(() => grouped.value.flatMap((g) => g.items));

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
