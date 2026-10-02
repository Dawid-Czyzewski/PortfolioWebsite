import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/projects',
  '/project/evently',
  '/project/pirateHero',
  '/project/aniaBeauty',
  '/project/trackerPro',
  '/project/devLink',
  '/project/neoCasino',
  '/project/ankietDev',
  '/experience/zirto',
  '/experience/ironteam',
  '/experience/blusoft',
  '/experience/vocale',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route || '/'}`,
    lastModified,
    changeFrequency: route.startsWith('/project') || route.startsWith('/experience')
      ? 'monthly'
      : 'weekly',
    priority: route === '' ? 1 : route === '/projects' || route === '/about' ? 0.9 : 0.7,
  }));
}
