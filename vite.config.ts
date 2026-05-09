import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { port: 8084, host: '0.0.0.0' },
  preview: { port: 8084, host: '0.0.0.0' },
});
