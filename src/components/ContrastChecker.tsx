import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { CONTRAST_PAIRS, KNOWN_FAILURES } from '@/content/a11y';
import { contrastRatio, formatRatio, gradeText, parseHex, passesNonText, toHex } from '@/lib/color';
import { cn } from '@/lib/cn';

function Pill({ ok, label }: { ok: boolean; label: string }) {
  return <span className={cn('pill', ok ? 'pass' : 'fail')}>{ok ? 'Pass' : 'Fail'} · {label}</span>;
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const valid = !!parseHex(value);
  const id = `cf-${label.toLowerCase().replace(/\W+/g, '-')}`;
  return (
    <div className="color-field">
      <input type="color" aria-label={`${label} colour picker`} value={valid ? toHex(parseHex(value)!) : '#000000'} onChange={(e) => onChange(e.target.value.toUpperCase())} />
      <div style={{ flex: 1 }}>
        <label htmlFor={id} className="specimen-label">{label}</label>
        <input id={id} type="text" value={value} aria-invalid={!valid} onChange={(e) => onChange(e.target.value)} maxLength={7} spellCheck={false} />
      </div>
    </div>
  );
}

/** Live WCAG checker. Presets load the system's own pairings. */
export function ContrastChecker() {
  const [fg, setFg] = useState('#21543D');
  const [bg, setBg] = useState('#F6EFDD');
  const ratio = contrastRatio(fg, bg);
  const valid = ratio !== null;
  return (
    <div className="specimen checker">
      <div className="specimen-label">Contrast checker</div>
      <div className="row">
        {[...CONTRAST_PAIRS.map((p) => ({ label: p.label, fg: p.fg.hex, bg: p.bg.hex })), ...KNOWN_FAILURES].map((p) => (
          <button key={p.label} type="button" className="filter" onClick={() => { setFg(p.fg); setBg(p.bg); }}>{p.label}</button>
        ))}
      </div>
      <div className="inputs">
        <ColorField label="Text" value={fg} onChange={setFg} />
        <ColorField label="Background" value={bg} onChange={setBg} />
      </div>
      <div className="row">
        <button type="button" className="clay-btn ghost" onClick={() => { setFg(bg); setBg(fg); }}><ArrowLeftRight size={16} aria-hidden="true" />Swap</button>
        <div role="status" aria-live="polite" style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700 }}>{valid ? formatRatio(ratio) : 'Enter two valid hex colours'}</div>
      </div>
      {valid && (
        <div className="row">
          <Pill ok={gradeText(ratio) !== 'Fail' && gradeText(ratio) !== 'AA large'} label="Body text (4.5:1)" />
          <Pill ok={gradeText(ratio, true) !== 'Fail'} label="Large text (3:1)" />
          <Pill ok={passesNonText(ratio)} label="Icons and UI (3:1)" />
          <Pill ok={gradeText(ratio) === 'AAA'} label="AAA (7:1)" />
        </div>
      )}
      <div className="preview" style={{ background: parseHex(bg) ? bg : '#fff', color: parseHex(fg) ? fg : '#000' }}>
        <b style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>Never a teacher. Always a guide.</b>
        <span>Every fact earns a "why this matters".</span>
      </div>
    </div>
  );
}

/** Ratios are computed here from the real hex values, so this table cannot drift from the tokens. */
export function ContrastTable() {
  const rows = [
    ...CONTRAST_PAIRS.map((p) => ({ label: p.label, fg: p.fg.hex, bg: p.bg.hex, kind: p.kind, note: p.note })),
    ...KNOWN_FAILURES.map((p) => ({ ...p, kind: 'text' as const, note: 'Avoid' })),
  ];
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Pairing</th><th>Text</th><th>On</th><th>Ratio</th><th>Standard</th></tr></thead>
        <tbody>
          {rows.map((r) => {
            const ratio = contrastRatio(r.fg, r.bg)!;
            const ok = r.kind === 'text' ? ratio >= 4.5 : passesNonText(ratio);
            return (
              <tr key={r.label}>
                <td><b>{r.label}</b>{r.note && <div className="note">{r.note}</div>}</td>
                <td><span className="mono">{r.fg}</span></td>
                <td><span className="mono">{r.bg}</span></td>
                <td><b>{formatRatio(ratio)}</b></td>
                <td><Pill ok={ok} label={r.kind === 'text' ? 'AA text' : 'AA non-text'} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
