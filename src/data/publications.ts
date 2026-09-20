/**
 * Publications and preprints.
 *
 * The array is empty on purpose: nothing is listed until it actually exists.
 *
 * While it is empty, the Publications section and its navigation link are not
 * rendered at all — no heading, no "in preparation" placeholder, nothing that
 * announces an absence. Adding the first entry below restores both on its own;
 * there is nothing else to switch on. See `nav` in site.ts and the Publications
 * section in pages/index.astro.
 *
 * To add the first entry, uncomment the example at the bottom of this file,
 * replace the fields, and drop it into `publications`. Every field except
 * `title`, `authors`, and `year` is optional; links only render when present.
 */

export interface PublicationLinks {
  /** DOI, with or without the https://doi.org/ prefix. */
  doi?: string;
  /** arXiv, bioRxiv, medRxiv, etc. */
  preprint?: string;
  /** Repository or artifact. */
  code?: string;
  /** Publisher or PDF link, when there is no DOI to point at. */
  paper?: string;
}

export interface Publication {
  title: string;
  /** In publication order. Your own name is emphasised automatically. */
  authors: string[];
  /** Journal, conference, or preprint server. */
  venue?: string;
  year: number;
  links?: PublicationLinks;
  /** Set to true to mark an entry as not yet peer reviewed. */
  preprint?: boolean;
}

export const publications: Publication[] = [];

/*
 * ---------------------------------------------------------------------------
 * Example entry — copy this shape, do not ship it as-is.
 * ---------------------------------------------------------------------------
 *
 * export const publications: Publication[] = [
 *   {
 *     title: 'A system-level characterisation of chronic intracortical interface stability',
 *     authors: ['Hao Zhen', 'A. N. Other'],
 *     venue: 'Journal of Neural Engineering',
 *     year: 2027,
 *     preprint: false,
 *     links: {
 *       doi: '10.1088/1741-2552/xxxxxxx',
 *       preprint: 'https://www.biorxiv.org/content/10.1101/xxxxxx',
 *       code: 'https://github.com/hzhen0219/example',
 *       paper: 'https://example.org/paper.pdf',
 *     },
 *   },
 * ];
 */
