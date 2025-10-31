/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, e as addAttribute, d as renderScript, m as maybeRenderHead } from '../chunks/astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$BaseLayout } from '../chunks/BaseLayout_DPLZ1pbk.mjs';
import { $ as $$DealCard } from '../chunks/DealCard_BWepXAJe.mjs';
import { d as deals } from '../chunks/deals_Bgjakpm4.mjs';
import { g as guides } from '../chunks/guides_CzeSEYyi.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PokerDealsHub \u2014 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0435 \u043A\u043B\u0443\u0431\u044B \u0438 \u0440\u0435\u0439\u043A\u0431\u044D\u043A-\u043E\u0444\u0435\u0440\u044B", "description": "\u0412\u044B\u0431\u0438\u0440\u0430\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0435 \u043A\u043B\u0443\u0431\u044B \u0438 \u0441\u043E\u044E\u0437\u044B \u043D\u0430 PPPoker, ClubGG \u0438 X-Poker. \u041F\u043E\u043B\u0443\u0447\u0430\u0439 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0440\u0435\u0439\u043A\u0431\u044D\u043A \u0438 \u043D\u0430\u0434\u0451\u0436\u043D\u044B\u0435 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u0441 PokerDealsHub.", "ogImage": "/hero_texture.webp", "data-astro-cid-efodz52s": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<section class="hero-bg relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-32 md:py-32 overflow-hidden bg-neutral-950" data-astro-cid-efodz52s> <!-- \u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 --> <div class="absolute inset-0 bg-black/60 z-0" data-astro-cid-efodz52s></div> <div class="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10" data-astro-cid-efodz52s> <div class="max-w-[450px] sm:max-w-[500px] md:max-w-2xl text-center md:text-left flex-1 mx-auto md:mx-0" data-astro-cid-efodz52s> <h1 class="text-3xl md:text-5xl font-bold text-gold mb-5 leading-tight" data-astro-cid-efodz52s>
PokerDealsHub \u2014 \u043F\u043E\u043A\u0435\u0440 \u0431\u0435\u0437 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432
</h1> <p class="text-neutral-300 text-base md:text-lg mb-10 leading-relaxed" data-astro-cid-efodz52s>
\u041D\u0430\u0445\u043E\u0434\u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u043A\u043B\u0443\u0431\u044B \u0438 \u0441\u043E\u044E\u0437\u044B \u0441 \u0447\u0435\u0441\u0442\u043D\u044B\u043C \u0440\u0435\u0439\u043A\u0431\u044D\u043A\u043E\u043C, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438 \u0436\u0438\u0432\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 24/7. 
        \u0422\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438, \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u0440\u0438\u0441\u043A\u043E\u0432.
</p> <a href="/ru/deals/" class="inline-block px-7 py-3 bg-gold text-neutral-900 font-bold rounded-xl hover:bg-gold-light transition-all text-base md:text-lg" data-astro-cid-efodz52s>
\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0438
</a> </div> <div class="relative flex-shrink-0 hidden md:block self-end translate-y-8" data-astro-cid-efodz52s> <img src="/chip_flying.webp" alt="Poker chip" class="w-40 lg:w-52 animate-chip-float opacity-90 pointer-events-none" data-astro-cid-efodz52s> </div> </div>  </section>   <section class="py-12 md:py-14 bg-neutral-950 border-t border-neutral-900" data-astro-cid-efodz52s> <div class="container mx-auto px-6 md:px-12 text-center" data-astro-cid-efodz52s> <h2 class="text-3xl md:text-4xl font-bold text-gold mb-8" data-astro-cid-efodz52s>
\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 PokerDealsHub
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-neutral-300 max-w-5xl mx-auto" data-astro-cid-efodz52s> <div class="flex flex-col items-center text-center" data-astro-cid-efodz52s> <img src="/shield.webp" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0449\u0438\u0442\u0430" class="w-14 h-14 mb-4 opacity-100" data-astro-cid-efodz52s> <h3 class="text-gold font-semibold mb-2" data-astro-cid-efodz52s>\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u044E\u0437\u044B</h3> <p class="max-w-sm mx-auto leading-relaxed" data-astro-cid-efodz52s>
\u041C\u044B \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0434\u0451\u0436\u043D\u044B\u0435 \u043A\u043B\u0443\u0431\u044B \u0441 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u0430\u043C\u0438 \u0438 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0435\u0439.
</p> </div> <div class="flex flex-col items-center text-center" data-astro-cid-efodz52s> <img src="/percent.webp" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u0440\u043E\u0446\u0435\u043D\u0442" class="w-14 h-14 mb-4 opacity-90" data-astro-cid-efodz52s> <h3 class="text-gold font-semibold mb-2" data-astro-cid-efodz52s>\u0427\u0435\u0441\u0442\u043D\u044B\u0439 \u0440\u0435\u0439\u043A\u0431\u044D\u043A</h3> <p class="max-w-sm mx-auto leading-relaxed" data-astro-cid-efodz52s>
\u0412\u0441\u0451 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E \u2014 \u0442\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u043D\u0430\u0435\u0448\u044C, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u0437\u0430 \u0438\u0433\u0440\u0443.
</p> </div> <div class="flex flex-col items-center text-center" data-astro-cid-efodz52s> <img src="/chat.webp" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0447\u0430\u0442\u0430" class="w-14 h-14 mb-4 opacity-90" data-astro-cid-efodz52s> <h3 class="text-gold font-semibold mb-2" data-astro-cid-efodz52s>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 24/7</h3> <p class="max-w-sm mx-auto leading-relaxed" data-astro-cid-efodz52s>
\u0420\u0443\u0441\u0441\u043A\u043E\u044F\u0437\u044B\u0447\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445.
</p> </div> <div class="flex flex-col items-center text-center" data-astro-cid-efodz52s> <img src="/fish.webp" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0420\u044B\u0431\u043A\u0430" class="w-14 h-14 mb-4 opacity-90" data-astro-cid-efodz52s> <h3 class="text-gold font-semibold mb-2" data-astro-cid-efodz52s>\u0425\u043E\u0440\u043E\u0448\u0430\u044F \u0438\u0433\u0440\u0430</h3> <p class="max-w-sm mx-auto leading-relaxed" data-astro-cid-efodz52s>
\u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u044F\u043D\u044B \u0441 \u0440\u0435\u043A\u0440\u0435\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u0438\u0433\u0440\u043E\u043A\u0430\u043C\u0438.
</p> </div> </div> </div> </section>  <section class="py-12 md:py-14 bg-neutral-950 border-t border-neutral-900 relative" data-astro-cid-efodz52s> <div class="container mx-auto px-6 md:px-12" data-astro-cid-efodz52s> <!-- \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A --> <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-6" data-astro-cid-efodz52s> <div class="flex-1 min-w-0" data-astro-cid-efodz52s> <h2 class="text-3xl md:text-4xl font-bold text-gold mb-2" data-astro-cid-efodz52s>\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438</h2> <p class="text-neutral-300 text-base max-w-2xl" data-astro-cid-efodz52s>
\u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u043E\u043A\u0435\u0440\u043D\u044B\u0435 \u043A\u043B\u0443\u0431\u044B \u0438 \u0441\u043E\u044E\u0437\u044B \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C \u0440\u0435\u0439\u043A\u0431\u044D\u043A\u043E\u043C, \u0447\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0438\u0433\u0440\u043E\u0439.
</p> </div> <a href="/ru/deals/" class="mt-4 md:mt-0 text-gold hover:text-gold-light text-sm md:text-base whitespace-nowrap flex-shrink-0" data-astro-cid-efodz52s>
\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u2192
</a> </div> <!-- \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0441 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0435\u0439 --> <div class="relative flex flex-col items-center md:block w-full" data-astro-cid-efodz52s> <!-- \u041B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u0435\u043B\u043A\u0430 (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0441\u043A\u0442\u043E\u043F) --> <button id="deal-prev" class="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2
               w-12 h-12 rounded-full bg-neutral-800/80 text-gold border border-gold/40
               drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]
               hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] hover:scale-110 transition-all z-10" onclick="document.getElementById('deal-viewport').scrollBy({ left: -document.getElementById('deal-viewport').offsetWidth, behavior: 'smooth' })" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-efodz52s></path> </svg> </button> <!-- \u0412\u044C\u044E\u043F\u043E\u0440\u0442 --> <div id="deal-viewport" class="relative mx-auto overflow-x-auto overflow-y-hidden rounded-2xl scroll-smooth touch-pan-x touch-pan-y
             w-full md:w-[calc(100%-10rem)] md:max-w-[1080px]
             snap-x snap-mandatory hide-scrollbar no-overscroll" data-astro-cid-efodz52s> <div id="deal-track" class="flex" data-astro-cid-efodz52s> `, ` </div> </div> <!-- \u041F\u0440\u0430\u0432\u0430\u044F \u0441\u0442\u0440\u0435\u043B\u043A\u0430 (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0441\u043A\u0442\u043E\u043F) --> <button id="deal-next" class="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2
               w-12 h-12 rounded-full bg-neutral-800/80 text-gold border border-gold/40
               drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]
               hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] hover:scale-110 transition-all z-10" onclick="document.getElementById('deal-viewport').scrollBy({ left: document.getElementById('deal-viewport').offsetWidth, behavior: 'smooth' })" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-efodz52s></path> </svg> </button> <!-- \u041A\u043D\u043E\u043F\u043A\u0438 \u0432\u043D\u0438\u0437\u0443 \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 --> <div class="hidden sm:flex md:hidden justify-center gap-6 mt-6" data-astro-cid-efodz52s> <button onclick="document.getElementById('deal-viewport').scrollBy({ left: -document.getElementById('deal-viewport').offsetWidth, behavior: 'smooth' })" class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/80 text-gold border border-gold/40
                 drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] hover:scale-110 transition-all" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-efodz52s></path> </svg> </button> <button onclick="document.getElementById('deal-viewport').scrollBy({ left: document.getElementById('deal-viewport').offsetWidth, behavior: 'smooth' })" class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/80 text-gold border border-gold/40
                 drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] hover:scale-110 transition-all" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-efodz52s></path> </svg> </button> </div> </div> </div>  </section>  <section class="py-12 md:py-14 bg-neutral-950 border-t border-neutral-900 relative" data-astro-cid-efodz52s> <div class="container mx-auto px-6 md:px-12" data-astro-cid-efodz52s> <!-- \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A --> <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-6" data-astro-cid-efodz52s> <div data-astro-cid-efodz52s> <h2 class="text-3xl md:text-4xl font-bold text-gold mb-2" data-astro-cid-efodz52s>\u0413\u0430\u0439\u0434\u044B \u0438 \u0441\u043E\u0432\u0435\u0442\u044B</h2> <p class="text-neutral-300 text-base max-w-2xl" data-astro-cid-efodz52s>
\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u043E\u0431\u0437\u043E\u0440\u044B \u0441\u043E\u044E\u0437\u043E\u0432 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u0434\u043B\u044F \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0442\u044F\u0442 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0432\u0438\u043D\u0440\u0435\u0439\u0442.
</p> </div> <a href="/ru/guides/" class="mt-4 md:mt-0 text-gold hover:text-gold-light text-sm md:text-base whitespace-nowrap" data-astro-cid-efodz52s>
\u0427\u0438\u0442\u0430\u0442\u044C \u0432\u0441\u0435 \u2192
</a> </div> <!-- \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0441 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0435\u0439 --> <div class="relative flex flex-col items-center md:block w-full" data-astro-cid-efodz52s> <!-- \u041B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u0435\u043B\u043A\u0430 --> <button id="guide-prev" class="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2
               w-12 h-12 rounded-full bg-neutral-800/80 text-gold border border-gold/40
               drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]
               hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] hover:scale-110 transition-all z-10" aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0433\u0430\u0439\u0434" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-efodz52s></path> </svg> </button> <!-- \u0412\u044C\u044E\u043F\u043E\u0440\u0442 --> <div id="guide-viewport" class="relative mx-auto overflow-x-auto overflow-y-hidden rounded-2xl scroll-smooth touch-pan-x touch-pan-y
             snap-x snap-mandatory hide-scrollbar w-full md:w-[calc(100%-10rem)]" data-astro-cid-efodz52s> <div id="guide-track" class="flex" data-astro-cid-efodz52s> `, ' </div> </div> <!-- \u041F\u0440\u0430\u0432\u0430\u044F \u0441\u0442\u0440\u0435\u043B\u043A\u0430 --> <button id="guide-next" class="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2\n               w-12 h-12 rounded-full bg-neutral-800/80 text-gold border border-gold/40\n               drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]\n               hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] hover:scale-110 transition-all z-10" aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0433\u0430\u0439\u0434" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-efodz52s></path> </svg> </button> </div> <!-- \u0421\u0442\u0440\u0435\u043B\u043A\u0438 \u0441\u043D\u0438\u0437\u0443 \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u043E\u043A --> <div class="flex md:hidden justify-center gap-6 mt-6" data-astro-cid-efodz52s> <button id="guide-prev-mobile" class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/80 text-gold border border-gold/40\n               drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] hover:scale-110 transition-all" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-efodz52s></path> </svg> </button> <button id="guide-next-mobile" class="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/80 text-gold border border-gold/40\n               drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] hover:scale-110 transition-all" data-astro-cid-efodz52s> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" data-astro-cid-efodz52s> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-efodz52s></path> </svg> </button> </div> </div>  </section> ', '  <section class="py-12 md:py-14 bg-neutral-950 border-t border-neutral-900 text-center" data-astro-cid-efodz52s> <div class="container mx-auto px-6 md:px-12 max-w-3xl" data-astro-cid-efodz52s> <h2 class="text-3xl md:text-4xl font-bold text-gold mb-5" data-astro-cid-efodz52s>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0443</h2> <p class="text-neutral-300 text-base md:text-lg mb-6 leading-relaxed" data-astro-cid-efodz52s>\n\u0422\u044B \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043F\u043E\u043A\u0435\u0440\u043D\u043E\u0433\u043E \u043A\u043B\u0443\u0431\u0430 \u0438\u043B\u0438 \u0441\u043E\u044E\u0437\u0430? \u0412 \u0438\u0433\u0440\u0435 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0441\u0442\u043D\u044B\u0435, \u0440\u0435\u0439\u043A\u0431\u044D\u043A \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439?\n      \u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u044E \u0441\u0434\u0435\u043B\u043A\u0443 \u043D\u0430 PokerDealsHub \u2014 \u043C\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043C \u043D\u043E\u0432\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043A\u043B\u0443\u0431\u0443 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F.\n</p> <a', ` class="inline-block px-8 py-3 bg-gold text-neutral-900 font-bold rounded-xl hover:bg-gold-light transition-all text-base md:text-lg" data-astro-cid-efodz52s>
\u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0443
</a> <img src="/chip_flying.webp" alt="Flying poker chip" class="mx-auto mt-10 w-28 md:w-36 opacity-80 animate-chip-float" data-astro-cid-efodz52s> </div> </section>  <script>
  window.addEventListener('load', () => {
    const viewport = document.getElementById('deal-viewport');
    if (!viewport) return;
  
    const slide = viewport.querySelector('.deal-slide');
    if (!slide) return;
  
    const slideW = slide.getBoundingClientRect().width || viewport.clientWidth;
    const amount = Math.round(Math.min(slideW * 0.18, 140));
    let done = false;
  
    function nudge() {
      if (done) return;
      done = true;
  
      setTimeout(() => {
        const prevSnap = viewport.style.scrollSnapType || '';
        const computedSnap = getComputedStyle(viewport).scrollSnapType;
        const restoreSnap = () => { viewport.style.scrollSnapType = prevSnap || computedSnap; };
  
        viewport.style.scrollSnapType = 'none';
        viewport.scrollBy({ left: amount, behavior: 'smooth' });
        setTimeout(() => {
          viewport.scrollBy({ left: -amount, behavior: 'smooth' });
          setTimeout(restoreSnap, 1000);
        }, 700);
      }, 500); // \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 0.5 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
    }
  
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
            nudge();
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // \u0448\u0430\u0433 1%
      }
    );
  
    observer.observe(slide);
  });
  <\/script> `])), maybeRenderHead(), deals.slice(0, 6).map((deal) => renderTemplate`<div class="deal-slide flex-shrink-0 w-full snap-center px-2 md:px-3" data-astro-cid-efodz52s> ${renderComponent($$result2, "DealCard", $$DealCard, { "deal": deal, "data-astro-cid-efodz52s": true })} </div>`), guides.slice(0, 6).map((guide) => renderTemplate`<a${addAttribute(`/${lang}/guides/${guide.slug}/`, "href")} class="guide-slide flex-shrink-0 w-full xl:w-1/2 snap-start px-3 md:px-4" style="scroll-snap-stop: always;" data-astro-cid-efodz52s> <div class="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-gold/50 transition-all flex flex-col" data-astro-cid-efodz52s> <h3 class="text-xl font-bold text-gold mb-3 line-clamp-2" data-astro-cid-efodz52s>${guide.title[lang]}</h3> <p class="text-neutral-300 text-sm line-clamp-4 flex-1" data-astro-cid-efodz52s>${guide.description[lang]}</p> </div> </a>`), renderScript($$result2, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/index.astro?astro&type=script&index=0&lang.ts"), addAttribute(`/${lang}/add-deal/`, "href")) })}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/index.astro", void 0);

const $$file = "/Users/sergiigodovychenko/Documents/pdh/src/pages/ru/index.astro";
const $$url = "/ru";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
