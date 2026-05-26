# NOXA — Design System

**NOXA** is the umbrella brand for a suite of nightlife-industry platforms — *nox (L. night) + a*. Dark-mode-first, refined, never neon.

## Sub-brands

| Product | Role | Tint |
|---|---|---|
| **yorulog** | 夜職向け売上CRM（ホスト・キャバ・ラウンジ嬢） | `#7C3AED` violet (canonical) |
| **nomishugy** | 大阪のバーポータル + 飲み仲間マッチング + バー求人 | `#A78BFA` lavender |
| **NOXA Community** | 夜の街で働く/遊ぶ人の交流掲示板（近日公開） | `#C4384A` wine |

Each sub-brand inherits the NOXA system; tints are reserved for sub-brand context (sidebar markers, badges, accent strokes) — never substituted for the parent's violet primary.

## Files in this folder

- **`NOXA Design System.html`** — the main canvas. All tokens, components, and sample pages on one pannable surface. Open this first.
- **`colors_and_type.css`** — token source of truth. CSS custom properties for color, type, spacing, radius, motion, shadow.
- **`design-canvas.jsx`** — pan/zoom canvas host.
- **`tokens-cards.jsx`** — color/type/spacing/radius/motion specimens.
- **`component-cards.jsx`** — Button / Input / Card / Badge / Avatar / Nav / Dialog / Toast.
- **`page-previews.jsx`** — LP, Login, Account Dashboard.
- **`SKILL.md`** — agent skill descriptor for cross-tool use.

## Visual foundations

**Palette.** Background is a deep wine-tinted obsidian (`#0B0710`) — never pure black, always carrying a faint violet undertone. Surfaces step up in chroma toward `#2A2237`. The brand runs on **a single hue at five luminance steps**: `#4C1D95` deep → `#5B21B6` press → `#7C3AED` primary → `#A78BFA` ink → `#C4B5FD` faint. Destructive is wine `#C4384A`, never fire-engine red. Dividers are **hairline lavender at 16% alpha** — this is the single most identifying brand element after type. Depth comes from luminance, not from a second hue.

**Type.** A pairing of *Cormorant Garamond* (editorial English serif, italic capable) and *Shippori Mincho B1* (refined Japanese mincho) handles display and headings — they share serif DNA so JP/EN mix gracefully on the same line. *Geist* + *Noto Sans JP* handles body. *JetBrains Mono* for code, eyebrows, and tight UI metadata. The eyebrow style (mono · 11px · 0.18em tracking · uppercase · **lavender `#A78BFA`**) is the brand's most repeated atomic typographic gesture.

**Motion.** 150/250/400ms only. `cubic-bezier(0.4, 0, 0.2, 1)` standard. Avoid bounces, springs, neon pulses. Hover states lift opacity or color, never scale.

**Forbidden.** Neon glow, kira-kira sparkles, multi-stop bluish-purple gradients, cabaret-style decorative flourishes, emoji as UI. Subtle radial glows behind hero content are allowed; gradients across long text are not.

## Content fundamentals

Mix Japanese body + English display tastefully. JP is the primary voice — "おかえりなさい" rather than "Welcome back" on first paint — but the brand wears English serif italics for editorial gestures ("Nightfall, refined."). Address the user politely (です/ます), never breezy. Avoid industry slang in surface chrome (use 「ホスト」「キャスト」, not 「ホスくん」). Tone target: Claude.ai's clarity + a literary night register. No emoji.

## Iconography

The system intentionally avoids icon-heavy chrome — text labels with diamond glyphs (◇ ◈ ◆) and small color dots do most of the navigation work. When an icon set is needed, use **Lucide** (1.5px stroke) via CDN — the stroke weight matches the brand's restraint. Logos and product marks should be set, not drawn — the wordmark logotype is *Cormorant Garamond 500*, the **O** picked out in lavender `#A78BFA`.

## Caveats — please review

- **Font choice is a proposal.** Cormorant + Shippori is one direction (editorial / literary). If you want something more architectural, alternative pairings worth testing: *Reckless Neue + Tsukushi A Old Mincho* (heavier), *Marcellus + Klee One* (closer to handwritten elegance). Tell me which direction.
- **Single-hue system.** The brand now runs on violet alone (5 luminance steps + wine destructive). If you ever want a second hue back — e.g. for nomishugy to feel distinct from yorulog — we can introduce one tint, but the current setup keeps the family visually tight.
- **`yorulog` and NOXA parent both use `#7C3AED`** — unified per your request. nomishugy gets `#A78BFA` lavender, community keeps wine `#C4384A`.
- **No actual logo file yet** — the wordmark uses Cormorant typeset. If you want a custom mark (monogram, glyph), tell me what direction.
- **NOXA Community** has no real screens yet; in the dashboard it's shown as "coming soon".
