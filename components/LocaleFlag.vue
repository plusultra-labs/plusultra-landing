<template>
  <!-- Drawn rather than emoji: emoji flags do not render at all on Windows,
       and where they do they ignore the page's type scale. The hairline frame
       matches the borders used elsewhere on the site.

       The <svg> is wrapped rather than used as the component root: as a root
       element Vue lowercases viewBox/preserveAspectRatio, and SVG attribute
       names are case-sensitive, so the flags render unscaled. -->
  <span
    class="inline-block h-3 w-[18px] shrink-0 overflow-hidden border border-line"
    aria-hidden="true"
  >
    <svg
      v-if="locale === 'en'"
      viewBox="0 0 60 30"
      preserveAspectRatio="none"
      class="block h-full w-full"
      focusable="false"
    >
      <clipPath :id="clip">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        :clip-path="`url(#${clip})`"
        stroke="#C8102E"
        stroke-width="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" stroke-width="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
    </svg>

    <svg
      v-else-if="locale === 'it'"
      viewBox="0 0 3 2"
      preserveAspectRatio="none"
      class="block h-full w-full"
      focusable="false"
    >
      <rect width="1" height="2" fill="#008C45" />
      <rect x="1" width="1" height="2" fill="#F4F5F0" />
      <rect x="2" width="1" height="2" fill="#CD212A" />
    </svg>

    <svg
      v-else-if="locale === 'es'"
      viewBox="0 0 3 2"
      preserveAspectRatio="none"
      class="block h-full w-full"
      focusable="false"
    >
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>

    <svg
      v-else
      viewBox="0 0 3 2"
      preserveAspectRatio="none"
      class="block h-full w-full"
      focusable="false"
    >
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#F4F5F0" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import type { Locale } from "~/data/routes";

defineProps<{ locale: Locale }>();

// The Union Jack needs a clip path to counterchange the red saltire, and the
// component renders several times per page, so the id has to be unique.
const clip = useId();
</script>
