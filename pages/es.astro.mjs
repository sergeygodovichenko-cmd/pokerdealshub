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
  filterContent.es.all;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PokerDealsHub \u2014 Mejores ofertas de p\xF3ker, clubes y rakeback", "description": "Encuentra clubes y uniones de p\xF3ker confiables en PPPoker, ClubGG y X-Poker. Disfruta de las mejores condiciones, rakeback alto y soporte 24/7.", "ogImage": "/hero_wide_screen_top.webp", "data-astro-cid-7pewbour": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  <script>\n    window.location.replace(window.location.pathname + 'deals/');\n  <\/script>  ", '<noscript> <meta http-equiv="refresh" content="0; url=deals/"> </noscript>    <div class="container mx-auto px-4 py-12" data-astro-cid-7pewbour> <div class="max-w-4xl mx-auto mb-12 text-center" data-astro-cid-7pewbour> <h1 class="text-4xl md:text-5xl font-bold text-gold mb-6" data-astro-cid-7pewbour>\nPokerDealsHub \u2014 las mejores ofertas y clubes de p\xF3ker en l\xEDnea\n</h1> <p data-astro-cid-7pewbour>\nPokerDealsHub es un directorio de clubes y uniones de p\xF3ker verificados\n        en aplicaciones populares como PPPoker, ClubGG y X-Poker.\n        Ofrecemos las mejores condiciones, un rakeback justo\n        y soporte diario para jugadores de todo el mundo.\n</p> <p data-astro-cid-7pewbour>\nEncuentra el lugar perfecto para jugar, compara ofertas\n        y elige un club con mesas suaves y pagos transparentes.\n        PokerDealsHub te ayuda a jugar de forma rentable y segura.\n</p> </div> </div> ', '  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/index.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": deals.map((deal, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": deal.name.es,
        "description": deal.description.es,
        "url": `https://pokerdealshub.com/es/deal/${deal.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
