import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { TranslateFn } from '../../types';

type ProjectPageHeaderProps = {
  title: string;
  t: TranslateFn;
};

const ProjectPageHeader = ({ title, t }: ProjectPageHeaderProps) => (
  <header className="case-head reveal">
    <Link href="/projects" className="secondary-button case-back">
      <span className="inline-flex items-center gap-2">
        <ArrowLeft size={18} /> {String(t('back'))}
      </span>
    </Link>
    <p className="section-kicker">{t('projects').toUpperCase()}</p>
    <h1 className="case-title">
      <span className="projects-title-accent">{title}</span>
    </h1>
  </header>
);

export default ProjectPageHeader;
