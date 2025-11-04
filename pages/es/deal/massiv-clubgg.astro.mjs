/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as renderScript, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { $ as $$RelatedDeals } from '../../../chunks/RelatedDeals_txwI24Au.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/utils_CSZAe92J.mjs';
import { l as labl, b as badgeLabels, t as tooltips } from '../../../chunks/dealHelpers_GXhjt0HW.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MassivClubgg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MassivClubgg;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const deal = deals.find((d) => d.slug === "massiv-clubgg");
  if (!deal) {
    throw new Error("Deal not found: massiv-clubgg");
  }
  const breadcrumbs = [
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: deal.name[lang], url: `/${lang}/deal/${deal.slug}/` }
  ];
  const introT = "Informaci\xF3n sobre la uni\xF3n Massiv Union";
  const title = `Oferta de p\xF3ker en la uni\xF3n Massiv Union en ClubGG \u2014 PokerDealsHub`;
  const description = `Oferta en la legendaria uni\xF3n Massiv Union en ClubGG. Probablemente uno de los mejores campos de p\xF3ker para cualquier disciplina y l\xEDmite. Gran tr\xE1fico, condiciones estables y seguridad total.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12"> <div class="max-w-5xl mx-auto"> ', ' <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6">\nOferta de rakeback en la uni\xF3n Massiv Union en ClubGG\n</h1> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8"> <div class="flex gap-4 mb-6 lg:hidden"> <div class="flex-shrink-0"> <img', "", ' class="w-32 sm:w-40 h-auto object-contain rounded-xl"> </div> <div class="flex flex-col gap-2"> ', ' </div> </div> <div class="hidden lg:flex lg:flex-row lg:items-start gap-6 mb-6"> <div class="flex-shrink-0"> <img', "", ' class="w-48 h-auto object-contain rounded-xl"> </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-neutral-100 mb-4">', '</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm lg:text-base"> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="inline-block px-2 py-1 rounded-lg font-semibold text-green-300 border border-green-400/60 bg-green-950/40 shadow-[0_0_10px_rgba(0,255,0,0.15)]"> ', " ", ' </span> </div> </div> </div> </div> <h3 class="text-xl font-bold text-neutral-100 mb-3">Descripci\xF3n</h3> <p class="text-neutral-300 leading-relaxed">\nMassiv Union es una de las uniones m\xE1s grandes y activas del ecosistema ClubGG,\n          que re\xFAne a jugadores de todo el mundo, incluidos EE. UU., Canad\xE1, Australia y pa\xEDses de la CEI.\n          La uni\xF3n es conocida por su estabilidad, excelente tr\xE1fico y una gran variedad de juegos,\n          desde micro hasta high stakes, disponibles las 24 horas del d\xEDa.\n</p> <h3 class="text-xl font-bold text-neutral-100 mb-3 mt-6">Sobre la uni\xF3n</h3> <p class="text-neutral-300 leading-relaxed">\nMassiv Union ofrece un entorno de juego c\xF3modo tanto para grinders experimentados como para jugadores recreativos.\n          Gracias a su tama\xF1o y reputaci\xF3n, aqu\xED siempre encontrar\xE1s acci\xF3n activa en cualquier disciplina.\n          Las mesas est\xE1n disponibles para MTT, Cash Games, PLO4/5/6, Double Board, Bomb Pot, Pot or Fold y Short Deck (6+).\n</p> <h3 class="text-xl font-bold text-neutral-100 mb-3 mt-6">Condiciones de la oferta</h3> <p class="text-neutral-300 leading-relaxed mb-2">Los jugadores pueden elegir entre:</p> <ul class="custom-bullets"> <li><strong class="text-gold">Rakeback din\xE1mico hasta ', '</strong> \u2014 el porcentaje depende del volumen semanal de rake.</li> <li><strong class="text-gold">Rakeback fijo ', '</strong> \u2014 permite empezar con una ventaja inmediata. M\xE1s adelante se puede pasar al modelo din\xE1mico.</li> </ul> <p class="text-neutral-300 leading-relaxed mt-6">\nMassiv Union es la elecci\xF3n ideal para quienes buscan un entorno seguro, transparente y rentable.\n          Los pagos se realizan de manera estable y el soporte de PDH est\xE1 disponible 24/7.\n</p> <div class="mt-8"> <p class="text-neutral-300 leading-relaxed"> ', ' </p> </div> <div id="contactSection" class="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center mt-8"> <h3 class="text-2xl font-bold text-gold mb-3">', '</h3> <p class="text-neutral-300 mb-6">', " <br>", '</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://t.me/pokerdealshub" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0088cc] text-white rounded-xl font-bold text-lg hover:bg-[#006699] transition-colors">\nTelegram\n</a> <a href="https://wa.me/38267563945" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#1da851] transition-colors">\nWhatsApp\n</a> </div> </div> </div> <div class="container mx-auto px-4 py-6"> ', ' </div> <script type="application/ld+json">', "<\/script> ", " </div> </div> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), addAttribute(deal.logoimage, "src"), addAttribute(deal.logoalt, "alt"), deal.badges?.map((badge) => {
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
  })), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/massiv-clubgg.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/massiv-clubgg.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/deal/massiv-clubgg.astro";
const $$url = "/es/deal/massiv-clubgg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MassivClubgg,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
