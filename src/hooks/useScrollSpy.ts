import { useEffect, useState } from 'react';

/** Returns the id of the section currently nearest the top third of the viewport. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
