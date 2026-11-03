import type { Metadata } from 'next';
import DevLinkPage from '@/views/projects/DevLinkPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'DevLink | współpraca programistów',
  description: tMeta('devLinkDescription').slice(0, 155),
  path: '/project/devLink',
});

export default function Page() {
  return <DevLinkPage />;
}
