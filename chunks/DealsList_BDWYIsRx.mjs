import { c as createComponent, b as createAstro, m as maybeRenderHead, d as renderScript, r as renderComponent, a as renderTemplate, e as addAttribute } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { d as deals } from './deals_BGp0Bycs.mjs';
import { d as dealsConfig } from './dealsConfig_6c2onEy-.mjs';
import { $ as $$DealCard } from './DealCard_BGq8N76Q.mjs';

const $$Astro = createAstro();
const $$DealsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DealsList;
  const {
    currentPage = dealsConfig.defaultPage,
    perPage = dealsConfig.perPage,
    lang = "ru",
    dealsOverride
  } = Astro2.props;
  const sorted = dealsOverride ? dealsOverride : [...deals].sort(dealsConfig.sortDeals);
  const totalPages = Math.ceil(sorted.length / perPage);
  const start = currentPage * perPage;
  const end = start + perPage;
  const pageSlice = sorted.slice(start, end);
  return renderTemplate`${maybeRenderHead()}<div id="deals-section"> <div id="deals-list" class="flex flex-col gap-4"> ${pageSlice.map((deal) => renderTemplate`${renderComponent($$result, "DealCard", $$DealCard, { "deal": deal })}`)} </div> <div id="observer-trigger" class="h-6 w-full"></div> ${currentPage + 1 < totalPages && renderTemplate`<div class="mt-6 flex justify-center"> <button id="load-more" class="px-6 py-3 rounded-xl bg-gold text-neutral-900 font-bold hover:bg-gold-light transition"${addAttribute(currentPage, "data-current-page")}${addAttribute(totalPages, "data-total-pages")}${addAttribute(lang, "data-lang")}>
Показать ещё
</button> </div>`} <div id="deals-loader" class="flex justify-center py-4" style="display:none"> <span class="animate-pulse text-neutral-400">Загрузка...</span> </div> </div> ${renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/DealsList.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/DealsList.astro", void 0);

export { $$DealsList as $ };
