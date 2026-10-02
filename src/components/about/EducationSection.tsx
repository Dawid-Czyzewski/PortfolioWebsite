'use client';

import { BookOpen, GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { EducationEntry, IconComponent } from '../../types';

const icons: Array<{ Icon: IconComponent; color: string }> = [
  { Icon: GraduationCap, color: '#c4a0ff' },
  { Icon: BookOpen, color: '#7dd3fc' },
];

type EducationSectionProps = {
  education: EducationEntry[];
};

const EducationSection = ({ education }: EducationSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="skills-content">
      <div className="skills-intro reveal">
        <p className="section-kicker">{t('aboutEducationHeading').toUpperCase()}</p>
        <h2>{t('aboutEducationIntroTitle')}</h2>
        <p>{t('aboutEducationIntro')}</p>
      </div>

      <div className="edu-grid">
        {education.map((edu, index) => {
          const { Icon, color } = icons[index] || icons[0];
          return (
            <article
              className="skill-card cert-card reveal reveal-fast"
              style={{ '--d': index }}
              key={`${edu.school}-${edu.period}`}
            >
              <div className="skill-symbol" style={{ color }}>
                <Icon />
              </div>
              <strong>{edu.degree}</strong>
              <small>{edu.school} · {edu.period}</small>
              {edu.description && <p className="cert-text">{edu.description}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;
