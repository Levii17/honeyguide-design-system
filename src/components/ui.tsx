import { useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import type { Figure as FigureData } from '@/content/musa';
import { sectionNumber, SECTIONS } from '@/content/nav';
import { asset } from '@/lib/asset';

export function Section({ id, title, lead, children }: { id: string; title: string; lead?: ReactNode; children: ReactNode }) {
  const label = SECTIONS.find((s) => s.id === id)?.label ?? title;
  return (
    <section className="section" id={id} aria-labelledby={`${id}-h`}>
      <div className="eyebrow">{sectionNumber(id)} - {label}</div>
      <h2 id={`${id}-h`}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}

export const H3 = ({ children }: { children: ReactNode }) => <h3 className="h3">{children}</h3>;

export function Card({ title, children }: { title: string; children?: ReactNode }) {
  return <div className="card"><div className="k">{title}</div>{children}</div>;
}

export function SayDont({ say, dont }: { say: string; dont: string }) {
  return (
    <>
      <div className="say"><b>Say</b>{say}</div>
      <div className="dont"><b>Not this</b>{dont}</div>
    </>
  );
}

export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button ref={ref} className="icon-btn close" aria-label="Close image" onClick={onClose}><X size={20} aria-hidden="true" /></button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

/** Optimised artwork that opens full size on click. */
export function Figure({ data }: { data: FigureData }) {
  const [open, setOpen] = useState(false);
  const src = asset(`musa/${data.file}.webp`);
  return (
    <figure className="figure">
      <button type="button" onClick={() => setOpen(true)} aria-label={`View ${data.title} full size`}>
        <img src={src} alt={data.alt} width={1400} height={933} loading="lazy" decoding="async" />
      </button>
      <figcaption><b>{data.title}</b>{data.caption}</figcaption>
      {open && <Lightbox src={src} alt={data.alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}

/** Nothing is fetched until the clip nears the viewport; preload stays "none" so it downloads on play. */
export function LazyVideo({ id, title, use }: { id: string; title: string; use: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | undefined>();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setSrc(asset(`video/${id}.mp4`)); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSrc(asset(`video/${id}.mp4`)); io.disconnect(); } }, { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, [id]);
  return (
    <figure className="figure video-card">
      <video ref={ref} src={src} poster={asset(`video/${id}-poster.webp`)} controls loop muted playsInline preload="none" aria-label={`Musa ${title.toLowerCase()} animation`} />
      <figcaption><b>{title}</b>{use}</figcaption>
    </figure>
  );
}
