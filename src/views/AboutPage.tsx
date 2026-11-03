'use client';

import { Suspense, type ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Folder,
  Languages,
  MapPin,
  Rocket,
} from 'lucide-react';
import Image from 'next/image';
import mainPhoto from '../assets/portrait-card.png';
import AboutTabs from '../components/about/AboutTabs';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="about-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container about-grid">
          <div className="portrait-wrap reveal">
            <Image
              className="portrait-photo"
              src={mainPhoto}
              alt="Portret Dawida Czyżewskiego"
              width={430}
              height={520}
              sizes="(max-width: 768px) 70vw, 430px"
              priority
            />
            <div className="portrait-decoration">
              <span>
                {t('aboutAnnotationPassion')
                  .split(',')
                  .map((part) => part.trim())
                  .join('\n')}
              </span>
              <svg className="portrait-arrow" viewBox="0 0 70 48" aria-hidden="true">
                <path d="M8 8c18 2 32 14 40 30" />
                <path d="M40 30l12 4-8 10" />
              </svg>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker reveal" style={{ '--d': 1 }}>{t('about').toUpperCase()}</p>
            <h1 className="reveal" style={{ '--d': 2 }}>
              {t('aboutGreetingPrefix')}
              <span> {t('aboutGreetingName')}</span>
            </h1>

            <p className="reveal" style={{ '--d': 3 }}>{t('aboutDescription')}</p>

            <div className="about-actions reveal" style={{ '--d': 4 }}>
              <Link href="/contact" className="primary-button">
                <Rocket size={18} /> {t('aboutContactMe')}
              </Link>
              <Link href="/projects" className="secondary-button">
                <Folder size={18} /> {t('heroProjectsCta')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <aside className="about-info reveal" style={{ '--d': 4 }}>
            <Info icon={<Code2 size={18} />} label={t('aboutInfoTech')} value={t('aboutInfoTechValue')} />
            <Info
              icon={<BriefcaseBusiness size={18} />}
              label={t('aboutInfoExperience')}
              value={t('aboutInfoExperienceValue')}
            />
            <Info icon={<MapPin size={18} />} label={t('aboutInfoLocation')} value={t('aboutInfoLocationValue')} />
            <Info
              icon={<Languages size={18} />}
              label={t('aboutInfoLanguages')}
              value={t('aboutInfoLanguagesValue')}
            />
            <div className="hand-note">{t('aboutAnnotationLearning')}</div>
          </aside>
        </div>
      </section>

      <Suspense fallback={null}>
        <AboutTabs />
      </Suspense>
    </main>
  );
};

type InfoProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function Info({ icon, label, value }: InfoProps) {
  return (
    <div className="info-row">
      <div className="info-icon">{icon}</div>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

export default AboutPage;
