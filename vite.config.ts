import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  plugins: [react()],
  publicDir: 'src/assets',
  root: 'src',
  server: {
    port: 3000,
  },
})
