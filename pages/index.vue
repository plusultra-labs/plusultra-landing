<template>
  <div class="bg-gray-900 text-white">
    <!-- Star pattern background -->
    <LandingStarPattern />

    <!-- Mouse light effect -->
    <LandingLightEffect />

    <div class="min-h-screen flex flex-col">
      <!-- Navigation -->
      <LandingNavBar />

      <!-- Main Content -->
      <main>
        <LandingHeroSection>
          <!-- Three Pillars Section -->
          <LandingThreePillars />

          <!-- Technologies -->
          <LandingTechStack />

          <!-- Portfolio Button -->
          <LandingPortfolioButton />
        </LandingHeroSection>
      </main>

      <!-- Portfolio Section -->
      <LandingPortfolioSection />

      <!-- Footer -->
      <LandingFooterSection />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Plusultra Labs - AI & Tech Product Studio",
  meta: [
    {
      name: "description",
      content:
        "Beyond Limits. Into Innovation. AI & Tech Product Studio transforming ideas into market-ready solutions.",
    },
    {
      property: "og:title",
      content: "Plusultra Labs - AI & Tech Product Studio",
    },
    {
      property: "og:description",
      content:
        "Beyond Limits. Into Innovation. AI & Tech Product Studio transforming ideas into market-ready solutions.",
    },
    {
      property: "og:image",
      content: "/og_image.png",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>
