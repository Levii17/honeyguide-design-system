import { describe, expect, it } from 'vitest';
import { contrastRatio, formatRatio, gradeText, parseHex, passesNonText, toHex } from '../color';

describe('parseHex / toHex', () => {
  it('parses 6 and 3 digit hex, with or without #', () => {
    expect(parseHex('#0FA676')).toEqual([15, 166, 118]);
    expect(parseHex('fff')).toEqual([255, 255, 255]);
  });
  it('rejects invalid input', () => {
    expect(parseHex('#12345')).toBeNull();
    expect(parseHex('nope')).toBeNull();
  });
  it('round-trips', () => expect(toHex(parseHex('#21543d')!)).toBe('#21543D'));
});

describe('contrastRatio', () => {
  it('matches the WCAG reference extremes', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5);
    expect(contrastRatio('#FFFFFF', '#FFFFFF')).toBeCloseTo(1, 5);
  });
  it('is symmetric', () => {
    expect(contrastRatio('#21543D', '#F6EFDD')).toBeCloseTo(contrastRatio('#F6EFDD', '#21543D')!, 10);
  });
  it('returns null for invalid colours', () => expect(contrastRatio('#xyz', '#fff')).toBeNull());
});

describe('grading', () => {
  it('applies text thresholds', () => {
    expect(gradeText(7.1)).toBe('AAA');
    expect(gradeText(4.6)).toBe('AA');
    expect(gradeText(3.2)).toBe('AA large');
    expect(gradeText(2.9)).toBe('Fail');
  });
  it('relaxes thresholds for large text', () => {
    expect(gradeText(4.6, true)).toBe('AAA');
    expect(gradeText(3.1, true)).toBe('AA');
  });
  it('grades non-text at 3:1', () => {
    expect(passesNonText(3)).toBe(true);
    expect(passesNonText(2.99)).toBe(false);
  });
  it('floors the displayed ratio so a near-miss never rounds up to a pass', () => {
    expect(formatRatio(4.49)).toBe('4.4:1');
    expect(formatRatio(4.5)).toBe('4.5:1');
  });
});
