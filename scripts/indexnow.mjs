/**
 * IndexNow submitter — pings Bing / Yandex / Seznam (one endpoint fans out) with the
 * site's URLs so they re-crawl fast after a deploy. This is the "back door" into
 * ChatGPT Search (Bing-backed): fresh pages get discovered in minutes, not days.
 *
 * Ownership is proven by the key file at the site root (public/<KEY>.txt) — no
 * Bing Webmaster account required for IndexNow itself.
 *
 * Runs after `astro build` on Netlify (see netlify.toml). Self-guards so it only
 * fires on a real deploy, and never throws — a failed ping must not fail the build.
 *
 *   node scripts/indexnow.mjs            # pings only when CONTEXT is a real deploy
 *   node scripts/indexnow.mjs --force    # ping regardless (manual/testing)
 */
import fs from "node:fs";

const KEY = "8b1e4fdfd7733b1fa697bf5e0e1c0c98";
const HOST = "pokerdealshub.com";
const SITEMAP = "dist/sitemap.xml";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const force = process.argv.includes("--force");
const ctx = process.env.CONTEXT; // Netlify: production | branch-deploy | deploy-preview (unset locally)

// Only submit from a genuine deploy (or --force). Never from local test builds or PR previews.
if (!force) {
  if (!ctx) { console.log("[indexnow] no Netlify CONTEXT and no --force — skipping."); process.exit(0); }
  if (ctx === "deploy-preview") { console.log("[indexnow] deploy-preview context — skipping."); process.exit(0); }
}

if (!fs.existsSync(SITEMAP)) {
  console.log(`[indexnow] ${SITEMAP} not found — skipping (run after build).`);
  process.exit(0);
}

const xml = fs.readFileSync(SITEMAP, "utf8");
const urlList = [...new Set(
  [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter((u) => u.startsWith(`https://${HOST}`))
)];

if (!urlList.length) {
  console.log("[indexnow] no matching <loc> URLs in sitemap — skipping.");
  process.exit(0);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urlList.slice(0, 10000), // IndexNow caps at 10k per request
};

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  // 200 OK / 202 Accepted = success. Anything else is logged but non-fatal.
  console.log(`[indexnow] submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
} catch (e) {
  console.warn("[indexnow] ping failed (non-fatal):", e?.message || e);
}
process.exit(0);
