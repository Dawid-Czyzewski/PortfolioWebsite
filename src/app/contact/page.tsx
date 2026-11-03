import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Kontakt | napisz w sprawie projektu lub korepetycji',
  description: tMeta('contactIntro').slice(0, 155),
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
