/**
 * One-off migration: src/data/guides.json + src/content/guides/<locale>/<slug>.html
 *   -> src/content/guides/<slug>.yaml  (source ru + i18n, body as HTML)
 *
 * Mirrors the deals model so the translate pipeline treats both uniformly.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const SOURCE = "ru";
const TARGET_LOCALES = ["en", "uz"];
const ALL = [SOURCE, ...TARGET_LOCALES];
const dir = "src/content/guides";

const guides = JSON.parse(fs.readFileSync("src/data/guides.json", "utf8"));

// Read a guide body for a locale (prefer .html), lightly cleaned.
function readBody(slug, locale) {
  const html = path.join(dir, locale, `${slug}.html`);
  if (!fs.existsSync(html)) return null;
  return fs
    .readFileSync(html, "utf8")
    .replace(/<meta\b[^>]*>/gi, "") // stray <meta> don't belong in body
    .replace(/<!--[\s\S]*?-->/g, "") // drop HTML comments (e.g. commented-out <h1>)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

let count = 0;
for (const g of guides) {
  const bodies = {};
  for (const L of ALL) bodies[L] = readBody(g.slug, L);

  if (!bodies[SOURCE]) {
    console.warn(`! ${g.slug}: no ru body found, skipping`);
    continue;
  }

  const i18n = {};
  for (const L of TARGET_LOCALES) {
    const t = {};
    if (g.title?.[L]) t.title = g.title[L];
    if (g.description?.[L]) t.description = g.description[L];
    if (bodies[L]) t.body = bodies[L];
    if (Object.keys(t).length) i18n[L] = t;
  }

  const entry = {
    date: g.date,
    category: g.category === "review" ? "review" : "guide",
    title: g.title?.[SOURCE] ?? g.slug,
    description: g.description?.[SOURCE] ?? "",
    body: bodies[SOURCE],
    i18n,
  };

  fs.writeFileSync(
    path.join(dir, `${g.slug}.yaml`),
    yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' })
  );
  count++;
  console.log("wrote", `${g.slug}.yaml`, `(${ALL.filter((L) => bodies[L]).join(",")})`);
}

console.log(`\nDone: ${count} guides -> ${dir}/`);
