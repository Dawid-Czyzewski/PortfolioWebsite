import type { Metadata } from 'next';
import PirateHeroPage from '@/views/projects/PirateHeroPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'PirateHero',
  description: tMeta('pirateHeroDescription'),
  path: '/project/pirateHero',
});

export default function Page() {
  return <PirateHeroPage />;
}
