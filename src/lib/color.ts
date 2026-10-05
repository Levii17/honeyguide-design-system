/** WCAG 2.x colour maths. Pure functions, no DOM. */
export type Rgb = [number, number, number];

export function parseHex(hex: string): Rgb | null {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const toHex = ([r, g, b]: Rgb): string =>
  '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();

const channel = (v: number): number => {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

export function luminance([r, g, b]: Rgb): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Contrast ratio between two hex colours, or null if either is invalid. Always >= 1. */
export function contrastRatio(fg: string, bg: string): number | null {
  const a = parseHex(fg);
  const b = parseHex(bg);
  if (!a || !b) return null;
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export type Grade = 'AAA' | 'AA' | 'AA large' | 'Fail';

/** Grade against WCAG text thresholds (large text = 18.66px bold / 24px regular). */
export function gradeText(ratio: number, large = false): Grade {
  if (ratio >= (large ? 4.5 : 7)) return 'AAA';
  if (ratio >= (large ? 3 : 4.5)) return 'AA';
  if (ratio >= 3) return 'AA large';
  return 'Fail';
}

export const passesNonText = (ratio: number): boolean => ratio >= 3;

export const formatRatio = (ratio: number): string => `${(Math.floor(ratio * 10) / 10).toFixed(1)}:1`;
