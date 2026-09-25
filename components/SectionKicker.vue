<template>
  <div class="flex flex-col gap-4">
    <RouteMark :step="step" :width="compact ? 70 : 98" :class="markClass" :unlit="unlit" />
    <span v-if="clean" class="text-[15px] font-bold" :class="markClass">{{ clean }}</span>
  </div>
</template>

<script setup lang="ts">
// Section label: the route mark at this section's step, then the kicker in
// sentence case. Copy files still carry "01 — What we do"; the numbering is
// the route mark's job now, so it is stripped here rather than in 4 files.
const props = withDefaults(
  defineProps<{ text?: string; step?: number; compact?: boolean; markClass?: string; unlit?: string }>(),
  { text: "", step: 1, compact: false, markClass: "text-accent", unlit: "var(--line2)" },
);

const clean = computed(() => props.text.replace(/^\s*\d+\s*[—–-]\s*/, "").trim());
</script>
