import type { MetadataRoute } from 'next';

const BASE = 'https://noxa-delta.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,                lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/account/login`,   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/account/signup`,  lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/community`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
