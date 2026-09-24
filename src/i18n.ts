/**
 * Homepage i18n. One dictionary per locale; the homepage renders a single
 * language at a time and the header toggle switches between them. App brand
 * names stay in English across locales; only status + copy are translated.
 */
export type Lang = 'zh' | 'en';

export const LANGS: Lang[] = ['zh', 'en'];

/** <html lang> value for each locale. */
export const HTML_LANG: Record<Lang, string> = { zh: 'zh-CN', en: 'en' };

type Strings = {
  /** Label shown on the toggle to switch TO the *other* language. */
  switchTo: string;
  switchAria: string;
  skip: string;
  navApps: string;
  navAbout: string;
  privacyPolicy: string;
  termsOfService: string;
  heroTagline: string;
  heroLines: [string, string];
  heroLede: string;
  studioLabel: string;
  exploreApps: string;
  aboutLabel: string;
  aboutIntro: string;
  /** Manifesto rendered as lines joined by <br>. */
  manifesto: string[];
  appsLabel: string;
  appsHeading: string;
  appsIntro: string;
  aboutHeading: [string, string];
  engineering: string;
  design: string;
  contactLabel: string;
  sayHello: string;
  backTop: string;
  statusSoon: string;
  statusDev: string;
};

export const STRINGS: Record<Lang, Strings> = {
  zh: {
    switchTo: 'EN',
    switchAria: 'Switch to English',
    skip: '跳到主要内容',
    navApps: '应用',
    navAbout: '关于',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    heroTagline: '小而精的应用。',
    heroLines: ['小而精，', '用心而作'],
    heroLede: '为日常的小事，做用心的应用。\n简单一点，从容一点。',
    studioLabel: '两个人的独立应用工作室',
    exploreApps: '探索我们的应用',
    aboutLabel: '关于工作室',
    aboutIntro: 'Kun 负责工程，Shuyuan 负责设计与产品。',
    manifesto: ['每一款应用都是一颗鹅卵石：', '小、光滑、经得起时间。'],
    appsLabel: '我们的应用',
    appsHeading: '小小应用，日日相伴。',
    appsIntro: '每款应用专注一件事，把它做好。',
    aboutHeading: ['两个人，', '一份用心。'],
    engineering: '工程',
    design: '设计与产品',
    contactLabel: '保持联系',
    sayHello: '来打个招呼。',
    backTop: '回到顶部',
    statusSoon: '即将上架',
    statusDev: '开发中',
  },
  en: {
    switchTo: '中',
    switchAria: '切换到中文',
    skip: 'Skip to content',
    navApps: 'Apps',
    navAbout: 'About',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    heroTagline: 'Small, polished apps.',
    heroLines: ['Small apps.', 'Made with care'],
    heroLede: 'Thoughtful little tools for the everyday.\nA little simpler. A little brighter.',
    studioLabel: 'An independent app studio',
    exploreApps: 'Explore our apps',
    aboutLabel: 'The studio',
    aboutIntro: 'We’re a two-person indie studio. Kun builds the engineering. Shuyuan shapes the design and product.',
    manifesto: ['Every app is a pebble: small, smooth, and made to last.'],
    appsLabel: 'Our apps',
    appsHeading: 'A little help, every day.',
    appsIntro: 'Each app does one thing. Thoughtfully.',
    aboutHeading: ['Two people.', 'One simple idea.'],
    engineering: 'Engineering',
    design: 'Design & product',
    contactLabel: 'Keep in touch',
    sayHello: 'Say hello.',
    backTop: 'Back to top',
    statusSoon: 'Coming soon',
    statusDev: 'In development',
  },
};

/** <head> copy for the homepage, per locale. */
export const META: Record<Lang, { title: string; description: string }> = {
  zh: {
    title: 'Sunpebble — 小而精的应用。',
    description: '两个人的独立工作室，做小而精的应用。每一款都是一颗鹅卵石：小、光滑、经得起时间。',
  },
  en: {
    title: 'Sunpebble — Small, polished apps.',
    description: 'A two-person indie studio making small, polished apps. Every app is a pebble: small, smooth, and made to last.',
  },
};

export type App = {
  name: string;
  slug: string;
  /** true → "In development"; otherwise "Coming soon". */
  dev?: boolean;
  desc: Record<Lang, string>;
};

/** Studio apps, in display order. Slugs map to the existing /{slug}/ pages. */
export const APPS: App[] = [
  {
    name: 'Dayroll', slug: 'dayroll',
    desc: {
      zh: '不用打开的日记。一天一行，一次轻点。',
      en: 'The journal you never have to open — one tap, one line a day.',
    },
  },
  {
    name: 'Simmer', slug: 'simmer',
    desc: {
      zh: '住在灵动岛里的厨房计时器。每一口锅，一眼看清。',
      en: 'Kitchen timers that live in your Dynamic Island. Every pot, one glance.',
    },
  },
  {
    name: 'Sleeptab', slug: 'sleeptab',
    desc: {
      zh: '知道自己欠了多少觉。睡眠负债来自 Apple 健康。',
      en: 'Know how much sleep you owe yourself. Sleep debt from Apple Health.',
    },
  },
  {
    name: 'Steady', slug: 'steady',
    desc: {
      zh: '记录血压、血糖、用药和症状。为就诊而设计。',
      en: 'Track blood pressure, glucose, meds, and symptoms. Built for doctor visits.',
    },
  },
  {
    name: 'Fresh Pantry', slug: 'freshpantry',
    desc: {
      zh: '替你记住厨房：冰箱里有什么，过期前把它做掉。',
      en: "Your kitchen, remembered. Track what's in the fridge and cook it before it expires.",
    },
  },
  {
    name: 'Cineslate', slug: 'cineslate',
    desc: {
      zh: '清爽的观影清单：发现影视、维护片单，直接从 Plex 播放。',
      en: 'A clear slate for film & TV — discover, keep your lists, play from Plex.',
    },
  },
  {
    name: 'Pathfinding', slug: 'pathfinding',
    desc: {
      zh: '用大白话规划旅行。和 AI 规划师聊，路线落在地图上。',
      en: 'Plan a trip in plain language. Chat with an AI planner and see it on the map.',
    },
  },
  {
    name: 'Quarry', slug: 'quarry', dev: true,
    desc: {
      zh: 'macOS 上的专业数据库管理器：原生、快，支持加密数据库。',
      en: 'Professional database manager for macOS — native, fast, and encrypted-database ready.',
    },
  },
];
