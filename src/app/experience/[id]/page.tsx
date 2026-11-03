import type { Metadata } from 'next';
import ExperienceDetailPage from '@/views/experience/ExperienceDetailPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

type Props = {
  params: Promise<{ id: string }>;
};

const metaById: Record<string, { title: string; description: string }> = {
  zirto: {
    title: 'PHP Developer | Zirto',
    description: 'experienceZirto.description',
  },
  ironteam: {
    title: 'PHP Developer | IRONteam',
    description: 'experienceIRONteam.description',
  },
  blusoft: {
    title: 'Junior PHP Developer | BluSoft',
    description: 'experienceBluSoft.description',
  },
  vocale: {
    title: 'Junior Flutter Developer | Vocale',
    description: 'experienceVocale.description',
  },
};

export async function generateStaticParams() {
  return [
    { id: 'zirto' },
    { id: 'ironteam' },
    { id: 'blusoft' },
    { id: 'vocale' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const entry = metaById[id];

  if (!entry) {
    return buildPageMetadata({
      title: tMeta('pageNotFound'),
      description: tMeta('pageNotFound'),
      path: `/experience/${id}`,
    });
  }

  return buildPageMetadata({
    title: entry.title,
    description: tMeta(entry.description),
    path: `/experience/${id}`,
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ExperienceDetailPage id={id} />;
}
