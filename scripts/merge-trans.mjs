/**
 * Merge translation sidecars src/content/<col>/_trans/<slug>.json ({lang:{fields}})
 * into each entry YAML's i18n[lang] block. Preserves existing locales.
 */
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

for (const col of ["deals", "guides", "pages"]) {
  const dir = `src/content/${col}`;
  const trans = path.join(dir, "_trans");
  if (!fs.existsSync(trans)) continue;
  let n = 0;
  for (const f of fs.readdirSync(trans).filter((x) => x.endsWith(".json"))) {
    const slug = f.replace(/\.json$/, "");
    const yamlPath = path.join(dir, `${slug}.yaml`);
    if (!fs.existsSync(yamlPath)) { console.warn(`! ${col}/${slug}: no yaml`); continue; }
    const entry = yaml.load(fs.readFileSync(yamlPath, "utf8"));
    const sidecar = JSON.parse(fs.readFileSync(path.join(trans, f), "utf8"));
    entry.i18n ||= {};
    for (const [lang, fields] of Object.entries(sidecar)) {
      entry.i18n[lang] = { ...(entry.i18n[lang] || {}), ...fields };
    }
    fs.writeFileSync(yamlPath, yaml.dump(entry, { lineWidth: 120, noRefs: true, quotingType: '"' }));
    n++;
  }
  fs.rmSync(trans, { recursive: true, force: true });
  console.log(`${col}: merged ${n} entries, removed _trans/`);
}
