# CLAUDE.md

See **[AGENTS.md](AGENTS.md)** for the full guide to managing this repo.

**Most important rule:** ru is the source of truth, and whenever you add or edit any
content (deal, guide, copy) you MUST translate the changed fields into all active locales
(`src/i18n/ui.ts` → `locales`) in the same task, writing them into the `i18n.<locale>`
blocks. Use `docs/translation-glossary.md`. Verify with `npm run i18n:stamp && npm run i18n:check`.
