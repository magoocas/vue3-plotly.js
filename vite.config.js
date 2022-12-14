import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VuePlotly',
      fileName: 'vue-plotly',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
          Plotly: 'plotly.js',
        },
      },
    },
  },
});
