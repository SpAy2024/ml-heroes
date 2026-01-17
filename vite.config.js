import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ml-heroes/',  // ← ¡EXACTO nombre de tu repo!
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  }
})
