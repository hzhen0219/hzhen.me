import type { APIRoute } from 'astro';
import { site } from '../data/site.ts';

/**
 * Generated rather than committed as a static file, so the URLs and lastmod
 * date are always correct at build time. Add new routes to `routes` below.
 */
const routes = ['/'];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map((route) => {
      const loc = new URL(route, site.url).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
