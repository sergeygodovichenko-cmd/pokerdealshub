import { c as createComponent, b as createAstro, m as maybeRenderHead, d as renderScript, e as addAttribute, a as renderTemplate, r as renderComponent, f as renderSlot, g as renderHead, u as unescapeHTML } from './astro/server_C71Im3BI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const languages = {
  ru: "Русский",
  en: "English",
  es: "Español"
};
const defaultLang = "ru";
const ui = {
  ru: {
    "nav.deals": "Сделки",
    "nav.guides": "Гайды и обзоры",
    "nav.about": "О нас",
    "nav.addDeal": "Добавить сделку",
    "footer.copyright": "© PokerDealsHub 2025",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.ageRestriction": "18+",
    "footer.playResponsibly": "Играйте ответственно",
    "footer.cookiesNotice": "Сайт использует cookies",
    "home.title": "Все покерные сделки",
    "home.subtitle": "Каталог проверенных покерных сделок — централизованные и децентрализованные предложения для игроков по всему миру",
    "deal.getButton": "Получить сделку",
    "deal.similarDeals": "Похожие сделки",
    "guides.title": "Гайды и обзоры о покере и сделках",
    "guides.subtitle": "Здесь вы найдете подробные гайды и обзоры по приложениям, союзам и рейкбэк-сделкам.",
    "about.title": "О проекте PokerDealsHub",
    "about.mission": "PokerDealsHub — это независимая витрина покерных сделок, объединяющая централизованные и децентрализованные предложения для игроков и агентов по всему миру.",
    "about.principles": "Наши принципы",
    "about.verified": "Проверенные сделки",
    "about.transparent": "Прозрачные условия",
    "about.international": "Международный подход",
    "about.partnerships": "Открытость к партнёрствам",
    "about.contact": "Контакты",
    "addDeal.title": "Добавить вашу сделку на сайт",
    "addDeal.description": "Мы публикуем проверенные покерные предложения от клубов и союзов. Размещение доступно после проверки репутации и условий сделки.",
    "addDeal.requirements": "Требования",
    "addDeal.cta": "Свяжитесь с нами для обсуждения:",
    "breadcrumb.home": "Главная",
    "breadcrumb.deals": "Покерные сделки",
    "breadcrumb.guides": "Гайды и обзоры"
  },
  en: {
    "nav.deals": "Deals",
    "nav.guides": "Poker Guide",
    "nav.about": "About",
    "nav.addDeal": "Add Deal",
    "footer.copyright": "© PokerDealsHub 2025",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.ageRestriction": "18+",
    "footer.playResponsibly": "Play Responsibly",
    "footer.cookiesNotice": "This site uses cookies",
    "home.title": "All Poker Deals",
    "home.subtitle": "Catalog of verified poker deals — centralized and decentralized offers for players worldwide",
    "deal.getButton": "Get Deal",
    "deal.similarDeals": "Similar Deals",
    "guides.title": "Poker Guides and Reviews",
    "guides.subtitle": "Find detailed guides and reviews on apps, unions, and rakeback deals.",
    "about.title": "About PokerDealsHub",
    "about.mission": "PokerDealsHub is an independent poker deals showcase, bringing together centralized and decentralized offers for players and agents worldwide.",
    "about.principles": "Our Principles",
    "about.verified": "Verified Deals",
    "about.transparent": "Transparent Terms",
    "about.international": "International Approach",
    "about.partnerships": "Open to Partnerships",
    "about.contact": "Contact",
    "addDeal.title": "Add Your Deal to the Site",
    "addDeal.description": "We publish verified poker offers from clubs and unions. Placement is available after verifying reputation and deal terms.",
    "addDeal.requirements": "Requirements",
    "addDeal.cta": "Contact us to discuss:",
    "breadcrumb.home": "Home",
    "breadcrumb.deals": "Poker Deals",
    "breadcrumb.guides": "Guides and Reviews"
  },
  es: {
    "nav.deals": "Ofertas",
    "nav.guides": "Guías",
    "nav.about": "Acerca de",
    "nav.addDeal": "Agregar Oferta",
    "footer.copyright": "© PokerDealsHub 2025",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Uso",
    "footer.ageRestriction": "18+",
    "footer.playResponsibly": "Juega Responsablemente",
    "footer.cookiesNotice": "Este sitio utiliza cookies",
    "home.title": "Todas las Ofertas de Póker",
    "home.subtitle": "Catálogo de ofertas de póker verificadas — ofertas centralizadas y descentralizadas para jugadores en todo el mundo",
    "deal.getButton": "Obtener Oferta",
    "deal.similarDeals": "Ofertas Similares",
    "guides.title": "Guías y Reseñas de Póker",
    "guides.subtitle": "Encuentra guías detalladas y reseñas sobre aplicaciones, uniones y ofertas de rakeback.",
    "about.title": "Acerca de PokerDealsHub",
    "about.mission": "PokerDealsHub es una vitrina independiente de ofertas de póker, que reúne ofertas centralizadas y descentralizadas para jugadores y agentes en todo el mundo.",
    "about.principles": "Nuestros Principios",
    "about.verified": "Ofertas Verificadas",
    "about.transparent": "Términos Transparentes",
    "about.international": "Enfoque Internacional",
    "about.partnerships": "Abierto a Asociaciones",
    "about.contact": "Contacto",
    "addDeal.title": "Agregar su Oferta al Sitio",
    "addDeal.description": "Publicamos ofertas de póker verificadas de clubes y uniones. La colocación está disponible después de verificar la reputación y los términos de la oferta.",
    "addDeal.requirements": "Requisitos",
    "addDeal.cta": "Contáctenos para discutir:",
    "breadcrumb.home": "Inicio",
    "breadcrumb.deals": "Ofertas de Póker",
    "breadcrumb.guides": "Guías y Reseñas"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function getAlternateLanguages(currentPath, currentLang) {
  const langs = Object.keys(ui);
  const pathWithoutLang = currentPath.replace(`/${currentLang}`, "");
  return langs.map((lang) => ({
    lang,
    path: `/${lang}${pathWithoutLang}`
  }));
}

const $$Astro$3 = createAstro();
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const currentLang = getLangFromUrl(Astro2.url);
  const alternateLanguages = getAlternateLanguages(Astro2.url.pathname, currentLang);
  return renderTemplate`${maybeRenderHead()}<div class="inline-block bg-transparent"> <button id="lang-switcher-button" style="color:#fafafa;" class="flex items-center gap-2 text-neutral-300 hover:text-gold transition-colors bg-transparent border-0 outline-none appearance-none" aria-label="Change language"> <span class="text-sm uppercase">${currentLang}</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div id="lang-switcher-menu" style="background-color:#1f1f1f; color:#fafafa;" class="hidden absolute mt-2 w-32 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg overflow-hidden z-[9999]"> ${alternateLanguages.map(({ lang, path }) => renderTemplate`<a${addAttribute(path, "href")}${addAttribute(`block px-4 py-2 text-sm ${lang === currentLang ? "bg-neutral-700 text-gold" : "text-neutral-300 hover:bg-neutral-700 hover:text-gold"} transition-colors`, "class")}> ${languages[lang]} </a>`)} </div> </div> ${renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/LanguageSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/LanguageSwitcher.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<header style="background-color:#0a0a0a;" class="fixed top-0 left-0 right-0 z-[1000] bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800" data-astro-cid-3ef6ksr2> <nav class="container mx-auto px-4 py-4" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <a${addAttribute(`/${lang}/`, "href")} class="flex items-center hover:opacity-80 transition-opacity" data-astro-cid-3ef6ksr2> <img src="/PDH_logo_no_background.webp" alt="PokerDealsHub" class="h-8 md:h-10 w-auto block" width="196" height="40" data-astro-cid-3ef6ksr2> </a> <div class="flex items-center gap-4" data-astro-cid-3ef6ksr2> <div class="hidden lg:flex items-center gap-8" data-astro-cid-3ef6ksr2> <a${addAttribute(`/${lang}/deals/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.deals")} </a> <a${addAttribute(`/${lang}/guides/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.guides")} </a> <a${addAttribute(`/${lang}/about/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.about")} </a> <a${addAttribute(`/${lang}/add-deal/`, "href")} class="px-4 py-2 border border-gold text-gold rounded-xl hover:bg-gold hover:text-neutral-900 transition-all" data-astro-cid-3ef6ksr2> ${t("nav.addDeal")} </a> </div> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "data-astro-cid-3ef6ksr2": true })} <button id="mobile-menu-button" class="lg:hidden text-neutral-300 hover:text-gold" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> <div id="mobile-menu" class="hidden lg:hidden mt-4 pb-4 border-t border-neutral-800 pt-4" data-astro-cid-3ef6ksr2> <div class="flex flex-col gap-4" data-astro-cid-3ef6ksr2> <a${addAttribute(`/${lang}/deals/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.deals")} </a> <a${addAttribute(`/${lang}/guides/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.guides")} </a> <a${addAttribute(`/${lang}/about/`, "href")} class="text-neutral-300 hover:text-gold underline-offset-2 hover:underline transition-colors" data-astro-cid-3ef6ksr2> ${t("nav.about")} </a> <a${addAttribute(`/${lang}/add-deal/`, "href")} class="px-4 py-2 border border-gold text-gold rounded-xl hover:bg-gold hover:text-neutral-900 transition-all text-center" data-astro-cid-3ef6ksr2> ${t("nav.addDeal")} </a> </div> </div> </nav> </header>  ${renderScript($$result, "/Users/sergiigodovychenko/Documents/pdh/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-900 border-t border-neutral-800 mt-12"> <div class="w-full py-12 px-4"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8"> <div> <a${addAttribute(`/${lang}/`, "href")} class="flex items-center hover:opacity-80 transition-opacity"> <img src="/PDH_logo_no_background.webp" alt="PokerDealsHub" class="h-6 w-auto" width="822" height="168"> </a> <p class="text-neutral-400 text-sm mt-2">${t("footer.copyright")}</p> </div> <div class="flex flex-col gap-4"> <div class="flex flex-wrap gap-6 text-sm"> <a${addAttribute(`/${lang}/deals/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("nav.deals")} </a> <a${addAttribute(`/${lang}/guides/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("nav.guides")} </a> <a${addAttribute(`/${lang}/about/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("nav.about")} </a> <a${addAttribute(`/${lang}/add-deal/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("nav.addDeal")} </a> </div> <div class="flex flex-wrap gap-6 text-sm"> <a${addAttribute(`/${lang}/privacy/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("footer.privacy")} </a> <a${addAttribute(`/${lang}/terms/`, "href")} class="text-neutral-300 hover:text-gold transition-colors"> ${t("footer.terms")} </a> </div> <div class="flex flex-wrap gap-4 text-xs text-neutral-400"> <span>${t("footer.ageRestriction")}</span> <span>•</span> <span>${t("footer.playResponsibly")}</span> <span>•</span> <span>${t("footer.cookiesNotice")}</span> </div> <div class="flex gap-4"> <a href="https://t.me/pokerdealshub" class="text-neutral-400 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Telegram"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.001.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"></path> </svg> </a> <a href="https://www.instagram.com/poker_deals_hub/" class="text-neutral-400 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> <!--         <div class="text-neutral-500 cursor-not-allowed" title="X (Twitter)">
            <a
            href="https://www.instagram.com/poker_deals_hub/"
            class="text-neutral-400 hover:text-gold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          </div>  --> </div> </div> </div> </div> </footer>`;
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$GA4 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  window.addEventListener('load', () => {
    const GA_ID = "G-EMKB3VKZY3";
    const PIXEL_ID = "843668438232713";
  
    // \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0441 \u0442\u0430\u0439\u043C-\u0430\u0443\u0442\u043E\u043C
    async function safeLoad(src, timeout = 4000) {
      return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        setTimeout(() => resolve(false), timeout);
        document.head.appendChild(s);
      });
    }
  
    async function startAnalytics() {
      if (window.__analyticsStarted) return;
      window.__analyticsStarted = true;
  
      // === Google Analytics 4 ===
      const gaLoaded = await safeLoad(\`https://www.googletagmanager.com/gtag/js?id=\${GA_ID}\`);
      if (gaLoaded) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
        console.log('%c\u2705 GA4 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D','color:lime;font-weight:bold');
      } else {
        console.warn('\u26A0\uFE0F GA4 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430)');
      }
  
      // === Meta Pixel ===
      const fbLoaded = await safeLoad('https://connect.facebook.net/en_US/fbevents.js');
      if (fbLoaded) {
        !(function(f,b,e,v,n,t,s){
          if(f.fbq) return;
          n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq) f._fbq=n;
          n.push=n; n.loaded=!0; n.version='2.0';
          n.queue=[]; t=b.createElement(e); t.async=!0;
          t.src=v; s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
        fbq('init', PIXEL_ID);
        fbq('track', 'PageView');
        console.log('%c\u2705 Meta Pixel \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D','color:deepskyblue;font-weight:bold');
      } else {
        console.warn('\u26A0\uFE0F Meta Pixel \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430)');
      }
  
      // === \u041B\u0438\u0434-\u0442\u0440\u0435\u043A\u0438\u043D\u0433 ===
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const href = link.getAttribute('href') || '';
        const isLead = href.includes('t.me') || href.includes('telegram.me') ||
                       href.includes('wa.me') || href.includes('api.whatsapp.com');
        if (isLead) {
          try {
            if (window.gtag) gtag('event', 'lead_click', { event_category: 'lead', event_label: href });
            if (window.fbq) fbq('track', 'Lead', { content_name: href, event_source: 'auto' });
            console.log('%c\u{1F525} \u041B\u0438\u0434 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u2192','color:orange;font-weight:bold', href);
          } catch(err) {
            console.warn('\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F', err);
          }
        }
      });
    }
  
    // \u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E: \u043B\u0438\u0431\u043E \u043F\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E, \u043B\u0438\u0431\u043E \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
    const timer = setTimeout(startAnalytics, 3000);
    ['scroll', 'click', 'keydown'].forEach(evt =>
      window.addEventListener(evt, () => {
        clearTimeout(timer);
        startAnalytics();
      }, { once: true })
    );
  });
  <\/script> `, '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=843668438232713&ev=PageView&noscript=1"><img height="1" width="1" style="display:none" src="https://www.googletagmanager.com/ns.html?id=G-EMKB3VKZY3"></noscript>'], [`<script>
  window.addEventListener('load', () => {
    const GA_ID = "G-EMKB3VKZY3";
    const PIXEL_ID = "843668438232713";
  
    // \u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0441 \u0442\u0430\u0439\u043C-\u0430\u0443\u0442\u043E\u043C
    async function safeLoad(src, timeout = 4000) {
      return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        setTimeout(() => resolve(false), timeout);
        document.head.appendChild(s);
      });
    }
  
    async function startAnalytics() {
      if (window.__analyticsStarted) return;
      window.__analyticsStarted = true;
  
      // === Google Analytics 4 ===
      const gaLoaded = await safeLoad(\\\`https://www.googletagmanager.com/gtag/js?id=\\\${GA_ID}\\\`);
      if (gaLoaded) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
        console.log('%c\u2705 GA4 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D','color:lime;font-weight:bold');
      } else {
        console.warn('\u26A0\uFE0F GA4 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430)');
      }
  
      // === Meta Pixel ===
      const fbLoaded = await safeLoad('https://connect.facebook.net/en_US/fbevents.js');
      if (fbLoaded) {
        !(function(f,b,e,v,n,t,s){
          if(f.fbq) return;
          n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq) f._fbq=n;
          n.push=n; n.loaded=!0; n.version='2.0';
          n.queue=[]; t=b.createElement(e); t.async=!0;
          t.src=v; s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
        fbq('init', PIXEL_ID);
        fbq('track', 'PageView');
        console.log('%c\u2705 Meta Pixel \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D','color:deepskyblue;font-weight:bold');
      } else {
        console.warn('\u26A0\uFE0F Meta Pixel \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430)');
      }
  
      // === \u041B\u0438\u0434-\u0442\u0440\u0435\u043A\u0438\u043D\u0433 ===
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const href = link.getAttribute('href') || '';
        const isLead = href.includes('t.me') || href.includes('telegram.me') ||
                       href.includes('wa.me') || href.includes('api.whatsapp.com');
        if (isLead) {
          try {
            if (window.gtag) gtag('event', 'lead_click', { event_category: 'lead', event_label: href });
            if (window.fbq) fbq('track', 'Lead', { content_name: href, event_source: 'auto' });
            console.log('%c\u{1F525} \u041B\u0438\u0434 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 \u2192','color:orange;font-weight:bold', href);
          } catch(err) {
            console.warn('\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F', err);
          }
        }
      });
    }
  
    // \u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E: \u043B\u0438\u0431\u043E \u043F\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E, \u043B\u0438\u0431\u043E \u0447\u0435\u0440\u0435\u0437 3 \u0441\u0435\u043A\u0443\u043D\u0434\u044B
    const timer = setTimeout(startAnalytics, 3000);
    ['scroll', 'click', 'keydown'].forEach(evt =>
      window.addEventListener(evt, () => {
        clearTimeout(timer);
        startAnalytics();
      }, { once: true })
    );
  });
  <\/script> `, '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=843668438232713&ev=PageView&noscript=1"><img height="1" width="1" style="display:none" src="https://www.googletagmanager.com/ns.html?id=G-EMKB3VKZY3"></noscript>'])), maybeRenderHead());
}, "/Users/sergiigodovychenko/Documents/pdh/src/components/GA4.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, ogImage, breadcrumbs } = Astro2.props;
  let pathname = Astro2.url.pathname.endsWith("/") ? Astro2.url.pathname : Astro2.url.pathname + "/";
  const canonicalURL = new URL(pathname, Astro2.site);
  const currentLang = getLangFromUrl(Astro2.url);
  const alternateLanguages = getAlternateLanguages(Astro2.url.pathname, currentLang);
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalURL.toString(),
    inLanguage: currentLang,
    isPartOf: {
      "@type": "WebSite",
      name: "PokerDealsHub",
      url: Astro2.site?.toString()
    }
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PokerDealsHub",
    url: Astro2.site?.toString(),
    logo: new URL("/PDH_logo_no_background.webp", Astro2.site).toString(),
    sameAs: [
      "https://t.me/pokerdealshub",
      "https://www.instagram.com/poker_deals_hub/"
    ]
  };
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.url, Astro2.site).toString()
    }))
  } : null;
  return renderTemplate(_b || (_b = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0"><meta name="theme-color" content="#0a0a0a"><meta name="format-detection" content="telephone=no"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Favicons --><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" href="/favicon.png" type="image/png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"', "><title>", '</title><meta name="description"', '><!-- Canonical --><link rel="canonical"', "><!-- Alternate language versions -->", '<!-- Open Graph / Twitter --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta property="og:image:type" content="image/webp"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Preload assets --><link rel="preload" href="/hero_wide_screen_top.webp" as="image" type="image/webp" fetchpriority="high"><link rel="preload" href="/PDH_logo_no_background.webp" as="image" type="image/webp"><link rel="preload" href="/fonts/inter-700.woff2" as="font" type="font/woff2" crossorigin><style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/inter-400.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: optional;
        src: url('/fonts/inter-500.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: optional;
        src: url('/fonts/inter-600.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/inter-700.woff2') format('woff2');
      }
    </style><!-- Structured Data --><script type="application/ld+json">`, '<\/script><script type="application/ld+json">', "<\/script>", "", "", '</head> <body class="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col w-full overflow-x-hidden"> ', ' <main class="flex-1 pt-12 w-full"> ', " </main> ", " </body></html>"])), addAttribute(currentLang, "lang"), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), alternateLanguages.map(({ lang, path }) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(new URL(path, Astro2.site), "href")}>`), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(
    ogImage ? new URL(ogImage, Astro2.site) : "https://pokerdealshub.com/og/og-image-default.webp",
    "content"
  ), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(
    ogImage ? new URL(ogImage, Astro2.site) : "https://pokerdealshub.com/og/og-image-default.webp",
    "content"
  ), unescapeHTML(JSON.stringify(webPageSchema)), unescapeHTML(JSON.stringify(organizationSchema)), breadcrumbSchema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema))), renderComponent($$result, "GA4", $$GA4, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/sergiigodovychenko/Documents/pdh/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getLangFromUrl as g, useTranslations as u };
