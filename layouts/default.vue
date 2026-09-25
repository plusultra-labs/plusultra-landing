<template>
  <!-- pb on phones leaves room for the fixed book-a-call bar -->
  <div class="min-h-[100dvh] bg-paper pb-[84px] font-sans text-ink md:pb-0">
    <SiteNav />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <MobileBookBar />
    <BookCallDialog />
  </div>
</template>

<script setup lang="ts">
// Applied once here so every route carries a canonical URL and the
// Organization/WebSite graph without each page repeating it.
useCanonical();
useOrganisationSchema();
</script>
