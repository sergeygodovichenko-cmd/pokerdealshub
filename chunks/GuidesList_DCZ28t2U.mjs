import { c as createComponent, b as createAstro, m as maybeRenderHead, d as renderScript, e as addAttribute, a as renderTemplate } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import 'clsx';
import { g as guides } from './guides_CzeSEYyi.mjs';
import { d as dealsConfig } from './dealsConfig_6c2onEy-.mjs';

const $$Astro = createAstro();
const $$GuidesList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuidesList;
  const {
    currentPage = 0,
    perPage = dealsConfig.perPage,
    lang = "ru",
    guidesOverride
  } = Astro2.props;
  const sorted = guidesOverride ? guidesOverride : [...guides];
  const totalPages = Math.ceil(sorted.length / perPage);
  const start = currentPage * perPage;
  const end = start + perPage;
  const pageSlice = sorted.slice(start, end);
  return renderTemplate`${maybeRenderHead()}<div id="guides-section"> <div id="guides-list" class="flex flex-col gap-6"> ${pageSlice.map((guide) => renderTemplate`<article class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-gold transition-all group"> <div class="flex items-start justify-between mb-3"> <span${addAttribute(`text-xs px-3 py-1 rounded-full ${guide.category === "guide" ? "bg-blue-500/20 text-blue-400" : "bg-green-500/20 text-green-400"}`, "class")}> ${guide.category === "guide" ? lang === "ru" ? "\u0413\u0430\u0439\u0434" : "Guide" : lang === "ru" ? "\u041E\u0431\u0437\u043E\u0440" : "Review"} </span> <time class="text-sm text-neutral-500"> ${new Date(guide.date).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> <h2 class="text-2xl font-semibold text-gold group-hover:text-gold-light transition-colors mb-3"> <a${addAttribute(`/${lang}/guides/${guide.slug}/`, "href")}> ${guide.title[lang]} </a> </h2> <p class="text-neutral-400 mb-4">${guide.description[lang]}</p> <a${addAttribute(`/${lang}/guides/${guide.slug}/`, "href")} class="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium"> ${lang === "ru" ? "\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435" : "Read more"} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </article>`)} </div> <div id="observer-trigger" class="h-6 w-full"></div> ${currentPage + 1 < totalPages && renderTemplate`<div class="mt-6 flex justify-center"> <button id="load-more" class="px-6 py-3 rounded-xl bg-gold text-neutral-900 font-bold hover:bg-gold-light transition"${addAttribute(currentPage, "data-current-page")}${addAttribute(totalPages, "data-total-pages")}${addAttribute(lang, "data-lang")}> ${lang === "ru" ? "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451" : "Show more"} </button> </div>`} <div id="guides-loader" class="flex justify-center py-4" style="display:none"> <span class="animate-pulse text-neutral-400"> ${lang === "ru" ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "Loading..."} </span> </div> </div> ${renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/GuidesList.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/GuidesList.astro", void 0);

export { $$GuidesList as $ };
