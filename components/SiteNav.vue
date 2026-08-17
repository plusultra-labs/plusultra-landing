<template>
  <nav class="border-b border-line bg-paper">
    <div class="mx-auto flex h-[68px] max-w-site items-center justify-between px-5 md:px-10">
      <NuxtLink to="/" class="text-[19px] font-bold tracking-tight">
        plusultra<span class="text-accent">labs</span>
      </NuxtLink>

      <div class="hidden items-center gap-9 text-[15px] text-ink-soft md:flex">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="transition-colors hover:text-ink">
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="hidden md:block">
        <BookCallButton />
      </div>

      <button
        class="p-2 md:hidden"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span class="block h-0.5 w-6 bg-ink" />
        <span class="mt-1.5 block h-0.5 w-6 bg-ink" />
      </button>
    </div>

    <div v-if="open" class="border-t border-line px-5 py-4 md:hidden">
      <div class="flex flex-col gap-4 text-[16px]">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" @click="open = false">
          {{ item.label }}
        </NuxtLink>
        <BookCallButton class="mt-2 self-start" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const open = ref(false);
const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
</script>
