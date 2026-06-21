/**
 * Merge extracted deal bodies (src/content/deals/_bodies/<slug>.<lang>.html)
 * into the deal YAML files:
 *   - ru -> top-level `body` (source)
 *   - en/uz/... -> `i18n.<lang>.body` (generated/migrated translations)
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const SOURCE = "ru";
const dealsDir = "src/content/deals";
const bodiesDir = path.join(dealsDir, "_bodies");

const bodyFiles = fs.readdirSync(bodiesDir).filter((f) => f.endsWith(".html"));
const bySlug = {};
for (const f of bodyFiles) {
  const m = f.match(/^(.*)\.([a-z]{2})\.html$/);
  if (!m) continue;
  const [, slug, lang] = m;
  (bySlug[slug] ||= {})[lang] = fs
    .readFileSync(path.join(bodiesDir, f), "utf8")
    .trim();
}

let count = 0;
for (const [slug, langs] of Object.entries(bySlug)) {
  const yamlPath = path.join(dealsDir, `${slug}.yaml`);
  const entry = yaml.load(fs.readFileSync(yamlPath, "utf8"));
  entry.i18n ||= {};

  for (const [lang, html] of Object.entries(langs)) {
    if (lang === SOURCE) {
      entry.body = html;
    } else {
      entry.i18n[lang] ||= {};
      entry.i18n[lang].body = html;
    }
  }

  fs.writeFileSync(
    yamlPath,
    yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' })
  );
  count++;
  console.log("merged bodies into", `${slug}.yaml`, `(${Object.keys(langs).join(",")})`);
}

console.log(`\nDone: ${count} deals updated.`);
