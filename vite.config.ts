/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), viteTsconfigPaths(), svgrPlugin()],
  ...(process.env.NODE_ENV === 'development'
  ? {
    define: {
      global: {},
      __filename: "\"\""
    },
  }
  : {
    define: {
      __filename: "\"\""
  }}),
  base: '/prefeituraguararapes/',
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name?.split(".");
          
          var extType = info === undefined ? '': info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "css";
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[hash].js",
        entryFileNames: "static/js/[hash].js"
      },
    }
  },
  // base: '/public',
  server: {
    host: '0.0.0.0',
    open: true,
    port: 3000
  },
  // test: {
  //   environment: "jsdom"
  // }
});
