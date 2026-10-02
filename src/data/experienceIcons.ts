import { BriefcaseBusiness, Code2, Layers, Stethoscope } from 'lucide-react';
import type { ExperienceId, IconComponent } from '@/types';

export const experienceIcons: Record<ExperienceId, { Icon: IconComponent; color: string }> = {
  vocale: { Icon: BriefcaseBusiness, color: '#c4b5fd' },
  blusoft: { Icon: Layers, color: '#60a5fa' },
  ironteam: { Icon: Stethoscope, color: '#67e8f9' },
  zirto: { Icon: Code2, color: '#a78bfa' },
};

export const defaultExperienceIcon = {
  Icon: BriefcaseBusiness as IconComponent,
  color: '#c4a0ff',
};
