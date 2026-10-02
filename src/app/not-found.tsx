import type { Metadata } from 'next';
import NotFoundPage from '@/views/NotFoundPage';
import { tMeta } from '@/lib/seo';

export const metadata: Metadata = {
  title: tMeta('pageNotFound'),
  description: tMeta('notFoundText'),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundPage />;
}
