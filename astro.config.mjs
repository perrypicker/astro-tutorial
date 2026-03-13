// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lucent-figolla-935c9d.netlify.app/",
  integrations: [preact()],
});