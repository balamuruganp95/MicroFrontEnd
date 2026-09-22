import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        accounts: 'http://localhost:5001/assets/remoteEntry.js',
        payments: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5000,
  },
})
