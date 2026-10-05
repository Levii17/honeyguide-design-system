import { useEffect, useState } from 'react';

/** Subscribes to a CSS media query. Falls back to `fallback` where matchMedia is unavailable (tests, SSR). */
export function useMediaQuery(query: string, fallback = false): boolean {
  const [matches, setMatches] = useState(() => (typeof matchMedia === 'undefined' ? fallback : matchMedia(query).matches));
  useEffect(() => {
    if (typeof matchMedia === 'undefined') return;
    const mq = matchMedia(query);
    const on = () => setMatches(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return matches;
}
