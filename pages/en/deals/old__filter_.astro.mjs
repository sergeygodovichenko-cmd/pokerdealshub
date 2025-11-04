/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BGq8N76Q.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../chunks/filterContent_DvO7mL5H.mjs';
import { g as getLangFromUrl } from '../../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../../renderers.mjs';

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
  return filters.map((filter) => ({
    params: { filter },
    props: { filter }
  }));
}
const $$Oldfilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Oldfilter;
  const lang = getLangFromUrl(Astro2.url);
  const { filter } = Astro2.props;
  const content = filterContent.en[filter];
  function filterDeals(deals2, filterType) {
    const getGeoString = (geo) => {
      if (typeof geo === "string") return geo;
      return geo.en || "";
    };
    const filterMap = {
      centralized: (d) => d.type.toLowerCase() === "centralized",
      decentralized: (d) => d.type.toLowerCase() === "decentralized",
      pppoker: (d) => d.app.toLowerCase() === "pppoker",
      clubgg: (d) => d.app.toLowerCase() === "clubgg",
      xpoker: (d) => d.app.toLowerCase() === "x-poker",
      pokerbros: (d) => d.app.toLowerCase() === "pokerbros",
      nutspoker: (d) => d.app.toLowerCase() === "nuts poker",
      pppfish: (d) => d.union.toLowerCase() === "pppfish",
      eldorado: (d) => d.union.toLowerCase() === "el dorado",
      "nuts-primetime": (d) => d.union.toLowerCase() === "nuts primetime",
      "massiv-union": (d) => d.union.toLowerCase() === "massiv union",
      paradise: (d) => d.union.toLowerCase() === "paradise",
      europe: (d) => getGeoString(d.geo).toLowerCase().includes("europe"),
      asia: (d) => getGeoString(d.geo).toLowerCase().includes("asia"),
      cis: (d) => getGeoString(d.geo).toLowerCase().includes("cis"),
      australia: (d) => getGeoString(d.geo).toLowerCase().includes("australia"),
      america: (d) => {
        const geo = getGeoString(d.geo).toLowerCase();
        return geo.includes("america") || geo.includes("usa");
      },
      latam: (d) => getGeoString(d.geo).toLowerCase().includes("latam"),
      mtt: (d) => d.ratings?.mtt === 5,
      nlh: (d) => d.ratings?.nlh === 5,
      plo: (d) => d.ratings?.plo === 5
    };
    return deals2.filter(filterMap[filterType] || (() => true));
  }
  const filteredDeals = filterDeals(deals, filter).sort((a, b) => {
    if (a.slug === "nuts-primetime-pppoker") return -1;
    if (b.slug === "nuts-primetime-pppoker") return 1;
    return 0;
  });
  const breadcrumbs = [
    { name: "All Deals", url: `/${lang}/deals/` },
    { name: content.title, url: `/en/deals/${filter}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ', ' <div class="flex-1 min-w-0"> ', ' <div class="mb-6 lg:mb-8"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4"> ', " </h1> ", ' </div> <div class="mb-8 lg:mb-12"> ', " </div> ", ' <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8"> <div class="text-neutral-300 text-base leading-relaxed\n    [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2\n    [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2\n    [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4\n    [&_strong]:text-neutral-100">', '</div> </div> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "currentFilter": filter }), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), content.h1, content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
                     [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                     [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                     [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                     [&_strong]:text-neutral-100">${unescapeHTML(content.intro)}</div>`, filteredDeals.length > 0 ? renderTemplate`<div class="flex flex-col gap-4"> ${filteredDeals.map((deal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal })}`)} </div>` : renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 text-center"> <p class="text-neutral-400 text-sm lg:text-base">
Deals for this filter coming soon. Check out${" "} <a href="/en/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">all deals</a> or choose another filter.
</p> </div>`, filteredDeals.length > 0 && renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8 lg:mb-12"> <p class="text-neutral-300 text-sm lg:text-base">
You viewed deals for <span class="font-semibold text-gold">${content.title}</span>. We have many other poker deals with great terms.${" "} <a href="/en/deals/" class="text-gold hover:text-gold-light underline">Show all deals</a> </p> </div>`, unescapeHTML(content.seoText), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredDeals.map((deal, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": deal.name.en,
        "description": deal.description.en,
        "url": `https://pokerdealshub.com/en/deal/${deal.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/old_[filter].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/old_[filter].astro";
const $$url = "/en/deals/old_[filter]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Oldfilter,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
