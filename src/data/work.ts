/**
 * Selected work and education.
 *
 * This is intentionally not a résumé: include only positions that support the
 * research identity, and keep each description to a single restrained sentence.
 * Nothing here may contain confidential or unpublished technical detail.
 *
 * Corporate job titles are deliberately not part of this model. The section
 * communicates technical scope and area of contribution, not rank, so there is
 * no field to render one. Professional service appointments are a different
 * thing and live in `service.ts`.
 */

export interface WorkEntry {
  /** The organisation. */
  organisation: string;
  /** What the work is about — the technical or research area. */
  heading: string;
  /** One sentence. Scope, not accomplishments. */
  description: string;
}

export const work: WorkEntry[] = [
  {
    organisation: 'Paradromics',
    heading: 'Implantable Brain–Computer Interfaces',
    description:
      'Engineering and translation of implantable BCI systems spanning system architecture, neural communication platforms, verification and validation, preclinical studies, regulatory testing, and early clinical deployment.',
  },
  {
    organisation: 'Applied Materials',
    heading: 'Complex High-Reliability Systems',
    description:
      'Engineering experience in complex semiconductor equipment and high-reliability hardware systems.',
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Cornell University',
    degree: 'M.Eng., Engineering Management',
  },
  {
    institution: 'Northeastern University',
    degree: 'B.S., Electrical and Computer Engineering',
  },
];
