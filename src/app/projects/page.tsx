import type { Metadata } from 'next';
import ProjectsPage from '@/views/ProjectsPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projekty | portfolio aplikacji webowych i mobilnych',
  description: tMeta('projectsDescription').slice(0, 155),
  path: '/projects',
});

export default function Page() {
  return <ProjectsPage />;
}
