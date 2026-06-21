# Translation glossary & style guide

The agent translates **ru → all active locales** (`en`, `uz`; the list lives in
`src/i18n/ui.ts` → `locales`). ru is the source of truth. Translate in idiomatic,
natural poker style — not word-for-word. Keep tone clear, confident and honest
(no hype, no invented claims). Preserve HTML structure and links in `body` fields
exactly; translate only the visible text.

## Core terms

| ru | en | uz |
|----|----|----|
| рейк | rake | reyk |
| рейкбэк | rakeback | rakebek |
| сделка | deal | bitim |
| союз | union | ittifoq |
| клуб | club | klub |
| касса | cashier | kassa |
| ввод/вывод средств | deposit/withdrawal | depozit/yechib olish |
| фиксированный рейкбэк | fixed rakeback | qat'iy rakebek |
| бонус на депозит | deposit bonus | depozit bonusi |
| без депозита | no-deposit | depozitsiz |
| мягкие столы / мягкое поле | soft games / soft field | yumshoq stollar |
| рекреационный игрок | recreational player | rekreatsion o‘yinchi |
| регуляр | regular | regulyar |
| винрейт | winrate | vinreyt |
| дисперсия | variance | dispersiya |
| раздача | hand | qo‘l (raqobat qo‘li) |
| лимиты | limits/stakes | limitlar |
| джекпот | jackpot | jekpot |
| трафик / пул игроков | traffic / player pool | trafik / o‘yinchilar havzasi |
| централизованный / децентрализованный | centralized / decentralized | markazlashgan / markazlashmagan |
| вывод 24/7 | 24/7 payouts | 24/7 to‘lovlar |

## Keep verbatim (do not translate)

Game-type abbreviations and brand/app names: **MTT, NLH, PLO, PLO5, PLO6, OFC,
Cash, RNG, KYC, USDT, VIP**; app/union/club names (PPPoker, ClubGG, X-Poker,
PokerBros, CoinPoker, NUTS PrimeTime, El Dorado, Black Sea, Flamingoo, Massiv
Union, Paradise, Rake2High, PPPfish, 888poker, PokerDealsHub / PDH).

## Field notes

- **deal `name`** — keep it a concise title (e.g. "Сделка в … на …" → "… Deal on …").
- **`description`** — 1–2 sentences, used in cards and meta description.
- **`body`** — HTML; translate text inside tags, keep tags/attributes/links intact.
- **`geo`** — region list; localize region names (СНГ→CIS→MDH, Азия→Asia→Osiyo, etc.).
- **`bonus`** — short phrase (e.g. "+150% на 1й депозит" → "+150% on 1st deposit").

After translating, run `npm run i18n:stamp` then `npm run i18n:check`.
