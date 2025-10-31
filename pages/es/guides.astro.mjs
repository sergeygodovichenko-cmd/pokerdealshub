/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, u as useTranslations } from '../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { g as guides } from '../../chunks/guides_CzeSEYyi.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const t = useTranslations("es");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gu\xEDas y Rese\xF1as de P\xF3ker \u2014 PokerDealsHub", "description": "Gu\xEDas detalladas y rese\xF1as sobre aplicaciones de p\xF3ker, uniones y ofertas de rakeback" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-12"> <div class="max-w-4xl mx-auto mb-12 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-gold mb-6"> ', ' </h1> <p class="text-neutral-300 text-lg"> ', ' </p> </div> <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 gap-6"> ', ' </div> <div class="mt-12 bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <h2 class="text-2xl font-semibold text-gold mb-4">\u041E \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0433\u0430\u0439\u0434\u043E\u0432</h2> <p class="text-neutral-300 mb-4">\n\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043C\u044B \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u043E\u0431\u0437\u043E\u0440\u044B \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u0441\u043E\u044E\u0437\u043E\u0432 \u0438 \u0441\u0434\u0435\u043B\u043E\u043A. \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2014\n          \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0438\u0433\u0440\u044B \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435.\n</p> <p class="text-neutral-300">\n\u0412\u0441\u0435 \u0433\u0430\u0439\u0434\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430 \u0438\u0433\u0440\u044B \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u0432\u044B\n          \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0433\u0430\u0439\u0434 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u0443\u044E \u0442\u0435\u043C\u0443, <a href="/es/about/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">\u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438</a>.\n</p> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), t("guides.title"), t("guides.subtitle"), guides.map((guide) => renderTemplate`<article class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-gold transition-all group"> <div class="flex items-start justify-between mb-3"> <span${addAttribute(`text-xs px-3 py-1 rounded-full ${guide.category === "guide" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`, "class")}> ${guide.category === "guide" ? "Gu\xEDa" : "Rese\xF1a"} </span> <time class="text-sm text-neutral-500"> ${new Date(guide.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h2 class="text-2xl font-semibold text-gold group-hover:text-gold-light transition-colors mb-3"> <a${addAttribute(`/es/guides/${guide.slug}/`, "href")}> ${guide.title.es} </a> </h2> <p class="text-neutral-400 mb-4"> ${guide.description.es} </p> <a${addAttribute(`/es/guides/${guide.slug}/`, "href")} class="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium">
Leer más
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </article>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": guides.map((guide, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": guide.title.es,
        "description": guide.description.es,
        "datePublished": guide.date,
        "url": `https://pokerdealshub.com/es/guides/${guide.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/guides/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/guides/index.astro";
const $$url = "/es/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
