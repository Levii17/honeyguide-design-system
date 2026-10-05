import { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/components/Toast';
import { Card, H3, Section, SayDont } from '@/components/ui';
import { COLOR_GROUPS, COLORS, TYPE_SCALE } from '@/content/tokens';
import { ICON_CATEGORIES, ICON_REGISTRY, type IconCategory } from '@/content/icons';
import { MISSION, NAMING, PRINCIPLES, TAGLINE, VALUES, VOICE_PILLARS } from '@/content/voice';
import { TokenExport } from '@/components/TokenExport';

export function Principles() {
  return (
    <Section id="principles" title="Six rules everything else is built to serve"
      lead="New work should formalise these ideas (tokens, states, specs) rather than add more colour, more decoration, or more variants. When a new pattern doesn't fit one of these six, that's the system telling you something.">
      <div className="grid cols-3">
        {PRINCIPLES.map((p, i) => <Card key={p.k} title={`${String(i + 1).padStart(2, '0')} · ${p.k}`}><div className="v">{p.v}</div></Card>)}
      </div>
    </Section>
  );
}

export function Brand() {
  return (
    <Section id="brand" title={TAGLINE}
      lead="HoneyGuide teaches South African history, geography, science, languages and civics the way a good guide does: pointing things out, not testing you on them.">
      <blockquote className="quote" style={{ margin: 0 }}>
        <p className="mission">"{MISSION}"</p>
        <p className="tagline">{TAGLINE}</p>
      </blockquote>
      <H3>Voice: four pillars</H3>
      <div className="grid cols-2">
        {VOICE_PILLARS.map((p) => <Card key={p.title} title={p.title}><div className="v">{p.body}</div><SayDont say={p.say} dont={p.dont} /></Card>)}
      </div>
      <H3>Values</H3>
      <div className="grid cols-2">{VALUES.map((v) => <Card key={v.k} title={v.k}><div className="v">{v.v}</div></Card>)}</div>
      <H3>Naming</H3>
      <div className="grid cols-2">{NAMING.map((n) => <Card key={n.name} title={n.name}><div className="v">{n.body}</div></Card>)}</div>
    </Section>
  );
}

function Swatch({ name, hex, role, cssVar }: { name: string; hex: string; role?: string; cssVar: string }) {
  const { copy } = useToast();
  return (
    <button type="button" className="swatch" onClick={() => copy(hex, hex)} aria-label={`${name} ${hex}. Copy hex value`}>
      <div className="chip-fill" style={{ background: hex, borderBottom: hex.toUpperCase() === '#FFFFFF' ? '1px solid var(--line)' : undefined }} />
      <div className="info"><div className="n">{name}</div><div className="h">{hex} · --{cssVar}</div>{role && <div className="u">{role}</div>}</div>
    </button>
  );
}

export function Colors() {
  return (
    <Section id="colors" title="Colors" lead="The full token set used in production. Everything else in this document is built from these values. Tap a swatch to copy its hex.">
      {COLOR_GROUPS.map((g) => (
        <div key={g.id} className="grid" style={{ gap: 12 }}>
          <H3>{g.title}</H3>
          {g.note && <p className="note">{g.note}</p>}
          <div className="grid cols-4">
            {COLORS.filter((c) => c.group === g.id).map((c) => <Swatch key={c.cssVar} {...c} />)}
          </div>
        </div>
      ))}
      <H3>Take the tokens with you</H3>
      <TokenExport />
    </Section>
  );
}

export function Typography() {
  return (
    <Section id="typography" title="Typography" lead="Fredoka carries the brand's personality: headings, buttons, anything that should feel spoken by Musa. Manrope handles everything you actually read.">
      <div className="grid cols-2">
        <div className="card font-card"><div className="big" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Aa</div><div className="k">Fredoka</div><div className="v">Display: headings, buttons, stat numbers</div></div>
        <div className="card font-card"><div className="big" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Aa</div><div className="k">Manrope</div><div className="v">Body: paragraphs, labels, lesson content</div></div>
      </div>
      <H3>Type scale</H3>
      <div className="card">
        {TYPE_SCALE.map((t) => (
          <div key={t.name} className="type-row">
            <div style={{ fontFamily: `var(--font-${t.family === 'Fredoka' ? 'display' : 'body'})`, fontWeight: t.weight, fontSize: t.size, lineHeight: t.line, textTransform: t.uppercase ? 'uppercase' : undefined, letterSpacing: t.uppercase ? '.1em' : undefined }}>{t.sample}</div>
            <div className="meta">{t.name} · {t.family} {t.weight} · {t.size}px / {t.line}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function IconsSection() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<IconCategory | 'All'>('All');
  const { copy } = useToast();
  const list = ICON_REGISTRY.filter((i) => (cat === 'All' || i.category === cat) && `${i.name} ${i.usage}`.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <Section id="icons" title="Icons"
      lead="Lucide, 24×24, currentColor, a 2–2.4px rounded stroke that sits comfortably next to Fredoka. Icons are wrapped in one component so the library can be swapped in a single file. No emoji in UI.">
      <div className="icon-toolbar">
        <label className="search"><Search size={18} aria-hidden="true" /><input type="search" placeholder="Search icons" aria-label="Search icons" value={q} onChange={(e) => setQ(e.target.value)} /></label>
        {(['All', ...ICON_CATEGORIES] as const).map((c) => <button key={c} type="button" className="filter" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <p className="note" role="status">{list.length} {list.length === 1 ? 'icon' : 'icons'}. Tap one to copy its name.</p>
      <div className="icon-grid">
        {list.map(({ name, Icon, usage }) => (
          <button key={name} type="button" className="icon-tile" onClick={() => copy(name)} aria-label={`${name}: ${usage}. Copy name`}>
            <Icon size={28} strokeWidth={2.2} aria-hidden="true" /><span>{name}</span><span className="use">{usage}</span>
          </button>
        ))}
      </div>
      {list.length === 0 && <p className="note">No icons match "{q}".</p>}
    </Section>
  );
}
