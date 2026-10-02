import type { Metadata } from 'next';
import NeoCasinoPage from '@/views/projects/NeoCasinoPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'NeoCasino',
  description: tMeta('neoCasinoDescription'),
  path: '/project/neoCasino',
});

export default function Page() {
  return <NeoCasinoPage />;
}
