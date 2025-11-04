/* empty css                                          */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$DealsList } from '../../../../chunks/DealsList_THbWcVBO.mjs';
import { d as deals } from '../../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../../chunks/filterContent_DvO7mL5H.mjs';
import { d as dealsConfig } from '../../../../chunks/dealsConfig_6c2onEy-.mjs';
import { g as getLangFromUrl } from '../../../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$Pagepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagepage;
  const lang = getLangFromUrl(Astro2.url) || "ru";
  const { filter, page } = Astro2.params;
  const content = filterContent[lang][filter];
  function filterDeals(deals2, filterType) {
    const getGeoString = (geo) => typeof geo === "string" ? geo : geo[lang] || "";
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
    return deals2.filter(map[filterType] || (() => true));
  }
  const filteredDeals = filterDeals(deals, filter);
  const currentPage = Number(page);
  const perPage = dealsConfig.perPage;
  Math.ceil(filteredDeals.length / perPage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${content.title} \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${currentPage + 1}`, "description": content.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DealsList", $$DealsList, { "currentPage": currentPage, "perPage": perPage, "lang": lang, "dealsOverride": filteredDeals, "filter": filter })} ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/page-[page].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/page-[page].astro";
const $$url = "/ru/deals/[filter]/page-[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagepage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
