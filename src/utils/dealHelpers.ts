export const logoMap: Record<string, string> = {
  pppoker: '/image.webp',
  xpoker: '/xpoker_logo.webp',
  clubgg: '/clubGG_logo.webp',
  phd_logo_new: '/PDH_logo_no_background.webp',
  nuts_poker_logo: '/nuts_poker_logo.webp',
  pokerbros_logo: '/pokerbros_logo.webp',
  coinpoker_logo: '/coinpoker_logo.webp',
};

export const renderStars = (rating: number) =>
  '★'.repeat(rating) + '☆'.repeat(5 - rating);


export const badgeLabels = {
  ru: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 USA players',
    asia: '🏮 Asia',
    topDeal: '💎 Top Deal!',
    pdhClub: '🔥 PDH club',
    pdhPartner: '🤝 PDH partner',
    centralized: '🏬 Centralized',
    soft: '🐟 Soft game',
    highRakeback: '💰 High Rakeback',
    verified: '✅ Verified',
    allLimits: '📊 All Limits',
    nonStop: '⏱ NonStop',
    international: '🌍 International',
    australia: '🇦🇺 Australia',
  },
  en: { 
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 USA players',
    asia: '🏮 Asia',
    topDeal: '💎 Top Deal!',
    pdhClub: '🔥 PDH club',
    pdhPartner: '🤝 PDH partner',
    centralized: '🏬 Centralized',
    soft: '🐟 Soft game',
    highRakeback: '💰 High Rakeback',
    verified: '✅ Verified',
    allLimits: '📊 All Limits',
    nonStop: '⏱ NonStop',
    international: '🌍 International',
    australia: '🇦🇺 Australia',
   },
  es: {
    blockchain: "🔗 RNG en blockchain",
    usaPlayers: '🇺🇸 Jugadores USA',
    asia: '🏮 Asia',  
    topDeal: '💎 Oferta top',
    pdhClub: '🔥 Club PDH',
    pdhPartner: '🤝 Socio PDH',
    centralized: '🏬 Centralizado',
    soft: '🐟 Juego suave',
    highRakeback: '💰 Alto rakeback',
    verified: '✅ Verificado',
    allLimits: '📊 Todos los límites',
    nonStop: '⏱ 24/7',
    international: '🌍 Internacional',
    australia: '🇦🇺 Australia',
   },
  uz: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 AQSh o‘yinchilari',
    asia: '🏮 Osiyo',
    topDeal: '💎 Top bitim',
    pdhClub: '🔥 PDH klubi',
    pdhPartner: '🤝 PDH hamkori',
    centralized: '🏬 Markazlashgan',
    soft: '🐟 Yengil o‘yin',
    highRakeback: '💰 Yuqori rakebek',
    verified: '✅ Tasdiqlangan',
    allLimits: '📊 Barcha limitlar',
    nonStop: '⏱ 24/7',
    international: '🌍 Xalqaro',
    australia: '🇦🇺 Avstraliya',
   },
  uk: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 USA players',
    asia: '🏮 Азія',
    topDeal: '💎 Top Deal!',
    pdhClub: '🔥 PDH club',
    pdhPartner: '🤝 PDH partner',
    centralized: '🏬 Централізований',
    soft: '🐟 М’яка гра',
    highRakeback: '💰 Високий рейкбек',
    verified: '✅ Перевірено',
    allLimits: '📊 Усі ліміти',
    nonStop: '⏱ 24/7',
    international: '🌍 Міжнародний',
    australia: '🇦🇺 Australia',
   },
  it: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 USA players',
    asia: '🏮 Asia',
    topDeal: '💎 Top Deal!',
    pdhClub: '🔥 PDH club',
    pdhPartner: '🤝 PDH partner',
    centralized: '🏬 Centralizzato',
    soft: '🐟 Gioco soft',
    highRakeback: '💰 Rakeback alto',
    verified: '✅ Verificato',
    allLimits: '📊 Tutti i limiti',
    nonStop: '⏱ 24/7',
    international: '🌍 Internazionale',
    australia: '🇦🇺 Australia',
   },
  de: {
    blockchain: "🔗 Blockchain RNG",
    usaPlayers: '🇺🇸 USA players',
    asia: '🏮 Asien',
    topDeal: '💎 Top Deal!',
    pdhClub: '🔥 PDH club',
    pdhPartner: '🤝 PDH partner',
    centralized: '🏬 Zentralisiert',
    soft: '🐟 Soft Game',
    highRakeback: '💰 Hoher Rakeback',
    verified: '✅ Verifiziert',
    allLimits: '📊 Alle Limits',
    nonStop: '⏱ 24/7',
    international: '🌍 International',
    australia: '🇦🇺 Australia',
   },
};

export const tooltips = {
  ru: {
    featured:
      'Клуб под управлением PokerDealsHub. Это гарантирует прозрачность, надёжность и сервис премиум-класса 24/7.',
  },
  en: {
    featured:
      'Club managed by PokerDealsHub. This ensures transparency, reliability, and premium-class service 24/7.',
  },
  es: {
    featured:
      'Club gestionado por PokerDealsHub. Esto garantiza transparencia, fiabilidad y un servicio de primera clase las 24 horas.',
  },
  uz: {
    featured:
      'PDH tomonidan boshqariladigan klub. Bu shaffoflik, ishonchlilik va 24/7 premium xizmatni kafolatlaydi.',
  },
  uk: {
    featured:
      'Клуб під управлінням PokerDealsHub. Це гарантує прозорість, надійність і сервіс преміумкласу 24/7.',
  },
  it: {
    featured:
      'Club gestito da PokerDealsHub. Questo garantisce trasparenza, affidabilità e un servizio premium 24/7.',
  },
  de: {
    featured:
      'Club unter der Leitung von PokerDealsHub. Das garantiert Transparenz, Zuverlässigkeit und erstklassigen Premium-Service rund um die Uhr.',
  },
};

export const labl = {
  ru: {
    club: 'Клуб:',
    union: 'Союз:',
    geog: 'География:',
    platform: 'Платформа:',
    upTo: 'Рейкбэк до',
    bonusL: "Бонус:",
    getDeal: 'Получить сделку',
    rateBy: 'Рейтинг по дисциплинам',
    verif: 'Все предложения проходят внутреннюю проверку PDH. Мы гарантируем честные условия сотрудничества и клиентскую поддержку высшего класса в любое время суток.',
    readyJoin: 'Есть вопросы? Готовы вступить в клуб?',
    weAreHere: `Все сделки предоставляются бесплатно. Членство в клубах без KYC (не нужно отправлять документы).`,
    weAreHereNoKyc: `Узнайте о дополнительных преимуществах для вас и получите ссылку для регистрации.`,
    weAreHere2: `Пишите менеджеру PDH, работаем 24/7`,
    tgContact: 'Написать в Telegram',
    waContact: 'Написать в WhatsApp',
  },
  en: {
    club: 'Club:',
    union: 'Union:',
    geog: 'Geography:',
    platform: 'Platform:',
    upTo: 'Rakeback up to',
    bonusL: "Bonus:",
    getDeal: 'Get the deal',
    rateBy: 'Game type ratings',
    verif: 'All offers undergo internal verification by PDH. We guarantee fair cooperation terms and top-class customer support available around the clock.',
    readyJoin: 'Got questions? Ready to join the club?',
    weAreHere: 'All deals are provided free of charge. Club membership is KYC-free (no documents required).',
    weAreHereNoKyc: `Learn about your additional benefits and get your registration link.`,
    weAreHere2: 'Message a PDH manager — we’re online 24/7.',
    tgContact: 'Message on Telegram',
    waContact: 'Message on WhatsApp',
  },
  es: {
    club: 'Club:',
    union: 'Unión:',
    geog: 'Geografía:',
    platform: 'Plataforma:',
    upTo: 'Rakeback hasta',
    bonusL: "Bono:",
    getDeal: 'Obtener esta oferta',
    rateBy: 'Calificación por disciplinas',
    verif: 'Todas las ofertas pasan una verificación interna de PDH. Garantizamos condiciones de cooperación justas y atención al cliente de primera clase disponible las 24 horas del día.',
    readyJoin: '¿Tiene preguntas? ¿Listo para unirse al club?',
    weAreHereNoKyc: `Conoce tus beneficios adicionales y obtén tu enlace de registro.`,
    weAreHere: 'Todas las ofertas se proporcionan de forma gratuita. La membresía en los clubes no requiere KYC (no es necesario enviar documentos).',
    weAreHere2: 'Escriba al gerente de PDH, trabajamos 24/7',
    tgContact: 'Contactar en Telegram',
    waContact: 'Contactar en WhatsApp',
  },
  uz: {
    club: 'Klub:',
    union: 'Ittifoq:',
    geog: 'Geografiya:',
    platform: 'Platforma:',
    upTo: 'Rakebekgacha',
    bonusL: "Bonus:",
    getDeal: 'Bitimni olish',
    rateBy: 'Intizomlar reytingi',
    verif: 'Barcha takliflar PDH tomonidan ichki tekshiruvdan o‘tadi. Adolatli shartlar va 24/7 qo‘llab-quvvatlashni kafolatlaymiz.',
    readyJoin: 'Savollar bormi? Klubga qo‘shilishga tayyormisiz?',
    weAreHere: 'Barcha bitimlar bepul. Klubga a’zolik KYC talab qilmaydi (hujjatlar kerak emas).',
    weAreHereNoKyc: `Qo‘shimcha imtiyozlar va ro‘yxatdan o‘tish havolasini oling.`,
    weAreHere2: `PDH menejeriga yozing — 24/7 onlaynmiz.`,
    tgContact: 'Telegramda yozish',
    waContact: 'WhatsAppda yozish',
  },
  uk: {
    club: 'Клуб:',
    union: 'Союз:',
    geog: 'Географія:',
    platform: 'Платформа:',
    upTo: 'Рейкбек до',
    bonusL: "Бонус:",
    getDeal: 'Отримати сделку',
    rateBy: 'Рейтинг за дисциплінами',
    verif: 'Усі пропозиції проходять внутрішню перевірку PDH. Ми гарантуємо чесні умови співпраці та клієнтську підтримку найвищого класу цілодобово.',
    readyJoin: 'Є запитання? Готові вступити до клубу?',
    weAreHere: 'Усі сделки надаються безкоштовно. Членство в клубах без KYC (не потрібно надсилати документи).',
    weAreHereNoKyc: `Дізнайтеся про додаткові переваги для вас і отримайте посилання для реєстрації.`,
    weAreHere2: 'Напишіть менеджеру PDH — ми онлайн 24/7.',
    tgContact: 'Написати в Telegram',
    waContact: 'Написати у WhatsApp',
  },
  it: {
    club: 'Club:',
    union: 'Union:',
    geog: 'Geografia:',
    platform: 'Piattaforma:',
    upTo: 'Rakeback fino al',
    bonusL: "Bonus:",
    getDeal: 'Ottieni il deal',
    rateBy: 'Valutazioni per disciplina',
    verif: 'Tutte le offerte vengono verificate internamente da PDH. Garantiamo condizioni di collaborazione corrette e un’assistenza clienti di prima classe disponibile 24 ore su 24.',
    readyJoin: 'Hai domande? Pronto a entrare nel club?',
    weAreHere: 'Tutti i deal sono offerti gratuitamente. L’iscrizione ai club è senza KYC (nessun documento richiesto).',
    weAreHereNoKyc: `Scopri i tuoi vantaggi aggiuntivi e ottieni il tuo link di registrazione.`,
    weAreHere2: 'Scrivi a un manager PDH — siamo online 24/7.',
    tgContact: 'Scrivi su Telegram',
    waContact: 'Scrivi su WhatsApp',
  },
  de: {
    club: 'Club:',
    union: 'Union:',
    geog: 'Geografie:',
    platform: 'Plattform:',
    upTo: 'Rakeback bis zu',
    bonusL: "Bonus:",
    getDeal: 'Deal sichern',
    rateBy: 'Bewertungen nach Disziplin',
    verif: 'Alle Angebote durchlaufen eine interne Prüfung durch PDH. Wir garantieren faire Kooperationsbedingungen und erstklassigen Kundensupport rund um die Uhr.',
    readyJoin: 'Noch Fragen? Bereit, dem Club beizutreten?',
    weAreHere: 'Alle Deals sind kostenlos. Die Club-Mitgliedschaft ist KYC-frei (keine Dokumente erforderlich).',
    weAreHereNoKyc: `Erfahre mehr über deine zusätzlichen Vorteile und erhalte deinen Registrierungslink.`,
    weAreHere2: 'Schreibe einem PDH-Manager — wir sind rund um die Uhr online.',
    tgContact: 'Auf Telegram schreiben',
    waContact: 'Auf WhatsApp schreiben',
  },
};

export interface Deal {
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
  club?: string;
  app: string;
  union: string;
  geo: string | Record<string, string>;
  format: string;
  type: string;
  rakeback: string;
  bonus?: string | Record<string, string>;
  logo: string;
  featured: boolean;
  badges?: string[];
  ratings: {
    mtt: number;
    cash: number;
    plo: number;
    nlh: number;
  };
}


export const getLogoUrl = (logo: string): string => {
  return logoMap[logo] || '/image.webp';
};

/**
 * Resolve a deal collection entry's localized fields for a language,
 * falling back to the source language (ru) when a translation is missing.
 * Pairs with the "source + generated i18n" content model.
 */
export function localizeDeal(data: any, lang: string) {
  const t = (data.i18n && data.i18n[lang]) || {};
  return {
    name: t.name ?? data.name,
    description: t.description ?? data.description,
    geo: t.geo ?? data.geo,
    bonus: t.bonus ?? data.bonus ?? '',
    intro: t.intro ?? data.intro,
    body: t.body ?? data.body,
  };
}

/** Resolve a guide entry's localized fields for a language (i18n -> ru fallback). */
export function localizeGuide(data: any, lang: string) {
  const t = (data.i18n && data.i18n[lang]) || {};
  return {
    title: t.title ?? data.title,
    description: t.description ?? data.description,
    body: t.body ?? data.body,
  };
}

/** Resolve a static page entry's localized fields for a language (i18n -> ru fallback). */
export function localizePage(data: any, lang: string) {
  const t = (data.i18n && data.i18n[lang]) || {};
  return {
    title: t.title ?? data.title,
    description: t.description ?? data.description ?? "",
    body: t.body ?? data.body,
  };
}
