import { writeFileSync } from 'fs';
import { globby } from 'globby';

const generateSitemap = async () => {
  try {
    // Fetch all routes based on patterns
    const pages = await globby([
      'pages/**/*.js',
      'content/**/*.mdx',
      '!pages/_*.js',
      '!pages/api',
    ]);

    const baseUrl = 'https://austintoastmasters.com';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('content', '')
            .replace('.js', '')
            .replace('.mdx', '')
            .replace('/index', '');
          
          const route = path === '' ? '' : path;

          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

    // Write sitemap to public directory
    writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap(); 