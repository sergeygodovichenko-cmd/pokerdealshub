import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getDeals } from "../utils/deals";
import { localizeGuide } from "../utils/dealHelpers";

const SITE = "https://pokerdealshub.com";
const L = "en";

// HTML -> readable plain text (keep paragraph/heading breaks).
function toText(html = ""): string {
  return html
    .replace(/<\s*(h[1-6])[^>]*>/gi, "\n\n## ")
    .replace(/<\/\s*h[1-6]\s*>/gi, "\n")
    .replace(/<\s*li[^>]*>/gi, "\n- ")
    .replace(/<\/\s*p\s*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

export const GET: APIRoute = async () => {
  const deals = (await getDeals()).sort((a: any, b: any) => (a.order ?? 999) - (b.order ?? 999));
  const guides = (await getCollection("guides", ({ data }) => !data.draft)).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const dealsBlock = deals
    .map((d: any) =>
      `### ${d.name[L]}\n` +
      `App: ${d.app} | Rakeback: ${d.rakeback}${d.bonus?.[L] ? ` | Bonus: ${d.bonus[L]}` : ""} | Geo: ${d.geo[L]}\n` +
      `${d.description[L]}\n` +
      (d.body?.[L] ? `${toText(d.body[L])}\n` : "") +
      `URL: ${SITE}/${L}/deal/${d.slug}/`
    )
    .join("\n\n");

  const guidesBlock = guides
    .map((g) => {
      const x = localizeGuide(g.data, L);
      return `### ${x.title}\nURL: ${SITE}/${L}/guides/${g.id}/\n\n${toText(x.body)}`;
    })
    .join("\n\n---\n\n");

  const body = `# PokerDealsHub — full content for LLMs

> Independent directory of poker rakeback deals across major poker apps and private clubs.
> PDH connects players with trusted clubs, verified unions and reliable agents offering the
> highest rakeback (typically 33%–70%), transparent conditions and guaranteed payouts. KYC-free.
> Source language: Russian; verified by the PDH team. Contact: Telegram @pokerdealshub.

# Deals

${dealsBlock}

# Guides & reviews

${guidesBlock}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
