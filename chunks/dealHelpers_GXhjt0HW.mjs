const logoMap = {
  pppoker: "/image.webp",
  xpoker: "/xpoker_logo.webp",
  clubgg: "/clubGG_logo.webp",
  phd_logo_new: "/PDH_logo_no_background.webp",
  nuts_poker_logo: "/nuts_poker_logo.webp",
  pokerbros_logo: "/pokerbros_logo.webp",
  coinpoker_logo: "/coinpoker_logo.webp"
};
const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);
const badgeLabels = {
  ru: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: "🇺🇸 USA players",
    asia: "🏮 Asia",
    topDeal: "💎 Top Deal!",
    pdhClub: "🔥 PDH club",
    pdhPartner: "🤝 PDH partner",
    centralized: "🏬 Centralized",
    soft: "🐟 Soft game",
    highRakeback: "💰 High Rakeback",
    verified: "✅ Verified",
    allLimits: "📊 All Limits",
    nonStop: "⏱ NonStop",
    international: "🌍 International",
    australia: "🇦🇺 Australia"
  },
  en: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: "🇺🇸 USA players",
    asia: "🏮 Asia",
    topDeal: "💎 Top Deal!",
    pdhClub: "🔥 PDH club",
    pdhPartner: "🤝 PDH partner",
    centralized: "🏬 Centralized",
    soft: "🐟 Soft game",
    highRakeback: "💰 High Rakeback",
    verified: "✅ Verified",
    allLimits: "📊 All Limits",
    nonStop: "⏱ NonStop",
    international: "🌍 International",
    australia: "🇦🇺 Australia"
  },
  es: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: "🇺🇸 USA players",
    asia: "🏮 Asia",
    topDeal: "💎 Top Deal!",
    pdhClub: "🔥 PDH club",
    pdhPartner: "🤝 PDH partner",
    centralized: "🏬 Centralized",
    soft: "🐟 Soft game",
    highRakeback: "💰 High Rakeback",
    verified: "✅ Verified",
    allLimits: "📊 All Limits",
    nonStop: "⏱ NonStop",
    international: "🌍 International",
    australia: "🇦🇺 Australia"
  }
};
const tooltips = {
  ru: {
    featured: "Клуб под управлением PokerDealsHub. Это гарантирует прозрачность, надёжность и сервис премиум-класса 24/7."
  },
  en: {
    featured: "Club managed by PokerDealsHub. This ensures transparency, reliability, and premium-class service 24/7."
  },
  es: {
    featured: "Club gestionado por PokerDealsHub. Esto garantiza transparencia, fiabilidad y un servicio de primera clase las 24 horas."
  }
};
const labl = {
  ru: {
    club: "Клуб:",
    union: "Союз:",
    geog: "География:",
    platform: "Платформа:",
    upTo: "Рейкбэк до",
    bonusL: "Бонус:",
    getDeal: "Получить сделку",
    rateBy: "Рейтинг по дисциплинам",
    verif: "Все предложения проходят внутреннюю проверку PDH. Мы гарантируем честные условия сотрудничества и клиентскую поддержку высшего класса в любое время суток.",
    readyJoin: "Есть вопросы? Готовы вступить в клуб?",
    weAreHere: `Все сделки предоставляются бесплатно. Членство в клубах без KYC (не нужно отправлять документы).`,
    weAreHereNoKyc: `Узнайте о дополнительных преимуществах для вас и получите ссылку для регистрации.`,
    weAreHere2: `Пишите менеджеру PDH, работаем 24/7`,
    tgContact: "Написать в Telegram",
    waContact: "Написать в WhatsApp"
  },
  en: {
    club: "Club:",
    union: "Union:",
    geog: "Geography:",
    platform: "Platform:",
    upTo: "Rakeback up to",
    bonusL: "Bonus:",
    getDeal: "Get the deal",
    rateBy: "Game type ratings",
    verif: "All offers undergo internal verification by PDH. We guarantee fair cooperation terms and top-class customer support available around the clock.",
    readyJoin: "Got questions? Ready to join the club?",
    weAreHere: "All deals are provided free of charge. Club membership is KYC-free (no documents required).",
    weAreHereNoKyc: `Learn about your additional benefits and get your registration link.`,
    weAreHere2: "Message a PDH manager — we’re online 24/7.",
    tgContact: "Message on Telegram",
    waContact: "Message on WhatsApp"
  },
  es: {
    club: "Club:",
    union: "Unión:",
    geog: "Geografía:",
    platform: "Plataforma:",
    upTo: "Rakeback hasta",
    bonusL: "Bono:",
    getDeal: "Obtener esta oferta",
    rateBy: "Calificación por disciplinas",
    verif: "Todas las ofertas pasan una verificación interna de PDH. Garantizamos condiciones de cooperación justas y atención al cliente de primera clase disponible las 24 horas del día.",
    readyJoin: "¿Tiene preguntas? ¿Listo para unirse al club?",
    weAreHereNoKyc: `Conoce tus beneficios adicionales y obtén tu enlace de registro.`,
    weAreHere: "Todas las ofertas se proporcionan de forma gratuita. La membresía en los clubes no requiere KYC (no es necesario enviar documentos).",
    weAreHere2: "Escriba al gerente de PDH, trabajamos 24/7",
    tgContact: "Contactar en Telegram",
    waContact: "Contactar en WhatsApp"
  }
};

export { logoMap as a, badgeLabels as b, labl as l, renderStars as r, tooltips as t };
