/**
 * One-off migration: src/data/deals.json -> src/content/deals/<slug>.yaml
 *
 * Moves structural + short localized fields into the deals content collection
 * using the "source(ru) + i18n" model. Real affiliate links (previously only
 * in per-deal .astro files) are injected here. Rich `body` content is migrated
 * separately.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const SOURCE = "ru";
const TARGET_LOCALES = ["en", "es", "uz"];

// Real affiliate links extracted from the per-deal .astro files.
// All other deals are joined via the PDH Telegram manager.
const AFFILIATE = {
  coinpoker:
    "https://record.coinpokeraffiliates.com/_1qKODGv34W1fWQTENI37dGNd7ZgqdRLk/1/",
  "888poker":
    "https://ic.aff-handler.com/C/47431?sr=1851781&anid=10997111",
};
const TELEGRAM = "https://t.me/pokerdealshub";

const deals = JSON.parse(fs.readFileSync("src/data/deals.json", "utf8"));
const outDir = "src/content/deals";
fs.mkdirSync(outDir, { recursive: true });

const pick = (obj, lang) => (obj && obj[lang] ? obj[lang] : "");

for (const d of deals) {
  const i18n = {};
  for (const L of TARGET_LOCALES) {
    const t = {};
    if (pick(d.name, L)) t.name = d.name[L];
    if (pick(d.description, L)) t.description = d.description[L];
    if (pick(d.geo, L)) t.geo = d.geo[L];
    if (pick(d.bonus, L)) t.bonus = d.bonus[L];
    if (Object.keys(t).length) i18n[L] = t;
  }

  const entry = {
    app: d.app,
    ...(d.club ? { club: d.club } : {}),
    ...(d.union ? { union: d.union } : {}),
    logo: d.logo,
    logoimage: d.logoimage,
    ...(d.logoalt ? { logoalt: d.logoalt } : {}),
    format: d.format,
    type: d.type,
    rakeback: d.rakeback,
    ...(d.fixrb ? { fixrb: d.fixrb } : {}),
    affiliateLink: AFFILIATE[d.slug] || d.link || TELEGRAM,
    featured: !!d.featured,
    order: d.order ?? 999,
    badges: d.badges || [],
    ratings: d.ratings,
    ...(d.chipPrice ? { chipPrice: d.chipPrice } : {}),

    // localized source (ru)
    name: pick(d.name, SOURCE),
    description: pick(d.description, SOURCE),
    geo: pick(d.geo, SOURCE),
    bonus: pick(d.bonus, SOURCE),

    // generated translations
    i18n,
  };

  const out = yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' });
  fs.writeFileSync(path.join(outDir, `${d.slug}.yaml`), out);
  console.log("wrote", `${d.slug}.yaml`, AFFILIATE[d.slug] ? "(real affiliate link)" : "");
}

console.log(`\nDone: ${deals.length} deals -> ${outDir}/`);
