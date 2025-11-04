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

export { getAlternateLanguages as a, getLangFromUrl as g, languages as l, useTranslations as u };
