/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as renderScript } from '../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$FilterSidebar } from '../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$DealsList } from '../../chunks/DealsList_BDWYIsRx.mjs';
import { f as filterContent } from '../../chunks/filterContent_DvO7mL5H.mjs';
import { g as getLangFromUrl } from '../../chunks/utils_CSZAe92J.mjs';
import { d as dealsConfig } from '../../chunks/dealsConfig_6c2onEy-.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url) || "ru";
  const content = filterContent[lang].all;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": content.title, "description": content.description, "ogImage": "/hero_wide_screen_top.webp", "data-astro-cid-22vuxver": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-3 lg:pt-12 lg:pb-6" data-astro-cid-22vuxver> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8" data-astro-cid-22vuxver> ${renderComponent($$result2, "FilterSidebar", $$FilterSidebar, { "data-astro-cid-22vuxver": true })} <div class="flex-1 min-w-0" data-astro-cid-22vuxver> <!-- Заголовок --> <div class="mb-6 lg:mb-8" data-astro-cid-22vuxver> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4" data-astro-cid-22vuxver> ${content.h1} </h1> ${content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
                     [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                     [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                     [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                     [&_strong]:text-neutral-100" data-astro-cid-22vuxver>${unescapeHTML(content.intro)}</div>`} </div> <!-- Hero Banner --> ${Astro2.url.pathname.endsWith("/deals/") && renderTemplate`<div class="mb-0 lg:mb-0" data-astro-cid-22vuxver> <button id="hero-banner" class="w-full cursor-pointer border-0 bg-transparent p-0 hover:opacity-90 transition-opacity" aria-label="Scroll to deals" data-astro-cid-22vuxver> <div class="hero-banner-container" data-astro-cid-22vuxver> <div class="hero-banner-top" data-astro-cid-22vuxver> <picture data-astro-cid-22vuxver> <source media="(max-width: 639px)" srcset="/new_hero_mobile_top.webp" width="993" height="417" data-astro-cid-22vuxver> <source media="(min-width: 640px)" srcset="/hero_wide_screen_top.webp" width="1828" height="236" data-astro-cid-22vuxver> <img src="/hero_wide_screen_top.webp" alt="Best poker deals" class="w-full h-auto rounded-t-xl" width="1828" height="236" loading="eager" onload="this.parentElement.parentElement.parentElement.style.setProperty('--shimmer-mask', 'url(' + this.currentSrc + ')');" data-astro-cid-22vuxver> </picture> </div> <div class="hero-banner-arrows" data-astro-cid-22vuxver> <div class="arrows-container" data-astro-cid-22vuxver> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-left" width="32" height="32" data-astro-cid-22vuxver> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-center" width="32" height="32" data-astro-cid-22vuxver> <img src="/new_hero_wide_screen_arrows.webp" alt="Scroll down" class="arrow arrow-right" width="32" height="32" data-astro-cid-22vuxver> </div> </div> </div> </button> </div>`} <!-- Список сделок --> ${renderComponent($$result2, "DealsList", $$DealsList, { "currentPage": dealsConfig.defaultPage, "perPage": dealsConfig.perPage, "lang": lang, "data-astro-cid-22vuxver": true })} <!-- SEO-текст --> <div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8 mt-8" data-astro-cid-22vuxver> <div class="text-neutral-300 text-base leading-relaxed
                   [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                   [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                   [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                   [&_strong]:text-neutral-100" data-astro-cid-22vuxver>${unescapeHTML(content.seoText)}</div> </div> </div> </div> </div>  ${renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index.astro?astro&type=script&index=0&lang.ts")}   ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/index.astro";
const $$url = "/ru/deals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
