/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_yzPlakuQ.mjs';
import { $ as $$Breadcrumbs } from '../../../chunks/Breadcrumbs_DWwFcGV5.mjs';
import { g as getLangFromUrl, u as useTranslations } from '../../../chunks/utils_CSZAe92J.mjs';
import { readFileSync } from 'fs';
import { resolve } from 'path';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const guides = [
    { slug: "pppoker-guide" },
    { slug: "pppoker-start-guide" },
    { slug: "decentralized-poker-safety" }
  ];
  return guides.map((guide) => ({
    params: { slug: guide.slug },
    props: { slug: guide.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const lang = getLangFromUrl(Astro2.url);
  const { slug } = Astro2.props;
  const t = useTranslations("ru");
  const filePath = resolve(`src/content/guides/ru/${slug}.md`);
  const fileContent = readFileSync(filePath, "utf-8");
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = fileContent.match(frontmatterRegex);
  let title = "\u0413\u0430\u0439\u0434";
  let description = "";
  let date = "";
  if (match) {
    const frontmatter = match[1];
    const titleMatch = frontmatter.match(/title:\s*['"](.+?)['"]/);
    const descMatch = frontmatter.match(/description:\s*['"](.+?)['"]/);
    const dateMatch = frontmatter.match(/date:\s*['"](.+?)['"]/);
    if (titleMatch) title = titleMatch[1];
    if (descMatch) description = descMatch[1];
    if (dateMatch) date = dateMatch[1];
  }
  const content = fileContent.replace(frontmatterRegex, "");
  function markdownToHtml(md) {
    let html = md;
    html = html.replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-gold mb-6">$1</h1>');
    html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-semibold text-gold mt-8 mb-4">$1</h2>');
    html = html.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-semibold text-neutral-100 mt-6 mb-3">$1</h3>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-neutral-100">$1</strong>');
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:text-gold-light transition-colors">$1</a>');
    html = html.replace(/^- (.+)$/gm, '<li class="ml-6">$1</li>');
    html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc text-neutral-300 space-y-2 mb-4">$&</ul>');
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-6">$1</li>');
    html = html.replace(/(<li.*<\/li>\n?)+/g, (match2) => {
      if (!match2.includes("list-disc")) {
        return `<ol class="list-decimal text-neutral-300 space-y-2 mb-4">${match2}</ol>`;
      }
      return match2;
    });
    html = html.replace(/^(?!<[hl]|<ul|<ol|<li)(.+)$/gm, '<p class="text-neutral-300 mb-4 leading-relaxed">$1</p>');
    html = html.replace(/^---$/gm, '<hr class="border-neutral-800 my-8" />');
    return html;
  }
  const htmlContent = markdownToHtml(content);
  const breadcrumbs = [
    { name: t("bbreadcrumb.home"), url: `/${lang}/deals/` },
    { name: t("breadcrumb.guides"), url: "/ru/guides/" },
    { name: title, url: `/ru/guides/${slug}/` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} \u2014 PokerDealsHub`, "description": description, "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<article class="container mx-auto px-4 py-12"> <div class="max-w-3xl mx-auto"> ', " ", ' <div class="prose prose-invert max-w-none">', '</div> <div class="mt-12 p-6 bg-gold/10 border border-gold/30 rounded-xl"> <p class="text-neutral-300 text-center">\n\u0425\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0444\u0444\u0435\u0440?', ' <a href="/ru/about/" class="text-gold hover:text-gold-light font-semibold">\n\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438\n</a> </p> </div> </div> </article> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs }), date && renderTemplate`<time class="text-sm text-neutral-500 block mb-4"> ${new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`, unescapeHTML(htmlContent), " ", unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": "PokerDealsHub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PokerDealsHub"
    }
  }))) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/guides/[slug].astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/guides/[slug].astro";
const $$url = "/ru/guides/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
