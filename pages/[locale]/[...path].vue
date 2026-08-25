<template>
  <ServicePage v-if="serviceSlug" :slug="serviceSlug" />
  <component :is="view" v-else-if="view" />
</template>

<script setup lang="ts">
// Every non-English page comes through here. The English routes keep their own
// files at the root; this one turns /it/servizi/integrazione-ai (and its
// Spanish and French equivalents) into the same view components.
import HomeView from "~/components/views/HomeView.vue";
import ServicesView from "~/components/views/ServicesView.vue";
import WorkView from "~/components/views/WorkView.vue";
import AboutView from "~/components/views/AboutView.vue";
import ContactView from "~/components/views/ContactView.vue";
import {
  PREFIXED_LOCALES,
  isServiceKey,
  resolveSegments,
  type Locale,
  type PageKey,
} from "~/data/routes";

const VIEWS = {
  home: HomeView,
  services: ServicesView,
  work: WorkView,
  about: AboutView,
  contact: ContactView,
} as const;

function segmentsOf(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.filter(Boolean) as string[];
  if (typeof raw === "string") return raw.split("/").filter(Boolean);
  return [];
}

definePageMeta({
  // The route record is shared by every localised page, so the key has to
  // change with the path or Vue would reuse one page component across them.
  key: (route) => route.fullPath,
  validate: (route) => {
    const locale = route.params.locale as string;
    if (!(PREFIXED_LOCALES as readonly string[]).includes(locale)) return false;
    return resolveSegments(locale as Locale, segmentsOf(route.params.path)) !== null;
  },
});

const route = useRoute();

const pageKey = computed<PageKey>(
  () => resolveSegments(route.params.locale as Locale, segmentsOf(route.params.path)) ?? "home",
);

const serviceSlug = computed(() => (isServiceKey(pageKey.value) ? pageKey.value : null));
const view = computed(() =>
  serviceSlug.value ? null : VIEWS[pageKey.value as keyof typeof VIEWS],
);
</script>
