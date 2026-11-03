import type { Metadata } from 'next';
import TrackerProPage from '@/views/projects/TrackerProPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'TrackerPro | aplikacje o pracę i budżet',
  description: tMeta('trackerProDescription').slice(0, 155),
  path: '/project/trackerPro',
});

export default function Page() {
  return <TrackerProPage />;
}
