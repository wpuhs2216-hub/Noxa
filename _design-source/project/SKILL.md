---
name: noxa-design
description: Use this skill to generate well-branded interfaces and assets for NOXA — the umbrella brand for a suite of nightlife-industry platforms (yorulog, nomishugy, NOXA Community). Contains tokens (dark-first palette, Cormorant + Shippori type pairing, 4px spacing, restrained motion), components (button, input, card, badge, avatar, nav, dialog, toast), and sample pages (LP, login, account dashboard).
user-invocable: true
---

Read `README.md` first, then `colors_and_type.css` for the canonical token names. `NOXA Design System.html` is the visual reference — open it to see every component in context.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy `colors_and_type.css` into your output folder and import it. Reference tokens via CSS variables (`var(--noxa-accent-primary)` etc) — never hard-code hex values that exist as tokens.

If working on production code, the canonical type pairing is Cormorant Garamond + Shippori Mincho B1 (display) / Geist + Noto Sans JP (body) / JetBrains Mono. The eyebrow style (`.noxa-eyebrow`) is the most repeated atomic typographic gesture and should be present on most surfaces.

Hard rules:
- Dark mode first. Never default to light.
- No neon glow, no kira-kira, no multi-stop gradients across text.
- Violet hairline dividers (`rgba(167,139,250,0.16)`) are the most identifying brand element after type.
- The brand runs on a single hue at five luminance steps: `#4C1D95` deep → `#5B21B6` press → `#7C3AED` primary → `#A78BFA` ink → `#C4B5FD` faint. Destructive is wine `#C4384A`. No second hue.
- yorulog and NOXA parent share `#7C3AED`. nomishugy is lavender `#A78BFA`. Community is wine.
- JP voice is primary; English appears as editorial display italics.

If invoked without other guidance, ask what the user wants to design, which sub-brand it's for, and any context-specific constraints. Then act as an expert designer and output HTML artifacts or production code.
