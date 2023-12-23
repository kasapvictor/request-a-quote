import { resolve } from 'path';
import rollupConfig from './rollup.config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  base: './',
  server: {
    // host: true,
    // strictPort: true,
    // watch: { usePolling: true },
  },
  build: {
    cssCodeSplit: true, // false - создаст отдельный файл /css/styles.css, true - вставляет стили в бандл js
    emptyOutDir: true,
    rollupOptions: rollupConfig,
    modulePreload: { polyfill: false },
    outDir: resolve(__dirname, 'dist'),
  },
  css: { devSourcemap: true },
  plugins: [tsconfigPaths()],
};
