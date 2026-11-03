'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Menu, Rocket, X } from 'lucide-react';
import { PL, GB } from 'country-flag-icons/react/3x2';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'pl');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang.startsWith('en') ? 'en' : 'pl';
  }, [lang, i18n]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const nav = [
    ['/', t('home')],
    ['/about', t('about')],
    ['/projects', t('projects')],
    ['/korepetycje', t('tutoringNav')],
    ['/contact', t('contact')],
  ] as const;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          Dawid <span className="brand-last">Czyżewski</span>
        </Link>

        <nav className="nav-desktop" aria-label="Główne">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${isActive(href) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="language-switch">
            <button
              type="button"
              className={`language ${lang.startsWith('pl') ? 'active' : ''}`}
              onClick={() => setLang('pl')}
              aria-label="Polski"
            >
              <PL className="language-flag" aria-hidden="true" />
              PL
            </button>
            <button
              type="button"
              className={`language ${lang.startsWith('en') ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="English"
            >
              <GB className="language-flag" aria-hidden="true" />
              EN
            </button>
          </div>
          <Link href="/contact" className="top-contact">
            <Rocket size={16} />
            {t('headerContactCta')}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="container nav-mobile" aria-label="Mobilne">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`nav-mobile-link${isActive(href) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-mobile-cta">
            <Rocket size={17} />
            {t('headerContactCta')}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
