<template>
  <div
    id="portfolioSection"
    class="portfolio-section mt-12 max-w-4xl mx-auto px-4"
    :class="{ 'visible': isOpen }"
  >
    <div class="space-y-12">
      <!-- Portfolio Introduction -->
      <h2 class="text-2xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Transforming Industries Through Innovation
      </h2>

      <div class="max-w-3xl mx-auto text-center mb-12">
        <p class="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
          From AI-powered healthcare solutions to revolutionary travel platforms, we've partnered with
          forward-thinking organizations worldwide. Our expertise spans from helping startups raise millions to
          transforming enterprise operations through cutting-edge technology.
        </p>

        <!-- Key Metrics -->
        <LandingPortfolioMetrics />

        <!-- Industry Tags -->
        <LandingIndustryTags />

        <!-- Bottom Text -->
        <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Our portfolio showcases select projects that demonstrate our commitment to excellence in AI integration,
          product development, and digital transformation. Each project represents a unique challenge solved through
          innovative technology solutions.
        </p>
      </div>

      <h2 class="text-2xl md:text-4xl font-bold mb-8 text-center">Project Timeline</h2>

      <!-- Timeline -->
      <LandingProjectTimeline />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isOpen } = usePortfolioToggle();

// Debug - watch the state
watch(isOpen, (newVal) => {
  console.log('Portfolio isOpen changed to:', newVal);
});
</script>
