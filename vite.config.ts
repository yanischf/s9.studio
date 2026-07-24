import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    // Baked at build time so the Footer year is identical in the client and SSR
    // bundles (both built in the same run) → no hydration mismatch.
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  server: {
    host: true,
  },
});
