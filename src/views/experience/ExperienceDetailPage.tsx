'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getExperience, getExperienceDetail } from '@/data/experience';
import { defaultExperienceIcon, experienceIcons } from '@/data/experienceIcons';
import type { ExperienceId } from '@/types';

type ExperienceDetailPageProps = {
  id: string;
};

const ExperienceDetailPage = ({ id }: ExperienceDetailPageProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const lang = i18n.language;
  const experience = getExperienceDetail(id, t, lang);
  const others = getExperience(t, lang).filter((item) => item.id !== id);

  if (!experience) {
    return (
      <div className="exp-page">
        <section className="exp-hero">
          <div className="container exp-empty">
            <h1>{t('pageNotFound')}</h1>
            <Link href="/" className="primary-button">{t('backToHome')}</Link>
          </div>
        </section>
      </div>
    );
  }

  const iconEntry =
    id in experienceIcons ? experienceIcons[id as ExperienceId] : defaultExperienceIcon;
  const { Icon, color } = iconEntry;
  const points = experience.details
    .split(/(?<=\.)\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ])/)
    .map((point: string) => point.trim())
    .filter(Boolean);

  return (
    <div className="exp-page">
      <section className="exp-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <Link href="/about?tab=experience" className="secondary-button exp-back reveal">
            <ArrowLeft size={18} /> {t('back')}
          </Link>

          <div className="exp-layout">
            <div className="exp-main">
              <div className="exp-head reveal" style={{ '--d': 1 }}>
                <p className="section-kicker">{t('aboutExperienceHeading').toUpperCase()}</p>
                <h1 className="exp-title">{experience.title}</h1>
                <p className="exp-company">{experience.company}</p>
                {experience.description && <p className="exp-role">{experience.description}</p>}
              </div>

              <article className="exp-story reveal" style={{ '--d': 2 }}>
                <h2>{t('details')}</h2>
                <ol>
                  {points.map((point, index) => (
                    <li key={point} className="reveal reveal-fast" style={{ '--d': 3 + index }}>
                      <p>{point}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <aside className="exp-panel-wrap">
              <div className="exp-panel">
                <span className="skill-symbol" style={{ color }}>
                  <Icon />
                </span>
                <p className="exp-panel-label">{t('aboutExperienceTitle')}</p>
                <strong>{experience.company}</strong>
                <span className="timeline-period">{experience.period}</span>
                {experience.description && <p>{experience.description}</p>}
              </div>
            </aside>
          </div>

          {others.length > 0 && (
            <div className="exp-others reveal" style={{ '--d': 3 }}>
              <p className="exp-others-label">{t('aboutExperienceMore')}</p>
              <div className="exp-others-list">
                {others.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className="exp-other"
                    onClick={() => router.push(`/experience/${item.id}`)}
                  >
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.company}</small>
                    </span>
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetailPage;
