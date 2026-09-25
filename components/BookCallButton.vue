<template>
  <button
    type="button"
    :class="[
      'group inline-flex items-center gap-3 font-bold transition-[background-color,color] duration-[250ms]',
      sizes[size],
      variant === 'onInk'
        ? 'bg-white text-night hover:bg-ultra-soft'
        : 'bg-ultra text-white hover:bg-ultra-deep',
    ]"
    @click="openBooking"
  >
    <slot>{{ c.common.bookCall }}</slot>
    <ChevronIcon
      v-if="arrow"
      :size="size === 'sm' ? 11 : 14"
      :class="variant === 'onInk' ? 'text-ultra' : 'text-white'"
      class="transition-transform duration-[250ms] group-hover:translate-x-0.5"
    />
  </button>
</template>

<script setup lang="ts">
// Primary action: ultra blue by default, white on the blue and ink fields.
// Square cut, bold label, the logo's arrowhead as the arrow.
//
// Opens the in-page cal.com dialog, which is mounted once in the layout so
// every one of these buttons drives the same instance.
withDefaults(
  defineProps<{
    variant?: "primary" | "onInk";
    size?: "sm" | "md" | "lg";
    arrow?: boolean;
  }>(),
  { variant: "primary", size: "md", arrow: false },
);

const c = useCopy();
const { openBooking } = useBookCall();

const sizes = {
  sm: "h-11 px-5 text-[15px]",
  md: "h-14 px-6 text-[16px]",
  lg: "h-16 px-7 text-[17px]",
};
</script>
