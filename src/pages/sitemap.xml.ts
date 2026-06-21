import type { APIRoute } from 'astro';
import deals from '../data/deals.json';
import filterContent from '../data/filterContent.json';

const SITE_URL = 'https://pokerdealshub.com';

const languageEntries = [
  { lang: 'ru', hreflang: 'ru-RU' },
  { lang: 'en', hreflang: 'en-US' },
  { lang: 'es', hreflang: 'es-ES' },
  { lang: 'uz', hreflang: 'uz-Latn-UZ' },
];

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternates?: Array<{ lang: string; href: string }>;
}

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString();
  const urls: SitemapURL[] = [];

  const mainPages = languageEntries.map(({ lang }) => ({
    path: `/${lang}/`,
    priority: 1.0,
    changefreq: 'daily',
  }));

  mainPages.forEach((page) => {
    const alternates = languageEntries.map(({ lang, hreflang }) => ({
      lang: hreflang,
      href: `${SITE_URL}/${lang}/`,
    }));

    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates,
    });
  });

  const activeLangs = languageEntries.map(({ lang }) => lang);

  deals.forEach((deal) => {
    activeLangs.forEach((lang) => {
      const alternates = languageEntries.map(({ lang: altLang, hreflang }) => ({
        lang: hreflang,
        href: `${SITE_URL}/${altLang}/deal/${deal.slug}/`,
      }));

      urls.push({
        loc: `${SITE_URL}/${lang}/deal/${deal.slug}/`,
        lastmod,
        changefreq: 'weekly',
        priority: 0.9,
        alternates,
      });
    });
  });

  const filters = Object.keys(filterContent.ru);
  filters.forEach((filter) => {
    activeLangs.forEach((lang) => {
      const alternates = languageEntries.map(({ lang: altLang, hreflang }) => ({
        lang: hreflang,
        href: `${SITE_URL}/${altLang}/deals/${filter}/`,
      }));

      urls.push({
        loc: `${SITE_URL}/${lang}/deals/${filter}/`,
        lastmod,
        changefreq: 'weekly',
        priority: 0.8,
        alternates,
      });
    });
  });

  const staticPages = languageEntries.flatMap(({ lang }) => [
    { path: `/${lang}/guides/`, priority: 0.7, changefreq: 'monthly' },
    { path: `/${lang}/guides/pppoker-guide/`, priority: 0.7, changefreq: 'monthly' },
    { path: `/${lang}/about/`, priority: 0.5, changefreq: 'monthly' },
    { path: `/${lang}/add-deal/`, priority: 0.5, changefreq: 'monthly' },
    { path: `/${lang}/privacy/`, priority: 0.5, changefreq: 'monthly' },
    { path: `/${lang}/terms/`, priority: 0.5, changefreq: 'monthly' },
  ]);

  staticPages.forEach((page) => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  const xmlUrls = urls
    .map((url) => {
      const alternates = url.alternates
        ? url.alternates
            .map(
              (alt) =>
                `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
            )
            .join('\n')
        : '';

      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternates}
  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
