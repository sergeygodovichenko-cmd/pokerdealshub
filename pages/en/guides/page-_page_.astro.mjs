/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$GuidesPageBase } from '../../../chunks/GuidesPageBase_Dt55dr3V.mjs';
import { g as guides } from '../../../chunks/guides_CzeSEYyi.mjs';
import { d as dealsConfig } from '../../../chunks/dealsConfig_6c2onEy-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const totalPages = Math.ceil(guides.length / dealsConfig.perPage);
  return Array.from({ length: totalPages }, (_, i) => ({
    params: { page: i.toString() },
    props: { currentPage: i }
  }));
}
const $$Pagepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagepage;
  return renderTemplate`${renderComponent($$result, "GuidesPageBase", $$GuidesPageBase, { "lang": "ru", "currentPage": Astro2.props.currentPage })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/guides/page-[page].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/guides/page-[page].astro";
const $$url = "/en/guides/page-[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pagepage,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
