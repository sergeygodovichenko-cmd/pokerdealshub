/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$GuidesList } from '../../chunks/GuidesList_DCZ28t2U.mjs';
import { g as guides } from '../../chunks/guides_CzeSEYyi.mjs';
import { g as getLangFromUrl } from '../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$GuidesIndexBase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuidesIndexBase;
  const lang = getLangFromUrl(Astro2.url) || "ru";
  const meta = {
    en: {
      title: "Poker Guides & Reviews \u2014 Strategy, Apps, Rakeback",
      description: "Practical, updated poker guides and reviews \u2014 learn about apps, rakeback and safety."
    },
    es: {
      title: "Gu\xEDas y Rese\xF1as de P\xF3ker \u2014 Estrategia, Apps, Rakeback",
      description: "Gu\xEDas y rese\xF1as pr\xE1cticas de p\xF3ker \u2014 conoce las apps, rakeback y seguridad."
    },
    ru: {
      title: "\u0413\u0430\u0439\u0434\u044B \u0438 \u043E\u0431\u0437\u043E\u0440\u044B \u2014 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0440\u0435\u0439\u043A\u0431\u044D\u043A",
      description: "\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0435 \u0433\u0430\u0439\u0434\u044B \u0438 \u043E\u0431\u0437\u043E\u0440\u044B \u043F\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C, \u0441\u043E\u044E\u0437\u0430\u043C \u0438 \u0440\u0435\u0439\u043A\u0431\u044D\u043A\u0443."
    }
  }[lang];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": meta.title, "description": meta.description, "ogImage": "/hero_texture.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 md:px-12 py-10 md:py-16"> <header class="mb-8 md:mb-10"> <h1 class="text-2xl md:text-3xl font-bold text-neutral-100">${meta.title}</h1> <p class="mt-2 text-neutral-300">${meta.description}</p> </header> ${renderComponent($$result2, "GuidesList", $$GuidesList, { "guides": guides, "lang": lang, "basePath": lang === "en" ? "/en" : lang === "es" ? "/es" : "" })} </section> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/templates/GuidesIndexBase.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/templates/GuidesIndexBase.astro";
const $$url = "/templates/GuidesIndexBase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GuidesIndexBase,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
