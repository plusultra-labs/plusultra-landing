import { ALL_ROUTES, PREFIXED_LOCALES } from "./data/routes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  devServer: {
    port: 3028,
  },

  nitro: {
    preset: "cloudflare-pages",
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      // Listed explicitly rather than left to the crawler, so a broken link in
      // the language switcher cannot quietly drop a whole language.
      routes: [
        ...ALL_ROUTES.map((r) => r.path),
        "/sitemap.xml",
        "/llms.txt",
        ...PREFIXED_LOCALES.map((l) => `/${l}/llms.txt`),
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "./tailwind.config.js",
    viewer: false,
  },

  app: {
    head: {
      title: "Plusultra Labs - AI Product Studio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Plusultra Labs is an AI product studio. We ship our own AI products, then bring the same engineering team to yours.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
        },
      ],
    },
  },

  hooks: {
    // pages/[locale]/[...path].vue would otherwise match /services and /about
    // too. Pinning the param to the real language codes keeps the English
    // routes unambiguous instead of relying on route-ranking order.
    "pages:extend"(pages) {
      for (const page of pages) {
        if (page.path.startsWith("/:locale()")) {
          page.path = page.path.replace(
            "/:locale()",
            `/:locale(${PREFIXED_LOCALES.join("|")})`,
          );
        }
      }
    },
  },
});
