// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://bcremona.github.io',
  base: '/viajes-sentidos',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone',
  }),
});