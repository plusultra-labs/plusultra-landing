<template>
  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-site flex-col justify-between gap-3 px-5 py-9 text-[13.5px] text-ink-soft md:flex-row md:items-center md:px-10"
    >
      <div>Plusultra Labs · Milan, Italy</div>
      <div class="flex gap-6">
        <NuxtLink to="/services" class="hover:text-ink">Services</NuxtLink>
        <NuxtLink to="/work" class="hover:text-ink">Work</NuxtLink>
        <NuxtLink to="/products" class="hover:text-ink">Products</NuxtLink>
      </div>
      <a href="mailto:alberto@plusultralabs.com" class="font-mono hover:text-ink">
        alberto@plusultralabs.com
      </a>
    </div>
  </footer>
</template>
