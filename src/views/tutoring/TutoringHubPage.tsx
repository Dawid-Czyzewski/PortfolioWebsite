'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const TutoringHubPage = () => {
  const { t } = useTranslation();

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('tutoringServiceName'),
    provider: {
      '@type': 'Person',
      name: 'Dawid Czyżewski',
      url: 'https://dawid-developer.pl',
      email: 'kontakt@dawid-developer.pl',
    },
    areaServed: 'PL',
    url: 'https://dawid-developer.pl/korepetycje',
    description: t('tutoringServiceDesc'),
  };

  return (
    <main className="tutoring-page">
      <JsonLd data={serviceLd} />
      <section className="tutoring-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <p className="section-kicker reveal">{t('tutoringHubKicker')}</p>
          <h1 className="tutoring-title reveal" style={{ '--d': 1 }}>
            {t('tutoringHubTitle')}
          </h1>
          <p className="tutoring-lead reveal" style={{ '--d': 2 }}>
            {t('tutoringHubLead')}
          </p>
          <div className="tutoring-cards tutoring-cards-single">
            <Link
              href="/korepetycje/programowanie"
              className="tutoring-card reveal"
              style={{ '--d': 3 }}
            >
              <BookOpen size={22} />
              <strong>{t('tutoringHubCardTitle')}</strong>
              <span>{t('tutoringHubCardText')}</span>
              <em>
                {t('tutoringHubCardCta')} <ArrowRight size={16} />
              </em>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TutoringHubPage;
