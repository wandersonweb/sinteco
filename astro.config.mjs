// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://sintecomg.com.br',
  
  redirects: {
    '/category/blogging': '/blog',
    '/sinteco-preco': '/blog/sinteco-preco',
    '/sinteco-preco-m2-em-bh': '/blog/sinteco-preco',
    '/melhor-cera-para-piso': '/blog/melhor-cera-para-piso',
    '/restauracao-de-piso-de-madeira': '/blog/restauracao-de-piso-de-madeira'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx(), partytown({
    config: { forward: ['dataLayer.push'] },
  })],

  // Performance e Otimização
  compressHTML: true,
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  }
});
