import { ContrastChecker, ContrastTable } from '@/components/ContrastChecker';
import { Card, H3, Section } from '@/components/ui';
import { A11Y_RULES } from '@/content/a11y';

export function AccessibilitySection() {
  return (
    <Section id="accessibility" title="Accessibility" lead="Built into the CSS and documented here so it stays true as the product grows.">
      <div className="grid cols-2">{A11Y_RULES.map((r) => <Card key={r.title} title={r.title}><div className="v">{r.body}</div></Card>)}</div>
      <H3>Contrast: measured, not assumed</H3>
      <p className="note">These ratios are calculated live from the token hex values, so the table can't go stale. Icons and badges are graded against the 3:1 non-text standard, because they carry a shape, not a sentence. Anywhere colour sits behind actual words, it's held to 4.5:1.</p>
      <ContrastTable />
      <ContrastChecker />
    </Section>
  );
}
