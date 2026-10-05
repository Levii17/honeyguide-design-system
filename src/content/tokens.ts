/** Single source of truth for design tokens. The UI, the CSS export and the tests all read from here. */

export type ColorGroup = 'primary' | 'secondary' | 'neutral' | 'flag' | 'functional' | 'background';

export interface ColorToken {
  name: string;
  cssVar: string;
  hex: string;
  group: ColorGroup;
  role?: string;
}

export const COLOR_GROUPS: { id: ColorGroup; title: string; note?: string }[] = [
  { id: 'primary', title: 'Primary: Jade Green' },
  { id: 'secondary', title: 'Secondary: Golden Yellow' },
  { id: 'neutral', title: 'Neutral: Warm Brown' },
  { id: 'flag', title: 'Flag accents', note: "Use sparingly: Musa's scarf and small accent moments only. Never as functional UI colour (buttons, states, charts)." },
  { id: 'functional', title: 'Supplementary: functional colours' },
  { id: 'background', title: 'Backgrounds' },
];

export const COLORS: ColorToken[] = [
  { name: 'Jade Light', cssVar: 'green-lt', hex: '#3FC79A', group: 'primary' },
  { name: 'Jade Green', cssVar: 'green', hex: '#0FA676', group: 'primary', role: 'Primary brand colour' },
  { name: 'Jade Dark', cssVar: 'green-dk', hex: '#0C8560', group: 'primary', role: 'Primary button base, so white text clears 4.5:1' },
  { name: 'Deep Green', cssVar: 'green-deep', hex: '#21543D', group: 'primary', role: 'Headings and ink' },
  { name: 'Gold Light', cssVar: 'gold-lt', hex: '#FFD97D', group: 'secondary' },
  { name: 'Golden Yellow', cssVar: 'gold', hex: '#FFC24D', group: 'secondary', role: 'Rewards, streaks, CTAs' },
  { name: 'Gold Dark', cssVar: 'gold-dk', hex: '#E0A020', group: 'secondary' },
  { name: 'Brown Light', cssVar: 'brown-lt', hex: '#AD8058', group: 'neutral' },
  { name: 'Warm Brown', cssVar: 'brown', hex: '#8B5E34', group: 'neutral', role: "Musa's wings and satchel" },
  { name: 'Brown Dark', cssVar: 'brown-dk', hex: '#6E4826', group: 'neutral', role: 'Text on gold buttons' },
  { name: 'Flag Red', cssVar: 'flag-red', hex: '#DF1F3D', group: 'flag' },
  { name: 'Flag Blue', cssVar: 'flag-blue', hex: '#1E3A8A', group: 'flag' },
  { name: 'Flag Black', cssVar: 'flag-black', hex: '#111111', group: 'flag', role: 'Text on coral buttons' },
  { name: 'Coral', cssVar: 'coral', hex: '#FF6B57', group: 'functional', role: "Hearts, errors. Never used for Musa's own tone" },
  { name: 'Sky', cssVar: 'sky', hex: '#3FA9E0', group: 'functional', role: 'Info and illustration fills' },
  { name: 'Sky Dark', cssVar: 'sky-dk', hex: '#1F86BD', group: 'functional', role: 'Focus rings (3.5:1 on Background)' },
  { name: 'Violet', cssVar: 'violet', hex: '#8B6FD9', group: 'functional', role: 'Streaks, rare rewards' },
  { name: 'Background', cssVar: 'bg', hex: '#F6EFDD', group: 'background' },
  { name: 'Background 2', cssVar: 'bg-2', hex: '#EFE2C4', group: 'background' },
  { name: 'Card', cssVar: 'card', hex: '#FFFFFF', group: 'background' },
  { name: 'Card Warm', cssVar: 'card-warm', hex: '#FFF9EC', group: 'background' },
  { name: 'Ink Soft', cssVar: 'ink-soft', hex: '#4C6659', group: 'neutral', role: 'Secondary text' },
];

export const colorByVar = (v: string): ColorToken => {
  const t = COLORS.find((c) => c.cssVar === v);
  if (!t) throw new Error(`Unknown colour token: ${v}`);
  return t;
};

export interface TypeStyle { name: string; family: 'Fredoka' | 'Manrope'; weight: number; size: number; line: number; sample: string; uppercase?: boolean }

export const TYPE_SCALE: TypeStyle[] = [
  { name: 'Display XL', family: 'Fredoka', weight: 700, size: 34, line: 1.1, sample: 'Learn South Africa' },
  { name: 'Display Large', family: 'Fredoka', weight: 600, size: 26, line: 1.15, sample: 'Your daily lesson' },
  { name: 'Display Medium', family: 'Fredoka', weight: 600, size: 20, line: 1.2, sample: 'History of South Africa' },
  { name: 'Display Small', family: 'Fredoka', weight: 600, size: 15, line: 1.3, sample: 'Start lesson' },
  { name: 'Body Large', family: 'Manrope', weight: 500, size: 16, line: 1.6, sample: 'For lesson key facts and anything the learner needs to actually read.' },
  { name: 'Body Medium', family: 'Manrope', weight: 400, size: 14, line: 1.6, sample: 'Supporting text, descriptions and card copy.' },
  { name: 'Eyebrow Label', family: 'Fredoka', weight: 700, size: 11, line: 1.3, sample: 'Module 1', uppercase: true },
];

export const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64] as const;

export const RADII = [
  { name: 'r-sm', px: 12, use: 'Inputs, small tiles' },
  { name: 'r-md', px: 18, use: 'Buttons, answer options' },
  { name: 'r-lg', px: 24, use: 'Cards' },
  { name: 'r-xl', px: 32, use: 'Sheets, hero cards' },
  { name: 'r-pill', px: 999, use: 'Chips, pills, toggles' },
] as const;

/** Clay shadow recipes. Each one stacks a top bevel, a soft inner shade and a tinted drop. */
export const SHADOWS = [
  { name: 'clay', css: '7px 9px 18px rgba(33,84,61,.14), -5px -5px 12px rgba(255,255,255,.85), inset 2px 2px 5px rgba(255,255,255,.9), inset -3px -4px 8px rgba(33,84,61,.06)', use: 'Cards and nav' },
  { name: 'clay-sm', css: '4px 5px 10px rgba(33,84,61,.13), -3px -3px 8px rgba(255,255,255,.85), inset 1px 1px 3px rgba(255,255,255,.9), inset -2px -2px 5px rgba(33,84,61,.06)', use: 'List rows, option cards' },
  { name: 'clay-in', css: 'inset 4px 4px 9px rgba(33,84,61,.14), inset -3px -3px 7px rgba(255,255,255,.9)', use: 'Inputs, progress tracks, toggles' },
] as const;
