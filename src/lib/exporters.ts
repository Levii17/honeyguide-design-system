import type { ColorToken } from '@/content/tokens';

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

/** :root block of CSS custom properties for the given colour tokens. */
export function toCssVariables(tokens: ColorToken[], extras: Record<string, string> = {}): string {
  const lines = [
    ...tokens.map((t) => `  --${t.cssVar}: ${t.hex.toLowerCase()};`),
    ...Object.entries(extras).map(([k, v]) => `  --${kebab(k)}: ${v};`),
  ];
  return `:root {\n${lines.join('\n')}\n}\n`;
}

/** Design-token JSON in a shape that is easy to feed into Style Dictionary or Figma Tokens. */
export function toTokenJson(tokens: ColorToken[]): string {
  const out: Record<string, Record<string, { value: string; description?: string }>> = {};
  for (const t of tokens) {
    out[t.group] ??= {};
    out[t.group][t.cssVar] = { value: t.hex.toUpperCase(), ...(t.role ? { description: t.role } : {}) };
  }
  return JSON.stringify({ color: out }, null, 2) + '\n';
}
