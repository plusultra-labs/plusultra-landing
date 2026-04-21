// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  devServer: {
    port: 3028,
  },

  nitro: {
    preset: "cloudflare-pages",
    compressPublicAssets: true,
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "./tailwind.config.js",
    viewer: false,
    exposeConfig: true,
  },

  app: {
    head: {
      title: "Plusultra Labs - AI & Tech Product Studio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Beyond Limits. Into Innovation. AI & Tech Product Studio transforming ideas into market-ready solutions.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap",
        },
      ],
    },
  },
});
