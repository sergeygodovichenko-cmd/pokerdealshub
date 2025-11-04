/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CmlpvxuL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CivQTQwJ.mjs';
import { u as useTranslations } from '../../chunks/utils_CSZAe92J.mjs';
export { renderers } from '../../renderers.mjs';

const $$AddDeal = createComponent(($$result, $$props, $$slots) => {
  const t = useTranslations("en");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Add Your Deal to the Site \u2014 PokerDealsHub", "description": "List your poker deal on PokerDealsHub. Platform for clubs, unions and agent networks" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-12"> <div class="max-w-4xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold text-gold mb-8"> ${t("addDeal.title")} </h1> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-8 mb-8"> <p class="text-neutral-300 text-lg leading-relaxed mb-6"> ${t("addDeal.description")} </p> <h2 class="text-2xl font-semibold text-gold mb-4">${t("addDeal.requirements")}</h2> <ul class="space-y-3 text-neutral-300 mb-8"> <li class="flex items-start"> <svg class="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Verified club or union reputation</span> </li> <li class="flex items-start"> <svg class="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Transparent rakeback and payout terms</span> </li> <li class="flex items-start"> <svg class="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Active player base and traffic</span> </li> <li class="flex items-start"> <svg class="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Reliable player support</span> </li> <li class="flex items-start"> <svg class="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>Willingness to verify terms and documentation</span> </li> </ul> <div class="bg-gold/10 border border-gold/30 rounded-xl p-6"> <p class="text-neutral-300 mb-6 text-lg font-medium text-center"> ${t("addDeal.cta")} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://t.me/pokerdealshub" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 px-6 py-3 bg-gold text-neutral-900 rounded-xl font-semibold hover:bg-gold-light transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.001.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"></path> </svg>
Telegram
</a> <a href="https://wa.me/38267563945" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 px-6 py-3 border-2 border-gold text-gold rounded-xl font-semibold hover:bg-gold hover:text-neutral-900 transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
WhatsApp
</a> </div> </div> </div> <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <h2 class="text-2xl font-semibold text-gold mb-4">Why List Your Deal on PokerDealsHub?</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <h3 class="text-lg font-semibold text-neutral-100 mb-2">Target Audience</h3> <p class="text-neutral-400 text-sm">
Our site is visited by active players looking for profitable terms and new deals
</p> </div> <div> <h3 class="text-lg font-semibold text-neutral-100 mb-2">SEO Optimization</h3> <p class="text-neutral-400 text-sm">
Each deal gets a dedicated page optimized for search engines
</p> </div> <div> <h3 class="text-lg font-semibold text-neutral-100 mb-2">International Reach</h3> <p class="text-neutral-400 text-sm">
The site is available in Russian, English, and Spanish
</p> </div> <div> <h3 class="text-lg font-semibold text-neutral-100 mb-2">Transparency</h3> <p class="text-neutral-400 text-sm">
We publish only verified offers with real terms
</p> </div> </div> </div> <div class="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-8"> <p class="text-neutral-300 text-sm">
Listing a poker deal on PokerDealsHub is an opportunity to attract targeted players from different regions.
          We work with clubs on <a href="/en/deals/" class="text-gold hover:text-gold-light underline underline-offset-2 hover:decoration-gold-light">PPPoker, ClubGG, X-Poker</a>
and other platforms. If you're looking for a reliable platform to promote your union or club, contact us.
</p> </div> </div> </div> ` })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/add-deal.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/en/add-deal.astro";
const $$url = "/en/add-deal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddDeal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
