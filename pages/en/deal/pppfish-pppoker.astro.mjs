/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as renderScript, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$BaseLayout } from '../../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BL0bbISx.mjs';
import { $ as $$RelatedDeals } from '../../../chunks/RelatedDeals_ATWgPAYb.mjs';
import { d as deals } from '../../../chunks/deals_Bgjakpm4.mjs';
import { l as labl, b as badgeLabels, t as tooltips } from '../../../chunks/dealHelpers_FzkXOya6.mjs';
/* empty css                                                 */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$PppfishPppoker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PppfishPppoker;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const deal = deals.find((d) => d.slug === "pppfish-pppoker");
  if (!deal) {
    throw new Error("Deal not found: pppfish-pppoker");
  }
  const breadcrumbs = [
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: deal.name[lang], url: `/${lang}/deal/${deal.slug}/` }
  ];
  const introT = "Information about the PPPFish union";
  const title = `Poker deal in the PPPFish union on PPPoker \u2014 PokerDealsHub`;
  const description = `PDH deal in the PPPFish union on PPPoker. One of the softest fields on the platform and excellent rakeback conditions.`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "breadcrumbs": breadcrumbs, "data-astro-cid-rjeionwp": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12" data-astro-cid-rjeionwp> <div class="max-w-5xl mx-auto" data-astro-cid-rjeionwp> ', ' <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6" data-astro-cid-rjeionwp>\nRakeback offer in the PPPFish union on PPPoker\n</h1> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8" data-astro-cid-rjeionwp> <div class="flex gap-4 mb-6 lg:hidden" data-astro-cid-rjeionwp> <div class="flex-shrink-0" data-astro-cid-rjeionwp> <img', "", ' class="w-32 sm:w-40 h-auto object-contain rounded-xl" data-astro-cid-rjeionwp> </div> <div class="flex flex-col gap-2" data-astro-cid-rjeionwp> ', ' </div> </div> <div class="hidden lg:flex lg:flex-row lg:items-start gap-6 mb-6" data-astro-cid-rjeionwp> <div class="flex-shrink-0" data-astro-cid-rjeionwp> <img', "", ' class="w-48 h-auto object-contain rounded-xl" data-astro-cid-rjeionwp> </div> <div class="flex-1" data-astro-cid-rjeionwp> <h2 class="text-2xl font-bold text-neutral-100 mb-4" data-astro-cid-rjeionwp>', '</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm lg:text-base" data-astro-cid-rjeionwp> <div data-astro-cid-rjeionwp> <span class="text-neutral-400" data-astro-cid-rjeionwp>', '</span> <span class="text-neutral-100 ml-2 font-medium" data-astro-cid-rjeionwp>', '</span> </div> <div data-astro-cid-rjeionwp> <span class="text-neutral-400" data-astro-cid-rjeionwp>', '</span> <span class="text-neutral-100 ml-2 font-medium" data-astro-cid-rjeionwp>', '</span> </div> <div data-astro-cid-rjeionwp> <span class="text-neutral-400" data-astro-cid-rjeionwp>', '</span> <span class="text-neutral-100 ml-2 font-medium" data-astro-cid-rjeionwp>', '</span> </div> <div data-astro-cid-rjeionwp> <span class="text-neutral-400" data-astro-cid-rjeionwp>', '</span> <span class="text-neutral-100 ml-2 font-medium" data-astro-cid-rjeionwp>', '</span> </div> <div data-astro-cid-rjeionwp> <span class="inline-block px-2 py-1 rounded-lg font-semibold text-green-300 border border-green-400/60 bg-green-950/40 shadow-[0_0_10px_rgba(0,255,0,0.15)]" data-astro-cid-rjeionwp> ', " ", ' </span> </div> </div> </div> </div> <h3 class="text-xl font-bold text-neutral-100 mb-3" data-astro-cid-rjeionwp>Description</h3> <p class="text-neutral-300 leading-relaxed" data-astro-cid-rjeionwp>\nPPPFish is one of the most popular and stable poker unions on PPPoker.  \n          It combines a large number of international clubs, offering constant action, a variety of disciplines,  \n          and one of the softest player pools in the ecosystem.  \n          The management ensures reliability, fast payments, and fairness.\n</p> <h3 class="text-xl font-bold text-neutral-100 mb-3 mt-6" data-astro-cid-rjeionwp>About the union</h3> <p class="text-neutral-300 leading-relaxed" data-astro-cid-rjeionwp>\nThe PPPFish union provides 24/7 games at all limits.  \n          Players can find action in MTT, NLH, PLO4/5/6, OFC, and Short Deck (6+).  \n          In addition, special formats such as Double Board and Bomb Pot are also available.  \n          The peak activity time is between 13:00 and 22:00 GMT+3.\n</p> <p class="text-neutral-300 leading-relaxed mt-6" data-astro-cid-rjeionwp>\nThe PPPFish union is suitable for both regular grinders and recreational players.  \n          Thanks to its stable traffic, it provides excellent opportunities for consistent play  \n          and rakeback accumulation.\n</p> <div data-astro-cid-rjeionwp> <h3 class="text-xl font-bold text-neutral-100 mb-3" data-astro-cid-rjeionwp>About the Deal</h3> <p class="text-neutral-300 leading-relaxed mb-2" data-astro-cid-rjeionwp>\nPlayers can choose:\n</p> <ul class="custom-bullets" data-astro-cid-rjeionwp> <li data-astro-cid-rjeionwp><strong class="text-gold" data-astro-cid-rjeionwp>Dynamic rakeback up to ', '</strong> Rakeback depends on the weekly rake volume.</li> <li data-astro-cid-rjeionwp><strong class="text-gold" data-astro-cid-rjeionwp>Fixed rakeback ', '</strong> Start playing with an advantage immediately after registration. Later, you can switch to a dynamic system.</li> </ul> </div>  <div class="flex items-start gap-3 mb-4 text-neutral-300 leading-relaxed" data-astro-cid-rjeionwp> <div class="flex items-center gap-3 mb-4 text-neutral-300 leading-relaxed" data-astro-cid-rjeionwp> <img src="/pdh_verif.webp" alt="PDH Verified" class="w-[68px] h-[68px] flex-shrink-0 select-none translate-y-[2px]" loading="lazy" data-astro-cid-rjeionwp> <p data-astro-cid-rjeionwp> ', ' </p> </div> </div> <div id="contactSection" class="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center mt-8" data-astro-cid-rjeionwp> <h3 class="text-2xl font-bold text-gold mb-3" data-astro-cid-rjeionwp>', '</h3> <p class="text-neutral-300 mb-6" data-astro-cid-rjeionwp>', " <br data-astro-cid-rjeionwp>", '</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-rjeionwp> <a href="https://t.me/pokerdealshub" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0088cc] text-white rounded-xl font-bold text-lg hover:bg-[#006699] transition-colors" data-astro-cid-rjeionwp>\nTelegram\n</a> <a href="https://wa.me/38267563945" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#1da851] transition-colors" data-astro-cid-rjeionwp>\nWhatsApp\n</a> </div> </div> </div> <div class="container mx-auto px-4 py-6" data-astro-cid-rjeionwp> ', ' </div> <script type="application/ld+json">', "<\/script> ", " </div> </div> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs, "data-astro-cid-rjeionwp": true }), addAttribute(deal.logoimage, "src"), addAttribute(deal.logoalt, "alt"), deal.badges?.map((badge) => {
    const badgeText = badgeLabels.en[badge] || badge;
    if (badge === "pdhClub") {
      return renderTemplate`<button type="button" data-badge-tooltip class="px-3 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 hover:bg-gold/20 transition-colors cursor-pointer relative group text-left w-fit" data-astro-cid-rjeionwp> ${badgeText} <span class="pdh-tooltip absolute top-full mt-2 w-72 p-4 bg-neutral-800 text-neutral-200 text-xs leading-relaxed rounded-lg border border-neutral-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-normal z-10" data-astro-cid-rjeionwp> ${tooltips[lang].featured} </span> </button>`;
    }
    return renderTemplate`<span class="px-3 py-1.5 text-xs font-medium bg-neutral-800/80 text-neutral-200 rounded-lg border border-neutral-700/50 w-fit" data-astro-cid-rjeionwp> ${badgeText} </span>`;
  }), addAttribute(deal.logoimage, "src"), addAttribute(deal.logoalt, "alt"), introT, labl[lang].club, deal.club, labl[lang].union, deal.union, labl[lang].geog, typeof deal.geo === "string" ? deal.geo : deal.geo[lang], labl[lang].platform, deal.app, labl[lang].upTo, deal.rakeback, deal.rakeback, deal.fixrb, labl[lang].verif, labl[lang].readyJoin, labl[lang].weAreHere, labl[lang].weAreHere2, renderComponent($$result2, "RelatedDeals", $$RelatedDeals, { "currentDealSlug": deal?.slug || "", "currentApp": deal?.app, "currentGeo": deal?.geo, "currentBadges": deal?.badges, "data-astro-cid-rjeionwp": true }), unescapeHTML(JSON.stringify({
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
  })), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/pppfish-pppoker.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/pppfish-pppoker.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/pppfish-pppoker.astro";
const $$url = "/en/deal/pppfish-pppoker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PppfishPppoker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
