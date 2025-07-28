import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Dawid Czyżewski
        </div>
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-teal-400">{t('about')}</a>
          <a href="#projects" className="hover:text-teal-400">{t('projects')}</a>
          <a href="#contact" className="hover:text-teal-400">{t('contact')}</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
