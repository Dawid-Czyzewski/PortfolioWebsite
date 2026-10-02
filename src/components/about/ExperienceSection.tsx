'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { defaultExperienceIcon, experienceIcons } from '@/data/experienceIcons';
import type { Experience } from '@/types';

type ExperienceSectionProps = {
  experience: Experience[];
};

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const path = [...experience].reverse();

  return (
    <div className="skills-content">
      <div className="skills-intro reveal">
        <p className="section-kicker">{t('aboutExperienceHeading').toUpperCase()}</p>
        <h2>{t('aboutExperienceIntroTitle')}</h2>
        <p>{t('aboutExperienceIntro')}</p>
      </div>

      <ol className="career-path">
        {path.map((exp, index) => {
          const { Icon, color } = experienceIcons[exp.id] || defaultExperienceIcon;
          const current = index === path.length - 1;
          return (
            <li
              className={`career-step reveal reveal-fast${current ? ' is-current' : ''}`}
              style={{ '--d': index }}
              key={exp.id}
            >
              <span className="career-node" aria-hidden="true">
                <Icon style={{ color }} />
              </span>
              <article className="skill-card cert-card career-card">
                {current && <span className="career-now">{t('aboutExperienceNow')}</span>}
                <strong>{exp.title}</strong>
                <small>{exp.company} · {exp.period}</small>
                {exp.description && <p className="cert-text">{exp.description}</p>}
                <button
                  type="button"
                  className="cert-download"
                  onClick={() => router.push(`/experience/${exp.id}`)}
                >
                  {t('viewDetails')} <ArrowRight size={15} />
                </button>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ExperienceSection;
