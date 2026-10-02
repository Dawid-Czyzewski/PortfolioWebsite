'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="not-found-page">
      <div className="page-orbs" aria-hidden="true">
        <span className="glow-orb glow-orb-1" />
        <span className="glow-orb glow-orb-2" />
        <span className="glow-orb glow-orb-3" />
      </div>
      <div className="container not-found-inner">
        <p className="section-kicker reveal">{t('notFoundKicker')}</p>
        <p className="not-found-code reveal" style={{ '--d': 1 }} aria-hidden="true">
          404
        </p>
        <h1 className="not-found-title reveal" style={{ '--d': 2 }}>
          {t('notFoundTitle')}
          <span>{t('notFoundAccent')}</span>
        </h1>
        <p className="not-found-text reveal" style={{ '--d': 3 }}>{t('notFoundText')}</p>
        <p className="not-found-note reveal" style={{ '--d': 4 }}>{t('notFoundNote')}</p>
        <div className="not-found-actions reveal" style={{ '--d': 5 }}>
          <Link href="/" className="primary-button">
            <ArrowLeft size={18} /> {t('backToHome')}
          </Link>
          <Link href="/projects" className="secondary-button">
            {t('projects')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
