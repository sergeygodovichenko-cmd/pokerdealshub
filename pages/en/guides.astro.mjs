/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CivQTQwJ.mjs';
import { g as guides } from '../../chunks/guides_CzeSEYyi.mjs';
import { g as getLangFromUrl, u as useTranslations } from '../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  getLangFromUrl(Astro2.url);
  const t = useTranslations("en");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Poker Guides and Reviews \u2014 PokerDealsHub", "description": "Detailed guides and reviews on poker apps, unions, and rakeback deals" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container mx-auto px-4 py-12"> <div class="max-w-4xl mx-auto mb-12 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-gold mb-6"> ', ' </h1> <p class="text-neutral-300 text-lg"> ', ' </p> </div> <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 gap-6"> ', ' </div> <div class="mt-12 bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <h2 class="text-2xl font-semibold text-gold mb-4">Poker guides & articles</h2> <p class="text-neutral-400 mb-4">\nIn this section, we publish detailed guides and reviews of poker apps, unions, and deals. Our goal is to help you understand the playing conditions and choose the best offer.\n</p> <p class="text-neutral-400">\nAll guides are written based on real playing experience and verified information. If you have any questions or want to see a guide on a specific topic, <a href="/en/about/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">contact us</a>.\n</p> </div> </div> </div> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), t("guides.title"), t("guides.subtitle"), guides.map((guide) => renderTemplate`<article class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-gold transition-all group"> <div class="flex items-start justify-between mb-3"> <span${addAttribute(`text-xs px-3 py-1 rounded-full ${guide.category === "guide" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`, "class")}> ${guide.category === "guide" ? "Guide" : "Review"} </span> <time class="text-sm text-neutral-500"> ${new Date(guide.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h2 class="text-2xl font-semibold text-gold group-hover:text-gold-light transition-colors mb-3"> <a${addAttribute(`/en/guides/${guide.slug}/`, "href")}> ${guide.title.en} </a> </h2> <p class="text-neutral-400 mb-4"> ${guide.description.en} </p> <a${addAttribute(`/en/guides/${guide.slug}/`, "href")} class="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium">
Read more
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </article>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": guides.map((guide, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": guide.title.en,
        "description": guide.description.en,
        "datePublished": guide.date,
        "url": `https://pokerdealshub.com/en/guides/${guide.slug}/`
      }
    }))
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/guides/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/guides/index.astro";
const $$url = "/en/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
