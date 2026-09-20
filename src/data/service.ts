/**
 * Professional service.
 *
 * Deliberately separate from `work.ts`. These are appointments and volunteer
 * service roles, not employment, and nothing here should be rendered or
 * modelled as an employer relationship — see the note on `affiliation` in
 * BaseLayout.astro.
 */

export interface ServiceEntry {
  /** The institution the service is performed for, not an employer. */
  organisation: string;
  /** The appointment held, e.g. "Institutional Review Board Member". */
  role: string;
  /** Free text, e.g. "2026–Present". */
  period: string;
  /** Optional single sentence. Omit where the appointment speaks for itself. */
  description?: string;
}

export const service: ServiceEntry[] = [
  {
    organisation: 'Massachusetts General Hospital',
    role: 'Institutional Review Board Member',
    period: '2026–Present',
  },
];
