import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ml-heroes/',  // ¡IMPORTANTE! Nombre EXACTO de tu repositorio
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-icons']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
