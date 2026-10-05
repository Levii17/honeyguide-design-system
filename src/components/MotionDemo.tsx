import { useState } from 'react';
import { Crown, Medal, Play, RotateCcw, Star, Trophy } from 'lucide-react';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

type DemoId = 'float' | 'nodeBounce' | 'bossPulse' | 'countBump' | 'pulseGlow' | 'trophyBurst' | 'starPop';
const AMBIENT: DemoId[] = ['float', 'nodeBounce', 'bossPulse'];

function Subject({ id }: { id: DemoId }) {
  const cls = `anim-${id}`;
  switch (id) {
    case 'float': return <img className={cls} src={asset('musa/appicon.webp')} alt="" />;
    case 'nodeBounce': return <div className={cn('dot', cls)}><Play size={26} aria-hidden="true" /></div>;
    case 'bossPulse': return <div className={cn('dot', 'boss', cls)}><Crown size={26} aria-hidden="true" /></div>;
    case 'countBump': return <span className={cn('stat-pill', 'xp', cls)} style={{ fontSize: 22 }}>+50 XP</span>;
    case 'pulseGlow': return <div className={cn('dot', cls)}><Medal size={26} aria-hidden="true" /></div>;
    case 'trophyBurst': return <div className={cn('dot', cls)}><Trophy size={28} aria-hidden="true" /></div>;
    case 'starPop': return <div className="row" style={{ gap: 6 }}>{[0, 1, 2].map((i) => <Star key={i} size={30} fill="#FFC24D" color="#E0A020" className={cls} style={{ animationDelay: `${i * 0.12}s` }} aria-hidden="true" />)}</div>;
  }
}

/** Ambient demos loop on their own; the rest replay on demand by remounting the subject. */
export function MotionDemo({ id }: { id: DemoId }) {
  const [run, setRun] = useState(0);
  const ambient = AMBIENT.includes(id);
  return (
    <div className="card">
      <div className="k">{id}</div>
      <div className="stage"><Subject key={run} id={id} /></div>
      {!ambient && <button className="clay-btn ghost" onClick={() => setRun(run + 1)}><RotateCcw size={16} aria-hidden="true" />Replay {id}</button>}
    </div>
  );
}
