<template>
  <button
    data-fillout-id="6zvrYQxe7Cus"
    data-fillout-embed-type="popup"
    data-fillout-dynamic-resize
    data-fillout-inherit-parameters
    data-fillout-popup-size="medium"
    :class="[
      'inline-block px-6 py-3 text-[15px] font-medium transition-transform hover:-translate-y-px active:scale-[0.98]',
      variant === 'accent' ? 'bg-accent text-white' : 'bg-ink text-paper',
    ]"
  >
    Book a call
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ variant?: "dark" | "accent" }>(), {
  variant: "dark",
});
</script>
