/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, d as renderScript, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$DealCard } from '../../../chunks/DealCard_BGq8N76Q.mjs';
import { $ as $$FilterSidebar } from '../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { f as filterContent } from '../../../chunks/filterContent_DvO7mL5H.mjs';
import { g as getLangFromUrl } from '../../../chunks/utils_CSZAe92J.mjs';
/* empty css                                         */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index2;
  const content = filterContent.ru.all;
  const lang = getLangFromUrl(Astro2.url) || "en";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "ogImage": "/hero_wide_screen_top.webp", "data-astro-cid-aauyf3mz": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-3 lg:pt-12 lg:pb-6" data-astro-cid-aauyf3mz> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8" data-astro-cid-aauyf3mz> ', ' <div class="flex-1 min-w-0" data-astro-cid-aauyf3mz> <div class="mb-6 lg:mb-8" data-astro-cid-aauyf3mz> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4" data-astro-cid-aauyf3mz> ', " </h1> ", ` </div> <div class="mb-0" data-astro-cid-aauyf3mz> <button id="hero-banner" class="w-full cursor-pointer border-0 bg-transparent p-0 hover:opacity-90 transition-opacity" aria-label="Scroll to deals" data-astro-cid-aauyf3mz> <div class="hero-banner-container" data-astro-cid-aauyf3mz> <div class="hero-banner-top" data-astro-cid-aauyf3mz> <picture data-astro-cid-aauyf3mz> <source media="(max-width: 639px)" srcset="/new_hero_mobile_top.webp" width="993" height="417" data-astro-cid-aauyf3mz> <source media="(min-width: 640px)" srcset="/hero_wide_screen_top.webp" width="1828" height="236" data-astro-cid-aauyf3mz> <img src="/hero_wide_screen_top.webp" alt="Best poker deals" class="w-full h-auto rounded-t-xl" width="1828" height="236" loading="eager" onload="this.parentElement.parentElement.parentElement.style.setProperty('--shimmer-mask', 'url(' + this.currentSrc + ')');" data-astro-cid-aauyf3mz> </picture> </div> <div class="hero-banner-arrows" data-astro-cid-aauyf3mz> <div class="arrows-container" data-astro-cid-aauyf3mz> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-left" width="32" height="32" data-astro-cid-aauyf3mz> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-center" width="32" height="32" data-astro-cid-aauyf3mz> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-right" width="32" height="32" data-astro-cid-aauyf3mz> </div> </div> </div> </button> </div> <div class="mb-8 lg:mb-12" id="deals-section" data-astro-cid-aauyf3mz> <div class="flex flex-col gap-4" data-astro-cid-aauyf3mz> `, ' </div> </div> <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8" data-astro-cid-aauyf3mz> <div class="text-neutral-300 text-base leading-relaxed\n            [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2\n            [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2\n            [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4\n            [&_strong]:text-neutral-100" data-astro-cid-aauyf3mz>', "</div> </div> </div> </div> </div> ", '  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "data-astro-cid-aauyf3mz": true }), content.h1, content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
         [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
         [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
         [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
         [&_strong]:text-neutral-100" data-astro-cid-aauyf3mz>${unescapeHTML(content.intro)}</div>`, deals.sort((a, b) => {
    if (a.slug === "nuts-primetime-pppoker") return -1;
    if (b.slug === "nuts-primetime-pppoker") return 1;
    return 0;
  }).map((deal) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal, "data-astro-cid-aauyf3mz": true })}`), unescapeHTML(content.seoText), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index 2.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "\u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0441\u0434\u0435\u043B\u043A\u0438",
    "description": "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0440\u0435\u0439\u043A\u0431\u044D\u043A\u043E\u043C",
    "itemListElement": deals.map((deal, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": deal.name[lang],
        "description": deal.description[lang],
        "url": `https://pokerdealshub.com/${lang}/deal/${deal.slug}/`,
        "category": "\u041F\u043E\u043A\u0435\u0440\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
        "availability": "https://schema.org/InStock"
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index 2.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index 2.astro";
const $$url = "/ru/deals/index 2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
