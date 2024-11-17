import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: process.env.PORT || 10000,  // Use Render's provided port or default to 10000
    host: '0.0.0.0'  // Listen on all network interfaces, not just localhost
  }
})
