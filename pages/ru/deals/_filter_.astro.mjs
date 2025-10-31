/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$BaseLayout } from '../../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BWepXAJe.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_B1U8VDRy.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BL0bbISx.mjs';
import { d as deals } from '../../../chunks/deals_Bgjakpm4.mjs';
import { f as filterContent } from '../../../chunks/filterContent_Ci2yplcA.mjs';
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
const $$filter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$filter;
  const lang = getLangFromUrl(Astro2.url);
  const { filter } = Astro2.props;
  const content = filterContent.ru[filter];
  function filterDeals(deals2, filterType) {
    const getGeoString = (geo) => {
      if (typeof geo === "string") return geo;
      return geo.ru || "";
    };
    const filterMap = {
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
    return deals2.filter(filterMap[filterType] || (() => true));
  }
  const filteredDeals = filterDeals(deals, filter).sort((a, b) => {
    if (a.slug === "nuts-primetime-pppoker") return -1;
    if (b.slug === "nuts-primetime-pppoker") return 1;
    return 0;
  });
  const breadcrumbs = [
    { name: "\u0412\u0441\u0435 \u0441\u0434\u0435\u043B\u043A\u0438", url: `/${lang}/deals/` },
    { name: content.title, url: `/ru/deals/${filter}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ', ' <div class="flex-1 min-w-0"> ', ' <div class="mb-6 lg:mb-8"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4"> ', " </h1> ", ' </div> <div class="mb-8 lg:mb-12"> ', " </div> ", ' <div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4\n       [&_a]:text-gold [&_a]:underline [&_a]:decoration-gold/50 [&_a:hover]:text-gold-light [&_a:hover]:decoration-gold-light\n       [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2\n       [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4\n       [&_strong]:text-neutral-100">', '</div> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "currentFilter": filter }), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), content.h1, content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
       [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-gold-light [&_a:hover]:decoration-gold-light
       [&_p]:mb-6">${unescapeHTML(content.intro)}</div>`, filteredDeals.length > 0 ? renderTemplate`<div class="flex flex-col gap-4"> ${filteredDeals.map((deal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal })}`)} </div>` : renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 text-center"> <p class="text-neutral-400 text-sm lg:text-base">
Сделки по данному фильтру скоро появятся. Посмотрите${" "} <a href="/ru/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">все сделки</a> или выберите другой фильтр.
</p> </div>`, filteredDeals.length > 0 && renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8 lg:mb-12"> <p class="text-neutral-300 text-sm lg:text-base"> ${filter === "eldorado" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели активные сделки в союзе El Dorado.
                  Это отличное место для игры в PLO и NLH, но на PokerDealsHub есть и другие предложения с выгодным рейкбэком:
<br><br> <a href="/ru/deals/pppoker/" class="text-gold hover:text-gold-light ">Сделки в PPPoker</a> — крупнейшее децентрализованное покерное приложение.
<br> <a href="/ru/deals/clubgg/" class="text-gold hover:text-gold-light ">Сделки в ClubGG</a> — официальные клубы от GGPoker.
<br> <a href="/ru/deals/xpoker/" class="text-gold hover:text-gold-light ">Сделки в X-Poker</a> — динамичные азиатские игры и мягкие поля.
` })}` : filter === "nuts-primetime" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели активные сделки в союзе Nuts PrimeTime — одном из самых стабильных направлений для профессиональной игры на PPPoker.
                  Но на PokerDealsHub доступны и другие выгодные предложения:
<br><br> <a href="/ru/deals/eldorado/" class="text-gold hover:text-gold-light ">El Dorado</a> — мягкие латиноамериканские поля и горячие PLO-игры.
<br> <a href="/ru/deals/pppfish/" class="text-gold hover:text-gold-light ">PPPfish</a> — легендарно лёгкие столы и максимальный экшен.
<br> <a href="/ru/deals/clubgg/" class="text-gold hover:text-gold-light ">ClubGG</a> — лицензированные клубы от GGPoker.
` })}` : filter === "mtt" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели лучшие покерные сделки для MTT-турниров.
                  Если вы хотите попробовать другие направления в покере, посмотрите также:
<br><br> <a href="/ru/deals/nlh/" class="text-gold hover:text-gold-light ">Сделки NLH</a> — классические покерные кэш-игры с глубокими стеками.
<br> <a href="/ru/deals/plo/" class="text-gold hover:text-gold-light ">Сделки PLO</a> — больше экшена и вариативности для продвинутых игроков.
<br> <a href="/ru/deals/" class="text-gold hover:text-gold-light ">Все покерные сделки</a> — полный каталог предложений PokerDealsHub.
` })}` : filter === "plo" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели лучшие 5-звёздочные покерные сделки PLO (Омаха) с мягкими полями и отличным рейкбэком.
                  Попробуйте также другие направления покера:
<br><br> <a href="/ru/deals/nlh/" class="text-gold hover:text-gold-light ">Сделки NLH</a> — классический безлимитный холдем.
<br> <a href="/ru/deals/mtt/" class="text-gold hover:text-gold-light ">Сделки MTT</a> — турниры с крупными гарантиями и оверлеями.
<br> <a href="/ru/deals/" class="text-gold hover:text-gold-light ">Все покерные сделки</a> — полный каталог PokerDealsHub.
` })}` : filter === "nlh" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели лучшие покерные сделки NLH (Техасский Холдем).
                  Попробуйте также другие форматы:
<br><br> <a href="/ru/deals/plo/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">Сделки PLO</a> — экшен и крупные банки.
<br> <a href="/ru/deals/mtt/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">Сделки MTT</a> — турниры с большими гарантиями и оверлеями.
<br> <a href="/ru/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">Все покерные сделки</a> — полный каталог PokerDealsHub.
` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
Вы посмотрели сделки по фильтру <span class="font-semibold text-gold">${content.title}</span>. У нас есть много других покерных сделок с хорошими условиями.${" "}<a href="/ru/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">Показать все сделки</a> ` })}`} </p> </div>`, unescapeHTML(content.seoText), unescapeHTML(JSON.stringify({
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
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/[filter].astro";
const $$url = "/ru/deals/[filter]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$filter,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
