import type { TFunction } from 'i18next';
import type { LucideIcon } from 'lucide-react';
import type { ComponentType, CSSProperties, SVGProps } from 'react';
import type { ImageSource } from '../lib/image';

export type { ImageSource };

export type AppLanguage = 'pl' | 'en';
export type TranslateFn = TFunction;

export type ExperienceId = 'zirto' | 'ironteam' | 'blusoft' | 'vocale';

export interface Experience {
  id: ExperienceId;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ExperienceDetail {
  title: string;
  company: string;
  period: string;
  description: string;
  details: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  downloadUrl: string;
  fileName: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface LanguageEntry {
  id: number;
  name: string;
  level: string;
}

export type SkillItem = string | { key: string; translate: true };

export interface ProjectSection {
  image?: ImageSource | null;
  alt: string;
  title: string;
  description: string;
}

export interface SelectedImage {
  image: ImageSource;
  alt: string;
}

export interface ProjectListItem {
  title: string;
  technologies: string[];
  image: ImageSource;
  to: string;
}

export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; style?: CSSProperties; className?: string }>;
