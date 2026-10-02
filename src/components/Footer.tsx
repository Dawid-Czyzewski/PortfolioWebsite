'use client';

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
        <p className="text-white/50 text-sm text-left">
          {t('footerCopyright', { year: new Date().getFullYear() })}
        </p>
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
