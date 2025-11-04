// src/config/dealsConfig.js

const dealsConfig = {
    perPage: 8,
    defaultPage: 0,
  
    sortDeals: (a, b) => {
      const priority = {
        topDeal: -3,
        pdhClub: -2,
        pdhPartner: -1
      };
  
      const pa = a.badges?.some(b => priority[b] !== undefined)
        ? Math.min(...a.badges.map(b => priority[b] ?? 0))
        : 0;
      const pb = b.badges?.some(b => priority[b] !== undefined)
        ? Math.min(...b.badges.map(b => priority[b] ?? 0))
        : 0;
  
      return pa - pb || (a.order ?? 999) - (b.order ?? 999);
    }
  };

export { dealsConfig as d };
