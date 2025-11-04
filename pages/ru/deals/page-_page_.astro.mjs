/* empty css                                       */
import { c as createComponent, b as createAstro, f as renderHead, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$DealCard } from '../../../chunks/DealCard_BGq8N76Q.mjs';
import { d as deals } from '../../../chunks/deals_BGp0Bycs.mjs';
import { d as dealsConfig } from '../../../chunks/dealsConfig_6c2onEy-.mjs';
/* empty css                                             */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const perPage = dealsConfig.perPage;
  const totalPages = Math.ceil(deals.length / perPage);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    params: { page: String(i + 1) }
  }));
}
const $$Pagepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagepage;
  const { page } = Astro2.params;
  const currentPage = Number(page);
  const perPage = dealsConfig.perPage;
  const sorted = [...deals].sort(dealsConfig.sortDeals);
  const start = currentPage * perPage;
  const end = start + perPage;
  const slice = sorted.slice(start, end);
  return renderTemplate`<html lang="ru" data-astro-cid-grmt3ff6> <head><meta charset="UTF-8"><title>Сделки — страница ${currentPage + 1}</title><meta name="robots" content="noindex, follow"><link rel="stylesheet" href="/_astro/index.css"><!-- твой главный CSS -->${renderHead()}</head> <body data-astro-cid-grmt3ff6> ${slice.map((deal) => renderTemplate`${renderComponent($$result, "DealCard", $$DealCard, { "deal": deal, "data-astro-cid-grmt3ff6": true })}`)} </body></html>`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/page-[page].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/deals/page-[page].astro";
const $$url = "/ru/deals/page-[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagepage,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
