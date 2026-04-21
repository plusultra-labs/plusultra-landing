<template>
  <div class="relative pl-12 md:pl-12">
    <div class="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600/10 rounded-full border border-blue-600/30">
      <span class="material-icons text-blue-400">{{ project.icon }}</span>
    </div>
    <div class="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
      <div class="flex flex-wrap items-center gap-2 mb-4">
        <span class="px-2 py-1 bg-blue-900/50 rounded-lg text-xs">{{ project.industry }}</span>
      </div>
      <h3 class="text-xl font-bold mb-3">{{ project.title }}</h3>
      <div class="space-y-4">
        <p class="text-sm text-gray-300">{{ project.description }}</p>
        <div v-if="project.metrics && project.metrics.length > 0">
          <h4 class="text-sm font-semibold mb-2">Key Achievements:</h4>
          <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li v-for="metric in project.metrics" :key="metric">{{ metric }}</li>
          </ul>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 py-1 bg-gray-900/50 rounded-lg text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  icon: string;
  industry: string;
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
}

defineProps<{
  project: Project;
}>();
</script>
