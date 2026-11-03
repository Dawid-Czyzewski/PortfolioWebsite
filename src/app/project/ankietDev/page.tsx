import type { Metadata } from 'next';
import AnkietDevPage from '@/views/projects/AnkietDevPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'AnkietDev | platforma do ankiet online',
  description: tMeta('ankietDevDescription').slice(0, 155),
  path: '/project/ankietDev',
});

export default function Page() {
  return <AnkietDevPage />;
}
