import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: tMeta('home'),
  description: tMeta('heroSubtitle'),
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
