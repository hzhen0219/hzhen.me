/**
 * Selected work and education.
 *
 * This is intentionally not a résumé: include only positions that support the
 * research identity, and keep each description to a single restrained sentence.
 * Nothing here may contain confidential or unpublished technical detail.
 */

export interface WorkEntry {
  /** The organisation. */
  organisation: string;
  /** What the work is about — the heading, not the job title. */
  heading: string;
  /** One sentence. Scope, not accomplishments. */
  description: string;
  /** Job title. Omit where it adds nothing. */
  role?: string;
}

export const work: WorkEntry[] = [
  {
    organisation: 'Paradromics',
    heading: 'Implantable Brain–Computer Interfaces',
    description:
      'Engineering and translation of implantable BCI systems spanning system architecture, neural communication platforms, verification and validation, preclinical studies, regulatory testing, and early clinical deployment.',
    role: 'Senior Electrical Engineer',
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
