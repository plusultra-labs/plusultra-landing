<template>
  <div
    class="light-effect"
    :style="{ left: `${x}px`, top: `${y}px` }"
  ></div>
</template>

<script setup lang="ts">
const { x, y } = useLightEffect();
</script>
