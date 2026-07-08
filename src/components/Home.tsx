import { useEffect, useRef } from 'react';
import { APPS, STRINGS, type Lang } from '../i18n';

/** The Sunpebble studio logo, referenced by <use href="#sunpebble-logo"> below. */
function LogoSymbol() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <symbol id="sunpebble-logo" viewBox="0 0 512 512">
        <rect width="512" height="512" rx="112" fill="#FFF6E8" />
        <circle cx="256" cy="198" r="112" fill="#F7B733" />
        <path fill="#232733" d="M86 338c0-58 73-98 169-98 102 0 171 39 171 98 0 60-66 98-170 98S86 398 86 338Z" />
        <path fill="#FFF6E8" opacity=".14" d="M139 314c33-27 84-42 142-39 39 2 75 11 103 26-31-29-76-45-129-45-67 0-119 22-116 58Z" />
        <rect x="149" y="339" width="56" height="24" rx="12" fill="#FFF6E8" />
        <rect x="226" y="339" width="96" height="24" rx="12" fill="#F7B733" />
        <rect x="343" y="339" width="44" height="24" rx="12" fill="#FFF6E8" opacity=".82" />
      </symbol>
    </svg>
  );
}

/** Theme toggle — the click is handled by the delegated script in ThemeScript.astro,
 *  so this is plain markup. aria-pressed is set by that script (kept out of JSX so
 *  React re-renders never clobber the user's choice). Icons swap purely via CSS. */
function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button" aria-label="Toggle dark / light theme" title="Toggle theme">
      <svg className="ico ico-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13.2A8 8 0 1 1 10.8 4a6.2 6.2 0 0 0 9.2 9.2Z" />
      </svg>
      <svg className="ico ico-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <line x1="12" y1="2.4" x2="12" y2="4.6" /><line x1="12" y1="19.4" x2="12" y2="21.6" />
        <line x1="2.4" y1="12" x2="4.6" y2="12" /><line x1="19.4" y1="12" x2="21.6" y2="12" />
        <line x1="5.1" y1="5.1" x2="6.7" y2="6.7" /><line x1="17.3" y1="17.3" x2="18.9" y2="18.9" />
        <line x1="5.1" y1="18.9" x2="6.7" y2="17.3" /><line x1="17.3" y1="6.7" x2="18.9" y2="5.1" />
      </svg>
    </button>
  );
}

/**
 * The homepage, rendered once per locale (route-level i18n). `lang` comes from the
 * page that mounts it: `/` → 'en', `/zh/` → 'zh'. The language toggle is a plain
 * link to the other locale's homepage — no client state, so hydration always matches.
 */
export default function Home({ lang }: { lang: Lang }) {
  const t = STRINGS[lang];
  const prefix = lang === 'zh' ? '/zh' : '';
  const ruleRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Draw each section hairline in the first time it enters the viewport — same
  // interaction as the Open Design source. Falls back to all-revealed when
  // reduced motion is requested or IntersectionObserver is unavailable.
  useEffect(() => {
    const rules = ruleRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!rules.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      rules.forEach((r) => r.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    rules.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LogoSymbol />

      <a href="#main-content" className="skip-link">{t.skip}</a>

      <main id="main-content" className="page">
        <header className="header">
          <a href={`${prefix}/`} className="header-brand">
            <svg role="img" aria-label="Sunpebble"><use href="#sunpebble-logo" /></svg>
            <span>Sunpebble</span>
          </a>
          <div className="header-tools">
            <nav className="nav" aria-label={lang === 'zh' ? '站点导航' : 'Studio navigation'}>
              <a href="#apps">{t.navApps}</a>
              <a href="#about">{t.navAbout}</a>
            </nav>
            <a className="lang-toggle" href={lang === 'zh' ? '/' : '/zh/'} aria-label={t.switchAria} title={t.switchAria}>
              {t.switchTo}
            </a>
            <ThemeToggle />
          </div>
        </header>

        <section className="hero">
          <svg className="hero-logo" role="img" aria-label="Sunpebble">
            <use href="#sunpebble-logo" />
          </svg>
          <h1>{t.heroTagline}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-lede">{t.heroLede}</p>
        </section>

        <section className="about" id="about">
          <div className="rule" aria-hidden="true" ref={(el) => { ruleRefs.current[0] = el; }} />
          <h2 className="section-label">{t.aboutLabel}</h2>
          <p className="about-intro">{t.aboutIntro}</p>
          <blockquote className="manifesto">
            {t.manifesto.flatMap((line, i) => (i === 0 ? [line] : [<br key={i} />, line]))}
          </blockquote>
        </section>

        <section className="apps" id="apps">
          <div className="rule" aria-hidden="true" ref={(el) => { ruleRefs.current[1] = el; }} />
          <h2 className="section-label">{t.appsLabel}</h2>
          <div className="apps-list">
            {APPS.map((app) => (
              <a key={app.slug} className="app-card" href={`${prefix}/${app.slug}/`}>
                <div className="app-card-head">
                  <h3>{app.name}</h3>
                  <span className="status">{app.dev ? t.statusDev : t.statusSoon}</span>
                </div>
                <p className="desc">{app.desc[lang]}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2026 Sunpebble</p>
          <div className="footer-links">
            <a href="https://github.com/sunpebble">GitHub</a>
            <a href="https://t.me/sunpebble">Telegram</a>
            <a href="mailto:support@sunpebblelabs.com">support@sunpebblelabs.com</a>
          </div>
        </footer>
      </main>
    </>
  );
}
