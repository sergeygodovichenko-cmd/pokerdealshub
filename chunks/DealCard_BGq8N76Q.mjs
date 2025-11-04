import { c as createComponent, b as createAstro, a as renderTemplate, d as renderScript, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './utils_CSZAe92J.mjs';
import { a as logoMap, r as renderStars, l as labl, b as badgeLabels, t as tooltips } from './dealHelpers_GXhjt0HW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$DealCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DealCard;
  const { deal } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url) || "en";
  const t = useTranslations(lang);
  logoMap[deal.logo] || "/image.webp";
  `badge-${deal.slug}-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", '<article class="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-visible hover:border-gold/50 transition-all relative"> <div class="flex flex-col lg:flex-row gap-6 p-6"> <!-- Left column --> <div class="flex-shrink-0 flex flex-row lg:flex-col gap-3"> <div class="flex-shrink-0"> <img', "", ' class="w-32 sm:w-40 lg:w-48 h-auto object-contain rounded-xl"> </div> <div class="flex flex-col gap-2"> ', ' </div> </div> <!-- Right column --> <div class="flex-1 min-w-0 flex flex-col"> <a', '> <h2 class="text-2xl lg:text-3xl font-bold text-gold mb-4 hover:text-gold-light transition-colors cursor-pointer"> ', ' </h2> </a> <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4 text-sm lg:text-base"> ', " ", ' <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium"> ', ' </span> </div> <div> <span class="text-neutral-400">', '</span> <span class="text-neutral-100 ml-2 font-medium">', '</span> </div> <div> <span class="inline-block px-2 py-1 rounded-lg font-semibold text-green-300 border border-green-400/60 bg-green-950/40 shadow-[0_0_10px_rgba(0,255,0,0.15)]"> ', " ", " </span> </div> ", ' </div> <p class="text-neutral-300 text-sm lg:text-base mb-4 flex-1"> ', ' </p> <div class="flex flex-wrap gap-6 items-center mb-4"> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">MTT</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">PLO</span> <span class="text-gold text-lg">', '</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">NLH</span> <span class="text-gold text-lg">', "</span> </div> </div> <a", ' class="w-full sm:w-auto sm:max-w-xs px-8 py-3 bg-gold text-neutral-900 rounded-xl font-bold text-center hover:bg-gold-light transition-all text-lg"> ', ' </a> </div> </div> <!-- Schema.org --> <script type="application/ld+json">', "<\/script> </article> <!-- Tooltip positioning --> ", ""])), maybeRenderHead(), addAttribute(deal.logoimage, "src"), addAttribute(deal.name[lang], "alt"), deal.badges?.map((badge) => {
    const badgeText = badgeLabels[lang][badge];
    if (badge === "pdhClub") {
      return renderTemplate`<button type="button" data-badge-tooltip class="pdh-badge px-2 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 flex items-center gap-1.5 whitespace-nowrap hover:bg-gold/20 transition-colors cursor-pointer relative group w-full sm:w-auto"> ${badgeText} <span class="pdh-tooltip absolute top-full mt-2 w-56 max-w-[calc(100vw-2rem)] p-4 bg-neutral-800 text-neutral-200 text-xs leading-relaxed rounded-lg border border-neutral-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 pointer-events-none whitespace-normal"> ${tooltips[lang].featured} </span> </button>`;
    }
    if (badge === "pdhPartner" || badge === "topDeal") {
      return renderTemplate`<span class="px-2 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 flex items-center gap-1.5 whitespace-nowrap"> ${badgeText} </span>`;
    }
    return renderTemplate`<span class="px-2 py-1.5 text-xs font-medium bg-neutral-800/80 text-neutral-200 rounded-lg border border-neutral-700/50 flex items-center gap-1.5 whitespace-nowrap"> ${badgeText} </span>`;
  }), addAttribute(`/${lang}/deal/${deal.slug}/`, "href"), deal.name[lang], deal.club && renderTemplate`<div> <span class="text-neutral-400">${labl[lang].club}</span> <span class="text-neutral-100 ml-2 font-medium">${deal.club}</span> </div>`, deal.union !== "N/A" && renderTemplate`<div> <span class="text-neutral-400">${labl[lang].union}</span> <span class="text-neutral-100 ml-2 font-medium">${deal.union}</span> </div>`, labl[lang].geog, typeof deal.geo === "string" ? deal.geo : deal.geo[lang], labl[lang].platform, deal.app, labl[lang].upTo, deal.rakeback, deal.bonus && deal.bonus[lang] && renderTemplate`<div> <span class="text-neutral-400">${labl[lang].bonusL}</span> <span class="text-gold ml-2 font-medium">${deal.bonus[lang]}</span> </div>`, deal.description[lang], renderStars(deal.ratings.mtt), renderStars(deal.ratings.plo), renderStars(deal.ratings.nlh), addAttribute(`/${lang}/deal/${deal.slug}/`, "href"), t("deal.getButton"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": deal.name[lang],
    "description": deal.description[lang],
    "url": `https://pokerdealshub.com/${lang}/deal/${deal.slug}/`,
    "category": deal.type,
    "brand": {
      "@type": "Brand",
      "name": deal.app
    },
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "publisher": {
      "@type": "Organization",
      "name": "PokerDealsHub",
      "url": "https://pokerdealshub.com/"
    }
  })), renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/DealCard.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/DealCard.astro", void 0);

export { $$DealCard as $ };
