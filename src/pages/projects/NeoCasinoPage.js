import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon, EyeIcon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/outline';
import mainPagePhoto from '../../assets/neoCasino/mainPage.png';
import neoCasinoSlotPhoto from '../../assets/neoCasino/neoCasinoSlot.png';
import neoCasinoLegendPhoto from '../../assets/neoCasino/legend.png';
import neoCasinoBlackJackPhoto from '../../assets/neoCasino/blackJack.png';
import neoCasinoRoulettePhoto from '../../assets/neoCasino/neoCasinoRoulette.png';
import neoCasinoCrashPhoto from '../../assets/neoCasino/neoCasinoCrash.png';
import neoCasinoScratchCardPhoto from '../../assets/neoCasino/neoCasinoScratchCard.png';

const NeoCasinoPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('NeoCasino')}`;
  }, [t]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const openImageModal = (image, alt) => {
    setSelectedImage({ image, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const projectSections = [
    {
      image: mainPagePhoto,
      alt: t("neoCasinoMainTitle"),
      title: t("neoCasinoMainTitle"),
      description: t("neoCasinoMainText"),
    },
    {
      image: neoCasinoSlotPhoto,
      alt: t("neoCasinoSlotTitle"),
      title: t("neoCasinoSlotTitle"),
      description: t("neoCasinoSlotText"),
    },
    {
      image: neoCasinoLegendPhoto,
      alt: t("neoCasinoLegendTitle"),
      title: t("neoCasinoLegendTitle"),
      description: t("neoCasinoLegendText"),
    },
    {
      image: neoCasinoBlackJackPhoto,
      alt: t("neoCasinoBlackJackTitle"),
      title: t("neoCasinoBlackJackTitle"),
      description: t("neoCasinoBlackJackText"),
    },
    {
      image: neoCasinoRoulettePhoto,
      alt: t("neoCasinoRouletteTitle"),
      title: t("neoCasinoRouletteTitle"),
      description: t("neoCasinoRouletteText"),
    },
    {
      image: neoCasinoScratchCardPhoto,
      alt: t("neoCasinoScratchCardTitle"),
      title: t("neoCasinoScratchCardTitle"),
      description: t("neoCasinoScratchCardText"),
    },
    {
      image: neoCasinoCrashPhoto,
      alt: t("neoCasinoCrashTitle"),
      title: t("neoCasinoCrashTitle"),
      description: t("neoCasinoCrashText"),
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              NeoCasino
            </span>
          </h1>
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
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">{t('neoCasinoTitle')}</h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 text-center">
              {t('neoCasinoDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['React', 'CSS', 'JavaScript', 'HTML'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {projectSections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-lg">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openImageModal(section.image, section.alt)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="relative w-full rounded-2xl sm:rounded-3xl border-4 border-white/20 shadow-2xl group-hover:border-purple-400/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl sm:rounded-3xl transition-all duration-300 flex items-center justify-center">
                    <EyeIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">{section.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                    {section.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.a
            href="https://casino.satoshidc.cfolks.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('seeWebsite')}
          </motion.a>
          <motion.a
            href="https://github.com/Dawid-Czyzewski/NeoCasino"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl sm:rounded-2xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {t('seeGithub')}
          </motion.a>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                />
                <motion.button
                  onClick={closeImageModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 sm:p-4 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all duration-200 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NeoCasinoPage;