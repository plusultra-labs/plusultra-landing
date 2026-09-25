<template>
  <footer class="bg-night-block text-white">
    <div
      class="mx-auto grid max-w-site gap-10 px-5 pb-11 pt-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10 md:pt-[72px]"
    >
      <div>
        <div class="mb-[18px] flex flex-col items-start gap-[3px]">
          <span class="font-logo text-[21px] font-medium leading-none tracking-[-0.035em]">plusultra</span>
          <span class="flex items-center gap-[7px]">
            <svg class="block h-[8.75px] w-[34px] text-periwinkle" viewBox="0 -3.75 34 8.75" fill="currentColor" aria-hidden="true">
              <rect x="0" y="0" width="4.04" height="1.25" />
              <rect x="6.79" y="0" width="6.46" height="1.25" />
              <rect x="16" y="0" width="10.5" height="1.25" />
              <path d="M27.5 -3.12 L34 0.62 L27.5 4.38" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="miter" />
            </svg>
            <span class="font-mono text-[9.5px] tracking-[0.24em] text-night-muted">LABS</span>
          </span>
        </div>
        <p class="max-w-[34ch] text-[16px] leading-[1.55] text-night-muted">
          {{ c.footer.blurb }}
        </p>
      </div>

      <div v-for="col in columns" :key="col.title" class="grid content-start gap-3 text-[16px]">
        <div class="mb-1 font-extrabold text-periwinkle">
          {{ col.title }}
        </div>
        <template v-for="item in col.items" :key="item.label">
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            class="text-white/90 transition-colors duration-[250ms] hover:text-periwinkle"
          >
            {{ item.label }}
          </NuxtLink>
          <a
            v-else-if="item.href"
            :href="item.href"
            class="text-white/90 transition-colors duration-[250ms] hover:text-periwinkle"
          >
            {{ item.label }}
          </a>
          <span v-else class="text-night-muted">{{ item.label }}</span>
        </template>
      </div>
    </div>

    <div class="mx-auto max-w-site px-5 pb-10 md:px-10">
      <div
        class="flex flex-wrap items-center justify-between gap-5 border-t border-night-line pt-5 text-[14px] text-night-muted"
      >
        <span>&copy; {{ year }} Plusultra Labs · {{ c.common.location }}</span>
        <span class="hidden md:inline">{{ c.footer.tagline }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { org } from "~/data/org";

const year = 2026;

const c = useCopy();
const lp = useLocalePath();

interface FooterItem {
  label: string;
  to?: string;
  href?: string;
}

const columns = computed<{ title: string; items: FooterItem[] }[]>(() => [
  {
    title: c.value.footer.studio,
    items: [
      { label: c.value.nav.services, to: lp("services") },
      { label: c.value.nav.work, to: lp("work") },
      { label: c.value.footer.aboutStudio, to: lp("about") },
    ],
  },
  {
    title: c.value.footer.contact,
    items: [
      { label: org.email, href: `mailto:${org.email}` },
      { label: c.value.common.bookCall, to: lp("contact") },
      { label: c.value.common.location },
    ],
  },
  {
    title: c.value.footer.workingWithUs,
    items: c.value.footer.promises.map((label) => ({ label })),
  },
]);
</script>
