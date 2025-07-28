import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'currency',
      filename: 'remoteEntry.js',
      exposes: {
        './CurrencyApp': './src/App.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: { port: 3002 },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true
  }
});