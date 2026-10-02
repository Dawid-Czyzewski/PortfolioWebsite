import type { Metadata } from 'next';
import ExperienceDetailPage from '@/views/experience/ExperienceDetailPage';
import { buildPageMetadata, tMeta } from '@/lib/seo';

type Props = {
  params: Promise<{ id: string }>;
};

const titles: Record<string, string> = {
  zirto: 'experienceZirto.title',
  ironteam: 'experienceIRONteam.title',
  blusoft: 'experienceBluSoft.title',
  vocale: 'experienceVocale.title',
};

const descriptions: Record<string, string> = {
  zirto: 'experienceZirto.description',
  ironteam: 'experienceIRONteam.description',
  blusoft: 'experienceBluSoft.description',
  vocale: 'experienceVocale.description',
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
  const titleKey = titles[id];
  const descriptionKey = descriptions[id];

  if (!titleKey || !descriptionKey) {
    return buildPageMetadata({
      title: tMeta('pageNotFound'),
      description: tMeta('pageNotFound'),
      path: `/experience/${id}`,
    });
  }

  return buildPageMetadata({
    title: tMeta(titleKey),
    description: tMeta(descriptionKey),
    path: `/experience/${id}`,
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ExperienceDetailPage id={id} />;
}
