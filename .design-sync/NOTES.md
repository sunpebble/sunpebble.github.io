# design-sync notes — Sunpebble Brand

- 2026-07-04 re-sync: the original project (`ac6f0caf-…`) came back 404 under a
  fresh design authorization (deleted or different account); recreated as
  `c007f599-…` and re-uploaded the unchanged bundle. Sources unchanged since
  first sync; conventions.md re-validated clean.
- 2026-07-04 first sync. User explicitly chose the Sunpebble brand (this repo)
  over sql-pro/packages/ui as the sync target.
- Off-script layout: this repo is an Astro marketing site with NO React
  component library, so there is no `_ds_bundle.js`, no `components/`, no
  `_preview/`, and no `_ds_sync.json` (honest omission per the skill — every
  future sync re-verifies everything; the bundle is tiny so that's cheap).
- Sources of truth: `BRAND.md` (palette/typography/voice/per-app accents) and
  `src/layouts/Base.astro` (`:root` vars + the site's real class vocabulary).
  `ds-bundle/` is hand-authored from those two files; rebuild by re-deriving,
  there is no converter run.
- Deliberate adaptations in `ds-bundle/styles.css` vs Base.astro:
  - hardcoded `#fff` / `var(--cream)` surfaces → semantic vars
    (`--surface`, `--bg`) so dark mode follows BRAND.md's rules
    (night bg, ink cards, cream text, sun unchanged);
  - new `.cta` class codifying BRAND.md's "CTA = sun fill + ink text" rule
    (no such class existed on the site);
  - `.badge` gets a dark-mode color override (`--sun` on dark surfaces;
    `#B07E15` stays for light);
  - `data-theme` overrides added so the claude.ai/design theme toggle wins
    over `prefers-color-scheme` in both directions.
- Accessibility adaptations found by the pre-upload verification pass
  (values NOT in BRAND.md — invented, documented here deliberately):
  - dark-mode `--text-secondary` = `#9EA3B0` ("lightened pebble"): raw pebble
    fails WCAG AA on night (3.44:1) and ink (2.94:1); the fix measures
    6.91:1 / 5.90:1. BRAND.md is silent on dark secondary text.
  - light-mode `.badge` gold = `#8E6511`: Base.astro's `#B07E15` fails AA on
    white (3.60:1) and cream (3.36:1); the fix measures 5.22:1 / 4.88:1.
    **The live site still has the failing value** — consider back-porting
    `#8E6511` to `src/layouts/Base.astro` so site and bundle agree.
  - `color-scheme: light/dark` declarations added so native widgets follow
    the resolved theme, not the OS.
- `guidelines/brand.md` = BRAND.md minus the "Canonical token files" section
  (repo-internal paths, meaningless to the design agent).
- `ds-bundle/` is generated output — gitignored, never committed.
