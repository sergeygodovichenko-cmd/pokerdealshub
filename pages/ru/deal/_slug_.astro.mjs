/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BGq8N76Q.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
function getStaticPaths() {
  return deals.map((deal) => ({
    params: { slug: deal.slug },
    props: { deal }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const lang = getLangFromUrl(Astro2.url);
  const { deal } = Astro2.props;
  const t = useTranslations("ru");
  const breadcrumbs = [
    { name: t("bbreadcrumb.home"), url: `/${lang}/deals/` },
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: deal.name[lang], url: `/ru/deal/${deal.slug}/` }
  ];
  const similarDeals = deals.filter(
    (d) => d.slug !== deal.slug && (d.app === deal.app || d.geo === deal.geo)
  ).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": deal.name.ru, "description": deal.description.ru, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12"> <div class="max-w-5xl mx-auto"> ', ' <div class="flex flex-wrap items-center gap-3 mb-6"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold"> ', ' </h1> </div> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8"> <div class="flex items-start gap-6 mb-6"> <div class="w-24 h-24 bg-neutral-800 rounded-lg flex items-center justify-center text-5xl border border-neutral-700 flex-shrink-0"> ', " ", " ", " ", " ", " ", ' </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-neutral-100 mb-3">\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h2> <div class="flex flex-wrap gap-2"> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F4F1}</span> ', " </span> ", ' <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F30D}</span> ', ' </span> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F3AF}</span> ', ' </span> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u2699\uFE0F</span> ', ' </span> <span class="inline-flex items-center px-4 py-2 text-base font-bold bg-gold/20 text-gold rounded-lg border border-gold/30"> <span class="mr-2">\u{1F4B0}</span> ', ' </span> </div> </div> </div> <div class="flex flex-wrap gap-6 items-center mb-4"> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">MTT</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">PLO</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">NLH</span> <span class="text-gold text-lg">', '</span> </div> </div> <div class="prose prose-invert max-w-none mb-8"> <p class="text-neutral-300 text-lg leading-relaxed"> ', ' </p> <p class="text-neutral-300 leading-relaxed">\n\u042D\u0442\u0430 \u0441\u0434\u0435\u043B\u043A\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0440\u0435\u0439\u043A\u0431\u044D\u043A\u0430 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n            \u041C\u044B \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043C\u043E\u0436\u0435\u043C \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E\u0439 \u0438\u0433\u0440\u044B.\n</p> <p class="text-neutral-300 leading-relaxed">\n\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0441\u0434\u0435\u043B\u043A\u0435 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435 \u043D\u0438\u0436\u0435. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0438\n            \u043E\u0442\u0432\u0435\u0442\u0438\u0442 \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0438\u0433\u0440\u044B.\n</p> </div> <a', ' target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto text-center px-8 py-4 bg-gold text-neutral-900 rounded-xl font-bold text-lg hover:bg-gold-light transition-colors"> ', " </a> </div> ", ' <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <h2 class="text-2xl font-semibold text-gold mb-4">\u041E \u0441\u0434\u0435\u043B\u043A\u0435 ', '</h2> <p class="text-neutral-300">\n\u0414\u0430\u043D\u043D\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0430 \u043D\u0430 PokerDealsHub \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0438 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0438. \u041C\u044B \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C\n          \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u0438 \u0441\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u0439. \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C\n          \u0431\u043E\u043B\u044C\u0448\u0435 \u043E ', ', \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B <a href="/ru/guides/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">\u0413\u0430\u0439\u0434\u044B \u0438 \u043E\u0431\u0437\u043E\u0440\u044B</a>.\n</p> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), deal.name.ru, deal.logo === "pppoker" && "\u{1F0CF}", deal.logo === "ggpoker" && "\u{1F3B0}", deal.logo === "clubgg" && "\u{1F3B2}", deal.logo === "pokerok" && "\u2660\uFE0F", deal.logo === "xpoker" && "\u2666\uFE0F", deal.logo === "888poker" && "\u2663\uFE0F", deal.app, deal.union !== "N/A" && renderTemplate`<span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">👥</span> ${deal.union} </span>`, deal.geo, deal.format, deal.type, deal.rakeback, "\u2605".repeat(deal.ratings.mtt) + "\u2606".repeat(5 - deal.ratings.mtt), "\u2605".repeat(deal.ratings.plo) + "\u2606".repeat(5 - deal.ratings.plo), "\u2605".repeat(deal.ratings.nlh) + "\u2606".repeat(5 - deal.ratings.nlh), deal.description.ru, addAttribute(deal.link, "href"), t("deal.getButton"), similarDeals.length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-2xl font-bold text-neutral-100 mb-6">${t("deal.similarDeals")}</h2> <div class="flex flex-col gap-4"> ${similarDeals.map((similarDeal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": similarDeal })}`)} </div> </div>`, deal.name.ru, deal.app, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": deal.name[lang],
    "description": deal.description.ru,
    "url": `https://pokerdealshub.com/ru/deal/${deal.slug}/`,
    "category": deal.type,
    "brand": {
      "@type": "Brand",
      "name": deal.app
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://pokerdealshub.com/ru/deal/${deal.slug}/`,
      "seller": {
        "@type": "Organization",
        "name": deal.union !== "N/A" ? deal.union : deal.app
      }
    }
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deal/[slug].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deal/[slug].astro";
const $$url = "/ru/deal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
