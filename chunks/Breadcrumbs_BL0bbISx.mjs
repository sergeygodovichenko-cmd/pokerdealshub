import { c as createComponent, b as createAstro, a as renderTemplate, u as unescapeHTML, e as addAttribute, m as maybeRenderHead } from './astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://pokerdealshub.com${item.url}`
    }))
  };
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb" class="mb-6"> <ol class="flex items-center flex-wrap gap-2 text-sm"> ', ' </ol> </nav> <script type="application/ld+json">', "<\/script>"])), maybeRenderHead(), items.map((item, index) => renderTemplate`<li class="flex items-center"> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-neutral-600 mx-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} ${index === items.length - 1 ? renderTemplate`<span class="text-neutral-400 font-medium">${item.name}</span>` : renderTemplate`<a${addAttribute(item.url, "href")} class="text-gold hover:text-gold-light transition-colors"> ${item.name} </a>`} </li>`), unescapeHTML(JSON.stringify(breadcrumbSchema)));
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
