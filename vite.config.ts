import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';
import * as path from 'path';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom', 'react-file-viewer'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: '~', replacement: path.resolve(__dirname, 'src') },
        { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
      ],
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom', 'react-file-viewer'],
            ...renderChunks(dependencies),
          },
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      strictPort: true,
      port: Number(env.VITE_SERVER_PORT) || 3000, // you can replace this port with any port
    },
  };
});
