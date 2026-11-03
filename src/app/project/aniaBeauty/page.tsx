import type { Metadata } from 'next';
import AniaBeautyPage from '@/views/projects/AniaBeautyPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ania Beauty Studio | rezerwacje online',
  description: tMeta('aniaBeautyDescription').slice(0, 155),
  path: '/project/aniaBeauty',
});

export default function Page() {
  return <AniaBeautyPage />;
}
