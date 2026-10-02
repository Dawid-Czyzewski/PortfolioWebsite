import type { Metadata } from 'next';
import TrackerProPage from '@/views/projects/TrackerProPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'TrackerPro',
  description: tMeta('trackerProDescription'),
  path: '/project/trackerPro',
});

export default function Page() {
  return <TrackerProPage />;
}
