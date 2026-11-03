import type { Metadata } from 'next';
import NeoCasinoPage from '@/views/projects/NeoCasinoPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'NeoCasino | kasyno przeglądarkowe w React',
  description: tMeta('neoCasinoDescription').slice(0, 155),
  path: '/project/neoCasino',
});

export default function Page() {
  return <NeoCasinoPage />;
}
