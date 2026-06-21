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

## ✅ Done (cont.)
- **#8 Cutover** — production is live on pokerdealshub.com; Netlify production branch = `source` (push to source auto-deploys). Rollback: republish Netlify deploy `main@e06bdce` / backup branch `backup-prod-dist-20260621`.
- Root `/` language hub: lists all 15 locales (native names) + hreflang for 15 + smart browser-language redirect (was only en/ru).

## ▶️ Next (priority)
- [ ] **Translate the `playpoker` landing to all 15 locales** — it's still only en/ru/uz and per-lang (not in the `[lang]` system). Collapse to `[lang]/playpoker.astro` (extract its ~20 hardcoded strings) + translate, OR move it into the `pages` collection. (Confirm it's still used for campaigns first.)

## 🤖 AI agent for incoming requests (TG + Discord) — separate service (task #14)
Always-on bot (NOT the static site). Telegram + Discord → Claude agent grounded on PDH content (`llms-full.txt` / deals+guides), answers competently in the query language. Two-way human handoff (agent escalates; operator can take over → pauses agent for that thread → release). Needs persistent host (VPS/Fly/Railway) + `ANTHROPIC_API_KEY` at runtime. Recommend Claude Agent SDK. Guardrails: 18+, no payments/credentials → human. Open scoping questions: channels (existing TG bot? Discord server?), agent scope (info-only vs lead-handling), operators/handoff UX, hosting.

## ♻️ Site: Discord instead of WhatsApp
- [ ] Replace WhatsApp (`wa.me/...`) with Discord on deal contact block, About, Add-deal (all 15 locales). Needs the Discord invite URL.

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
