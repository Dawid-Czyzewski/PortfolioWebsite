import type { Metadata } from 'next';
import TutoringProgrammingPage from '@/views/tutoring/TutoringProgrammingPage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Korepetycje z programowania | PHP, React, Python, Flutter',
  description:
    'Lekcje programowania online: PHP/Symfony, React, Python, Flutter, HTML/CSS, Git, SQL. Piszesz kod razem ze mną na Meet lub Discordzie.',
  path: '/korepetycje/programowanie',
});

export default function Page() {
  return <TutoringProgrammingPage />;
}
