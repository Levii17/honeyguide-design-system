import { Flame, Gem, Heart } from 'lucide-react';
import { MotionDemo } from '@/components/MotionDemo';
import { Card, Figure, H3, Section } from '@/components/ui';
import { BUCKET_NOTES, KEYFRAMES, type MotionBucket } from '@/content/motion';
import { LADDER, PROGRESSION_FIGURE } from '@/content/musa';
import { BEFORE_AFTER, SOUND_PRINCIPLES, WRITING_RULES } from '@/content/voice';

const BUCKETS: MotionBucket[] = ['Ambient', 'Feedback', 'Celebration', 'Transition'];

export function Motion() {
  return (
    <Section id="motion" title="Motion" lead="Motion celebrates, it never blocks. Nothing here makes the learner wait longer than the interaction needs. Tap Replay to see each one.">
      <div className="grid cols-3">
        {KEYFRAMES.filter((k) => k.demo).map((k) => <MotionDemo key={k.name} id={k.name as Parameters<typeof MotionDemo>[0]['id']} />)}
      </div>
      {BUCKETS.map((b) => (
        <div key={b} className="grid" style={{ gap: 10 }}>
          <H3>{b}</H3>
          <p className="note">{BUCKET_NOTES[b]}</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Keyframe</th><th>Timing</th><th>Used for</th></tr></thead>
              <tbody>{KEYFRAMES.filter((k) => k.bucket === b).map((k) => <tr key={k.name}><td><b className="mono">{k.name}</b></td><td className="mono">{k.timing}</td><td>{k.usedFor}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      ))}
      <p className="note">Four buckets, deliberately. If a new animation doesn't obviously belong to one, that's usually a sign it's decorative rather than functional. Every keyframe collapses under <code>prefers-reduced-motion</code>.</p>
    </Section>
  );
}

export function Rewards() {
  return (
    <Section id="rewards" title="Rewards" lead="XP, hearts and the leaderboard are MVP, not a later add-on. They're part of how HoneyGuide keeps a guide feeling like a guide instead of a nag.">
      <div className="grid cols-3">
        <Card title="XP"><Gem size={26} color="#15648d" aria-hidden="true" /><div className="v">Earned for finishing, not for speed. Lessons, boss quizzes and reviews each pay a base amount plus a little per correct answer.</div></Card>
        <Card title="Hearts"><Heart size={26} color="#b3321f" aria-hidden="true" /><div className="v">A soft limit on wrong answers, never a hard stop that feels punishing. Five hearts, and one comes back every 30 minutes.</div></Card>
        <Card title="Streak"><Flame size={26} color="#c2410c" aria-hidden="true" /><div className="v">Consecutive days learning. Losing one is a Sleepy Musa, not a scolding.</div></Card>
      </div>
      <H3>Badge evolution ladder</H3>
      <p className="note">Musa grows with the learner. His scarf and badges evolve at set milestones. This is a real, literal sequence, so it's the one place a numbered ladder belongs.</p>
      <Figure data={PROGRESSION_FIGURE} />
      <ol className="ladder" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {LADDER.map((s) => <li key={s.level} className="ladder-step"><span className="lv">LEVEL {s.level}</span><span className="nm">{s.name}</span></li>)}
      </ol>
    </Section>
  );
}

export function Sounds() {
  return (
    <Section id="sounds" title="Sounds" lead="No audio exists yet. This section is principles only, until sound design happens. Treat it as a brief for that work, not a spec.">
      <div className="grid cols-2">{SOUND_PRINCIPLES.map((p) => <Card key={p.title} title={p.title}><div className="v">{p.body}</div></Card>)}</div>
    </Section>
  );
}

export function Writing() {
  return (
    <Section id="writing" title="Writing" lead="UI copy follows the same voice as Musa, because to the learner it's the same character talking.">
      <div className="grid cols-2">{WRITING_RULES.map((r) => <Card key={r.title} title={r.title}><div className="v">{r.body}</div></Card>)}</div>
      <H3>Before and after</H3>
      <div className="grid" style={{ gap: 12 }}>
        {BEFORE_AFTER.map((b) => (
          <div key={b.before} className="grid cols-2">
            <div className="dont"><b>Before</b>"{b.before}"</div>
            <div className="say"><b>After</b>"{b.after}"</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
