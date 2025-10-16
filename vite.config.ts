import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages: https://<user>.github.io/<repo>/
  base: '/HB-Julia/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

