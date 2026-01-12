import { motion } from 'framer-motion';
import { RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = ({ showScrollIndicator }) => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SparklesIcon className="w-4 h-4" />
          {t('softwareDeveloper')}
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
            <span className="block text-white">Dawid</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Czyżewski
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('homeSubtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RocketLaunchIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            {t('projects')}
          </motion.a>
          
          <motion.a
            href="/#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contact')}
          </motion.a>
        </motion.div>
      </div>
      <ScrollIndicator showScrollIndicator={showScrollIndicator} />
    </div>
  );
};

export default HeroSection;
