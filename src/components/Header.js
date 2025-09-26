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
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
          >
            Dawid Czyżewski
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
            >
              {t('about')}
            </a>
            <a 
              href="#projects" 
              className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
            >
              {t('projects')}
            </a>
            <a 
              href="#contact" 
              className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
            >
              {t('contact')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <button
                onClick={() => changeLang('pl')}
                className={`flex items-center px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                  lang === 'pl' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Polski"
              >
                <PL className="h-3 w-4 mr-1" title="PL" />
                PL
              </button>
              <button
                onClick={() => changeLang('en')}
                className={`flex items-center px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                  lang === 'en' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                aria-label="English"
              >
                <GB className="h-3 w-4 mr-1" title="GB" />
                EN
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200" 
              onClick={() => setNavOpen(!navOpen)} 
              aria-label="Toggle menu"
            >
              {navOpen ? <XMarkIcon className="h-5 w-5"/> : <Bars3Icon className="h-5 w-5"/>}
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="space-y-2">
              <a
                href="#about"
                className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                {t('about')}
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                {t('projects')}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                onClick={() => setNavOpen(false)}
              >
                {t('contact')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
