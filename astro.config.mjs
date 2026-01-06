// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://bcremona.github.io',
  base: '/viajes-sentidos',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone',
  }),
});