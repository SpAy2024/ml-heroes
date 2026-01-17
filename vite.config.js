import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",  // IMPORTANTE: ./ para GitHub Pages
  build: {
    outDir: "docs",
    sourcemap: false,
    emptyOutDir: true
  }
})
