import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl } from './utils_CSZAe92J.mjs';
import { d as deals } from './deals_BGp0Bycs.mjs';

const $$Astro = createAstro();
const $$RelatedDeals = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedDeals;
  const { currentDealSlug, currentApp, currentGeo, currentBadges } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const scoreDeal = (deal) => {
    let score = 0;
    if (deal.app === currentApp) score += 3;
    if (deal.geo === currentGeo) score += 2;
    if (currentBadges?.some((badge) => deal.badges?.includes(badge))) score += 1;
    return score;
  };
  const relatedDeals = deals.filter((deal) => deal.slug !== currentDealSlug).map((deal) => ({ ...deal, score: scoreDeal(deal) })).sort((a, b) => b.score - a.score).slice(0, 2);
  const titles = {
    ru: "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    en: "Similar Offers",
    es: "Ofertas Similares"
  };
  const buttonText = {
    ru: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
    en: "Learn More",
    es: "M\xE1s informaci\xF3n"
  };
  const rakebackto = {
    ru: "\u0420\u0435\u0439\u043A\u0431\u044D\u043A \u0434\u043E ",
    en: "Rakeback up to ",
    es: "Rakeback hasta "
  };
  return renderTemplate`${relatedDeals.length > 0 && renderTemplate`${maybeRenderHead()}<div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:p-8"><h2 class="text-2xl font-bold text-gold mb-6">${titles[lang]}</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${relatedDeals.map((deal) => {
    const logoUrl = deal.logoimage || "/image.webp";
    return renderTemplate`<article class="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 hover:border-gold/50 transition-all"><div class="flex flex-col gap-4"><div class="flex items-center gap-4"><img${addAttribute(logoUrl, "src")}${addAttribute(deal.name[lang], "alt")} class="w-20 h-auto object-contain rounded-lg"><div class="flex-1 min-w-0"><h3 class="text-lg font-bold text-gold mb-1 line-clamp-2">${deal.name[lang]}</h3><p class="text-sm text-neutral-400">${deal.app} • ${rakebackto[lang]}${deal.rakeback}</p></div></div><p class="text-neutral-300 text-sm line-clamp-3">${deal.description[lang]}</p><a${addAttribute(`/${lang}/deal/${deal.slug}/`, "href")} class="w-full px-6 py-3 bg-gold/10 text-gold border border-gold/30 rounded-lg font-semibold text-center hover:bg-gold/20 transition-all">${buttonText[lang]}</a></div></article>`;
  })}</div></div>`}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/RelatedDeals.astro", void 0);

export { $$RelatedDeals as $ };
