<template>
  <!-- The logo rule as a progress mark: three dashes, each longer than the
       last, then the arrowhead. The first `step` pieces are lit, the rest
       sit in the line colour, so scrolling the page reads as moving along
       the rule. Geometry from scripts/export-brand.py. -->
  <svg
    viewBox="0 -3 140 36"
    :width="width"
    :height="width * (36 / 140)"
    class="block shrink-0"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    :role="label ? 'img' : undefined"
  >
    <rect x="0" y="12.5" width="16.15" height="5" :fill="step >= 1 ? lit : unlit" />
    <rect x="27.15" y="12.5" width="25.85" height="5" :fill="step >= 2 ? lit : unlit" />
    <rect x="64" y="12.5" width="42" height="5" :fill="step >= 3 ? lit : unlit" />
    <path
      d="M110 0 L136 15 L110 30"
      fill="none"
      :stroke="step >= 4 ? lit : unlit"
      stroke-width="5"
      stroke-linejoin="miter"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    step?: number;
    width?: number;
    lit?: string;
    unlit?: string;
    label?: string;
  }>(),
  { step: 4, width: 84, lit: "currentColor", unlit: "var(--line2)", label: undefined },
);
</script>
