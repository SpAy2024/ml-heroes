import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "./",  // IMPORTANTE: ./ para GitHub Pages
=======
  base: '/ml-heroes/',
>>>>>>> af6c3ccdfce1b52b7e4cc29c51a006bfdde2dc5b
  build: {
    outDir: "docs",
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000
  }
})
