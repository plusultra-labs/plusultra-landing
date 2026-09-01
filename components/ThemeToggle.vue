<template>
  <button
    type="button"
    class="-my-2 flex items-center gap-2.5 p-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted transition-colors duration-[250ms] hover:text-ink"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <!-- Both icons stay mounted and cross-fade, so the header does not shift
         and the swap reads as one control rather than two. -->
    <span class="relative block h-[15px] w-[15px]">
      <svg
        class="absolute inset-0 h-[15px] w-[15px] transition-opacity duration-[250ms]"
        :class="dark ? 'opacity-0' : 'opacity-100'"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.3"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3.1" />
        <path
          d="M8 1v1.9M8 13.1V15M1 8h1.9M13.1 8H15M3.05 3.05l1.35 1.35M11.6 11.6l1.35 1.35M12.95 3.05L11.6 4.4M4.4 11.6l-1.35 1.35"
          stroke-linecap="round"
        />
      </svg>
      <svg
        class="absolute inset-0 h-[15px] w-[15px] transition-opacity duration-[250ms]"
        :class="dark ? 'opacity-100' : 'opacity-0'"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.3"
        aria-hidden="true"
      >
        <path d="M13.4 9.6A5.9 5.9 0 0 1 6.4 2.6 5.9 5.9 0 1 0 13.4 9.6Z" stroke-linejoin="round" />
      </svg>
    </span>
    <span v-if="withLabel">{{ dark ? c.nav.themeDark : c.nav.themeLight }}</span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ withLabel?: boolean }>(), { withLabel: false });

const c = useCopy();
const { resolved, toggle } = useTheme();

const dark = computed(() => resolved.value === "dark");
const label = computed(() => (dark.value ? c.value.nav.themeToLight : c.value.nav.themeToDark));
</script>
