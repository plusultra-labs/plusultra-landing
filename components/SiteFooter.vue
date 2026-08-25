<template>
  <footer class="border-t border-line bg-paper-2">
    <div
      class="mx-auto grid max-w-site gap-10 px-5 pb-11 pt-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10"
    >
      <div>
        <div class="mb-[18px] flex flex-col items-start gap-[3px]">
          <span class="text-[19px] font-medium leading-none tracking-[-0.035em]">plusultra</span>
          <span class="flex items-center gap-[7px]">
            <span class="block h-0.5 w-[30px] bg-accent" />
            <span class="font-mono text-[9px] tracking-[0.24em] text-muted">LABS</span>
          </span>
        </div>
        <p class="max-w-[34ch] text-[14.5px] leading-[1.6] text-muted">
          {{ c.footer.blurb }}
        </p>
      </div>

      <div v-for="col in columns" :key="col.title" class="grid content-start gap-3 text-[14.5px]">
        <div
          class="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
        >
          {{ col.title }}
        </div>
        <template v-for="item in col.items" :key="item.label">
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            class="text-muted transition-colors duration-[250ms] hover:text-ink"
          >
            {{ item.label }}
          </NuxtLink>
          <a
            v-else-if="item.href"
            :href="item.href"
            class="text-muted transition-colors duration-[250ms] hover:text-ink"
          >
            {{ item.label }}
          </a>
          <span v-else class="text-muted">{{ item.label }}</span>
        </template>
      </div>
    </div>

    <div class="mx-auto max-w-site px-5 pb-10 md:px-10">
      <div
        class="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted"
      >
        <span>&copy; {{ year }} Plusultra Labs</span>
        <span class="hidden md:inline">{{ c.footer.tagline }}</span>
        <LanguageSwitcher drop="up" />
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
