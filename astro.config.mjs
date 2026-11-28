// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import customTheme from './src/themes/monokai/monokai-code.json'
// https://astro.build/config
export default defineConfig({
  site:
    'https://kreatormati.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: customTheme,
    },
  },
});


