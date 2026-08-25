<template>
  <!-- When dropping down, the root stretches to its container so the panel
       hangs off the header's own bottom hairline instead of cutting across it. -->
  <div
    ref="root"
    class="relative flex items-center"
    :class="drop === 'down' ? 'self-stretch' : '-my-2.5'"
  >
    <button
      type="button"
      class="flex items-center gap-2.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted transition-colors duration-[250ms] hover:text-ink"
      :aria-label="c.nav.languageAria"
      aria-haspopup="true"
      :aria-expanded="open"
      @click="open = !open"
    >
      <LocaleFlag :locale="locale" />
      {{ LOCALE_LABELS[locale] }}
      <svg
        viewBox="0 0 10 6"
        class="h-[5px] w-[9px] transition-transform duration-[250ms]"
        :class="open ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        aria-hidden="true"
      >
        <path d="M1 1 L5 5 L9 1" stroke-linecap="square" />
      </svg>
    </button>

    <!-- Kept in the DOM when closed (visibility, not v-if) so the alternate
         URLs stay crawlable and the panel can transition. -->
    <ul
      class="absolute right-0 z-40 min-w-[168px] border border-line bg-paper font-sans normal-case tracking-normal transition-[opacity,transform] duration-[250ms] ease-pu"
      :class="[
        drop === 'up' ? 'bottom-full mb-2' : 'top-full -mt-px',
        open
          ? 'visible translate-y-0 opacity-100'
          : 'invisible opacity-0 ' + (drop === 'up' ? 'translate-y-1' : '-translate-y-1'),
      ]"
    >
      <li v-for="alt in alternates" :key="alt.locale" class="border-b border-line last:border-b-0">
        <NuxtLink
          :to="alt.path"
          :hreflang="alt.locale"
          :lang="alt.locale"
          :aria-current="alt.locale === locale ? 'true' : undefined"
          class="flex items-center gap-3 px-4 py-2.5 text-[14px] transition-colors duration-[250ms] hover:bg-paper-2"
          :class="alt.locale === locale ? 'text-accent' : 'text-muted hover:text-ink'"
          :tabindex="open ? undefined : -1"
          @click="open = false"
        >
          <LocaleFlag :locale="alt.locale" />
          <span class="flex-1">{{ LOCALE_LABELS[alt.locale] }}</span>
          <span class="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {{ alt.locale }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { LOCALE_LABELS } from "~/data/routes";

withDefaults(defineProps<{ drop?: "down" | "up" }>(), { drop: "down" });

const c = useCopy();
const locale = useLocale();
const alternates = useAlternates();

const open = ref(false);
const root = ref<HTMLElement | null>(null);

// Close on a click anywhere else, on Escape, and on any route change.
const onPointerDown = (e: Event) => {
  if (open.value && !root.value?.contains(e.target as Node)) open.value = false;
};
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") open.value = false;
};

onMounted(() => {
  document.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("keydown", onKeydown);
});
onUnmounted(() => {
  document.removeEventListener("pointerdown", onPointerDown);
  document.removeEventListener("keydown", onKeydown);
});

const route = useRoute();
watch(() => route.fullPath, () => (open.value = false));
</script>
