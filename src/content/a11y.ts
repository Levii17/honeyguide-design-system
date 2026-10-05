import type { ColorToken } from './tokens';
import { colorByVar } from './tokens';

export interface ContrastPair { label: string; fg: ColorToken; bg: ColorToken; kind: 'text' | 'non-text'; note?: string }

/** The pairings the design system relies on. The page computes ratios live; nothing here is hand-typed. */
export const CONTRAST_PAIRS: ContrastPair[] = [
  { label: 'Body text', fg: colorByVar('green-deep'), bg: colorByVar('bg'), kind: 'text', note: 'Default text pairing sitewide' },
  { label: 'Secondary text on card', fg: colorByVar('ink-soft'), bg: colorByVar('card'), kind: 'text' },
  { label: 'Primary button', fg: colorByVar('card'), bg: colorByVar('green-dk'), kind: 'text', note: 'White on the darker jade' },
  { label: 'Gold button', fg: colorByVar('brown-dk'), bg: colorByVar('gold'), kind: 'text', note: 'Dark brown, never white' },
  { label: 'Coral button', fg: colorByVar('flag-black'), bg: colorByVar('coral'), kind: 'text', note: 'Near-black, never white' },
  { label: 'Focus ring on background', fg: colorByVar('sky-dk'), bg: colorByVar('bg'), kind: 'non-text', note: 'Sky Dark. Graded at 3:1 for non-text' },
];

/** Pairings that look plausible but fail. Shown so nobody reintroduces them. */
export const KNOWN_FAILURES: { label: string; fg: string; bg: string }[] = [
  { label: 'White text on gold', fg: '#FFFFFF', bg: '#FFC24D' },
  { label: 'White text on coral', fg: '#FFFFFF', bg: '#FF6B57' },
  { label: 'Sky (light) focus ring on Background', fg: '#3FA9E0', bg: '#F6EFDD' },
];

export const A11Y_RULES = [
  { title: 'Reduced motion respected', body: 'Every keyframe collapses under prefers-reduced-motion: reduce. No animation is ever the only way to perceive a state change.' },
  { title: 'Focus is always visible', body: 'A 3px Sky Dark outline with 2px offset on every interactive element, never suppressed for aesthetics. The lighter Sky measured only about 2.3:1 on the cream background, so the ring uses the darker tone.' },
  { title: 'Colour never carries meaning alone', body: "Flag red, blue and black are accents only. Status is always paired with an icon or a label, and Musa's expression backs up copy, it never replaces it." },
  { title: 'Tap targets of 44px or more', body: "Clay buttons' padding is tuned to keep every primary action comfortably tappable on a small phone screen." },
  { title: 'Ink on cream passes AA', body: 'Deep Green on Background is the default text pairing and holds contrast at body sizes.' },
] as const;
