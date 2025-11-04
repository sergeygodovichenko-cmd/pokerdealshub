import { d as deals } from '../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../chunks/filterContent_DvO7mL5H.mjs';
export { renderers } from '../renderers.mjs';

const SITE_URL = "https://pokerdealshub.com";
const GET = async () => {
  const lastmod = (/* @__PURE__ */ new Date()).toISOString();
  const urls = [];
  const mainPages = [
    { path: "/", priority: 1, changefreq: "daily" },
    { path: "/en/", priority: 1, changefreq: "daily" },
    { path: "/es/", priority: 1, changefreq: "daily" },
    { path: "/ru/", priority: 1, changefreq: "daily" }
  ];
  mainPages.forEach((page) => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates: [
        { lang: "ru-RU", href: `${SITE_URL}/` },
        { lang: "ru-RU", href: `${SITE_URL}/ru/` },
        { lang: "en-US", href: `${SITE_URL}/en/` },
        { lang: "es-ES", href: `${SITE_URL}/es/` }
      ]
    });
  });
  deals.forEach((deal) => {
    ["en", "es", "ru"].forEach((lang) => {
      urls.push({
        loc: `${SITE_URL}/${lang}/deal/${deal.slug}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.9,
        alternates: [
          { lang: "en-US", href: `${SITE_URL}/en/deal/${deal.slug}/` },
          { lang: "es-ES", href: `${SITE_URL}/es/deal/${deal.slug}/` },
          { lang: "ru-RU", href: `${SITE_URL}/ru/deal/${deal.slug}/` }
        ]
      });
    });
  });
  const filters = Object.keys(filterContent.ru);
  filters.forEach((filter) => {
    ["en", "es", "ru"].forEach((lang) => {
      urls.push({
        loc: `${SITE_URL}/${lang}/deals/${filter}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.8,
        alternates: [
          { lang: "en-US", href: `${SITE_URL}/en/deals/${filter}/` },
          { lang: "es-ES", href: `${SITE_URL}/es/deals/${filter}/` },
          { lang: "ru-RU", href: `${SITE_URL}/ru/deals/${filter}/` }
        ]
      });
    });
  });
  const staticPages = [
    { path: "/ru/guides/", priority: 0.7, changefreq: "monthly" },
    { path: "/ru/guides/pppoker-guide/", priority: 0.7, changefreq: "monthly" },
    { path: "/ru/about/", priority: 0.5, changefreq: "monthly" },
    { path: "/ru/add-deal/", priority: 0.5, changefreq: "monthly" },
    { path: "/ru/privacy/", priority: 0.5, changefreq: "monthly" },
    { path: "/ru/terms/", priority: 0.5, changefreq: "monthly" }
  ];
  staticPages.forEach((page) => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });
  const xmlUrls = urls.map((url) => {
    const alternates = url.alternates ? url.alternates.map(
      (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
    ).join("\n") : "";
    return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternates}
  </url>`;
  }).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
