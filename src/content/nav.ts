export interface SectionDef { id: string; label: string; group: 'Foundations' | 'Character' | 'Components' | 'Experience' | 'Accessibility' }

export const SECTIONS: SectionDef[] = [
  { id: 'principles', label: 'Principles', group: 'Foundations' },
  { id: 'brand', label: 'Brand', group: 'Foundations' },
  { id: 'colors', label: 'Colors', group: 'Foundations' },
  { id: 'typography', label: 'Typography', group: 'Foundations' },
  { id: 'icons', label: 'Icons', group: 'Foundations' },
  { id: 'musa', label: 'Musa', group: 'Character' },
  { id: 'illustration', label: 'Illustration', group: 'Character' },
  { id: 'components', label: 'Components', group: 'Components' },
  { id: 'motion', label: 'Motion', group: 'Experience' },
  { id: 'rewards', label: 'Rewards', group: 'Experience' },
  { id: 'sounds', label: 'Sounds', group: 'Experience' },
  { id: 'writing', label: 'Writing', group: 'Experience' },
  { id: 'accessibility', label: 'Accessibility', group: 'Accessibility' },
];

export const sectionNumber = (id: string): string => String(SECTIONS.findIndex((s) => s.id === id)).padStart(2, '0');
