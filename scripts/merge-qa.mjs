/**
 * Merge QA sidecars src/content/_qa/<lang>.json into the live data:
 *   { deals:{slug:{fields}}, guides:{...}, pages:{...}, filter:{key:{fields}} }
 * - collections: overwrite entry.i18n[lang] with the corrected fields
 * - filterContent.json: overwrite filterContent[lang][key] with corrected fields
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const qaDir = "src/content/_qa";
const fcPath = "src/data/filterContent.json";
const fc = JSON.parse(fs.readFileSync(fcPath, "utf8"));
const colDir = { deals: "src/content/deals", guides: "src/content/guides", pages: "src/content/pages" };

let langs = 0;
for (const file of fs.readdirSync(qaDir).filter((f) => f.endsWith(".json"))) {
  const lang = file.replace(/\.json$/, "");
  const qa = JSON.parse(fs.readFileSync(path.join(qaDir, file), "utf8"));

  for (const col of ["deals", "guides", "pages"]) {
    for (const [slug, fields] of Object.entries(qa[col] || {})) {
      const p = path.join(colDir[col], `${slug}.yaml`);
      if (!fs.existsSync(p)) { console.warn(`! ${col}/${slug}: no yaml`); continue; }
      const entry = yaml.load(fs.readFileSync(p, "utf8"));
      entry.i18n ||= {};
      entry.i18n[lang] = fields; // overwrite with corrected (srcHash re-added by i18n:stamp)
      fs.writeFileSync(p, yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' }));
    }
  }
  if (qa.filter) {
    fc[lang] = { ...(fc[lang] || {}), ...qa.filter };
  }
  langs++;
  console.log(`merged QA for ${lang}`);
}
fs.writeFileSync(fcPath, JSON.stringify(fc, null, 2));
fs.rmSync(qaDir, { recursive: true, force: true });
console.log(`Done: ${langs} languages QA-merged.`);
