/* empty css                                          */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$FilterSidebar } from '../../../../chunks/FilterSidebar_O-rM2N_3.mjs';
import { $ as $$DealsList } from '../../../../chunks/DealsList_BDWYIsRx.mjs';
import { f as filterContent } from '../../../../chunks/filterContent_DvO7mL5H.mjs';
import { d as dealsConfig } from '../../../../chunks/dealsConfig_6c2onEy-.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const totalPages = Math.ceil(dealsConfig.totalDeals / dealsConfig.perPage);
  return Array.from({ length: totalPages }).map((_, i) => ({
    params: { page: String(i + 1) },
    props: { currentPage: i + 1 }
  }));
}
const $$Pagepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagepage;
  const { currentPage = 1 } = Astro2.props;
  const lang = "en";
  const content = filterContent.en.all;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${content.title} \u2014 Page ${currentPage}`, "description": content.description, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-3 lg:pt-12 lg:pb-6"> <div class="flex flex-col lg:flex-row gap-6 lg:gap-8"> ${renderComponent($$result2, "FilterSidebar", $$FilterSidebar, {})} <div class="flex-1 min-w-0"> ${currentPage === 1 && renderTemplate`<div class="mb-6 lg:mb-8"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 lg:mb-4"> ${content.h1} </h1> ${content.intro && renderTemplate`<div class="text-neutral-300 text-base lg:text-lg leading-relaxed mt-4
                       [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                       [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                       [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                       [&_strong]:text-neutral-100">${unescapeHTML(content.intro)}</div>`} </div>`} ${renderComponent($$result2, "DealsList", $$DealsList, { "currentPage": currentPage - 1, "perPage": dealsConfig.perPage, "lang": lang })} ${currentPage === 1 && renderTemplate`<div class="bg-neutral-900 border border-neutral-800 rounded-xl px-6 pt-0 pb-6 lg:px-8 lg:pt-0 lg:pb-8 mt-8"> <div class="text-neutral-300 text-base leading-relaxed
                     [&_a]:text-gold [&_a]:underline [&_a:hover]:text-gold-light [&_a:hover]:underline-offset-2
                     [&_p]:mb-6 [&_ul]:mb-6 [&_li]:mb-2
                     [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-4
                     [&_strong]:text-neutral-100">${unescapeHTML(content.seoText)}</div> </div>`} </div> </div> </div> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/[filter]/page-[page].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/deals/[filter]/page-[page].astro";
const $$url = "/en/deals/[filter]/page-[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagepage,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
