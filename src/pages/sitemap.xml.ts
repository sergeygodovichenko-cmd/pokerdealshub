import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { FILTERS } from "../config/filters.js";
import { locales } from "../i18n/ui";

const SITE_URL = "https://pokerdealshub.com";

const HREFLANG: Record<string, string> = {
  ru: "ru-RU",
  en: "en-US",
  uz: "uz-Latn-UZ",
};

interface SitemapURL {
  loc: string;
  changefreq: string;
  priority: number;
  alternates?: Array<{ lang: string; href: string }>;
}

// Build a localized URL set for a path template, with hreflang alternates.
function localized(pathFor: (lang: string) => string, changefreq: string, priority: number): SitemapURL[] {
  const alternates = locales.map((lang) => ({ lang: HREFLANG[lang] ?? lang, href: `${SITE_URL}${pathFor(lang)}` }));
  return locales.map((lang) => ({ loc: `${SITE_URL}${pathFor(lang)}`, changefreq, priority, alternates }));
}

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString();
  const deals = await getCollection("deals", ({ data }) => !data.hidden);
  const guides = await getCollection("guides", ({ data }) => !data.draft);
  // Use the actual generated filter routes (FILTERS), not filterContent keys —
  // the latter included "all"/"cash" (not built) and missed coinpoker/888poker/rake2high.
  const filters = FILTERS;

  const urls: SitemapURL[] = [
    ...localized((l) => `/${l}/`, "daily", 1.0),
    ...localized((l) => `/${l}/deals/`, "daily", 0.9),
    ...localized((l) => `/${l}/guides/`, "weekly", 0.7),
    ...deals.flatMap((d) => localized((l) => `/${l}/deal/${d.id}/`, "weekly", 0.9)),
    ...guides.flatMap((g) => localized((l) => `/${l}/guides/${g.id}/`, "monthly", 0.7)),
    ...filters.flatMap((f) => localized((l) => `/${l}/deals/${f}/`, "weekly", 0.8)),
    ...localized((l) => `/${l}/backing/`, "weekly", 0.7),
    ...["about", "add-deal", "privacy", "terms"].flatMap((p) =>
      localized((l) => `/${l}/${p}/`, "monthly", 0.5)
    ),
  ];

  const xmlUrls = urls
    .map((url) => {
      const alternates = (url.alternates ?? [])
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`)
        .join("\n");
      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternates}
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
