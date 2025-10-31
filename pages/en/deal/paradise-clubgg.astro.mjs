/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as renderScript, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$BaseLayout } from '../../../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_BL0bbISx.mjs';
import { $ as $$RelatedDeals } from '../../../chunks/RelatedDeals_ATWgPAYb.mjs';
import { d as deals } from '../../../chunks/deals_Bgjakpm4.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ParadiseClubgg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ParadiseClubgg;
  const t = useTranslations("en");
  const lang = getLangFromUrl(Astro2.url);
  const deal = deals.find((d) => d.slug === "paradise-clubgg");
  const badgeLabels = {
    pdhClub: "\u{1F525} PDH club",
    soft: "\u{1F41F} Soft game",
    highRakeback: "\u{1F4B0} High Rakeback",
    verified: "\u2705 Verified",
    allLimits: "\u{1F4CA} All Limits",
    nonStop: "\u23F1 NonStop",
    international: "\u{1F30D} International"
  };
  const pdhTooltip = "Club managed by PokerDealsHub. This means you get top-quality customer service 24/7 and full guarantee of all your winnings.";
  const breadcrumbs = [
    // { name: t('breadcrumb.home'), url: `/${lang}/deals/` },
    { name: t("breadcrumb.deals"), url: `/${lang}/deals/` },
    { name: "Paradise Union Deal on ClubGG", url: "/en/deal/paradise-clubgg/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Paradise Union Poker Deal on ClubGG \u2014 PokerDealsHub", "description": "PDH deal in Paradise union on ClubGG. Soft games, high rakeback up to 55% and 24/7 action in all formats.", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-8 lg:py-12"> <div class="max-w-5xl mx-auto"> ', ' <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6">\nParadise Union Poker Deal on ClubGG\n</h1> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8 mb-8"> <div class="flex gap-4 mb-6 lg:hidden"> <div class="flex-shrink-0"> <img src="/clubGG_logo.webp" alt="ClubGG" class="w-32 sm:w-40 h-auto object-contain rounded-xl"> </div> <div class="flex flex-col gap-2"> ', ' </div> </div> <div class="hidden lg:flex lg:flex-row lg:items-start gap-6 mb-6"> <div class="flex-shrink-0"> <img src="/clubGG_logo.webp" alt="ClubGG" class="w-48 h-auto object-contain rounded-xl"> </div> <div class="flex-1"> <h2 class="text-2xl font-bold text-neutral-100 mb-4">Paradise Club Information on ClubGG</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm lg:text-base"> <div> <span class="text-neutral-400">Club:</span> <span class="text-neutral-100 ml-2 font-medium">Monkeys Paradise</span> </div> <div> <span class="text-neutral-400">Union:</span> <span class="text-neutral-100 ml-2 font-medium">Paradise</span> </div> <div> <span class="text-neutral-400">Geography:</span> <span class="text-neutral-100 ml-2 font-medium">USA</span> </div> <div> <span class="text-neutral-400">Platform:</span> <span class="text-neutral-100 ml-2 font-medium">ClubGG</span> </div> <div> <span class="text-neutral-400">Rakeback:</span> <span class="text-gold ml-2 font-bold">up to 55%</span> </div> <div> <span class="text-neutral-400">Bonus:</span> <span class="text-green-400 ml-2 font-medium">+100% first deposit</span> </div> </div> </div> </div> <div class="lg:hidden mb-6"> <h2 class="text-xl font-bold text-neutral-100 mb-3">Paradise Deal Terms on ClubGG</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"> <div> <span class="text-neutral-400">Club:</span> <span class="text-neutral-100 ml-2 font-medium">Monkeys Paradise</span> </div> <div> <span class="text-neutral-400">Union:</span> <span class="text-neutral-100 ml-2 font-medium">Paradise</span> </div> <div> <span class="text-neutral-400">Geography:</span> <span class="text-neutral-100 ml-2 font-medium">USA</span> </div> <div> <span class="text-neutral-400">Platform:</span> <span class="text-neutral-100 ml-2 font-medium">ClubGG</span> </div> <div> <span class="text-neutral-400">Rakeback:</span> <span class="text-gold ml-2 font-bold">up to 55%</span> </div> <div> <span class="text-neutral-400">Bonus:</span> <span class="text-green-400 ml-2 font-medium">+100% first deposit</span> </div> </div> </div> <div class="hidden lg:flex flex-wrap gap-2 mb-6 relative"> ', ' </div> <button id="ctaButton" class="w-full sm:w-auto px-8 py-4 bg-gold text-neutral-900 rounded-xl font-bold text-lg hover:bg-gold-light transition-all mb-6">\nGet This Deal\n</button> <h3 class="text-xl font-bold text-neutral-100 mb-3">Ratings by Format</h3> <div class="flex flex-wrap gap-6 items-center mb-4"> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">MTT</span> <span class="text-gold text-lg">\u2605\u2605\u2605\u2605\u2606</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">PLO</span> <span class="text-gold text-lg">\u2605\u2605\u2605\u2605\u2605</span> </div> <div class="flex items-center gap-2"> <span class="text-neutral-400 text-sm">NLH</span> <span class="text-gold text-lg">\u2605\u2605\u2605\u2605\u2605</span> </div> </div> <div class="prose prose-invert max-w-none mb-8 space-y-6"> <div> <h3 class="text-xl font-bold text-neutral-100 mb-3">Description</h3> <p class="text-neutral-300 leading-relaxed">\nPoker deal in Monkeys Paradise club, which is part of the prestigious Paradise union on ClubGG \u2014 the official app from GGPoker. In addition to a reliable platform, the club offers 24/7 traffic, high rakeback, and an excellent first deposit bonus.\n</p> </div> <div> <h3 class="text-xl font-bold text-neutral-100 mb-3">About the Union</h3> <p class="text-neutral-300 leading-relaxed mb-4">\nParadise is one of the leading unions on ClubGG and PokerBros platforms, specializing in the American market. The union was founded in 2020 and has established itself as a reliable partner for players of all levels.\n</p> <p class="text-neutral-300 leading-relaxed">\nAvailable disciplines: NLH, PLO4/5/6, MTT, as well as Bomb Pot modifier. Active play runs 24/7 at all limits with a large number of recreational players from the USA.\n</p> </div> <div> <h3 class="text-xl font-bold text-neutral-100 mb-3">About the Deal</h3> <p class="text-neutral-300 leading-relaxed mb-4">\nPlayers are offered a choice of:\n</p> <ul class="list-disc list-inside text-neutral-300 space-y-2 mb-4"> <li><strong class="text-green-400">+100% first deposit bonus</strong>, issued in several stages: 10% immediately, remaining 90% during play, $5 for every $10 of rake.</li> <li><strong class="text-gold">Dynamic rakeback up to 55%</strong>. Rakeback depends on weekly rake volume. Maximum RB is paid at $500+/week rake.</li> <li><strong class="text-gold">Fixed rakeback 30%</strong>. Get the opportunity to start playing with an advantage right after registration. You can switch to dynamic later.</li> </ul> </div> <div> <h3 class="text-xl font-bold text-neutral-100 mb-3">Deposits & Withdrawals</h3> <p class="text-neutral-300 leading-relaxed mb-3">\nDeposits and withdrawals available:\n</p> <ul class="list-disc list-inside text-neutral-300 space-y-2 mb-4"> <li>Cryptocurrency: USDT, USDC, BTC in any networks</li> <li>Fiat currencies: USD, EUR, RUB, UAH, KZT, UZS and others on request</li> </ul> <div class="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50"> <p class="text-neutral-300 space-y-1"> <span class="flex items-center gap-2"><img src="/1-04.webp" alt="Chip" class="w-[1.1em] h-[1.1em] inline-block"> Chip price = 0.85 USD</span> <span class="flex items-center gap-2"><img src="/1-02.webp" alt="Deposit" class="w-[1.1em] h-[1.1em] inline-block"> Minimum deposit $10</span> <span class="flex items-center gap-2"><img src="/1-03.webp" alt="Withdrawal" class="w-[1.1em] h-[1.1em] inline-block"> Minimum withdrawal with no fee $10</span> </p> </div> </div> <div id="contactSection" class="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center"> <h3 class="text-2xl font-bold text-gold mb-3">Have Questions? Ready to Join?</h3> <p class="text-neutral-300 mb-6">Contact PDH manager, we work 24/7</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://t.me/pokerdealshub" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0088cc] text-white rounded-xl font-bold text-lg hover:bg-[#006699] transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path> </svg>\nMessage on Telegram\n</a> <a href="https://wa.me/38267563945" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#1da851] transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg>\nMessage on WhatsApp\n</a> </div> </div> </div> </div> <div class="container mx-auto px-4 py-6"> ', ' </div> </div> </div> <script type="application/ld+json">', "<\/script> ", " "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), deal?.badges?.map((badge) => {
    const badgeText = badgeLabels[badge];
    if (badge === "pdhClub") {
      return renderTemplate`<button type="button" data-badge-tooltip class="px-3 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 hover:bg-gold/20 transition-colors cursor-pointer relative group text-left w-fit"> ${badgeText} <span class="absolute left-0 top-full mt-2 w-72 max-w-[calc(100vw-2rem)] p-4 bg-neutral-800 text-neutral-200 text-xs leading-relaxed rounded-lg border border-neutral-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-normal z-10"> ${pdhTooltip} </span> </button>`;
    }
    return renderTemplate`<span class="px-3 py-1.5 text-xs font-medium bg-neutral-800/80 text-neutral-200 rounded-lg border border-neutral-700/50 w-fit"> ${badgeText} </span>`;
  }), deal?.badges?.map((badge) => {
    const badgeText = badgeLabels[badge];
    if (badge === "pdhClub") {
      return renderTemplate`<button type="button" data-badge-tooltip class="px-3 py-1.5 text-xs font-medium bg-gold/10 text-gold rounded-lg border border-gold/30 hover:bg-gold/20 transition-colors cursor-pointer relative group"> ${badgeText} <span class="pdh-tooltip absolute top-full mt-2 w-72 p-4 bg-neutral-800 text-neutral-200 text-xs leading-relaxed rounded-lg border border-neutral-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-normal z-10"> ${pdhTooltip} </span> </button>`;
    }
    return renderTemplate`<span class="px-3 py-1.5 text-xs font-medium bg-neutral-800/80 text-neutral-200 rounded-lg border border-neutral-700/50"> ${badgeText} </span>`;
  }), renderComponent($$result2, "RelatedDeals", $$RelatedDeals, { "currentDealSlug": deal?.slug || "", "currentApp": deal?.app, "currentGeo": deal?.geo, "currentBadges": deal?.badges }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Paradise Union Poker Deal on ClubGG",
    "description": "PDH deal in Paradise union on ClubGG. Soft games, high rakeback up to 55% and 24/7 action in all formats.",
    "url": "https://pokerdealshub.com/en/deal/paradise-clubgg/",
    "category": "Decentralized",
    "itemOffered": {
      "@type": "Service",
      "name": "ClubGG",
      "provider": {
        "@type": "Organization",
        "name": "Paradise"
      }
    }
  })), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/paradise-clubgg.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/paradise-clubgg.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deal/paradise-clubgg.astro";
const $$url = "/en/deal/paradise-clubgg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ParadiseClubgg,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
