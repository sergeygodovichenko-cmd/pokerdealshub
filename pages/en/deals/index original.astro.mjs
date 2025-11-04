/* empty css                                       */
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, d as renderScript, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BGq8N76Q.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../chunks/filterContent_DvO7mL5H.mjs';
/* empty css                                                */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$IndexOriginal = createComponent(($$result, $$props, $$slots) => {
  const content = filterContent.en.all;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "ogImage": "/hero_wide_screen_top.webp", "data-astro-cid-reni53to": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-3 lg:pt-12 lg:pb-6" data-astro-cid-reni53to> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8" data-astro-cid-reni53to> ', ' <div class="flex-1 min-w-0" data-astro-cid-reni53to> <div class="mb-6 lg:mb-8" data-astro-cid-reni53to> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4" data-astro-cid-reni53to> ', " </h1> ", ` </div> <div class="mb-0" data-astro-cid-reni53to> <button id="hero-banner" class="w-full cursor-pointer border-0 bg-transparent p-0 hover:opacity-90 transition-opacity" aria-label="Scroll to deals" data-astro-cid-reni53to> <div class="hero-banner-container" data-astro-cid-reni53to> <div class="hero-banner-top" data-astro-cid-reni53to> <picture data-astro-cid-reni53to> <source media="(max-width: 639px)" srcset="/new_hero_mobile_top.webp" width="993" height="417" data-astro-cid-reni53to> <source media="(min-width: 640px)" srcset="/hero_wide_screen_top.webp" width="1828" height="236" data-astro-cid-reni53to> <img src="/hero_wide_screen_top.webp" alt="Best poker deals" class="w-full h-auto rounded-t-xl" width="1828" height="236" loading="eager" onload="this.parentElement.parentElement.parentElement.style.setProperty('--shimmer-mask', 'url(' + this.currentSrc + ')');" data-astro-cid-reni53to> </picture> </div> <div class="hero-banner-arrows" data-astro-cid-reni53to> <div class="arrows-container" data-astro-cid-reni53to> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-left" width="32" height="32" data-astro-cid-reni53to> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-center" width="32" height="32" data-astro-cid-reni53to> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-right" width="32" height="32" data-astro-cid-reni53to> </div> </div> </div> </button> </div> <div class="mb-8 lg:mb-12" id="deals-section" data-astro-cid-reni53to> <div class="flex flex-col gap-4" data-astro-cid-reni53to> `, ' </div> </div> <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8" data-astro-cid-reni53to> <div class="text-neutral-300 text-base leading-relaxed\n            [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2\n            [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2\n            [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4\n            [&_strong]:text-neutral-100" data-astro-cid-reni53to>', "</div> </div> </div> </div> </div> ", '  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "data-astro-cid-reni53to": true }), content.h1, content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
       [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-gold-light [&_a:hover]:decoration-gold-light
       [&_p]:mb-6" data-astro-cid-reni53to>${unescapeHTML(content.intro)}</div>`, deals.sort((a, b) => {
    if (a.slug === "nuts-primetime-pppoker") return -1;
    if (b.slug === "nuts-primetime-pppoker") return 1;
    return 0;
  }).map((deal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal, "data-astro-cid-reni53to": true })}`), unescapeHTML(content.seoText), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/index original.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify({
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
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/index original.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/index original.astro";
const $$url = "/en/deals/index original";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexOriginal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
