/**
 * Toggle a deal's visibility (sets `hidden` in its YAML).
 *   node scripts/deal.mjs list            — show all deals + status
 *   node scripts/deal.mjs hide <slug>     — pull a deal from the whole site
 *   node scripts/deal.mjs show <slug>     — re-enable it
 * After toggling, rebuild (commit + push to deploy).
 */
import fs from "node:fs";
import yaml from "js-yaml";

const dir = "src/content/deals";
const [, , action, slug] = process.argv;

if (action === "list") {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".yaml"))) {
    const d = yaml.load(fs.readFileSync(`${dir}/${f}`, "utf8"));
    console.log(`${d.hidden ? "[hidden]" : "[active]"} ${f.replace(".yaml", "")}`);
  }
  process.exit(0);
}

if (!["hide", "show"].includes(action) || !slug) {
  console.error("usage: node scripts/deal.mjs <list | hide <slug> | show <slug>>");
  process.exit(1);
}

const p = `${dir}/${slug}.yaml`;
if (!fs.existsSync(p)) {
  console.error(`no such deal: ${slug}`);
  process.exit(1);
}
const d = yaml.load(fs.readFileSync(p, "utf8"));
d.hidden = action === "hide";
fs.writeFileSync(p, yaml.dump(d, { lineWidth: 120, noRefs: true, quotingType: '"' }));
console.log(`${slug}: hidden=${d.hidden}`);
