/* empty css                                          */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$DealCard } from '../../../../chunks/DealCard_BGq8N76Q.mjs';
import { $ as $$FilterSidebar } from '../../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$Breadcrumbs } from '../../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { d as deals } from '../../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../../chunks/filterContent_DvO7mL5H.mjs';
import { g as getLangFromUrl } from '../../../../chunks/utils_CSZAe92J.mjs';
import { d as dealsConfig } from '../../../../chunks/dealsConfig_6c2onEy-.mjs';
export { renderers } from '../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
function getStaticPaths() {
  const filters = [
    "centralized",
    "decentralized",
    "pppoker",
    "clubgg",
    "xpoker",
    "pokerbros",
    "nutspoker",
    "pppfish",
    "eldorado",
    "nuts-primetime",
    "massiv-union",
    "paradise",
    "blacksea",
    "europe",
    "asia",
    "cis",
    "australia",
    "america",
    "latam",
    "mtt",
    "nlh",
    "plo"
  ];
  const perPage = dealsConfig?.perPage;
  const getGeoString = (geo) => typeof geo === "string" ? geo : geo?.ru || "";
  const map = {
    centralized: (d) => d.type.toLowerCase() === "centralized",
    decentralized: (d) => d.type.toLowerCase() === "decentralized",
    pppoker: (d) => d.app.toLowerCase() === "pppoker",
    clubgg: (d) => d.app.toLowerCase() === "clubgg",
    xpoker: (d) => d.app.toLowerCase() === "x-poker",
    pokerbros: (d) => d.app.toLowerCase() === "pokerbros",
    nutspoker: (d) => d.app.toLowerCase() === "nuts poker",
    blacksea: (d) => d.union.toLowerCase() === "black sea",
    pppfish: (d) => d.union.toLowerCase() === "pppfish",
    eldorado: (d) => d.union.toLowerCase() === "el dorado",
    "nuts-primetime": (d) => d.union.toLowerCase() === "nuts primetime",
    "massiv-union": (d) => d.union.toLowerCase() === "massiv union",
    paradise: (d) => d.union.toLowerCase() === "paradise",
    europe: (d) => getGeoString(d.geo).toLowerCase().includes("\u0435\u0432\u0440\u043E\u043F\u0430"),
    asia: (d) => getGeoString(d.geo).toLowerCase().includes("\u0430\u0437\u0438\u044F"),
    cis: (d) => getGeoString(d.geo).toLowerCase().includes("\u0441\u043D\u0433"),
    australia: (d) => getGeoString(d.geo).toLowerCase().includes("\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F"),
    america: (d) => {
      const g = getGeoString(d.geo).toLowerCase();
      return g.includes("\u0430\u043C\u0435\u0440\u0438\u043A\u0430") || g.includes("\u0441\u0448\u0430");
    },
    latam: (d) => getGeoString(d.geo).toLowerCase().includes("\u043B\u0430\u0442\u0438\u043D\u0441\u043A"),
    mtt: (d) => d.ratings?.mtt === 5,
    nlh: (d) => d.ratings?.nlh === 5,
    plo: (d) => d.ratings?.plo === 5
  };
  const paths = [];
  for (const filter of filters) {
    const filtered = deals.filter(map[filter] || (() => true)).sort((a, b) => a.slug === "nuts-primetime-pppoker" ? -1 : b.slug === "nuts-primetime-pppoker" ? 1 : 0);
    const total = Math.max(1, Math.ceil(filtered.length / perPage));
    for (let page = 2; page <= total; page++) {
      paths.push({ params: { filter, page: String(page) }, props: { filter, page } });
    }
  }
  return paths;
}
const $$pageDel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pageDel;
  const lang = getLangFromUrl(Astro2.url) || "ru";
  const { filter, page } = Astro2.props;
  const content = filterContent.ru[filter];
  const currentPage = Number(page);
  const perPage = dealsConfig?.perPage;
  function filterDeals(dealsArr, filterType) {
    const getGeoString = (geo) => typeof geo === "string" ? geo : geo?.ru || "";
    const map = {
      centralized: (d) => d.type.toLowerCase() === "centralized",
      decentralized: (d) => d.type.toLowerCase() === "decentralized",
      pppoker: (d) => d.app.toLowerCase() === "pppoker",
      clubgg: (d) => d.app.toLowerCase() === "clubgg",
      xpoker: (d) => d.app.toLowerCase() === "x-poker",
      pokerbros: (d) => d.app.toLowerCase() === "pokerbros",
      nutspoker: (d) => d.app.toLowerCase() === "nuts poker",
      blacksea: (d) => d.union.toLowerCase() === "black sea",
      pppfish: (d) => d.union.toLowerCase() === "pppfish",
      eldorado: (d) => d.union.toLowerCase() === "el dorado",
      "nuts-primetime": (d) => d.union.toLowerCase() === "nuts primetime",
      "massiv-union": (d) => d.union.toLowerCase() === "massiv union",
      paradise: (d) => d.union.toLowerCase() === "paradise",
      europe: (d) => getGeoString(d.geo).toLowerCase().includes("\u0435\u0432\u0440\u043E\u043F\u0430"),
      asia: (d) => getGeoString(d.geo).toLowerCase().includes("\u0430\u0437\u0438\u044F"),
      cis: (d) => getGeoString(d.geo).toLowerCase().includes("\u0441\u043D\u0433"),
      australia: (d) => getGeoString(d.geo).toLowerCase().includes("\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F"),
      america: (d) => {
        const geo = getGeoString(d.geo).toLowerCase();
        return geo.includes("\u0430\u043C\u0435\u0440\u0438\u043A\u0430") || geo.includes("\u0441\u0448\u0430");
      },
      latam: (d) => getGeoString(d.geo).toLowerCase().includes("\u043B\u0430\u0442\u0438\u043D\u0441\u043A"),
      mtt: (d) => d.ratings?.mtt === 5,
      nlh: (d) => d.ratings?.nlh === 5,
      plo: (d) => d.ratings?.plo === 5
    };
    return dealsArr.filter(map[filterType] || (() => true));
  }
  const filteredDeals = filterDeals(deals, filter).sort((a, b) => {
    if (a.slug === "nuts-primetime-pppoker") return -1;
    if (b.slug === "nuts-primetime-pppoker") return 1;
    return 0;
  });
  const totalPages = Math.ceil(filteredDeals.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedDeals = filteredDeals.slice(start, start + perPage);
  const prevLink = currentPage === 2 ? `/${lang}/deals/${filter}/` : `/${lang}/deals/${filter}/${currentPage - 1}/`;
  const nextLink = currentPage < totalPages ? `/${lang}/deals/${filter}/${currentPage + 1}/` : null;
  const breadcrumbs = [
    { name: "\u0412\u0441\u0435 \u0441\u0434\u0435\u043B\u043A\u0438", url: `/${lang}/deals/` },
    { name: content.title, url: `/${lang}/deals/${filter}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${content.title} \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${currentPage}`, "description": content.description, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp", "canonical": `https://pokerdealshub.com/${lang}/deals/${filter}/` }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ', ' <div class="flex-1 min-w-0"> ', ' <div class="mb-8 lg:mb-12"> ', ' </div> <div class="flex justify-center items-center gap-3 mb-10"> <a', ' class="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-300 hover:text-gold hover:border-gold transition">\u2190 \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F</a> <span class="text-neutral-400 text-sm">\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ', " \u0438\u0437 ", "</span> ", ' </div> </div> </div> </div>  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "currentFilter": filter }), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), paginatedDeals.length > 0 ? renderTemplate`<div class="flex flex-col gap-4"> ${paginatedDeals.map((deal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal })}`)} </div>` : renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 text-center"> <p class="text-neutral-400 text-sm lg:text-base">
Сделок на этой странице нет. Вернуться к
<a${addAttribute(`/${lang}/deals/${filter}/`, "href")} class="text-gold hover:text-gold-light underline underline-offset-2"> первой странице</a>.
</p> </div>`, addAttribute(prevLink, "href"), currentPage, totalPages, nextLink && renderTemplate`<a${addAttribute(nextLink, "href")} class="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-300 hover:text-gold hover:border-gold transition">Следующая →</a>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredDeals.map((deal, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": deal.name[lang],
        "description": deal.description[lang],
        "url": `https://pokerdealshub.com/${lang}/deal/${deal.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/[page]-del.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/[page]-del.astro";
const $$url = "/ru/deals/[filter]/[page]-del";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$pageDel,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
