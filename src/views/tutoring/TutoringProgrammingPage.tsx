'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Check } from 'lucide-react';
import JsonLd from '@/components/JsonLd';

const TutoringProgrammingPage = () => {
  const { t } = useTranslation();

  const faq = [
    { q: t('tutoringProgFaq1q'), a: t('tutoringProgFaq1a') },
    { q: t('tutoringProgFaq2q'), a: t('tutoringProgFaq2a') },
    { q: t('tutoringProgFaq3q'), a: t('tutoringProgFaq3a') },
    { q: t('tutoringProgFaq4q'), a: t('tutoringProgFaq4a') },
    { q: t('tutoringProgFaq5q'), a: t('tutoringProgFaq5a') },
  ];

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('tutoringServiceName'),
    serviceType: 'Programming tutoring',
    provider: {
      '@type': 'Person',
      name: 'Dawid Czyżewski',
      url: 'https://dawid-developer.pl',
      email: 'kontakt@dawid-developer.pl',
    },
    areaServed: 'PL',
    url: 'https://dawid-developer.pl/korepetycje/programowanie',
    description: t('tutoringServiceDesc'),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main className="tutoring-page">
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <section className="tutoring-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container tutoring-layout">
          <div>
            <p className="section-kicker reveal">{t('tutoringProgKicker')}</p>
            <h1 className="tutoring-title reveal" style={{ '--d': 1 }}>
              {t('tutoringProgTitle')}
            </h1>
            <p className="tutoring-lead reveal" style={{ '--d': 2 }}>
              {t('tutoringProgLead')}
            </p>
            <div className="tutoring-actions reveal" style={{ '--d': 3 }}>
              <Link href="/contact" className="primary-button">
                {t('tutoringProgBook')} <ArrowRight size={18} />
              </Link>
              <Link href="/korepetycje" className="secondary-button">
                {t('tutoringProgAll')}
              </Link>
            </div>
          </div>

          <aside className="tutoring-panel-wrap reveal" style={{ '--d': 3 }}>
            <div className="tutoring-panel">
              <p className="tutoring-panel-label">{t('tutoringProgPanelLabel')}</p>
              <ul>
                <li><Check size={16} /> {t('tutoringProgPanelOnline')}</li>
                <li><Check size={16} /> {t('tutoringProgPanelLive')}</li>
                <li><Check size={16} /> {t('tutoringProgPanelStack')}</li>
                <li>
                  <Check size={16} />{' '}
                  <span>
                    {t('tutoringProgPanelDetails')}{' '}
                    <Link href="/contact">{t('tutoringProgWriteMe')}</Link>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="tutoring-section">
        <div className="container tutoring-grid">
          <article className="reveal" style={{ '--d': 1 }}>
            <h2>{t('tutoringProgForWhoTitle')}</h2>
            <p>{t('tutoringProgForWhoText')}</p>
          </article>
          <article className="reveal" style={{ '--d': 2 }}>
            <h2>{t('tutoringProgLessonsTitle')}</h2>
            <p>{t('tutoringProgLessonsText')}</p>
          </article>
          <article className="reveal" style={{ '--d': 3 }}>
            <h2>{t('tutoringProgTeachTitle')}</h2>
            <ul className="tutoring-list">
              <li>{t('tutoringProgTeachPhp')}</li>
              <li>{t('tutoringProgTeachJs')}</li>
              <li>{t('tutoringProgTeachPython')}</li>
              <li>{t('tutoringProgTeachFlutter')}</li>
              <li>{t('tutoringProgTeachBasics')}</li>
            </ul>
          </article>
          <article className="reveal" style={{ '--d': 4 }}>
            <h2>{t('tutoringProgPricingTitle')}</h2>
            <p>
              {t('tutoringProgPricingTextBefore')}{' '}
              <Link href="/contact">{t('tutoringProgWriteMe')}</Link>
              {t('tutoringProgPricingTextAfter')}
            </p>
          </article>
        </div>
      </section>

      <section className="tutoring-section tutoring-faq">
        <div className="container">
          <h2 className="reveal">{t('tutoringProgFaqTitle')}</h2>
          <div className="tutoring-faq-list">
            {faq.map((item, index) => (
              <details
                key={item.q}
                className="tutoring-faq-item reveal reveal-fast"
                style={{ '--d': index + 1 }}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="tutoring-actions reveal" style={{ '--d': 6, marginTop: 28 }}>
            <Link href="/contact" className="primary-button">
              {t('tutoringProgFaqCta')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TutoringProgrammingPage;
