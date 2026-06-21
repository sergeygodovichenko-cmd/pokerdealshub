# AGENTS.md — PokerDealsHub

PokerDealsHub is an **Astro 5 static site** (poker rakeback/affiliate). It has **no CMS** —
content is managed by an AI agent (you) editing files, committing, and pushing.
Netlify rebuilds on push. Keep it 100% static, fast, and SEO/LLM-friendly.

## ⚠️ Prime rule: always translate

ru is the **single source of truth**. The user authors/verifies ru and asks you to
"add a deal", "add an article", etc. **Whenever you add or edit content you MUST, in
the same task, translate every changed field into all active locales** and write them
into the entry's `i18n.<locale>` block. Never leave content ru-only or a ru edit
un-propagated. Active locales: `src/i18n/ui.ts` → `locales` (currently `ru, en, uz`).
Translate in poker style using `docs/translation-glossary.md`.

Verify with: `npm run i18n:stamp && npm run i18n:check` (must end with ✓).

## Content model

Single source of truth = Astro Content Collections (schema: `src/content.config.ts`).
Localized fields use **source(ru) + generated** shape: ru lives at the top level;
translations live under `i18n.<locale>`. Render reads `i18n[locale].field` with ru fallback
(`localizeDeal` / `localizeGuide` in `src/utils/dealHelpers.ts`).

- **Deals** — one YAML per deal in `src/content/deals/<slug>.yaml`.
  Non-localized: `app, club, union, logo, logoimage, logoalt, format, type, rakeback,
  fixrb, affiliateLink, featured, order, badges[], ratings{mtt,cash,plo,nlh}, chipPrice?`.
  Localized (ru source + `i18n`): `name, description, geo, bonus, intro?, body?` (body = HTML).
  `affiliateLink` is the real referral URL (telegram for manager-join deals).
- **Guides** — one YAML per guide in `src/content/guides/<slug>.yaml`.
  `date, category(guide|review), draft`; localized: `title, description, body`(HTML).
- **Filter/landing copy** — still `src/data/filterContent.json` (not yet a collection).

Pages are a single localized tree under `src/pages/[lang]/…` (deal/[slug], guides/[slug],
guides/index). Other page types are still per-lang under `src/pages/{en,ru,uz}/…` and are
being collapsed into `[lang]` too.

## Recipes

**Add a deal**
1. Create `src/content/deals/<slug>.yaml`. Fill all non-localized fields + ru localized fields.
   Set the real `affiliateLink`.
2. Translate `name/description/geo/bonus/body` into each target locale → `i18n.en`, `i18n.uz`.
3. `npm run i18n:stamp && npm run i18n:check` → must be ✓. Then `npm run build`.

**Add a guide/article**
1. Create `src/content/guides/<slug>.yaml` with `date`, `category`, ru `title/description/body`(HTML).
2. Translate into `i18n.en` / `i18n.uz`.
3. Stamp + check + build.

**Edit existing content** — edit the ru source field, then re-translate that field for every
locale (it is now stale; `i18n:check` will flag it). Stamp + check.

**Add a new locale** (towards top-8) — add it to `locales` in `src/i18n/ui.ts`, add its
`ui` strings + `labl`/`badgeLabels`/`tooltips` entries in `dealHelpers.ts`, translate every
collection entry into it, then stamp + check + build.

## Commands

- `npm run build` — static build to `dist/` (also validates collection schemas).
- `npm run i18n:check` — report missing/stale translations (CI gate).
- `npm run i18n:stamp` — record current ru hash on complete locale blocks (run after translating).
- `npm run validate` — `astro check` (types) + build.
- `npm run dev` / `npm run preview`.

## Deploy

Repo `github.com/sergeygodovichenko-cmd/pokerdealshub`; Netlify project `curious-genie-c02f44`
builds `main` via `netlify.toml` (`npm run build` → `dist`). Publish = commit + push to `main`.
(During the refactor, work lives on the `source` branch; production cutover is pending.)
