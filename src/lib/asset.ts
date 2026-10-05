/** Resolves a path under /public respecting the Vite base (needed for GitHub Pages project sites). */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}assets/${path}`;
