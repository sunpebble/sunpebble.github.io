# Building with the Sunpebble brand

This is a **brand foundation**, not a component library: plain CSS tokens and
a small class vocabulary. There are no React components, no provider, no
wrapper — every design just needs `styles.css` loaded, then styles its own
markup with the tokens and classes below.

## Styling idiom: CSS custom properties + a few real classes

Color and type come from `var(--*)` tokens defined in `tokens/brand.css`
(imported by `styles.css`). **Prefer the semantic aliases** — they flip
automatically in dark mode (`prefers-color-scheme` and `data-theme` both
work):

| Token | Light | Dark | Use for |
|---|---|---|---|
| `--bg` | cream `#FFF6E8` | night `#161928` | page background |
| `--surface` | white | ink `#232733` | cards, panels |
| `--text` | ink | cream | primary text |
| `--text-secondary` | pebble `#6E6E73` | lightened pebble `#9EA3B0` | secondary text, nav, captions |
| `--accent` | sun `#F7B733` | sun (unchanged) | CTAs, highlights, progress |
| `--on-accent` | ink | ink | text ON a sun background |

Raw palette tokens also exist: `--cream`, `--ink`, `--sun`, `--pebble`,
`--night`. Type: `--font-body` (system sans) for body, `--font-heading`
("New York"/Georgia serif) for headings — `h1`–`h3` get it automatically.

**Hard rules:**
- **Never put white text on sun.** Anything on `--accent` uses
  `--on-accent` (ink). Use the `.cta` class for buttons — it encodes this.
- Sun is the ONLY brand accent. Semantic colors (red/amber/green) are fine
  for status, but never reuse sun's hue for warnings.
- `<main>` is capped at 640px (the brand's quiet page width). For dashboards
  or full-width layouts, use your own wrapper `div`, not `<main>`.

## Class vocabulary (all defined in `styles.css`)

`.cta` (sun-filled pill button), `.app` (white/surface card, 16px radius),
`.badge` (pill label; quiet amber), `.label` (uppercase section label),
`.tagline`, `.features` (bordered list; `<strong>` title + `<span>` caption
per `li`), `.doc` (long-form text), `.date`, `.logo` (88px rounded app icon).

**Element defaults to know about:** a global `* { margin:0;
box-sizing:border-box }` reset applies; `<section>` gets 56px top margin;
`<footer>` gets 64px top margin, `.85rem`, secondary color; a bare `.badge`
carries 32px top margin (reduced to 12px inside `.app`). Don't stack your own
margins on top of these.

## Where the truth lives

Read `styles.css` and `tokens/brand.css` before styling anything;
`guidelines/brand.md` holds the full brand canon (palette rules, voice,
per-app personalities like Dayroll's receipt tape and Sleeptab's dark-first
night mode). `guidelines/logo.svg` is the brand mark.

## Idiomatic example

```html
<section>
  <div class="label">Apps</div>
  <a class="app" href="#">
    <h3>Sleeptab</h3>
    <p>Wind down without the doomscroll.</p>
    <span class="badge">Coming soon</span>
  </a>
  <a class="cta" href="#">Get it once — $4.99</a>
</section>
```

Tone in copy: plain and kind. Tagline: *Small, polished apps. Pay once, no
subscription.* Quiet urgency (a color and a label), never alarm.
