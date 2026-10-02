import type { Metadata } from 'next';
import EventlyPage from '@/views/projects/EventlyPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Evently',
  description: tMeta('eventlyDescription'),
  path: '/project/evently',
});

export default function Page() {
  return <EventlyPage />;
}
