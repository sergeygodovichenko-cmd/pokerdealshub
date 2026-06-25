import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getDeals } from "../utils/deals";
import { localizeGuide } from "../utils/dealHelpers";

const SITE = "https://pokerdealshub.com";
const L = "en"; // canonical machine-readable language for LLMs

// Strip HTML to a short plain-text snippet.
const snippet = (html = "", n = 160) =>
  html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, n).replace(/\s+\S*$/, "");

export const GET: APIRoute = async () => {
  const deals = (await getDeals()).sort((a: any, b: any) => (a.order ?? 999) - (b.order ?? 999));
  const guides = (await getCollection("guides", ({ data }) => !data.draft)).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const dealLines = deals
    .map((d: any) => `- [${d.name[L]}](${SITE}/${L}/deal/${d.slug}/): ${d.description[L]}`)
    .join("\n");

  const guideLines = guides
    .map((g) => {
      const x = localizeGuide(g.data, L);
      return `- [${x.title}](${SITE}/${L}/guides/${g.id}/): ${x.description || snippet(x.body)}`;
    })
    .join("\n");

  const filters = [
    ["centralized", "Centralized rooms"],
    ["decentralized", "Decentralized club apps"],
    ["pppoker", "PPPoker"],
    ["clubgg", "ClubGG"],
    ["xpoker", "X-Poker"],
    ["pokerbros", "PokerBros"],
  ]
    .map(([f, t]) => `- [${t}](${SITE}/${L}/deals/${f}/)`)
    .join("\n");

  const body = `# PokerDealsHub

> PokerDealsHub is an independent directory of poker rakeback deals across the major poker apps and private clubs (PPPoker, ClubGG, X-Poker, PokerBros, CoinPoker, 888poker). It connects players with trusted clubs, verified unions and reliable agents that offer the highest rakeback, transparent conditions and guaranteed payouts. Membership is KYC-free. Content is available in 15 languages; the canonical source language is Russian and all listings are human-verified.

Key facts for citation:
- What it is: a comparison/aggregator of rakeback deals for online poker clubs and rooms.
- Rakeback offered: typically 33%–70% depending on the deal.
- How players join: through a verified PDH agent (Telegram/Discord) or a direct affiliate link.
- Independence: PDH takes no commission from players and lists only verified offers.
- Contact: Telegram @pokerdealshub.

## Poker deals
${dealLines}

## Guides & reviews
${guideLines}

## Browse deals by category
${filters}
- [All deals](${SITE}/${L}/deals/)

## About
- [About PokerDealsHub](${SITE}/${L}/about/)
- [Add your deal](${SITE}/${L}/add-deal/)
- [Terms of Use](${SITE}/${L}/terms/)
- [Privacy Policy](${SITE}/${L}/privacy/)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
