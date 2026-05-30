import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/account/', '/api/'],
      },
    ],
    sitemap: 'https://noxa-delta.vercel.app/sitemap.xml',
  };
}
