import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, d as renderScript, a as renderTemplate } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl } from './utils_CSZAe92J.mjs';
/* empty css                                   */

const $$Astro = createAstro();
const $$FilterSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FilterSidebar;
  const { currentFilter } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url) || "en";
  const filterData = {
    ru: {
      allDeals: "\u0412\u0441\u0435 \u0441\u0434\u0435\u043B\u043A\u0438",
      filterLabel: "\u0424\u0438\u043B\u044C\u0442\u0440:",
      byType: "\u041F\u043E \u0442\u0438\u043F\u0443",
      byApp: "\u041F\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E",
      byUnion: "\u041F\u043E \u0441\u043E\u044E\u0437\u0430\u043C",
      byGeo: "\u041F\u043E \u0433\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u0438",
      byFormat: "\u041F\u043E \u0442\u0438\u043F\u0443 \u0438\u0433\u0440\u044B",
      filters: {
        centralized: "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
        decentralized: "\u0414\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435",
        pppoker: "PPPoker",
        clubgg: "ClubGG",
        xpoker: "X-Poker",
        pokerbros: "PokerBros",
        nutspoker: "Nuts poker",
        blacksea: "Black Sea",
        pppfish: "PPPfish",
        eldorado: "El Dorado",
        "nuts-primetime": "Nuts PrimeTime",
        "massiv-union": "Massiv Union",
        paradise: "Paradise",
        europe: "\u0415\u0432\u0440\u043E\u043F\u0430",
        asia: "\u0410\u0437\u0438\u044F",
        cis: "\u0421\u041D\u0413",
        australia: "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",
        america: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430",
        latam: "\u041B\u0430\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u0410\u043C\u0435\u0440\u0438\u043A\u0430",
        mtt: "MTT",
        cash: "Cash",
        plo: "PLO",
        nlh: "NLH"
      }
    },
    en: {
      allDeals: "All Deals",
      filterLabel: "Filter:",
      byType: "By Type",
      byApp: "By App",
      byUnion: "By Union",
      byGeo: "By Geography",
      byFormat: "By Game Type",
      filters: {
        centralized: "Centralized",
        decentralized: "Decentralized",
        pppoker: "PPPoker",
        clubgg: "ClubGG",
        xpoker: "X-Poker",
        pokerbros: "PokerBros",
        nutspoker: "Nuts poker",
        blacksea: "Black Sea",
        pppfish: "PPPfish",
        eldorado: "El Dorado",
        "nuts-primetime": "Nuts PrimeTime",
        "massiv-union": "Massiv Union",
        paradise: "Paradise",
        europe: "Europe",
        asia: "Asia",
        cis: "CIS",
        australia: "Australia",
        america: "America",
        latam: "LatAm",
        mtt: "MTT",
        cash: "Cash",
        plo: "PLO",
        nlh: "NLH"
      }
    }
  };
  const t = filterData[lang] || filterData.en;
  const categories = [
    {
      title: t.byType,
      filters: ["centralized", "decentralized"]
    },
    {
      title: t.byApp,
      filters: ["pppoker", "clubgg", "xpoker", "pokerbros", "nutspoker"]
    },
    {
      title: t.byUnion,
      filters: ["pppfish", "eldorado", "nuts-primetime", "massiv-union", "paradise", "blacksea"]
    },
    {
      title: t.byGeo,
      filters: ["europe", "asia", "cis", "australia", "america", "latam"]
    },
    {
      title: t.byFormat,
      filters: ["mtt", "nlh", "plo"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="w-full lg:w-64 flex-shrink-0" data-astro-cid-2y6rdbgm> <div id="sidebar-content" class="bg-neutral-900 border border-neutral-800 rounded-xl p-6" data-astro-cid-2y6rdbgm> <a${addAttribute(`/${lang}/deals/`, "href")}${addAttribute(`block mb-6 px-4 py-2 rounded-lg font-medium transition-colors ${!currentFilter ? "bg-gold text-neutral-900" : "text-neutral-300 hover:bg-neutral-800"}`, "class")} data-astro-cid-2y6rdbgm> ${t.allDeals} </a> <div class="space-y-6" data-astro-cid-2y6rdbgm> ${categories.map((category) => renderTemplate`<div data-astro-cid-2y6rdbgm> <h3 class="text-sm font-semibold text-gold mb-3" data-astro-cid-2y6rdbgm>${category.title}</h3> <div class="space-y-1" data-astro-cid-2y6rdbgm> ${category.filters.map((filter) => renderTemplate`<a${addAttribute(`/${lang}/deals/${filter}/`, "href")}${addAttribute(`block px-4 py-2 text-sm rounded-lg transition-colors ${currentFilter === filter ? "bg-gold text-neutral-900 font-medium" : "text-neutral-300 hover:bg-neutral-800"}`, "class")} data-astro-cid-2y6rdbgm> ${t.filters[filter]} </a>`)} </div> </div>`)} </div> </div> <div id="mobile-backdrop" class="hidden" data-astro-cid-2y6rdbgm></div> </aside> <button id="mobile-filter-toggle" class="lg:hidden fixed bottom-6 right-6 z-[100] bg-gold text-neutral-900 rounded-lg shadow-2xl hover:bg-gold-light transition-all active:scale-95 px-4 py-3 flex flex-col items-start gap-1 max-w-[140px]" aria-label="Toggle filters" data-astro-cid-2y6rdbgm> <div class="flex items-center gap-2 w-full" data-astro-cid-2y6rdbgm> <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5" data-astro-cid-2y6rdbgm> <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-astro-cid-2y6rdbgm></path> </svg> <span class="text-xs font-semibold leading-tight" data-astro-cid-2y6rdbgm>${t.filterLabel}</span> </div> <div class="text-sm font-bold leading-tight w-full truncate text-left" data-astro-cid-2y6rdbgm> ${currentFilter ? t.filters[currentFilter] : t.allDeals} </div> </button>  ${renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/FilterSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/FilterSidebar.astro", void 0);

export { $$FilterSidebar as $ };
