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
  fixrb, affiliateLink, featured, hidden, order, badges[], ratings{mtt,cash,plo,nlh}, chipPrice?`,
  and `regions[]` — stable geo-filter keys (subset of europe/asia/cis/australia/america/latam).
  **Always set `regions`** so the deal appears under the geography filters (these match `regions`,
  NOT the localized `geo` text).
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

**Hide / unhide a deal** (instant, reversible) — `npm run deal:hide <slug>` sets `hidden: true`
in the deal's YAML, which removes it from every listing, filter, the homepage, related-deals,
the sitemap, and stops building its detail page. `npm run deal:show <slug>` re-enables it.
`npm run deal:list` shows status. Then build (commit + push to deploy).

**Add a new locale** — ru is the source of truth. A locale needs BOTH the content-collection
i18n AND every hardcoded per-locale dictionary in the templates, or those pages silently fall
back to en (the content `i18n:check` does NOT catch template/data dicts). Full checklist:
1. `src/i18n/ui.ts` — add to the `languages` map + the `locales` array + a full `ui` block
   (and `rtlLocales` if the script is RTL).
2. `src/utils/dealHelpers.ts` — add `badgeLabels` + `tooltips` + `labl` blocks.
3. Template dicts (each has `ru:/en:/…` with a `?? …​.en` fallback): `src/pages/[lang]/index.astro`
   (`STR`), `src/pages/[lang]/guides/index.astro` (`dateLocale`/`catLabel`/`readMore`/`aboutBlock`),
   `src/components/FilterSidebar.astro` (`filterData`), `src/components/DealsList.astro` (`UI`).
4. `src/data/filterContent.json` — add a top-level locale key (27 filter landing pages ×
   `title/description/h1/intro/seoText`, plus `seoTitle` on some).
5. `src/pages/sitemap.xml.ts` — add the `HREFLANG` region code (hreflang in `<head>` is auto).
6. Bump the "N languages" count in `src/pages/llms.txt.ts` and `src/pages/index.astro`.
7. Translate every collection entry into `i18n.<locale>` (note: several deals place `body`
   AFTER their i18n block — translate those too).
8. `npm run i18n:stamp && npm run i18n:check` → ✓, then `npm run build`. Spot-check a
   `/<locale>/` home + deals + a deal page for any en fallback.

## Commands

- `npm run build` — static build to `dist/` (also validates collection schemas).
- `npm run i18n:check` — report missing/stale translations (CI gate).
- `npm run i18n:stamp` — record current ru hash on complete locale blocks (run after translating).
- `npm run deal:list | deal:hide <slug> | deal:show <slug>` — toggle a deal's site-wide visibility.
- `npm run validate` — `astro check` (types) + build.
- `npm run dev` / `npm run preview`.

## Deploy

Repo `github.com/sergeygodovichenko-cmd/pokerdealshub`; Netlify project `curious-genie-c02f44`
builds `main` via `netlify.toml` (`npm run build` → `dist`). Publish = commit + push to `main`.
(During the refactor, work lives on the `source` branch; production cutover is pending.)
