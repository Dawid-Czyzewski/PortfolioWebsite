import type { Metadata } from 'next';
import AboutPage from '@/views/AboutPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'O mnie | doświadczenie, umiejętności i ścieżka zawodowa',
  description: tMeta('aboutDescription').slice(0, 155),
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
