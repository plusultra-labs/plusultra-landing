<template>
  <!-- The arrowhead from the logo rule, used as every "go" affordance. -->
  <svg
    viewBox="0 0 30 34"
    :width="size"
    :height="size * (34 / 30)"
    class="block shrink-0"
    aria-hidden="true"
  >
    <path d="M4 3 L26 17 L4 31" fill="none" stroke="currentColor" :stroke-width="weight" stroke-linejoin="miter" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: number; weight?: number }>(), { size: 14, weight: 6 });
</script>
