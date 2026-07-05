# Sunpebble Brand & Design Language

The shared visual foundation for every Sunpebble app and page. Per-app
personality (Dayroll's receipt tape, Sleeptab's night mode, Fresh Pantry's
kitchen warmth, Quarry's workbench calm) is built **on top of** this foundation,
never instead of it.

## Palette

| Token  | Hex       | Role |
|--------|-----------|------|
| cream  | `#FFF6E8` | Light background everywhere (web bg, app light surfaces, dark-mode foreground text) |
| ink    | `#232733` | Primary text on cream; dark-mode card surface |
| sun    | `#F7B733` | The one brand accent. CTAs, highlights, progress |
| pebble | `#6E6E73` | Secondary text on cream |
| night  | `#161928` | Dark-mode background (Sleeptab bg, Fresh Pantry dark surface) |

Rules:

- **Sun is light — it hosts ink, never white.** White on `#F7B733` fails
  contrast. CTA = sun fill + ink text (see Sleeptab's paywall button).
- Semantic colors (destructive red, warn amber, success green) may exist
  per app, but must not reuse sun's hue for warnings.
- Dark mode inverts cream/ink: night bg, `#232733` cards, cream text,
  sun accent unchanged.

## Typography

- **Web:** system stack (`-apple-system, "SF Pro Text", …`) for body,
  `"New York", Georgia, serif` for headings.
- **Apps:** SF system fonts. Rounded design by default (Simmer, Sleeptab);
  Dayroll uses monospaced as its receipt-paper personality. Fresh Pantry
  bundles Plus Jakarta Sans + Manrope (its "homey" voice) — humanist and
  rounded, compatible with the family feel.

## Voice

- Name is **Sunpebble** (one word, capital S). "Sunpebble Labs" only as the
  legal entity (support email domain).
- Tagline: *Small, polished apps. Pay once, no subscription.*
- Tone: plain and kind. Quiet urgency (a color and a label), never alarm.

## Per-app accents

Every app keeps the cream/ink foundation in light mode and may add one
metaphor layer:

| App          | Personality on top of the foundation |
|--------------|---------------------------------------|
| Dayroll      | Receipt tape: monospaced type, perforation dividers |
| Simmer       | Stove flame: sun accent as "flame" |
| Sleeptab     | Night: dark-first (night/ink surfaces, cream text, sun glow) |
| Steady       | Clinical calm: plain labels, quiet status color, export-first layouts |
| Fresh Pantry | Kitchen: category tints, green "fresh" / amber "soon" / coral "expired" |
| Quarry       | Workbench: dense native tables, crisp borders, restrained accent use |

## Canonical token files

- Web: `src/layouts/Base.astro` (`:root` CSS variables) — this repo
- Dayroll: `App/Tape.swift` · Simmer: `App/Theme.swift` · Sleeptab: `App/Theme.swift`
- Steady: `App/Theme.swift`
- Fresh Pantry: `apps/ios/FreshPantry/DesignSystem/FkColor.swift`
- Quarry: `apps/swiftui/Sources/QuarrySwiftUI/Theme.swift`,
  `apps/video/src/constants.ts` (promo), `packages/docs/.vitepress/theme/brand.css` (docs)
