import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// ============================================================
// ✅ ASTRO CONFIGURATION — Tailwind v3 compatible
// ============================================================

export default defineConfig({
  site: "https://pokerdealshub.com",

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "ru",
        locales: {
          en: "en-US",
          es: "es-ES",
          ru: "ru-RU",
        },
      },
      // Исключаем корневую страницу "/", чтобы не дублировать hreflang
      filter: (page) => page !== "https://pokerdealshub.com/",
      serialize: (page) => ({
        url: page,
        lastmod: new Date().toISOString(),
      }),
    }),
    icon(),
  ],

  build: {
    format: "directory",
  },
});
