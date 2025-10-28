export const logoMap: Record<string, string> = {
  pppoker: '/image.webp',
  xpoker: '/xpoker_logo.webp',
  clubgg: '/clubGG_logo.webp',
  phd_logo_new: '/PDH_logo_no_background.webp',
  nuts_poker_logo: '/nuts_poker_logo.webp',
  pokerbros_logo: '/pokerbros_logo.webp',
};

export const renderStars = (rating: number) =>
  '★'.repeat(rating) + '☆'.repeat(5 - rating);


export const badgeLabels = {
  ru: {
    usaPlayers: '🇺🇸 USA players',
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
    usaPlayers: '🇺🇸 USA players',
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
    usaPlayers: '🇺🇸 USA players',
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
};

export const labl = {
  ru: {
    club: 'Клуб:',
    union: 'Союз:',
    geog: 'География:',
    platform: 'Платформа:',
    upTo: 'Рейкбэк до',
    getDeal: 'Получить сделку',
    rateBy: 'Рейтинг по дисциплинам',
    verif: 'Все предложения проходят внутреннюю проверку PDH. Мы гарантируем честные условия сотрудничества и клиентскую поддержку высшего класса в любое время суток.',
    readyJoin: 'Есть вопросы? Готовы вступить в клуб?',
    weAreHere: 'Пишите менеджеру PDH, работаем 24/7',
    tgContact: 'Написать в Telegram',
    waContact: 'Написать в WhatsApp',
  },
  en: {
    club: 'Club:',
    union: 'Union:',
    geog: 'Geography:',
    platform: 'Platform:',
    upTo: 'Rakeback up to',
    getDeal: 'Get the deal',
    rateBy: 'Game type ratings',
    verif: 'All offers undergo internal verification by PDH. We guarantee fair cooperation terms and top-class customer support available around the clock.',
    readyJoin: 'Got questions? Ready to join the club?',
    weAreHere: 'Message a PDH manager — we’re online 24/7.',
    tgContact: 'Message on Telegram',
    waContact: 'Message on WhatsApp',
  },
  es: {
    club: 'Club:',
    union: 'Unión:',
    geog: 'Geografía:',
    platform: 'Plataforma:',
    upTo: 'Rakeback hasta',
    getDeal: 'Obtener esta oferta',
    rateBy: 'Calificación por disciplinas',
    verif: 'Todas las ofertas pasan una verificación interna de PDH. Garantizamos condiciones de cooperación justas y atención al cliente de primera clase disponible las 24 horas del día.',
    readyJoin: '¿Tiene preguntas? ¿Listo para unirse al club?',
    weAreHere: 'Escriba al gerente de PDH, trabajamos 24/7',
    tgContact: 'Contactar en Telegram',
    waContact: 'Contactar en WhatsApp',
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