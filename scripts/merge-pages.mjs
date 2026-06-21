/**
 * Build the `pages` collection from extracted files in src/content/pages/_ex/:
 *   <slug>.<lang>.html  (body)  +  <slug>.<lang>.json  ({title, description})
 * -> src/content/pages/<slug>.yaml  (ru source + i18n)
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const SOURCE = "ru";
const TARGET_LOCALES = ["en", "uz"];
const dir = "src/content/pages";
const ex = path.join(dir, "_ex");
const ORDER = { about: 1, "add-deal": 2, privacy: 3, terms: 4 };

const slugs = [...new Set(fs.readdirSync(ex).map((f) => f.replace(/\.(ru|en|uz)\.(html|json)$/, "")).filter((s) => !s.includes(".")))];

const read = (slug, lang) => {
  const h = path.join(ex, `${slug}.${lang}.html`);
  const j = path.join(ex, `${slug}.${lang}.json`);
  if (!fs.existsSync(h) || !fs.existsSync(j)) return null;
  return { body: fs.readFileSync(h, "utf8").trim(), ...JSON.parse(fs.readFileSync(j, "utf8")) };
};

let count = 0;
for (const slug of slugs) {
  const src = read(slug, SOURCE);
  if (!src) { console.warn(`! ${slug}: no ru source, skip`); continue; }

  const i18n = {};
  for (const L of TARGET_LOCALES) {
    const t = read(slug, L);
    if (t) i18n[L] = { title: t.title, description: t.description, body: t.body };
  }

  const entry = {
    order: ORDER[slug] ?? 99,
    title: src.title,
    description: src.description ?? "",
    body: src.body,
    i18n,
  };
  fs.writeFileSync(path.join(dir, `${slug}.yaml`), yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' }));
  count++;
  console.log("wrote", `${slug}.yaml`, `(${[SOURCE, ...Object.keys(i18n)].join(",")})`);
}
console.log(`\nDone: ${count} pages.`);
