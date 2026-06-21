# PokerDealsHub — Project Context (for strategy sessions)

> Paste this into a Claude chat to strategize about PokerDealsHub. The assistant has
> NO access to the repo — this doc is the full context. It's a business + product brief,
> not code.

## TL;DR
**PokerDealsHub (PDH, pokerdealshub.com)** is an independent, multilingual directory of
**poker rakeback deals** for online poker apps and private clubs/unions. It connects players
with trusted clubs, verified unions and reliable agents offering high rakeback (~33–70%),
transparent terms and guaranteed payouts; membership is KYC-free. Players join through a PDH
manager (Telegram) or an affiliate link. PDH takes no commission from players; revenue is
affiliate / rakeback-agent based.

## Business model & the hard constraint
- **Revenue:** affiliate / agent commissions from the clubs & unions, not from players.
- **Paid ads are effectively banned for this (gambling) vertical.** So the growth channel is
  **organic: SEO + recommendation by LLMs / answer engines** (ChatGPT, Gemini, Claude,
  Perplexity, Grok). ChatGPT already recommends PDH; strengthening that is priority #1.
- Vertical constraints: 18+, gambling-adjacent platform restrictions; brand leans on
  trust / transparency / no-KYC / "verified".

## Audience & offering
- Players (recreational + regulars) hunting the best rakeback + soft games ("soft fields").
- Apps covered: PPPoker, ClubGG, X-Poker, PokerBros, CoinPoker, 888poker (centralized rooms +
  decentralized club-based apps).
- ~11 deals across unions/clubs (NUTS PrimeTime, El Dorado, Black Sea, Massiv Union, Paradise,
  PPPfish, Rake2High, Flamingoo, NUTS Poker, CoinPoker, 888poker). Each has rakeback %, bonus,
  geo, per-discipline ratings (MTT/Cash/PLO/NLH).
- Regions: CIS, Asia, Europe, LatAm/Brazil, USA, Australia.
- Funnel/contact: Telegram @pokerdealshub (manager-assisted join). Discord being added.

## Tech & deploy (what's feasible)
- Astro 5 **static site (SSG)** — fully pre-rendered HTML, very fast, hosted on **Netlify**
  (auto-deploys on git push). No CMS/DB: content lives as files in git and is managed by an
  **AI agent (Claude Code)** that edits, translates, commits and pushes.
- Anything dynamic/interactive (e.g. a chatbot) must live OUTSIDE the static site as a separate
  service.

## Languages (15)
- **Source of truth = Russian** (authored/verified by the operator). All other locales are
  **machine-translated by the agent** in idiomatic poker style, QA'd, and baked into the repo
  (fully static — no runtime translation, no per-page LLM cost).
- Active: ru (source), en, uz, uk, it, de, es, pt-BR, fr, tr, **he & ar (right-to-left)**, id, vi, fil.
- Adding a market = add the locale + run translation. The root domain auto-routes visitors to
  their language.

## Content
- **Deals** — structured data + editorial body; can be hidden instantly & reversibly.
- **Guides/articles (~7)** — SEO content (rake & rakeback, "is the RNG rigged", decentralized
  poker safety, PPPoker guides, bomb-pot/double-board, and a "how to play mobile poker" guide).
- **Filter/category landing pages** — by app, union, geography, game type; SEO-targeted; all
  translated. Big surface area of long-tail SEO pages.
- **Static pages** — about, terms, privacy, add-deal.

## SEO / LLM optimization — current state
- robots.txt explicitly **welcomes AI crawlers** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
  anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, etc.).
- **/llms.txt** (curated index + "facts for citation") and **/llms-full.txt** (full site text)
  for LLM ingestion.
- JSON-LD: Organization, WebSite, Offer (per deal), Article (per guide), BreadcrumbList.
  hreflang + canonical across 15 locales; sitemap with alternates; indexable language-hub root.
- Static HTML → trivially crawlable & citable; fast Core Web Vitals.
- **Biggest untapped lever is OFF-SITE:** LLMs weight third-party signals (forums, Reddit,
  reviews, directories, consistent brand mentions) more than your own copy. On-site is largely
  done; off-site presence is the frontier.

## What was just shipped (major overhaul)
- Rebuilt from a duplicated 4-language page tree + manual "commit the built site to git" deploy
  → a single localized tree, typed content collections, agent-managed source+translation
  workflow, and Netlify build-from-source (push = deploy).
- 3 → 15 languages incl. RTL; all translations QA'd to native level.
- Fixed geo filters (had returned 0 results on non-English locales).
- Instant reversible deal hide/show.
- SEO/LLM baseline (above). Production cutover complete — the new site is live.

## Open initiatives / roadmap (strategy targets)
1. **AI support agent (Telegram + Discord)** — answers incoming player questions competently &
   completely **in the language of the message**, grounded on PDH's content; **two-way human
   handoff**: the agent escalates to a human, and a human operator can take over a conversation
   (pausing the agent for that thread) and later hand it back. It's an always-on bot **service**
   (separate from the static site), would use the Claude Agent SDK + an LLM API key + a small
   host. Guardrails: 18+, never handle payments/credentials → route to a human. Open questions:
   scope (info-only vs. guiding registration / collecting leads / sending affiliate links),
   operator workflow, hosting.
2. **Discord** added alongside Telegram (and replacing WhatsApp on the site).
3. SEO/LLM backlog: FAQ + FAQPage schema on guides; visible "updated" dates + author; RSS;
   and especially **off-site mentions / link-building**; plus monitoring LLM citations.
4. Possible: more languages/markets, more deals, optimizing the discovery → Telegram → joined-deal funnel.

## The operator
Solo, Russian-speaking. Runs the entire site through an AI coding agent — authors content in
Russian, the agent translates + deploys. Wants everything fast, automated, and agent-manageable.

## Useful strategy topics for this session
- Maximizing LLM/answer-engine recommendation (GEO) — on-site and especially off-site tactics.
- Designing the Telegram/Discord AI support agent: capabilities, handoff UX, guardrails, and how
  it can lift conversions without being spammy.
- Content & language prioritization: which guides / landing pages / markets to push next.
- The funnel: turning organic discovery into Telegram contacts into joined deals.
- Competitive positioning & trust-building in a vertical where paid ads aren't an option.
