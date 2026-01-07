import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ProjectPageHeader = ({ title, onBack, t }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        {t('back')}
      </motion.button>
    </motion.div>
  );
};

export default ProjectPageHeader;
