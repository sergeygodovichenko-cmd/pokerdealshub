/* empty css                         */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_yzPlakuQ.mjs';
import { g as guides } from './guides_CzeSEYyi.mjs';
import { g as getLangFromUrl } from './utils_CSZAe92J.mjs';

const $$Astro = createAstro();
const $$GuidesPageBase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuidesPageBase;
  const lang = getLangFromUrl(Astro2.url) || "ru";
  const { slug } = Astro2.params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) {
    throw new Error(`Guide not found: ${slug}`);
  }
  const title = guide.title[lang] || guide.title["en"];
  const description = guide.description[lang] || guide.description["en"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="px-6 md:px-12 py-10 md:py-16"> <header class="mb-6"> <div class="text-xs text-neutral-400"> <time${addAttribute(guide.date, "datetime")}> ${new Date(guide.date).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })} </time> ${guide.category && renderTemplate`<span> · ${guide.category}</span>`} </div> <h1 class="mt-2 text-2xl md:text-3xl font-bold text-neutral-100">${title}</h1> <p class="mt-2 text-neutral-300">${description}</p> </header> <p class="text-neutral-400 mt-8">
[Тут позже появится контент гайда. Сейчас только структура работает.]
</p> </article> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/templates/GuidesPageBase.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/templates/GuidesPageBase.astro";
const $$url = "/templates/GuidesPageBase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GuidesPageBase,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GuidesPageBase as $, _page as _ };
