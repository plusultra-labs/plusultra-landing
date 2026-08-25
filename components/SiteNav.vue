<template>
  <header
    class="sticky top-0 z-30 border-b border-line backdrop-blur-[12px]"
    style="background: color-mix(in oklab, var(--paper) 86%, transparent)"
  >
    <div
      class="mx-auto flex h-[68px] max-w-site items-center justify-between gap-9 px-5 md:h-[76px] md:px-10"
    >
      <NuxtLink :to="lp('home')" class="flex flex-col items-start gap-[3px]" :aria-label="c.nav.homeAria">
        <span class="text-[21px] font-medium leading-none tracking-[-0.035em]">plusultra</span>
        <span class="flex items-center gap-[7px]">
          <span class="pu-wipe block h-0.5 w-[34px] bg-accent" />
          <span class="font-mono text-[9.5px] tracking-[0.24em] text-muted">LABS</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-[14.5px] md:flex">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="text-muted transition-colors duration-[250ms] hover:text-ink"
          active-class="text-ink"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-6 self-stretch md:flex">
        <LanguageSwitcher />
        <BookCallButton size="sm" />
      </div>

      <button class="-mr-2 p-2 md:hidden" :aria-label="c.nav.menuAria" @click="open = !open">
        <span class="block h-0.5 w-6 bg-ink" />
        <span class="mt-1.5 block h-0.5 w-6 bg-ink" />
      </button>
    </div>

    <div v-if="open" class="border-t border-line px-5 py-5 md:hidden">
      <div class="flex flex-col gap-4 text-[16px]">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="text-muted"
          active-class="text-ink"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
        <LanguageSwitcher class="pt-1" />
        <BookCallButton size="sm" class="mt-2 self-start" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const open = ref(false);

// Close the mobile menu on any route change, including taps on the logo.
const route = useRoute();
watch(() => route.fullPath, () => (open.value = false));

// And when the booking dialog covers it, so it is not still hanging open
// behind the modal once the visitor closes it.
const { isOpen: bookingOpen } = useBookCall();
watch(bookingOpen, (v) => {
  if (v) open.value = false;
});

const c = useCopy();
const lp = useLocalePath();

const links = computed(() => [
  { to: lp("services"), label: c.value.nav.services },
  { to: lp("work"), label: c.value.nav.work },
  { to: lp("about"), label: c.value.nav.about },
  { to: lp("contact"), label: c.value.nav.contact },
]);
</script>
