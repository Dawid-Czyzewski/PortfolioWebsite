import type { Metadata } from 'next';
import ProjectsPage from '@/views/ProjectsPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: tMeta('projects'),
  description: tMeta('projectsDescription'),
  path: '/projects',
});

export default function Page() {
  return <ProjectsPage />;
}
