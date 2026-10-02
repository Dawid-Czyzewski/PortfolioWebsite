'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Check,
  Copy,
  Folder,
  Handshake,
  Mail,
  MapPin,
  MessageSquareText,
  Rocket,
  Send,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { IconComponent } from '../types';

const GithubIcon = FaGithub as IconComponent;
const LinkedinIcon = FaLinkedin as IconComponent;

const EMAIL = 'kontakt@dawid-developer.pl';

const steps = [
  { key: 'contactStepWrite', Icon: Send },
  { key: 'contactStepTalk', Icon: MessageSquareText },
  { key: 'contactStepBuild', Icon: Handshake },
];

const ContactPage = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="section-kicker reveal">{t('contact').toUpperCase()}</p>
              <h1 className="contact-title reveal" style={{ '--d': 1 }}>
                <span>{t('contactHeadlineStart')}</span>
                <span className="contact-title-accent">{t('contactHeadlineAccent')}</span>
              </h1>
              <p className="contact-intro reveal" style={{ '--d': 2 }}>{t('contactIntro')}</p>

              <div className="contact-actions reveal" style={{ '--d': 3 }}>
                <a href={`mailto:${EMAIL}`} className="primary-button">
                  <Rocket size={18} /> {t('contactWriteMe')}
                </a>
                <Link href="/projects" className="secondary-button">
                  <Folder size={18} /> {t('heroProjectsCta')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="reveal" style={{ '--d': 3 }}>
              <div className="contact-card-wrap">
                <aside className="contact-card">
                  <div className="contact-row">
                    <span className="info-icon"><Mail size={18} /></span>
                    <div className="contact-row-text">
                      <small>{t('contactEmail')}</small>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                    <button
                      type="button"
                      className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                      onClick={copyEmail}
                      aria-label={t('contactCopy')}
                      title={copied ? t('contactCopied') : t('contactCopy')}
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>

                  <div className="contact-row">
                    <span className="info-icon"><MapPin size={18} /></span>
                    <div className="contact-row-text">
                      <small>{t('contactLocation')}</small>
                      <strong>{t('contactLocationValue')}</strong>
                    </div>
                  </div>
                  <p className="contact-socials-label">{t('contactFindMe')}</p>
                  <div className="contact-socials">
                    <a
                      href="https://github.com/Dawid-Czyzewski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social"
                    >
                      <GithubIcon /> GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dawid-czyżewski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social"
                    >
                      <LinkedinIcon /> LinkedIn
                    </a>
                  </div>
                </aside>
                <p className="hand-note contact-hand-note">{t('contactHandNote')}</p>
              </div>
            </div>
          </div>

          <div className="contact-steps">
            {steps.map(({ key, Icon }, index) => (
              <div className="contact-step reveal" style={{ '--d': 4 + index }} key={key}>
                <span className="contact-step-number">0{index + 1}</span>
                <span className="info-icon"><Icon size={18} /></span>
                <div>
                  <strong>{t(`${key}Title`)}</strong>
                  <p>{t(`${key}Text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
