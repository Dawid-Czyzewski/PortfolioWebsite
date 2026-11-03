import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

type RouteEntry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

/** Real lastmod dates. Bump when the page content meaningfully changes. */
const routes: RouteEntry[] = [
  { path: '/', lastModified: '2026-11-03', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', lastModified: '2026-11-03', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', lastModified: '2026-10-02', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/contact', lastModified: '2026-10-02', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/korepetycje', lastModified: '2026-11-03', changeFrequency: 'weekly', priority: 0.95 },
  {
    path: '/korepetycje/programowanie',
    lastModified: '2026-11-03',
    changeFrequency: 'weekly',
    priority: 0.95,
  },
  {
    path: '/polityka-prywatnosci',
    lastModified: '2026-11-03',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  { path: '/project/evently', lastModified: '2026-10-02', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/project/pirateHero',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/project/aniaBeauty',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/project/trackerPro',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  { path: '/project/devLink', lastModified: '2026-10-02', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/project/neoCasino',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/project/ankietDev',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/experience/zirto',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/experience/ironteam',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/experience/blusoft',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/experience/vocale',
    lastModified: '2026-10-02',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '/' : route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
