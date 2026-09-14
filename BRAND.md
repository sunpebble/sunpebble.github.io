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

- **Web:** Albert Sans for headings and body, with native system and Chinese
  sans-serif fallbacks. Large, medium-weight headings, tight display tracking,
  and generous line height for descriptions and documents.
- **Apps:** SF system fonts. Rounded design by default (Simmer, Sleeptab);
  Dayroll uses monospaced as its receipt-paper personality. Fresh Pantry
  bundles Plus Jakarta Sans + Manrope (its "homey" voice) — humanist and
  rounded, compatible with the family feel.

## Voice

- Name is **Sunpebble** (one word, capital S). "Sunpebble Labs" only as the
  legal entity (support email domain).
- Tagline: *Small, polished apps.*
- Tone: plain and kind. Quiet urgency (a color and a label), never alarm.

## Website visual system

The studio website uses a quieter interpretation of the app palette: paper
`#F7F7F2`, charcoal `#252822`, muted olive `#686C62`, and sun `#F4CC49`.
Dark mode uses `#191B18` with `#F1F2E9` text. Existing app icons retain their
original brand colors.

- A 1280px maximum content width, with responsive gutters and fluid headings.
- Homepage display type up to 116px (124px in Chinese); app titles up to 104px. Document headings
  are smaller, with body copy limited to 780px for comfortable reading.
- Applications appear in an open index, separated by fine rules. Monochrome
  icons, clear names, and restrained hover feedback keep navigation simple.
- Shared navigation, language controls, and themes across all 54 routes.
- Homepage content renders statically; only the shared theme control needs
  JavaScript. Navigation and content remain usable without JavaScript.
- Respect reduced motion, visible keyboard focus, and a user's saved theme.

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

- Web: `src/styles/site.css` (`:root` CSS variables) — this repo;
  browser theme colors are mirrored in `src/components/ThemeScript.astro`
- Dayroll: `App/Tape.swift` · Simmer: `App/Theme.swift` · Sleeptab: `App/Theme.swift`
- Steady: `App/Theme.swift`
- Fresh Pantry: `apps/ios/FreshPantry/DesignSystem/FkColor.swift`
- Quarry: `apps/swiftui/Sources/QuarrySwiftUI/Theme.swift`,
  `apps/video/src/constants.ts` (promo), `packages/docs/.vitepress/theme/brand.css` (docs)
