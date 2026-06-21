# PokerDealsHub — Roadmap / TODO

Status of the refactor + the SEO/LLM recommendations. Branch: `source` (production cutover pending).

## ✅ Done
- Single source of truth: Astro Content Collections (`deals`, `guides`, `pages`) + Zod schema.
- One localized `[lang]` route tree (no more duplicated en/ru/uz trees); `deals.json`/`guides.json` removed.
- 15 locales live (ru source + en, uz, uk, it, de, es, pt, fr, tr, he, ar, id, vi, fil); RTL for he/ar.
- Agent translation workflow: `i18n:check`/`i18n:stamp`, glossary, AGENTS.md rule (always translate on edit).
- Opus QA pass across all locales (fixed leaks, grammar, adaptation).
- `filterContent` (filter/category landing copy) translated into all 15 locales.
- Deal hide/unhide: `hidden` flag + `npm run deal:hide/show/list` (instant, reversible).
- SEO/LLM baseline: AI-crawler `robots.txt`, `/llms.txt` + `/llms-full.txt`, indexable root, JSON-LD (Organization/Offer/Article/Breadcrumb/WebSite), hreflang + canonical + sitemap.

## ▶️ Next (priority)
- [ ] **#8 Cutover** — switch Netlify to build from `source` (`netlify.toml` ready). Tag current dist for rollback → branch-deploy preview → approve → point `main` at source. Makes everything live on pokerdealshub.com.

## 🔎 SEO / LLM optimization backlog
Paid ads are banned, so organic SEO + LLM/answer-engine recommendation is the growth channel.

**On-site:**
- [ ] **FAQ sections + `FAQPage` JSON-LD** on guides (and key deal pages). LLMs cite Q&A heavily. Add an optional `faq: [{q,a}]` field to the guides/deals collections; translate per locale.
- [ ] **Visible "Last updated" date + author (Organization/PDH)** on guides — freshness & authority signal.
- [ ] **RSS feed** for guides (`/rss.xml`, per-locale) — content-discovery + freshness.
- [ ] **`Article` → `BlogPosting` / `dateModified`** and richer guide schema (author, publisher already partial).
- [ ] Clean up Russian `console.log` strings in `GA4.astro` (dev-only, not content, but tidy).
- [ ] Consider per-deal SEO `seoTitle`/`seoDescription` (currently uses name/description).
- [ ] Image `alt` text fully localized + `astro:assets` optimization for hero/logos.

**Off-site (highest leverage for LLM recommendation):**
- [ ] Build consistent brand mentions/reviews on poker forums, Reddit, directories (LLMs weight third-party sources most).
- [ ] Keep entity identity consistent everywhere (name, description, contact, social `sameAs`).
- [ ] Monitor: periodically ask ChatGPT/Perplexity/Gemini about PokerDealsHub; watch AI-crawler hits in Netlify logs.

**Explicitly NOT doing:**
- Faking `AggregateRating` from editorial discipline ratings (schema-spam / penalty risk) — only with real user reviews.

## 🧹 Cleanup / minor
- [ ] Collapse `playpoker` to `[lang]` (currently per-lang en/ru/uz; not in main nav, so deferred).
- [ ] Decide whether to translate the 5 brand badges (Top Deal!, Blockchain RNG, USA players, Australia, PDH club) — currently English by design.
