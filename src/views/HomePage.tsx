'use client';

import { Fragment } from 'react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Rocket, Send } from 'lucide-react';
import { FaPhp, FaReact, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss } from 'react-icons/si';
import heroDesk from '../assets/hero-desk-hq.jpg';
import { imageSrc } from '../lib/image';
import type { IconComponent } from '../types';

const technologies: Array<{ name: string; Icon: IconComponent; color: string }> = [
  { name: 'PHP', Icon: FaPhp as IconComponent, color: '#a78bfa' },
  { name: 'PostgreSQL', Icon: SiPostgresql as IconComponent, color: '#7eb6ff' },
  { name: 'React', Icon: FaReact as IconComponent, color: '#61dafb' },
  { name: 'Tailwind', Icon: SiTailwindcss as IconComponent, color: '#38bdf8' },
  { name: 'Docker', Icon: FaDocker as IconComponent, color: '#5eb3f6' },
];

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <main className="home-page">
      <section className="home-hero">
        <img src={imageSrc(heroDesk)} alt="Stanowisko pracy developera" className="hero-photo" />
        <div className="hero-photo-fade" />
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <div className="hero-copy">
            <h1 className="hero-title reveal">
              <span className="hero-title-line">{t('heroHeadlineStart')}</span>
              <span className="hero-title-accent">{t('heroHeadlineAccent')}</span>
            </h1>

            <p className="hero-text reveal" style={{ '--d': 1 }}>{t('heroSubtitle')}</p>

            <div className="hero-actions reveal" style={{ '--d': 2 }}>
              <Link href="/projects" className="primary-button">
                <Send size={18} /> {t('heroProjectsCta')} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="secondary-button">
                <Rocket size={18} /> {t('heroContactCta')}
              </Link>
            </div>

            <div className="tech-row">
              {technologies.map(({ name, Icon, color }, index) => (
                <Fragment key={name}>
                  {index > 0 && (
                    <span className="tech-sep reveal" style={{ '--d': 3 + index }} aria-hidden="true">|</span>
                  )}
                  <span className="tech-item reveal" style={{ '--d': 3 + index }}>
                    <Icon className="tech-icon" style={{ color }} />
                    {name}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
