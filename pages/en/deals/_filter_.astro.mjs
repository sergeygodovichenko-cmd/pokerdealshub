/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { $ as $$DealsList } from '../../../chunks/DealsList_BDWYIsRx.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../chunks/filterContent_DvO7mL5H.mjs';
import { g as getLangFromUrl } from '../../../chunks/utils_CSZAe92J.mjs';
import { d as dealsConfig } from '../../../chunks/dealsConfig_6c2onEy-.mjs';
export { renderers } from '../../../renderers.mjs';

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
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url) || "en";
  const { filter } = Astro2.params;
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
      europe: (d) => getGeoString(d.geo).toLowerCase().includes("europe"),
      asia: (d) => getGeoString(d.geo).toLowerCase().includes("asia"),
      cis: (d) => getGeoString(d.geo).toLowerCase().includes("cis"),
      australia: (d) => getGeoString(d.geo).toLowerCase().includes("australia"),
      america: (d) => {
        const geo = getGeoString(d.geo).toLowerCase();
        return geo.includes("america") || geo.includes("usa");
      },
      latam: (d) => getGeoString(d.geo).toLowerCase().includes("latin"),
      mtt: (d) => d.ratings?.mtt === 5,
      nlh: (d) => d.ratings?.nlh === 5,
      plo: (d) => d.ratings?.plo === 5
    };
    return deals2.filter(map[filterType] || (() => true));
  }
  const filteredDeals = filterDeals(deals, filter);
  const breadcrumbs = [
    { name: "All deals", url: `/${lang}/deals/` },
    { name: content.title, url: `/${lang}/deals/${filter}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ${renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "currentFilter": filter })} <div class="flex-1 min-w-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })} <div class="mb-6 lg:mb-8"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4"> ${content.h1} </h1> ${content.intro && renderTemplate`<div class="text-neutral-300 text-base leading-relaxed mt-4
                     [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                     [&_p]:mb-6">${unescapeHTML(content.intro)}</div>`} </div> <!-- Deals list --> ${renderComponent($$result2, "DealsList", $$DealsList, { "lang": lang, "dealsOverride": filteredDeals, "filter": filter, "currentPage": dealsConfig.defaultPage, "perPage": dealsConfig.perPage })} <!-- “You viewed...” block --> ${filteredDeals.length > 0 && renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8 lg:mb-12"> <p class="text-neutral-300 text-sm lg:text-base"> ${filter === "eldorado" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
You viewed active deals in the El Dorado union.
                  It’s a great place for PLO and NLH games, but PokerDealsHub also offers other deals:
<br><br> <a href="/en/deals/pppoker/" class="text-gold hover:text-gold-light">PPPoker deals</a> — the largest decentralized poker app.
<br> <a href="/en/deals/clubgg/" class="text-gold hover:text-gold-light">ClubGG deals</a> — official clubs by GGPoker.
<br> <a href="/en/deals/xpoker/" class="text-gold hover:text-gold-light">X-Poker deals</a> — dynamic Asian games.
` })}` : filter === "mtt" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
You viewed the best poker deals for MTT tournaments.
                  You might also like:
<br><br> <a href="/en/deals/nlh/" class="text-gold hover:text-gold-light">NLH deals</a> — cash games with deep stacks.
<br> <a href="/en/deals/plo/" class="text-gold hover:text-gold-light">PLO deals</a> — more action and variance.
<br> <a href="/en/deals/" class="text-gold hover:text-gold-light">All deals</a> — the full PokerDealsHub catalog.
` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
You viewed deals for the filter <span class="font-semibold text-gold">${content.title}</span>.${" "}<a href="/en/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">
Show all deals
</a> ` })}`} </p> </div>`} <!-- SEO text --> <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8"> <div class="text-neutral-300 text-base leading-relaxed
                   [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                   [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                   [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                   [&_strong]:text-neutral-100">${unescapeHTML(content.seoText)}</div> </div> </div> </div> </div> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/[filter]/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/[filter]/index.astro";
const $$url = "/en/deals/[filter]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
