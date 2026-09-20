// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hzhen.me',
  trailingSlash: 'never',
  build: {
    // Emit /about.html rather than /about/index.html — simpler to reason about
    // when served by Cloudflare Pages' static asset router.
    format: 'file',
    // Keep CSS in an external file. Inlined <style> blocks would require
    // 'unsafe-inline' in the Content-Security-Policy set by public/_headers.
    inlineStylesheets: 'never',
  },
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
