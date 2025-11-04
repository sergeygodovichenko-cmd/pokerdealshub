/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { $ as $$DealsList } from '../../../chunks/DealsList_THbWcVBO.mjs';
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
  const lang = getLangFromUrl(Astro2.url) || "ru";
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
  const breadcrumbs = [
    { name: "\u0412\u0441\u0435 \u0441\u0434\u0435\u043B\u043A\u0438", url: `/${lang}/deals/` },
    { name: content.title, url: `/${lang}/deals/${filter}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ${renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "currentFilter": filter })} <div class="flex-1 min-w-0"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })} <div class="mb-6 lg:mb-8"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4"> ${content.h1} </h1> ${content.intro && renderTemplate`<div class="text-neutral-300 text-base leading-relaxed mt-4
                     [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                     [&_p]:mb-6">${unescapeHTML(content.intro)}</div>`} </div> <!-- Список сделок с пагинацией --> ${renderComponent($$result2, "DealsList", $$DealsList, { "lang": lang, "dealsOverride": filteredDeals, "filter": filter, "currentPage": dealsConfig.defaultPage, "perPage": dealsConfig.perPage })} <!-- Блок "Вы посмотрели..." --> ${filteredDeals.length > 0 && renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8 lg:mb-12"> <p class="text-neutral-300 text-sm lg:text-base"> ${filter === "eldorado" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели активные сделки в союзе El Dorado.
                  Это отличное место для игры в PLO и NLH, но на PokerDealsHub есть и другие предложения:
<br><br> <a href="/ru/deals/pppoker/" class="text-gold hover:text-gold-light">Сделки в PPPoker</a> — крупнейшее децентрализованное покерное приложение.
<br> <a href="/ru/deals/clubgg/" class="text-gold hover:text-gold-light">Сделки в ClubGG</a> — официальные клубы от GGPoker.
<br> <a href="/ru/deals/xpoker/" class="text-gold hover:text-gold-light">Сделки в X-Poker</a> — динамичные азиатские игры.
` })}` : filter === "mtt" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели лучшие покерные сделки для MTT-турниров.
                  Попробуйте также:
<br><br> <a href="/ru/deals/nlh/" class="text-gold hover:text-gold-light">Сделки NLH</a> — кэш-игры с глубокими стеками.
<br> <a href="/ru/deals/plo/" class="text-gold hover:text-gold-light">Сделки PLO</a> — больше экшена и вариативности.
<br> <a href="/ru/deals/" class="text-gold hover:text-gold-light">Все сделки</a> — полный каталог PokerDealsHub.
` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели сделки по фильтру <span class="font-semibold text-gold">${content.title}</span>.${" "}<a href="/ru/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">
Показать все сделки
</a> ` })}`} </p> </div>`} <!-- SEO-текст --> <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8"> <div class="text-neutral-300 text-base leading-relaxed
                   [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                   [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                   [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                   [&_strong]:text-neutral-100">${unescapeHTML(content.seoText)}</div> </div> </div> </div> </div> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter]/index.astro";
const $$url = "/ru/deals/[filter]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
