import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// VITE_BASE is set by the deploy workflow so the site works under
// https://<user>.github.io/<repo>/ as well as at a custom domain root.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  test: { environment: 'jsdom', globals: true, setupFiles: ['./src/test/setup.ts'], css: false },
});
