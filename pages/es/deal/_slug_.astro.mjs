/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$BaseLayout } from '../../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BWepXAJe.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BL0bbISx.mjs';
import { d as deals } from '../../../chunks/deals_Bgjakpm4.mjs';
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
  const t = useTranslations("es");
  const breadcrumbs = [
    { name: t("bbreadcrumb.home"), url: `/${lang}/deals/` },
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: deal.name.es, url: `/es/deal/${deal.slug}/` }
  ];
  const similarDeals = deals.filter(
    (d) => d.slug !== deal.slug && (d.app === deal.app || d.geo === deal.geo)
  ).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": deal.name.es, "description": deal.description.es, "breadcrumbs": breadcrumbs, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12"> <div class="max-w-5xl mx-auto"> ', ' <div class="flex flex-wrap items-center gap-3 mb-6"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold"> ', " </h1> ", ' <span class="inline-flex items-center px-3 py-1 text-sm font-semibold bg-green-500/20 text-green-400 rounded border border-green-500/30">\n\u2705 Verificado\n</span> </div> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8"> <div class="flex items-start gap-6 mb-6"> <div class="w-24 h-24 bg-neutral-800 rounded-lg flex items-center justify-center text-5xl border border-neutral-700 flex-shrink-0"> ', " ", " ", " ", " ", " ", ' </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-neutral-100 mb-3">Informaci\xF3n Principal</h2> <div class="flex flex-wrap gap-2"> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F4F1}</span> ', " </span> ", ' <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F30D}</span> ', ' </span> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u{1F3AF}</span> ', ' </span> <span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">\u2699\uFE0F</span> ', ' </span> <span class="inline-flex items-center px-4 py-2 text-base font-bold bg-gold/20 text-gold rounded-lg border border-gold/30"> <span class="mr-2">\u{1F4B0}</span> ', ' </span> </div> </div> </div> <div class="flex flex-wrap gap-6 items-center mb-4"> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">MTT</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">PLO</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">NLH</span> <span class="text-gold text-lg">', '</span> </div> </div> <div class="prose prose-invert max-w-none mb-8"> <p class="text-neutral-300 text-lg leading-relaxed"> ', ' </p> <p class="text-neutral-300 leading-relaxed">\nEsta oferta ofrece t\xE9rminos favorables para jugadores con un sistema de rakeback transparente y soporte confiable.\n            Hemos verificado minuciosamente los t\xE9rminos y podemos recomendar esta oferta para juego serio.\n</p> <p class="text-neutral-300 leading-relaxed">\nPara acceder a la oferta, cont\xE1ctenos usando el bot\xF3n a continuaci\xF3n. Nuestro equipo ayudar\xE1 con el registro y\n            responder\xE1 todas sus preguntas sobre las condiciones de juego.\n</p> </div> <a', ' target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto text-center px-8 py-4 bg-gold text-neutral-900 rounded-xl font-bold text-lg hover:bg-gold-light transition-colors"> ', " </a> </div> ", ' <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <h2 class="text-2xl font-semibold text-gold mb-4">Acerca de ', '</h2> <p class="text-neutral-300">\nEsta oferta est\xE1 listada en PokerDealsHub despu\xE9s de verificar t\xE9rminos y reputaci\xF3n. Actualizamos regularmente\n          informaci\xF3n sobre ofertas y monitoreamos la relevancia de los t\xE9rminos. Si tiene preguntas o desea aprender\n          m\xE1s sobre ', ', visite la secci\xF3n <a href="/es/guides/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">Gu\xEDas</a>.\n</p> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), deal.name.es, deal.featured && renderTemplate`<span class="inline-flex items-center px-3 py-1 text-sm font-semibold bg-red-500/20 text-red-400 rounded border border-red-500/30">
🔥 Oferta Top
</span>`, deal.logo === "pppoker" && "\u{1F0CF}", deal.logo === "ggpoker" && "\u{1F3B0}", deal.logo === "clubgg" && "\u{1F3B2}", deal.logo === "pokerok" && "\u2660\uFE0F", deal.logo === "xpoker" && "\u2666\uFE0F", deal.logo === "888poker" && "\u2663\uFE0F", deal.app, deal.union !== "N/A" && renderTemplate`<span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700"> <span class="mr-1">👥</span> ${deal.union} </span>`, deal.geo, deal.format, deal.type, deal.rakeback, "\u2605".repeat(deal.ratings.mtt) + "\u2606".repeat(5 - deal.ratings.mtt), "\u2605".repeat(deal.ratings.plo) + "\u2606".repeat(5 - deal.ratings.plo), "\u2605".repeat(deal.ratings.nlh) + "\u2606".repeat(5 - deal.ratings.nlh), deal.description.es, addAttribute(deal.link, "href"), t("deal.getButton"), similarDeals.length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-2xl font-bold text-neutral-100 mb-6">${t("deal.similarDeals")}</h2> <div class="flex flex-col gap-4"> ${similarDeals.map((similarDeal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": similarDeal })}`)} </div> </div>`, deal.name.es, deal.app, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": deal.name.es,
    "description": deal.description.es,
    "url": `https://pokerdealshub.com/es/deal/${deal.slug}/`,
    "category": deal.type,
    "brand": {
      "@type": "Brand",
      "name": deal.app
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://pokerdealshub.com/es/deal/${deal.slug}/`,
      "seller": {
        "@type": "Organization",
        "name": deal.union !== "N/A" ? deal.union : deal.app
      }
    }
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/[slug].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/[slug].astro";
const $$url = "/es/deal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
