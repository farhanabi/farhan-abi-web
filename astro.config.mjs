import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    image(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});