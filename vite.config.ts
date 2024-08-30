import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  plugins: [react()],
  publicDir: './public',
  root: 'src',
  server: {
    port: 3000,
  },
})
