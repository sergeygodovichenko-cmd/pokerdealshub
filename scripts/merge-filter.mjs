import fs from 'node:fs';
import path from 'node:path';
const fcPath = 'src/data/filterContent.json';
const fc = JSON.parse(fs.readFileSync(fcPath, 'utf8'));
const dir = 'src/content/_trans/filter';
let n = 0;
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.json'))) {
  const lang = f.replace(/\.json$/, '');
  fc[lang] = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  n++;
}
fs.writeFileSync(fcPath, JSON.stringify(fc, null, 2));
fs.rmSync(dir, { recursive: true, force: true });
console.log('merged', n, 'locales. filterContent now has:', Object.keys(fc).join(', '));
