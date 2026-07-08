import { useEffect, useRef, useState } from 'react';

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

type App = {
  name: string;
  slug: string;
  status: string;
  description: string;
};

/** Studio apps, in display order. Slugs map to the existing /{slug}/ Astro pages. */
const APPS: App[] = [
  { name: 'Dayroll', slug: 'dayroll', status: 'Coming soon', description: 'The journal you never have to open — one tap, one line a day.' },
  { name: 'Simmer', slug: 'simmer', status: 'Coming soon', description: 'Kitchen timers that live in your Dynamic Island. Every pot, one glance.' },
  { name: 'Sleeptab', slug: 'sleeptab', status: 'Coming soon', description: 'Know how much sleep you owe yourself. Sleep debt from Apple Health.' },
  { name: 'Steady', slug: 'steady', status: 'Coming soon', description: 'Track blood pressure, glucose, meds, and symptoms. Built for doctor visits.' },
  { name: 'Fresh Pantry', slug: 'freshpantry', status: 'Coming soon', description: "Your kitchen, remembered. Track what's in the fridge and cook it before it expires." },
  { name: 'Cineslate', slug: 'cineslate', status: 'Coming soon', description: 'Your cinema slate, beautifully clear — discover film & TV, keep your lists, play from Plex.' },
  { name: 'Pathfinding', slug: 'pathfinding', status: 'Coming soon', description: 'Plan a trip in plain language. Chat with an AI planner and see it on the map.' },
  { name: 'Quarry', slug: 'quarry', status: 'In development', description: 'Professional database manager for macOS — native, fast, and encrypted-database ready.' },
];

/**
 * Scroll-revealed hairline list. Each row's top hairline animates in the first
 * time it enters the viewport — same interaction as the Open Design source,
 * driven by IntersectionObserver. Falls back to all-revealed when reduced
 * motion is requested or IntersectionObserver is unavailable.
 */
function AppsList() {
  const rowsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [revealed, setRevealed] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      setRevealed(new Set(APPS.map((_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          setRevealed((prev) => new Set(prev).add(idx));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="apps-list">
      {APPS.map((app, i) => (
        <a
          key={app.slug}
          ref={(el) => { rowsRef.current[i] = el; }}
          data-idx={i}
          className={`app-row${revealed.has(i) ? ' revealed' : ''}`}
          href={`/${app.slug}/`}
        >
          <div className="app-row-head">
            <h3>{app.name}</h3>
            <span className="status">{app.status}</span>
          </div>
          <p>{app.description}</p>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <LogoSymbol />

      <a href="#main-content" className="skip-link">Skip to content</a>

      <main id="main-content" className="page">
        <header className="header">
          <a href="/" className="header-brand">
            <svg role="img" aria-label="Sunpebble"><use href="#sunpebble-logo" /></svg>
            <span>Sunpebble</span>
          </a>
          <nav className="nav" aria-label="Studio navigation">
            <a href="#apps">Apps</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <section className="hero">
          <svg className="hero-logo" role="img" aria-label="Sunpebble logo">
            <use href="#sunpebble-logo" />
          </svg>
          <h1>Small, polished apps.</h1>
        </section>

        <section className="about" id="about">
          <h2 className="section-label">About</h2>
          <p className="about-intro">A two-person indie studio — engineering by Kun, design &amp; product by Shuyuan.</p>
          <blockquote className="manifesto">Every app is a pebble: small, smooth, and made to last.</blockquote>
        </section>

        <section className="apps" id="apps">
          <h2 className="section-label">Apps</h2>
          <AppsList />
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
