import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  server: {
    proxy: {
      '/api': {
        target: 'https://ecom-production-fcce.up.railway.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', 
    rollupOptions: {
      external: ['react-chartjs-2'],
    },
  },
});
