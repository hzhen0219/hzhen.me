/**
 * The three research pillars rendered in the Research section.
 *
 * Add, remove, or reorder entries freely — the numbering (01, 02, 03) is derived
 * from array position, not stored in the data.
 */

export interface ResearchArea {
  /** Short title, e.g. "Implantable BCI Systems". */
  title: string;
  /**
   * One or two sentences describing the agenda in the first person. State what
   * the work examines, not what the author finds interesting.
   */
  description: string;
  /** Short noun phrases, rendered as a plain list. Keep them lowercase. */
  topics: string[];
  /** The open question that motivates the area. Rendered as a pull quote. */
  question: string;
}

export const researchAreas: ResearchArea[] = [
  {
    title: 'Implantable BCI Systems',
    description:
      'My work examines the architecture of high-bandwidth implantable neural interfaces and the engineering constraints that determine their real-world performance.',
    topics: [
      'neural recording systems',
      'implant electronics',
      'wireless telemetry',
      'bandwidth',
      'power and thermal constraints',
      'latency',
      'synchronization',
      'distributed and multi-region BCI systems',
    ],
    question:
      'How can implantable neural interfaces acquire and transmit increasingly large amounts of neural information while remaining low-power, reliable, and clinically practical?',
  },
  {
    title: 'Translational Neuroengineering',
    description:
      'This work extends from experimental neurotechnology to systems designed for reliable operation in preclinical and clinical environments.',
    topics: [
      'verification and validation',
      'system reliability',
      'chronic operation',
      'preclinical testing',
      'regulatory engineering',
      'clinical deployment',
      'first-in-human translation',
    ],
    question:
      'How do we translate experimental neural interfaces into reliable systems that can operate in real preclinical and clinical environments?',
  },
  {
    title: 'Neural Information & Decoding',
    description:
      'My research examines how neural information should be represented, preserved, transmitted, and modeled across future brain–computer interfaces.',
    topics: [
      'raw neural signals',
      'spikes and LFP',
      'neural representations',
      'neural information throughput',
      'multimodal neural data',
      'neural decoding',
      'AI-native BCI architectures',
    ],
    question:
      'What neural information should future BCIs preserve, transmit, and model?',
  },
];

/**
 * Work in progress — deliberately separate from `publications` so that research
 * directions are never presented as completed, peer-reviewed output.
 */
export interface ResearchDirection {
  title: string;
  summary: string;
}

export const researchDirections: ResearchDirection[] = [
  {
    title: 'High-Bandwidth Implantable BCI Systems',
    summary:
      'System-level constraints across neural acquisition, onboard processing, wireless telemetry, power, latency, and decoding.',
  },
  {
    title: 'Neural Information Representation',
    summary:
      'Understanding the tradeoff between raw neural signals, spikes, LFPs, information preservation, bandwidth, and decoding performance.',
  },
  {
    title: 'Chronic Neural Interface Stability',
    summary:
      'Developing system-level metrics for evaluating long-term intracortical interface stability.',
  },
];
