import { useEffect, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { sectionNumber, SECTIONS } from '@/content/nav';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

const IDS = SECTIONS.map((s) => s.id);

export function Layout({ children }: { children: ReactNode }) {
  const active = useScrollSpy(IDS);
  const desktop = useMediaQuery('(min-width: 900px)', true);
  const [open, setOpen] = useState(false);
  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => { if (desktop) setOpen(false); }, [desktop]);

  const groups = SECTIONS.reduce<Record<string, typeof SECTIONS>>((acc, s) => ((acc[s.group] ??= []).push(s), acc), {});

  return (
    <div className="shell">
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <button className="icon-btn" aria-label="Open navigation" aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen(true)}><Menu size={22} aria-hidden="true" /></button>
        <button className="current" onClick={() => setOpen(true)}>{sectionNumber(current.id)}. {current.label}</button>
      </header>
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      <nav id="sidebar" className={cn('sidebar', open && 'open')} aria-label="Sections" inert={!desktop && !open}>
        <div className="brand">
          <img src={asset('icons/android-chrome-192x192.png')} alt="" width={44} height={44} />
          <div><b>HoneyGuide</b><small>Design system</small></div>
          {!desktop && <button className="icon-btn" style={{ marginLeft: 'auto' }} aria-label="Close navigation" onClick={() => setOpen(false)}><X size={20} aria-hidden="true" /></button>}
        </div>
        {Object.entries(groups).map(([group, items]) => (
          <div key={group}>
            <div className="nav-label">{group}</div>
            {items.map((s) => (
              <a key={s.id} className="navlink" href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined} onClick={() => setOpen(false)}>
                <span className="n">{sectionNumber(s.id)}</span>{s.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <main id="main">{children}</main>
    </div>
  );
}
