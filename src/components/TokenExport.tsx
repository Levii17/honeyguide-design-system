import { useState } from 'react';
import { Copy, Download } from 'lucide-react';
import { COLORS } from '@/content/tokens';
import { toCssVariables, toTokenJson } from '@/lib/exporters';
import { useToast } from './Toast';

const FORMATS = {
  css: { label: 'CSS variables', file: 'honeyguide-tokens.css', mime: 'text/css', build: () => toCssVariables(COLORS) },
  json: { label: 'JSON', file: 'honeyguide-tokens.json', mime: 'application/json', build: () => toTokenJson(COLORS) },
} as const;
type Fmt = keyof typeof FORMATS;

export function TokenExport() {
  const [fmt, setFmt] = useState<Fmt>('css');
  const { copy, say } = useToast();
  const text = FORMATS[fmt].build();
  const download = () => {
    try {
      const url = URL.createObjectURL(new Blob([text], { type: FORMATS[fmt].mime }));
      const a = Object.assign(document.createElement('a'), { href: url, download: FORMATS[fmt].file });
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    } catch { say("Couldn't start the download"); }
  };
  return (
    <div className="specimen">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div className="tabs" role="tablist" aria-label="Export format">
          {(Object.keys(FORMATS) as Fmt[]).map((k) => <button key={k} role="tab" aria-selected={fmt === k} onClick={() => setFmt(k)}>{FORMATS[k].label}</button>)}
        </div>
        <div className="row" style={{ gap: 10 }}>
          <button className="clay-btn ghost" onClick={() => copy(text, `${FORMATS[fmt].label} tokens`)}><Copy size={16} aria-hidden="true" />Copy</button>
          <button className="clay-btn" onClick={download}><Download size={16} aria-hidden="true" />Download</button>
        </div>
      </div>
      <pre className="export-box" tabIndex={0} aria-label={`${FORMATS[fmt].label} token export`}><code>{text}</code></pre>
    </div>
  );
}
