import type { Metadata } from 'next';
import TutoringHubPage from '@/views/tutoring/TutoringHubPage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Korepetycje z programowania',
  description:
    'Korepetycje online z programowania: PHP, React, Python, Flutter. Umów lekcję bezpośrednio.',
  path: '/korepetycje',
});

export default function Page() {
  return <TutoringHubPage />;
}
