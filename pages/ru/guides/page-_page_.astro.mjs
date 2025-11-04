/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CivQTQwJ.mjs';
import { $ as $$GuidesList } from '../../../chunks/GuidesList_DCZ28t2U.mjs';
import { g as getLangFromUrl } from '../../../chunks/utils_CSZAe92J.mjs';
import { g as guides } from '../../../chunks/guides_CzeSEYyi.mjs';
import { d as dealsConfig } from '../../../chunks/dealsConfig_6c2onEy-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const totalPages = Math.ceil(guides.length / dealsConfig.perPage);
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: i.toString() },
    props: { page: i }
  }));
}
const $$Pagepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagepage;
  const lang = getLangFromUrl(Astro2.url) || "en";
  const { page } = Astro2.props;
  const currentPage = Number(page);
  const titleMap = {
    ru: `\u0413\u0430\u0439\u0434\u044B \u043E \u043F\u043E\u043A\u0435\u0440\u0435 \u2014 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${currentPage + 1} | PokerDealsHub`,
    en: `Poker Guides \u2014 Page ${currentPage + 1} | PokerDealsHub`,
    es: `Gu\xEDas de p\xF3ker \u2014 P\xE1gina ${currentPage + 1} | PokerDealsHub`
  };
  const descMap = {
    ru: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0433\u0430\u0439\u0434\u044B \u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u043F\u043E\u043A\u0435\u0440\u0435, \u0441\u043E\u044E\u0437\u0430\u0445, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F\u0445. \u041E\u0441\u043D\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432.",
    en: "Detailed poker guides and articles about unions, apps and strategies \u2014 based on real player experience.",
    es: "Gu\xEDas detalladas y art\xEDculos de p\xF3ker sobre uniones, aplicaciones y estrategias \u2014 basadas en experiencia real."
  };
  const title = titleMap[lang] || titleMap.en;
  const description = descMap[lang] || descMap.en;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "ogImage": "/hero_wide_screen_top.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 lg:pt-12 lg:pb-12"> <!-- Guides List --> ${renderComponent($$result2, "GuidesList", $$GuidesList, { "currentPage": currentPage, "perPage": dealsConfig.perPage, "lang": lang })} </div> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/guides/page-[page].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/guides/page-[page].astro";
const $$url = "/ru/guides/page-[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagepage,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
