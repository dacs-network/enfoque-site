// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: true // Libera o acesso para qualquer host
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
