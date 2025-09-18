import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PL, GB } from 'country-flag-icons/react/3x2';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'pl');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const changeLang = (lc) => setLang(lc);

  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="/" className="text-xl font-semibold">Dawid Czyżewski</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-teal-400">{t('about')}</a>
          <a href="#projects" className="hover:text-teal-400">{t('projects')}</a>
          <a href="#contact" className="hover:text-teal-400">{t('contact')}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => changeLang('pl')}
              className={`flex items-center px-2 py-1 rounded border ${lang === 'pl' ? 'bg-gray-100 text-gray-900' : 'border-gray-100 hover:bg-gray-100 hover:text-gray-900'}`}
              aria-label="Polski"
            >
              <PL className="h-5 w-7 mr-1" title="PL" />
              PL
            </button>
            <button
              onClick={() => changeLang('en')}
              className={`flex items-center px-2 py-1 rounded border ${lang === 'en' ? 'bg-gray-100 text-gray-900' : 'border-gray-100 hover:bg-gray-100 hover:text-gray-900'}`}
              aria-label="English"
            >
              <GB className="h-5 w-7 mr-1" title="GB" />
              EN
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {navOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-gray-900 dark:bg-gray-800">
          <a href="#about" className="block hover:text-teal-400">{t('about')}</a>
          <a href="#projects" className="block hover:text-teal-400">{t('projects')}</a>
          <a href="#contact" className="block hover:text-teal-400">{t('contact')}</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
