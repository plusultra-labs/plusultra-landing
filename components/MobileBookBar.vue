<template>
  <!-- Phones only: the one next step stays under the thumb on every screen.
       Hidden while the booking dialog is open so it never sits on top of it. -->
  <div
    v-show="!bookingOpen"
    class="fixed inset-x-0 bottom-0 z-30 flex gap-2.5 border-t border-line bg-paper px-4 pt-3 md:hidden"
    style="padding-bottom: max(12px, env(safe-area-inset-bottom))"
  >
    <BookCallButton arrow class="flex-1 justify-between">{{ c.common.bookScopingCall }}</BookCallButton>
    <a
      :href="`mailto:${org.email}`"
      class="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-ink text-ink"
      :aria-label="org.email"
    >
      <svg width="22" height="18" viewBox="0 0 22 18" aria-hidden="true">
        <rect x="1.25" y="1.25" width="19.5" height="15.5" fill="none" stroke="currentColor" stroke-width="2.5" />
        <path d="M2 2 L11 10 L20 2" fill="none" stroke="currentColor" stroke-width="2.5" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { org } from "~/data/org";

const c = useCopy();
const { isOpen: bookingOpen } = useBookCall();
</script>
