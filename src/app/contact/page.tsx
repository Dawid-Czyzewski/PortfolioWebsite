import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: tMeta('contact'),
  description: tMeta('contactIntro'),
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
