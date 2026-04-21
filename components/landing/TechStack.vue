<template>
  <div class="mb-6">
    <div class="text-xs md:text-sm text-gray-400 mb-2">TECHNOLOGIES WE WORK WITH</div>
    <div class="flex flex-wrap justify-center gap-2">
      <span
        v-for="tech in technologies"
        :key="tech"
        class="px-2 py-1 bg-gray-800/50 rounded-lg text-xs"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  "TypeScript",
  "LangGraph",
  "OpenAI",
  "Llama",
  "Flutter",
  "SwiftUI",
  "MongoDB",
  "Firebase",
  "NodeJS",
];
</script>
