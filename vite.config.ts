import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: process.env.VITE_BASE_URL ?? '/',
    build: {
      target: 'es2019',
      chunkSizeWarningLimit: 1000,
    },
    server: {
      host: true,
      allowedHosts: ['adgoneoficial.github.io'],
    },
  };
});
