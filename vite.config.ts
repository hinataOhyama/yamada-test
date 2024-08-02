/// <reference types="vitest" />
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defaultConfig, getColorModeScript } from '@yamada-ui/react';

// https://vitejs.dev/config/

function injectScript(): Plugin {
  return {
    name: 'vite-plugin-inject-scripts',
    transformIndexHtml(html) {
      const content = getColorModeScript({
        initialColorMode: defaultConfig.initialColorMode,
      });

      return html.replace('<body>', `<body><script>${content}</script>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), injectScript()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
  },
});
