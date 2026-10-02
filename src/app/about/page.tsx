import type { Metadata } from 'next';
import { Suspense } from 'react';
import AboutPage from '@/views/AboutPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: tMeta('about'),
  description: tMeta('aboutDescription'),
  path: '/about',
});

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AboutPage />
    </Suspense>
  );
}
