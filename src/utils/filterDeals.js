// src/utils/filterDeals.js
export function normalize(str = "") {
    return str.toLowerCase().replace(/\s|-/g, "");
  }
  
  export function filterDeals(deals, filter, lang = "en") {
    const getGeoString = (geo) =>
      typeof geo === "string" ? geo : geo?.[lang] || "";
  
    const map = {
      centralized: (d) => normalize(d.type) === "centralized",
      decentralized: (d) => normalize(d.type) === "decentralized",
      pppoker: (d) => normalize(d.app) === "pppoker",
      clubgg: (d) => normalize(d.app) === "clubgg",
      xpoker: (d) => normalize(d.app) === "xpoker",
      pokerbros: (d) => normalize(d.app) === "pokerbros",
      nutspoker: (d) => normalize(d.app) === "nutspoker",
      coinpoker: (d) => normalize(d.app) === "coinpoker",
      "888poker": (d) => normalize(d.app) === "888poker",
      "nuts-primetime": (d) => normalize(d.union) === "nutsprimetime",
      "massiv-union": (d) => normalize(d.union) === "massivunion",
      eldorado: (d) => normalize(d.union) === "eldorado",
      paradise: (d) => normalize(d.union) === "paradise",
      blacksea: (d) => normalize(d.union) === "blacksea",
      pppfish: (d) => normalize(d.union) === "pppfish",
      rake2high: (d) => normalize(d.union) === "rake2high",
      europe: (d) => getGeoString(d.geo).toLowerCase().includes("europe"),
      asia: (d) => getGeoString(d.geo).toLowerCase().includes("asia"),
      cis: (d) => getGeoString(d.geo).toLowerCase().includes("cis"),
      australia: (d) => getGeoString(d.geo).toLowerCase().includes("australia"),
      america: (d) => {
        const geo = getGeoString(d.geo).toLowerCase();
        return geo.includes("america") || geo.includes("usa") || geo.includes("сша");
      },
      latam: (d) => getGeoString(d.geo).toLowerCase().includes("latin"),
      mtt: (d) => d.ratings?.mtt === 5,
      nlh: (d) => d.ratings?.nlh === 5,
      plo: (d) => d.ratings?.plo === 5,
    };
  
    const fn = map[normalize(filter)];
    return fn ? deals.filter(fn) : [];
  }
  