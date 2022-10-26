import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://farhanabi.com',
  integrations: [preact(), tailwind(), image(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
