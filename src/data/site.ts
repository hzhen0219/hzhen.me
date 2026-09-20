/**
 * Site-wide configuration: identity, navigation, external links, SEO defaults.
 *
 * This is the first file to edit when something about *you* changes —
 * name, role, the hero statement, or where people can find you.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ExternalLink {
  label: string;
  /** Leave as an empty string to hide the link everywhere until a real URL exists. */
  href: string;
  /** Shown to screen readers and as the title attribute. */
  description?: string;
}

export const site = {
  name: 'Hao Zhen',
  role: 'Neurotechnology Engineer & BCI Systems Researcher',

  /** The hero statement. One paragraph, no marketing language. */
  statement:
    'I work on high-bandwidth implantable brain–computer interfaces, with a focus on the systems that acquire, transmit, and interpret neural information—from neural recording hardware to reliable clinical deployment and AI-based decoding.',

  /** Rendered beneath the hero statement, joined with a middle dot. */
  researchAreas: [
    'Implantable BCI Systems',
    'Translational Neuroengineering',
    'Neural Data & AI',
  ],

  url: 'https://hzhen.me',
  locale: 'en_US',
} as const;

export const seo = {
  title: 'Hao Zhen — Neurotechnology Engineer & BCI Systems Researcher',
  description:
    'Hao Zhen works on implantable brain–computer interfaces, neural systems, translational neuroengineering, and neural data technologies.',
  keywords: [
    'Hao Zhen',
    'brain-computer interface',
    'BCI',
    'neurotechnology',
    'neural engineering',
    'implantable BCI',
    'translational neuroengineering',
    'neural signal processing',
  ],
  /** Open Graph image, relative to the site root. Replace public/og.png to change it. */
  image: '/og.png',
  imageAlt: 'Hao Zhen — Neurotechnology Engineer & BCI Systems Researcher',
} as const;

export const nav: NavItem[] = [
  { label: 'Research', href: '/#research' },
  { label: 'Work', href: '/#work' },
  { label: 'Publications', href: '/#publications' },
  { label: 'About', href: '/#about' },
];

/**
 * Secondary / external links.
 *
 * To add LinkedIn, paste the profile URL into `href` below — it will then appear
 * in the header, the footer, and the contact section automatically. An empty
 * `href` means the link is omitted rather than rendered as a dead link.
 */
export const externalLinks: ExternalLink[] = [
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0006-9500-6326',
    description: 'ORCID researcher profile',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hzhen0219',
    description: 'GitHub profile',
  },
  {
    label: 'LinkedIn',
    href: '', // TODO: add LinkedIn profile URL
    description: 'LinkedIn profile',
  },
];

/** Only links with a real URL. Used by every component that renders links. */
export const activeLinks: ExternalLink[] = externalLinks.filter(
  (link) => link.href.length > 0,
);

/**
 * Contact block.
 *
 * When a custom address exists (e.g. hao@hzhen.me), set `email` and the section
 * will render a mailto link in place of the fallback note below.
 */
export const contact = {
  email: '', // e.g. 'hao@hzhen.me'
  note: 'For research and professional inquiries, connect through LinkedIn or ORCID.',
} as const;
