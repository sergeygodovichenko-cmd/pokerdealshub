import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content model — single source of truth.
 *
 * Localized fields follow the "source + generated" model:
 *   - top-level localized fields (name, description, geo, bonus, intro, body)
 *     hold the SOURCE language (ru) — these are authored/edited by hand.
 *   - `i18n.<locale>` holds machine-generated translations produced by the
 *     translation pipeline. Do not edit `i18n` by hand; run `npm run translate`.
 * At render time a locale reads `i18n[locale].<field>` and falls back to the
 * source field when a translation is missing.
 */

// Per-locale translation block (all optional — filled by the pipeline).
const translation = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  geo: z.string().optional(),
  bonus: z.string().optional(),
  intro: z.string().optional(),
  body: z.string().optional(),
});

const deals = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/deals" }),
  schema: z.object({
    // --- non-localized structural fields ---
    app: z.string(),
    club: z.string().optional(),
    union: z.string().optional(),
    logo: z.string(),
    logoimage: z.string(),
    logoalt: z.string().optional(),
    format: z.string(),
    type: z.enum(["Centralized", "Decentralized"]),
    rakeback: z.string(),
    fixrb: z.string().optional(),
    affiliateLink: z.string().url(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    badges: z.array(z.string()).default([]),
    ratings: z.object({
      mtt: z.number(),
      cash: z.number(),
      plo: z.number(),
      nlh: z.number(),
    }),
    chipPrice: z
      .object({ usd: z.number().optional(), brl: z.number().optional() })
      .optional(),

    // --- localized SOURCE fields (ru) ---
    name: z.string(),
    description: z.string(),
    geo: z.string(),
    bonus: z.string().default(""),
    intro: z.string().optional(),
    body: z.string().optional(),

    // --- generated translations (managed by `npm run translate`) ---
    i18n: z.record(z.string(), translation).default({}),
  }),
});

// Per-locale translation block for guides (filled by the pipeline).
const guideTranslation = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  body: z.string().optional(),
});

const guides = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/guides" }),
  schema: z.object({
    date: z.coerce.date(),
    category: z.enum(["guide", "review"]).default("guide"),
    draft: z.boolean().default(false),

    // localized SOURCE fields (ru)
    title: z.string(),
    description: z.string(),
    body: z.string(),

    // generated translations (managed by `npm run translate`)
    i18n: z.record(z.string(), guideTranslation).default({}),
  }),
});

export const collections = { deals, guides };
