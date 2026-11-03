import type { Metadata } from 'next';
import PirateHeroPage from '@/views/projects/PirateHeroPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'PirateHero | gra przeglądarkowa RPG',
  description: tMeta('pirateHeroDescription').slice(0, 155),
  path: '/project/pirateHero',
});

export default function Page() {
  return <PirateHeroPage />;
}
