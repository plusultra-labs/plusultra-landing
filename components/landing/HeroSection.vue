<template>
  <section class="flex-1 flex flex-col justify-center px-4 pt-10 sm:pt-2 md:pt-24 min-h-screen">
    <div class="content-layer text-center max-w-4xl mx-auto relative z-10">
      <h2 class="text-md sm:text-lg md:text-3xl font-bold mb-0 sm:mb-2">Plusultra Labs</h2>
      <h1 class="text-lg sm:text-2xl md:text-5xl font-bold mb-1 sm:mb-3 md:mb-4 leading-tight">
        Beyond Limits. <br class="hidden md:block" />Into Innovation.
      </h1>
      <p class="text-xs sm:text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
        Transforming ambitious ideas into powerful solutions through AI and cutting-edge technology.
      </p>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
