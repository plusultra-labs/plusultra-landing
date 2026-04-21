<template>
  <button
    id="portfolioButton"
    @click="handleClick"
    class="portfolio-btn group relative px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-4 text-base mt-2 sm:mt-10 font-medium bg-gradient-to-r from-blue-600/60 via-blue-500/60 to-blue-400/60 hover:from-blue-600/70 hover:via-blue-500/70 hover:to-blue-400/70 text-blue-200 hover:text-blue-100 rounded-xl transition-all duration-300 border border-blue-500/60 hover:border-blue-400/80 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
  >
    <!-- Button Content -->
    <div class="relative z-10 flex items-center space-x-3">
      <span class="material-icons text-xl group-hover:rotate-90 transition-transform duration-500 ease-in-out">
        auto_awesome
      </span>
      <span class="md:text-lg sm:text-md text-sm">Explore Our Portfolio</span>
      <span class="material-icons text-xl group-hover:translate-x-1 transition-transform duration-300">
        arrow_forward
      </span>
    </div>

    <!-- Hover Glow Effect -->
    <div class="absolute inset-0 -z-10 rounded-xl glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </button>
</template>

<script setup lang="ts">
const { toggle } = usePortfolioToggle();

const handleClick = () => {
  console.log('Portfolio button clicked!');
  toggle();
};
</script>
