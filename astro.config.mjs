// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://sintecobh.com.br', // Substitua pelo domínio real
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(), 
    mdx()
  ],

  // Performance e Otimização
  compressHTML: true,
  build: {
    format: 'file',
  }
});