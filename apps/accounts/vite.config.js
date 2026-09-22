import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'accounts',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },
})
