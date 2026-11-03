import type { Metadata } from 'next';
import EventlyPage from '@/views/projects/EventlyPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Evently | bilety i formularze wydarzeń',
  description: tMeta('eventlyDescription').slice(0, 155),
  path: '/project/evently',
});

export default function Page() {
  return <EventlyPage />;
}
