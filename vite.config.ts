import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: '/',
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
