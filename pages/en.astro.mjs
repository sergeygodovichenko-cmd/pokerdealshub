/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, d as renderScript, m as maybeRenderHead } from '../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DPLZ1pbk.mjs';
import { d as deals } from '../chunks/deals_Bgjakpm4.mjs';
import { f as filterContent } from '../chunks/filterContent_Ci2yplcA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  filterContent.en.all;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PokerDealsHub \u2014 Best Poker Deals, Clubs & Rakeback Offers", "description": "Discover trusted poker unions and clubs on PPPoker, ClubGG, and X-Poker. Get the best rakeback, soft fields, and 24/7 player support.", "ogImage": "/hero_wide_screen_top.webp", "data-astro-cid-dhfotatx": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([` <meta name="robots" content="noindex,follow">  <script>
    window.location.replace(window.location.pathname + 'deals/');
  <\/script>  `, '<noscript> <meta http-equiv="refresh" content="0; url=deals/"> </noscript>    <div class="container mx-auto px-4 py-12" data-astro-cid-dhfotatx> <div class="max-w-4xl mx-auto mb-12 text-center" data-astro-cid-dhfotatx> <h1 class="text-4xl md:text-5xl font-bold text-gold mb-6" data-astro-cid-dhfotatx>\nPokerDealsHub \u2014 the best poker deals and clubs online\n</h1> <p data-astro-cid-dhfotatx>\nPokerDealsHub is a directory of verified poker clubs and unions on popular apps\n        such as PPPoker, ClubGG, and X-Poker. We offer the best conditions, fair rakeback,\n        and daily player support worldwide.\n</p> <p data-astro-cid-dhfotatx>\nFind the perfect place to play, compare offers, and choose a club with soft fields\n        and transparent payouts. PokerDealsHub helps you play profitably and safely.\n</p> </div> </div> ', '  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/index.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": deals.map((deal, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": deal.name.en,
        "description": deal.description.en,
        "url": `https://pokerdealshub.com/en/deal/${deal.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
