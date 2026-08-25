<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center gap-2.5 rounded-sm font-medium transition-[background-color,color,transform,border-color] duration-[250ms]',
      sizes[size],
      variant === 'onInk'
        ? 'bg-paper text-ink hover:-translate-y-0.5 hover:bg-accent hover:text-paper'
        : 'bg-ink text-paper hover:-translate-y-0.5 hover:bg-accent',
    ]"
    @click="openBooking"
  >
    <slot>{{ c.common.bookCall }}</slot>
    <span v-if="arrow" aria-hidden="true">&rarr;</span>
  </button>
</template>

<script setup lang="ts">
// Primary action: ink by default, inverted on ink-coloured sections.
// One primary per view; hover turns it accent and lifts it 2px.
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
  sm: "h-10 px-5 text-[14px]",
  md: "h-[52px] px-6 text-[15px]",
  lg: "h-[58px] px-7 text-[16px]",
};
</script>
