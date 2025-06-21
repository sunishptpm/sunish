// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'sunish' with the actual repository name if different
export default defineConfig({
  base: '/sunish/',
  plugins: [react()],
})
