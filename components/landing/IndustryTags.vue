<template>
  <div class="mb-8">
    <h3 class="text-sm font-medium text-gray-400 mb-4">INDUSTRIES WE'VE HELPED TRANSFORM</h3>
    <div class="flex flex-wrap justify-center gap-2">
      <span
        v-for="industry in industries"
        :key="industry.name"
        class="px-4 py-2 bg-gray-800/50 rounded-lg text-sm backdrop-blur-sm border border-gray-700"
      >
        <span class="material-icons text-blue-400 text-sm align-middle mr-1">{{ industry.icon }}</span>
        {{ industry.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const industries = [
  { name: "Travel Tech", icon: "flight" },
  { name: "Healthcare", icon: "medical_services" },
  { name: "Enterprise", icon: "corporate_fare" },
  { name: "Creative", icon: "auto_awesome" },
  { name: "Commerce", icon: "local_shipping" },
  { name: "Art Tech", icon: "palette" },
];
</script>
