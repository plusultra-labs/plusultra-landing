<template>
  <div class="min-h-[100dvh] bg-paper font-sans text-ink">
    <SiteNav />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <BookCallDialog />
  </div>
</template>

<script setup lang="ts">
// Applied once here so every route carries a canonical URL and the
// Organization/WebSite graph without each page repeating it.
useCanonical();
useOrganisationSchema();
</script>
