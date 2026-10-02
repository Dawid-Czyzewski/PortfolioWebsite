import type { Metadata } from 'next';
import AnkietDevPage from '@/views/projects/AnkietDevPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'AnkietDev',
  description: tMeta('ankietDevDescription'),
  path: '/project/ankietDev',
});

export default function Page() {
  return <AnkietDevPage />;
}
