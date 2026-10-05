import { describe, expect, it } from 'vitest';
import { contrastRatio, passesNonText } from '@/lib/color';
import { toCssVariables, toTokenJson } from '@/lib/exporters';
import { CONTRAST_PAIRS, KNOWN_FAILURES } from '../a11y';
import { ILLUSTRATION_FIGURES, MUSA_FIGURES, PROGRESSION_FIGURE } from '../musa';
import { SECTIONS, sectionNumber } from '../nav';
import { COLORS, COLOR_GROUPS, SPACING } from '../tokens';
import { ICON_REGISTRY, ICON_CATEGORIES } from '../icons';
import { KEYFRAMES } from '../motion';
import { existsSync } from 'node:fs';

describe('colour tokens', () => {
  it('has valid, unique hex values and css variable names', () => {
    for (const c of COLORS) expect(c.hex).toMatch(/^#[0-9A-F]{6}$/i);
    expect(new Set(COLORS.map((c) => c.cssVar)).size).toBe(COLORS.length);
  });
  it('assigns every colour to a documented group', () => {
    const groups = new Set(COLOR_GROUPS.map((g) => g.id));
    for (const c of COLORS) expect(groups.has(c.group)).toBe(true);
  });
  it('spacing follows the 4px base unit', () => {
    for (const s of SPACING) expect(s % 4).toBe(0);
  });
});

describe('contrast pairs documented by the system', () => {
  it('every text pairing clears WCAG AA (4.5:1)', () => {
    for (const p of CONTRAST_PAIRS.filter((x) => x.kind === 'text')) {
      expect(contrastRatio(p.fg.hex, p.bg.hex)!, p.label).toBeGreaterThanOrEqual(4.5);
    }
  });
  it('every non-text pairing clears 3:1', () => {
    for (const p of CONTRAST_PAIRS.filter((x) => x.kind === 'non-text')) {
      expect(passesNonText(contrastRatio(p.fg.hex, p.bg.hex)!), p.label).toBe(true);
    }
  });
  it('the documented known failures really do fail', () => {
    for (const f of KNOWN_FAILURES) expect(contrastRatio(f.fg, f.bg)!, f.label).toBeLessThan(4.5);
  });
});

describe('exporters', () => {
  it('emits a :root block with every token', () => {
    const css = toCssVariables(COLORS);
    expect(css.startsWith(':root {')).toBe(true);
    expect(css).toContain('--green: #0fa676;');
    expect(css.match(/--[a-z0-9-]+:/g)).toHaveLength(COLORS.length);
  });
  it('emits grouped JSON that parses back', () => {
    const json = JSON.parse(toTokenJson(COLORS));
    expect(json.color.primary.green.value).toBe('#0FA676');
    expect(json.color.secondary.gold.description).toBe('Rewards, streaks, CTAs');
  });
});

describe('navigation and registries', () => {
  it('has unique section ids and zero-padded numbers', () => {
    expect(new Set(SECTIONS.map((s) => s.id)).size).toBe(SECTIONS.length);
    expect(sectionNumber('principles')).toBe('00');
    expect(sectionNumber('accessibility')).toBe('12');
  });
  it('has unique icon names, each in a known category', () => {
    expect(new Set(ICON_REGISTRY.map((i) => i.name)).size).toBe(ICON_REGISTRY.length);
    for (const i of ICON_REGISTRY) expect(ICON_CATEGORIES).toContain(i.category);
  });
  it('puts every motion keyframe in one of the four buckets', () => {
    expect(new Set(KEYFRAMES.map((k) => k.bucket))).toEqual(new Set(['Ambient', 'Feedback', 'Celebration', 'Transition']));
  });
  it('points every figure at an optimised image that exists', () => {
    for (const f of [...MUSA_FIGURES, ...ILLUSTRATION_FIGURES, PROGRESSION_FIGURE]) {
      expect(existsSync(`public/assets/musa/${f.file}.webp`), f.file).toBe(true);
    }
  });
});
