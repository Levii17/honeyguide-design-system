import { Figure, H3, LazyVideo, Section } from '@/components/ui';
import { CLIPS, EXPRESSIONS, ILLUSTRATION_FIGURES, MUSA_DONTS, MUSA_DOS, MUSA_FIGURES } from '@/content/musa';

export function Musa() {
  return (
    <Section id="musa" title="The Honeyguide"
      lead="A young greater honeyguide in an explorer's scarf and satchel. Curious, encouraging, proud of the learner rather than of himself, and never, in any of his fifteen expressions, angry or mocking.">
      <div className="grid cols-2">{MUSA_FIGURES.map((f) => <Figure key={f.file} data={f} />)}</div>
      <H3>Expression to moment</H3>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Expression</th><th>Use it for</th></tr></thead>
          <tbody>{EXPRESSIONS.map((e) => <tr key={e.name}><td><b>{e.name}</b></td><td>{e.moment}</td></tr>)}</tbody>
        </table>
      </div>
      <H3>Character animations</H3>
      <p className="note">Short looping clips for empty states, loading screens and lesson intros. None carry audio, so they're safe to autoplay muted. Nothing downloads until a clip scrolls near the screen.</p>
      <div className="grid cols-2">{CLIPS.map((c) => <LazyVideo key={c.id} {...c} />)}</div>
      <div className="grid cols-2">
        <div className="card"><div className="k">Do</div><ul className="dolist">{MUSA_DOS.map((d) => <li key={d}>{d}</li>)}</ul></div>
        <div className="card"><div className="k">Don't</div><ul className="dolist no">{MUSA_DONTS.map((d) => <li key={d}>{d}</li>)}</ul></div>
      </div>
    </Section>
  );
}

export function Illustration() {
  return (
    <Section id="illustration" title="Illustration"
      lead="Illustration extends the South African motif through iconography (protea, mountains, coastline) rather than literal flag imagery.">
      <div className="grid cols-2">{ILLUSTRATION_FIGURES.map((f) => <Figure key={f.file} data={f} />)}</div>
    </Section>
  );
}
