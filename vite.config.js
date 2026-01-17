import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'  // En lugar de '/ml-heroes/'
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  }
})
