import type { Metadata } from 'next';
import HomePage from '@/views/HomePage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: tMeta('homeSeoTitle'),
  description: tMeta('homeSeoDescription'),
  path: '/',
  image: '/images/hero-desk.jpg',
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage />;
}
