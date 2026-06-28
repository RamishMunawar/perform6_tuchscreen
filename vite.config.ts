import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // esbuild keeps both backdrop-filter variants; Lightning CSS drops the unprefixed one.
    cssMinify: 'esbuild',
  },
  server: {
    port: 5173,
    host: true,
  },
});
