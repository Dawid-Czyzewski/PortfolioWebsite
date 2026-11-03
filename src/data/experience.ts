import type { Experience, ExperienceDetail, ExperienceId, TranslateFn } from '../types';

export const getExperience = (t: TranslateFn, _lang?: string): Experience[] => [
  {
    id: 'zirto',
    title: t('experienceZirto.title'),
    company: t('experienceZirto.company'),
    period: t('experienceZirto.period'),
    description: t('experienceZirto.description'),
  },
  {
    id: 'ironteam',
    title: t('experienceIRONteam.title'),
    company: t('experienceIRONteam.company'),
    period: t('experienceIRONteam.period'),
    description: t('experienceIRONteam.description'),
  },
  {
    id: 'blusoft',
    title: t('experienceBluSoft.title'),
    company: t('experienceBluSoft.company'),
    period: t('experienceBluSoft.period'),
    description: t('experienceBluSoft.description'),
  },
  {
    id: 'vocale',
    title: t('experienceVocale.title'),
    company: t('experienceVocale.company'),
    period: t('experienceVocale.period'),
    description: t('experienceVocale.description'),
  },
];

export const getExperienceDetail = (
  id: string | undefined,
  t: TranslateFn,
  _lang?: string,
): ExperienceDetail | null => {
  if (!id || !(id in experienceIds)) return null;

  const experienceMap: Record<ExperienceId, ExperienceDetail> = {
    zirto: {
      title: t('experienceZirto.title'),
      company: t('experienceZirto.company'),
      period: t('experienceZirto.period'),
      description: t('experienceZirto.description'),
      details: t('experienceZirto.details'),
    },
    ironteam: {
      title: t('experienceIRONteam.title'),
      company: t('experienceIRONteam.company'),
      period: t('experienceIRONteam.period'),
      description: t('experienceIRONteam.description'),
      details: t('experienceIRONteam.details'),
    },
    blusoft: {
      title: t('experienceBluSoft.title'),
      company: t('experienceBluSoft.company'),
      period: t('experienceBluSoft.period'),
      description: t('experienceBluSoft.description'),
      details: t('experienceBluSoft.details'),
    },
    vocale: {
      title: t('experienceVocale.title'),
      company: t('experienceVocale.company'),
      period: t('experienceVocale.period'),
      description: t('experienceVocale.description'),
      details: t('experienceVocale.details'),
    },
  };

  return experienceMap[id as ExperienceId];
};

const experienceIds: Record<ExperienceId, true> = {
  zirto: true,
  ironteam: true,
  blusoft: true,
  vocale: true,
};
