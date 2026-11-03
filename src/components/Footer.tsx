'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { IconComponent } from '../types';

const LinkedinIcon = FaLinkedin as IconComponent;
const GithubIcon = FaGithub as IconComponent;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <p>{t('footerCopyright', { year: new Date().getFullYear() })}</p>
          <nav className="footer-links" aria-label="Stopka">
            <Link href="/korepetycje">{t('tutoringNav')}</Link>
            <Link href="/polityka-prywatnosci">{t('privacyNav')}</Link>
          </nav>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/dawid-czyżewski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/Dawid-Czyzewski/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
