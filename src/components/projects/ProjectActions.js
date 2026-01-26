import { motion } from 'framer-motion';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const ProjectActions = ({ websiteUrl, githubUrl, githubFrontendUrl, githubBackendUrl, t, delay = 1.0 }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 lg:mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {websiteUrl && (
        <motion.a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm sm:text-base cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          {t('seeWebsite')}
        </motion.a>
      )}
      {!websiteUrl && (
        <motion.div
          className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl sm:rounded-2xl text-sm sm:text-base"
        >
          <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          {t('projectNotHosted')}
        </motion.div>
      )}
      {githubFrontendUrl && (
        <motion.a
          href={githubFrontendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl sm:rounded-2xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          {t('seeGithubFrontend')}
        </motion.a>
      )}
      {githubBackendUrl && (
        <motion.a
          href={githubBackendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl sm:rounded-2xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          {t('seeGithubBackend')}
        </motion.a>
      )}
      {githubUrl && !githubFrontendUrl && !githubBackendUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl sm:rounded-2xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          {t('seeGithub')}
        </motion.a>
      )}
    </motion.div>
  );
};

export default ProjectActions;
