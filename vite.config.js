import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages the site is served from https://<user>.github.io/<repo>/,
// so assets need that repo name as the base path.
// Using a custom domain or a <user>.github.io repo? Set BASE_PATH=/ instead.
const base = process.env.BASE_PATH ?? '/hardik-portfolio/'

export default defineConfig({
  base,
  plugins: [react()],
  build: { outDir: 'dist' },
})
