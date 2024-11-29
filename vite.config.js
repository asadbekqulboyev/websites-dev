import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    assetsDir: '',
  },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 20 versions']
        })
      ]
    }
  }
);