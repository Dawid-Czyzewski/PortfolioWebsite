import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { getExperienceDetail } from '../../data/experience';

const ExperienceDetailPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const lang = i18n.language;
  const experience = getExperienceDetail(id, t, lang);

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} - ${experience.company}`;
    } else {
      document.title = t('pageNotFound');
    }
  }, [experience, t]);

  const handleBack = () => {
    navigate('/about');
  };

  if (!experience) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('pageNotFound')}</h1>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            {t('backToHome')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {experience.title}
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-300 font-semibold">
                {experience.company}
              </h2>
            </div>
          </div>
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('back')}
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 pb-6 border-b border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg text-white/70 mb-2">{t('aboutExperienceTitle')}</h3>
                <p className="text-2xl font-bold text-purple-400">{experience.period}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">
              {experience.details}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
