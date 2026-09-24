import { APPS, STRINGS, type Lang } from '../i18n';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} /></svg>;
}

/** Monochrome marks keep the collection focused on each app's purpose. */
function AppIcon({ slug }: { slug: string }) {
  const paths: Record<string, string> = {
    dayroll: 'M7 3h10v18l-2-1.5L12 21l-3-1.5L7 21V3Zm3 5h4m-4 4h4m-4 4h2',
    simmer: 'M5 10h14v5a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-5Zm-3 2h3m14 0h3M9 7c-2-2 2-3 0-5m6 5c-2-2 2-3 0-5',
    sleeptab: 'M20 14A8.5 8.5 0 0 1 10 3a8.5 8.5 0 1 0 10 11ZM16 3v4m-2-2h4',
    steady: 'M20.8 5.6a5.2 5.2 0 0 0-7.3 0L12 7.1l-1.5-1.5a5.2 5.2 0 0 0-7.3 7.3L12 21l8.8-8.1a5.2 5.2 0 0 0 0-7.3ZM4 12h4l2-3 3 7 2-4h5',
    freshpantry: 'M19 3C9 2 3 7 5 14c1 4 6 5 9 3 5-3 5-9 5-14ZM4 21 15 9',
    cineslate: 'M3 10h18v11H3V10Zm0 0L2 5l18-3 1 5-18 3Zm3-6 3 4m3-5 3 4m3-5 3 4M10 13l5 3-5 3v-6Z',
    pathfinding: 'M12 3v18M5 5h12l3 3-3 3H5V5Zm14 9H7l-3 3 3 3h12v-6Z',
    quarry: 'M4 6c0-2 3.6-3 8-3s8 1 8 3-3.6 3-8 3-8-1-8-3Zm0 0v6c0 2 3.6 3 8 3s8-1 8-3V6M4 12v6c0 2 3.6 3 8 3s8-1 8-3v-6',
  };
  return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[slug]} /></svg>;
}

function SunAndPebble() {
  return <div className="hero-art" aria-hidden="true">
    <svg className="pebble-art" viewBox="0 0 400 400" fill="none">
      <circle className="art-sun" cx="220" cy="145" r="105" />
      <ellipse className="art-shadow" cx="201" cy="350" rx="133" ry="9" />
      <path className="art-stone" d="M53 280c0-54 62-99 143-99 87 0 150 45 150 99 0 46-57 68-146 68-94 0-147-24-147-68Z" />
      <path className="art-highlight" d="M83 256c23-36 80-57 130-49 37 5 66 16 83 32-29-17-60-22-96-21-49 0-84 12-117 38Z" />
      <rect className="art-slot" x="105" y="283" width="46" height="16" rx="8" />
      <rect className="art-sun" x="165" y="283" width="76" height="16" rx="8" />
      <rect className="art-slot" x="255" y="283" width="34" height="16" rx="8" />
    </svg>
    <span className="art-caption">A little sun. A little pebble.</span>
  </div>;
}

/** Static server-rendered content. Theme switching is handled by ThemeScript. */
export default function Home({ lang }: { lang: Lang }) {
  const t = STRINGS[lang];
  const prefix = lang === 'zh' ? '/zh' : '';
  return <>
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span className="sun-dot" />{t.studioLabel}</p>
        <div className="hero-main">
          <h1 id="hero-title"><span>{t.heroLines[0]}</span><span className="hero-second-line">{t.heroLines[1]}<span className="title-dot">{lang === 'zh' ? '。' : '.'}</span></span></h1>
          <SunAndPebble />
        </div>
        <div className="hero-bottom">
          <p className="hero-lede">{t.heroLede}</p>
          <a className="text-link hero-link" href="#apps">{t.exploreApps}<span className="circle-arrow"><Arrow /></span></a>
        </div>
      </section>
      <section className="apps" id="apps" aria-labelledby="apps-title">
        <div className="section-heading">
          <p className="eyebrow"><span className="section-index">01 /</span>{t.appsLabel}<span className="item-count">{String(APPS.length).padStart(2, '0')}</span></p>
          <div className="section-heading-main"><h2 id="apps-title">{t.appsHeading}</h2><p>{t.appsIntro}</p></div>
        </div>
        <div className="apps-list">
          {APPS.map((app, i) => <a key={app.slug} className="app-card" href={`${prefix}/${app.slug}/`}>
            <span className="app-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="app-icon"><AppIcon slug={app.slug} /></span>
            <h3>{app.name}</h3>
            <p className="app-desc">{app.desc[lang]}</p>
            <span className={`status${app.dev ? ' status-dev' : ''}`}><span />{app.dev ? t.statusDev : t.statusSoon}</span>
            <span className="app-arrow"><Arrow diagonal /></span>
          </a>)}
        </div>
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <p className="eyebrow"><span className="section-index">02 /</span>{t.aboutLabel}</p>
        <div className="about-grid">
          <h2 id="about-title">{t.aboutHeading[0]}<br /><span>{t.aboutHeading[1]}</span></h2>
          <div className="about-copy">
            <p className="manifesto">{t.manifesto.join(' ')}</p>
            <p className="about-intro">{t.aboutIntro}</p>
            <div className="makers"><span><span className="maker-dot">K</span>Kun<span className="maker-role">{t.engineering}</span></span><span><span className="maker-dot">S</span>Shuyuan<span className="maker-role">{t.design}</span></span></div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-top">
        <div><p className="eyebrow">{t.contactLabel}</p><a className="contact-link" href="mailto:support@sunpebblelabs.com">{t.sayHello}<Arrow diagonal /></a></div>
        <a className="footer-email" href="mailto:support@sunpebblelabs.com">support@sunpebblelabs.com<Arrow diagonal /></a>
      </div>
      <div className="footer-bottom">
        <div className="footer-company"><p>&copy; 2026 Sunpebble, LLC</p><address>131 Continental Dr Suite 305<br />Newark, DE, 19713 US</address></div>
        <div className="footer-links"><a href={`${prefix}/privacy-policy/`}>{t.privacyPolicy}</a><a href={`${prefix}/terms-of-service/`}>{t.termsOfService}</a><a href="https://github.com/sunpebble">GitHub<Arrow diagonal /></a><a href="https://t.me/sunpebble">Telegram<Arrow diagonal /></a></div>
        <a className="back-top" href="#top">{t.backTop}<Arrow /></a>
      </div>
    </footer>
  </>;
}
