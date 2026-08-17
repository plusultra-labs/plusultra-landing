<template>
  <div
    class="relative overflow-hidden rounded-full transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105"
    :style="{ width: `${size}px`, height: `${size}px`, background: spec.field }"
  >
    <div
      class="absolute origin-center"
      :style="{ width: '96px', height: '96px', transform: `scale(${size / 96})`, transformOrigin: 'top left' }"
    >
      <div
        v-for="(layer, i) in spec.layers"
        :key="i"
        class="absolute"
        :style="layerStyle(layer)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { avatars, type AvatarLayer } from "~/data/avatars";

const props = withDefaults(defineProps<{ person: string; size?: number }>(), {
  size: 120,
});

const spec = computed(() => avatars[props.person]);

function layerStyle(l: AvatarLayer) {
  return {
    left: l.l !== undefined ? `${l.l}px` : undefined,
    top: l.t !== undefined ? `${l.t}px` : undefined,
    bottom: l.b !== undefined ? `${l.b}px` : undefined,
    width: `${l.w}px`,
    height: `${l.h}px`,
    borderRadius: l.br,
    background: l.bg,
    border: l.bd,
    boxSizing: "border-box" as const,
    transform: l.rot ? `rotate(${l.rot}deg)` : undefined,
  };
}
</script>
