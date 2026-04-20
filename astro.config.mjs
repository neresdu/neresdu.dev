import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://neresdu.pages.dev',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
