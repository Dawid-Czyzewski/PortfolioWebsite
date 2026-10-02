import type { EducationEntry, TranslateFn } from '../types';

export const getEducation = (t: TranslateFn): EducationEntry[] => [
  {
    degree: t('educationWSG.degree'),
    school: t('educationWSG.school'),
    period: t('educationWSG.period'),
    description: t('educationWSG.description'),
  },
  {
    degree: t('educationZSM.degree'),
    school: t('educationZSM.school'),
    period: t('educationZSM.period'),
    description: t('educationZSM.description'),
  },
];
