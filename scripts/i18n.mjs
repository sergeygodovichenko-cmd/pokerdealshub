/**
 * i18n completeness tool for the content collections.
 *
 *   node scripts/i18n.mjs check   (default) — report missing or stale translations
 *   node scripts/i18n.mjs stamp            — record the current ru-source hash on
 *                                            every COMPLETE locale block
 *
 * Translation itself is done by the agent (see docs/translation-glossary.md and
 * the AGENTS.md rule). This tool only verifies that every active locale is present
 * and up to date with the ru source (staleness via a source hash).
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import yaml from "js-yaml";

const SOURCE = "ru";
const TARGETS = readLocales().filter((l) => l !== SOURCE);

// Localizable source fields per collection (non-empty ones must be translated).
const COLLECTIONS = {
  deals: { dir: "src/content/deals", fields: ["name", "description", "geo", "bonus", "intro", "body"] },
  guides: { dir: "src/content/guides", fields: ["title", "description", "body"] },
  pages: { dir: "src/content/pages", fields: ["title", "description", "body"] },
};

function readLocales() {
  try {
    const s = fs.readFileSync("src/i18n/ui.ts", "utf8");
    const m = s.match(/export const locales = \[([^\]]*)\]/);
    if (m) return m[1].split(",").map((x) => x.replace(/['"\s]/g, "")).filter(Boolean);
  } catch {}
  return ["ru", "en", "uz"];
}

function srcHashOf(entry, fields) {
  const src = {};
  for (const f of fields) if (entry[f] != null && entry[f] !== "") src[f] = entry[f];
  return crypto.createHash("sha256").update(JSON.stringify(src)).digest("hex").slice(0, 12);
}

const neededFields = (entry, fields) => fields.filter((f) => entry[f] != null && entry[f] !== "");

const mode = process.argv[2] === "stamp" ? "stamp" : "check";
let problems = 0;
let stamped = 0;

for (const [name, { dir, fields }] of Object.entries(COLLECTIONS)) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".yaml"))) {
    const p = path.join(dir, file);
    const entry = yaml.load(fs.readFileSync(p, "utf8"));
    const hash = srcHashOf(entry, fields);
    const need = neededFields(entry, fields);
    entry.i18n ||= {};
    let changed = false;

    for (const L of TARGETS) {
      const t = entry.i18n[L] || {};
      const missing = need.filter((f) => t[f] == null || t[f] === "");
      const complete = missing.length === 0;

      if (mode === "check") {
        if (!complete) {
          console.log(`✗ ${name}/${file} [${L}] missing: ${missing.join(", ")}`);
          problems++;
        } else if (t.srcHash !== hash) {
          console.log(`~ ${name}/${file} [${L}] STALE — ru source changed since translation`);
          problems++;
        }
      } else if (complete && t.srcHash !== hash) {
        entry.i18n[L] = { ...t, srcHash: hash };
        changed = true;
        stamped++;
      }
    }

    if (mode === "stamp" && changed) {
      fs.writeFileSync(p, yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' }));
    }
  }
}

if (mode === "check") {
  if (problems === 0) {
    console.log(`✓ i18n complete — all locales (${TARGETS.join(", ")}) present and up to date with ru.`);
  } else {
    console.log(
      `\n${problems} issue(s). Translate the missing/stale ru fields into each locale (see docs/translation-glossary.md), then run: npm run i18n:stamp`
    );
    process.exit(1);
  }
} else {
  console.log(`Stamped ${stamped} locale block(s) to current ru source.`);
}
