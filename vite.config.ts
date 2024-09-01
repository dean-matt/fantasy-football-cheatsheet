/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fantasy-football-cheatsheet/',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  plugins: [react()],
  publicDir: './assets',
  root: 'src',
  server: {
    port: 3000,
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/setup/tests.ts'],
  },
})
