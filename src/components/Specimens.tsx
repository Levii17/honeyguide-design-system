import { useState } from 'react';
import { Check, Crown, Flame, Gem, Heart, Lock, Medal, Play, ScrollText, Star, X } from 'lucide-react';
import { RADII, SHADOWS, SPACING } from '@/content/tokens';
import { cn } from '@/lib/cn';

const Label = ({ children }: { children: string }) => <div className="specimen-label">{children}</div>;

export function SpacingScale() {
  return (
    <div className="specimen">
      <Label>Spacing scale · 4px base unit</Label>
      <div className="spacing-row">
        {SPACING.map((n) => <div key={n}><i style={{ width: n, height: n }} />{n}</div>)}
      </div>
    </div>
  );
}

export function RadiiAndShadows() {
  return (
    <div className="grid cols-2">
      <div className="specimen">
        <Label>Radii</Label>
        <div className="row">
          {RADII.map((r) => <div key={r.name} className="radius-box" style={{ borderRadius: r.px }} title={r.use}>{r.name}<br />{r.px === 999 ? 'pill' : `${r.px}px`}</div>)}
        </div>
      </div>
      <div className="specimen">
        <Label>Clay shadows</Label>
        <div className="grid" style={{ gap: 18 }}>
          {SHADOWS.map((s) => <div key={s.name} className="shadow-box" style={{ boxShadow: s.css, background: s.name === 'clay-in' ? '#fbf6e8' : undefined }}>{s.name}<small style={{ display: 'block', fontWeight: 500, fontFamily: 'var(--font-body)', color: 'var(--ink-soft)' }}>{s.use}</small></div>)}
        </div>
      </div>
    </div>
  );
}

export function ButtonSpecimens() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="grid cols-2">
      <div className="specimen">
        <Label>Variants · primary / gold / coral / ghost / outline</Label>
        <div className="row">
          <button className="clay-btn"><Play size={18} aria-hidden="true" />Start lesson</button>
          <button className="clay-btn gold"><Medal size={18} aria-hidden="true" />Claim reward</button>
          <button className="clay-btn coral">Leave lesson</button>
          <button className="clay-btn ghost">Skip</button>
          <button className="clay-btn outline">Maybe later</button>
        </div>
      </div>
      <div className="specimen">
        <Label>States · default / hover and focus / pressed / loading / disabled</Label>
        <div className="row">
          <button className="clay-btn">Default</button>
          <button className="clay-btn">Hover or focus me</button>
          <button className="clay-btn is-pressed">Pressed</button>
          <button className={cn('clay-btn', loading && 'loading')} aria-busy={loading} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1400); }}>
            {loading && <span className="spin" aria-hidden="true" />}{loading ? 'Saving' : 'Tap to save'}
          </button>
          <button className="clay-btn" disabled><Lock size={16} aria-hidden="true" />Locked</button>
        </div>
        <p className="note">Pressed sinks the button 4px. Loading keeps the label so the width doesn't jump.</p>
      </div>
    </div>
  );
}

export function CardAndChipSpecimens() {
  return (
    <div className="grid cols-2">
      <div className="specimen">
        <Label>Clay card</Label>
        <div className="clay-card row" style={{ flexWrap: 'nowrap' }}>
          <div className="track-icon t-gold"><ScrollText size={24} aria-hidden="true" /></div>
          <div style={{ flex: 1 }}>
            <b style={{ fontFamily: 'var(--font-display)' }}>History of South Africa</b>
            <div className="progress" style={{ margin: '6px 0 4px' }}><i style={{ width: '35%' }} /></div>
            <small className="note">7 of 20 lessons · Free track</small>
          </div>
        </div>
      </div>
      <div className="specimen">
        <Label>Chips</Label>
        <div className="row"><span className="chip">Beginner</span><span className="chip gold"><Star size={13} aria-hidden="true" />Featured</span><span className="chip sky">New</span><span className="chip violet">Rare</span><span className="chip coral">Needs review</span></div>
        <Label>Stat pills</Label>
        <div className="row">
          <span className="stat-pill streak"><Flame size={17} aria-hidden="true" />7</span>
          <span className="stat-pill hearts"><Heart size={17} aria-hidden="true" />4</span>
          <span className="stat-pill xp"><Gem size={17} aria-hidden="true" />1,240</span>
        </div>
      </div>
    </div>
  );
}

export function ProgressAndToggle() {
  const [on, setOn] = useState(true);
  return (
    <div className="grid cols-2">
      <div className="specimen">
        <Label>Progress</Label>
        <div className="progress" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} aria-label="Lesson progress"><i style={{ width: '68%' }} /></div>
        <div className="progress gold" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} aria-label="Daily goal"><i style={{ width: '40%' }} /></div>
      </div>
      <div className="specimen">
        <Label>Toggle</Label>
        <div className="row"><button type="button" role="switch" aria-checked={on} aria-label="Daily reminder" className="toggle" onClick={() => setOn(!on)}><span /></button><span>{on ? 'Reminders on' : 'Reminders off'}</span></div>
      </div>
    </div>
  );
}

export function AnswerSpecimens() {
  return (
    <div className="specimen">
      <Label>Answer options · default / correct / incorrect</Label>
      <div className="grid cols-3">
        <div className="answer"><span className="key">1</span><span style={{ flex: 1 }}>Opening of the Suez Canal</span></div>
        <div className="answer ok"><span className="key">2</span><span style={{ flex: 1 }}>Discovery of diamonds</span><Check size={18} strokeWidth={3} aria-label="Correct" /></div>
        <div className="answer bad"><span className="key">3</span><span style={{ flex: 1 }}>Discovery of coal</span><X size={18} strokeWidth={3} aria-label="Incorrect" /></div>
      </div>
      <p className="note">State is carried by border, tint <em>and</em> an icon, never colour alone.</p>
    </div>
  );
}

export function BadgeAndLeaderboard() {
  return (
    <div className="grid cols-2">
      <div className="specimen">
        <Label>Badge tiles</Label>
        <div className="grid cols-3" style={{ gap: 10 }}>
          <div className="badge-tile"><span className="medal"><Medal size={26} aria-hidden="true" /></span>Explorer</div>
          <div className="badge-tile"><span className="medal"><Crown size={26} aria-hidden="true" /></span>Champion</div>
          <div className="badge-tile locked"><span className="medal"><Lock size={24} aria-hidden="true" /></span>Locked</div>
        </div>
      </div>
      <div className="specimen">
        <Label>Leaderboard rows</Label>
        <div className="grid" style={{ gap: 10 }}>
          <div className="lb-row me"><span className="lb-rank top">2</span><b style={{ flex: 1, fontFamily: 'var(--font-display)' }}>You</b><span className="note">1,240 XP</span></div>
          <div className="lb-row"><span className="lb-rank">3</span><b style={{ flex: 1, fontFamily: 'var(--font-display)' }}>Lukhanyo</b><span className="note">1,180 XP</span></div>
        </div>
      </div>
    </div>
  );
}
