import { getCollection } from "astro:content";
import { locales } from "../i18n/ui";

const LOCALIZED = ["name", "description", "geo", "bonus", "intro", "body"] as const;

/**
 * Deals from the content collection, reshaped to the legacy `deals.json` form:
 * each localized field becomes a `{ [locale]: value }` map (translation with ru
 * fallback). This lets existing components (DealCard, DealsList, RelatedDeals,
 * filterDeals) keep using `deal.name[lang]` etc. for every active locale.
 */
export async function getDeals() {
  const entries = (await getCollection("deals")).filter((e) => !e.data.hidden);
  const deals = entries.map((e) => {
    const data: any = e.data;
    const d: any = { slug: e.id, ...data };
    for (const f of LOCALIZED) {
      const map: Record<string, string> = {};
      for (const L of locales) map[L] = data.i18n?.[L]?.[f] ?? data[f] ?? "";
      d[f] = map;
    }
    delete d.i18n;
    return d;
  });
  return deals;
}
