import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { progressApiPlugin } from './vite-plugin-progress-api.js'

export default defineConfig({
  plugins: [react(), progressApiPlugin()],
  server: {
    host: '127.0.0.1',
    port: 5850,
    strictPort: true,
    open: true,
  },
})
