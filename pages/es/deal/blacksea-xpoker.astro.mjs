/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as renderScript, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$BaseLayout } from '../../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BL0bbISx.mjs';
import { $ as $$RelatedDeals } from '../../../chunks/RelatedDeals_ATWgPAYb.mjs';
import { d as deals } from '../../../chunks/deals_Bgjakpm4.mjs';
import { l as labl, b as badgeLabels, t as tooltips } from '../../../chunks/dealHelpers_FzkXOya6.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BlackseaXpoker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlackseaXpoker;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const deal = deals.find((d) => d.slug === "blacksea-xpoker");
  if (!deal) {
    throw new Error("Deal not found: blacksea-xpoker");
  }
  const breadcrumbs = [
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: deal.name[lang], url: `/${lang}/deal/${deal.slug}/` }
  ];
  const introT = "Informaci\xF3n sobre la uni\xF3n Black Sea";
  const title = `Oferta de p\xF3ker en la uni\xF3n Black Sea en X-Poker \u2014 PokerDealsHub`;
  const description = `Oferta de PDH en la uni\xF3n Black Sea en X-Poker. Juego de alta calidad con excelentes condiciones para jugadores de la regi\xF3n CIS.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12"> <div class="max-w-5xl mx-auto"> ', ' <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6">\nOferta de rakeback en la uni\xF3n Black Sea en X-Poker\n</h1> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8"> <div class="flex gap-4 mb-6 lg:hidden"> <div class="flex-shrink-0"> <img', "", ' class="w-32 sm:w-40 h-auto object-contain rounded-xl"> </div> <div class="flex flex-col gap-2"> ', ' </div> </div> <div class="hidden lg:flex lg:flex-row lg:items-start gap-6 mb-6"> <div class="flex-shrink-0"> <img', "", ' class="w-48 h-auto object-contain rounded-xl"> </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-neutral-100 mb-4">', '</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm lg:text-base"> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="inline-block px-2 py-1 rounded-lg font-semibold text-green-300 border border-green-400/60 bg-green-950/40 shadow-[0_0_10px_rgba(0,255,0,0.15)]"> ', " ", ' </span> </div> </div> </div> </div> <h3 class="text-xl font-bold text-neutral-100 mb-3">Descripci\xF3n</h3> <p class="text-neutral-300 leading-relaxed">\nOferta de p\xF3ker en el club PDH BlackSea, que forma parte de la gran uni\xF3n CIS Black Sea en la plataforma X-Poker.\n          El club pertenece a PokerDealsHub, lo que garantiza su seguridad y un servicio al cliente de primer nivel las 24 horas, todos los d\xEDas.\n</p> <h3 class="text-xl font-bold text-neutral-100 mb-3 mt-6">Sobre la uni\xF3n</h3> <p class="text-neutral-300 leading-relaxed">\nBlack Sea es una uni\xF3n popular en la plataforma X-Poker, especializada en jugadores de la regi\xF3n CIS.\n          Ofrece una amplia variedad de mesas y formatos con un tr\xE1fico estable durante todo el d\xEDa.\n</p> <p class="text-neutral-300 leading-relaxed">\nDisciplinas disponibles: MTT, NLH, OFC, PLO4/5/6, Short Deck(6+), as\xED como variaciones Double Board y Bomb Pot.\n          En cualquier momento del d\xEDa puede encontrarse juego en todos los l\xEDmites. El pico de actividad es de 14:00 a 22:00 GMT+3.\n</p> <h3 class="text-xl font-bold text-neutral-100 mb-3 mt-6">Sobre la oferta</h3> <p class="text-neutral-300 leading-relaxed mb-2">Los jugadores pueden elegir entre:</p> <ul class="custom-bullets"> <li><strong class="text-gold">Rakeback din\xE1mico hasta ', '</strong> \u2014 el porcentaje depende del volumen semanal de rake.</li> <li><strong class="text-gold">Rakeback fijo ', '</strong> \u2014 comience a jugar con una ventaja inmediata. Posteriormente puede cambiar al modelo din\xE1mico.</li> </ul> <div class="mt-8"> <p class="text-neutral-300 leading-relaxed"> ', ' </p> </div> <div id="contactSection" class="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center mt-8"> <h3 class="text-2xl font-bold text-gold mb-3">', '</h3> <p class="text-neutral-300 mb-6">', " <br>", '</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://t.me/pokerdealshub" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0088cc] text-white rounded-xl font-bold text-lg hover:bg-[#006699] transition-colors">\nTelegram\n</a> <a href="https://wa.me/38267563945" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#1da851] transition-colors">\nWhatsApp\n</a> </div> </div> </div> </div> </div> <div class="container mx-auto px-4 py-6"> ', ' </div> <script type="application/ld+json">', "<\/script> ", " "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), addAttribute(deal.logoimage, "src"), addAttribute(deal.logoalt, "alt"), deal.badges?.map((badge) => {
    const badgeText = badgeLabels.es[badge] || badge;
    if (badge === "pdhClub") {
      return renderTemplate`<button type="button" data-badge-tooltip class="px-3 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 hover:bg-gold/20 transition-colors cursor-pointer relative group text-left w-fit"> ${badgeText} <span class="pdh-tooltip absolute top-full mt-2 w-72 p-4 bg-neutral-800 text-neutral-200 text-xs leading-relaxed rounded-lg border border-neutral-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-normal z-10"> ${tooltips[lang].featured} </span> </button>`;
    }
    return renderTemplate`<span class="px-3 py-1.5 text-xs font-medium bg-neutral-800/80 text-neutral-200 rounded-lg border border-neutral-700/50 w-fit"> ${badgeText} </span>`;
  }), addAttribute(deal.logoimage, "src"), addAttribute(deal.logoalt, "alt"), introT, labl[lang].club, deal.club, labl[lang].union, deal.union, labl[lang].geog, typeof deal.geo === "string" ? deal.geo : deal.geo[lang], labl[lang].platform, deal.app, labl[lang].upTo, deal.rakeback, deal.rakeback, deal.fixrb, labl[lang].verif, labl[lang].readyJoin, labl[lang].weAreHere, labl[lang].weAreHere2, renderComponent($$result2, "RelatedDeals", $$RelatedDeals, { "currentDealSlug": deal?.slug || "", "currentApp": deal?.app, "currentGeo": deal?.geo, "currentBadges": deal?.badges }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": title,
    "description": description,
    "url": `https://pokerdealshub.com/${lang}/deal/${deal.slug}`,
    "category": `${deal.type}`,
    "itemOffered": {
      "@type": "Service",
      "name": `${deal.app}`,
      "provider": {
        "@type": "Organization",
        "name": `${deal.union}`
      }
    }
  })), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/blacksea-xpoker.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/blacksea-xpoker.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/blacksea-xpoker.astro";
const $$url = "/es/deal/blacksea-xpoker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BlackseaXpoker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
