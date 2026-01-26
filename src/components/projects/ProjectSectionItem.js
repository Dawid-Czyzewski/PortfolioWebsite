import { motion } from 'framer-motion';
import { EyeIcon } from '@heroicons/react/24/outline';

const ProjectSectionItem = ({ section, index, onImageClick }) => {
  const hasImage = section.image !== null && section.image !== undefined;

  if (!hasImage) {
    return (
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
      >
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
            {section.title}
          </h3>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg text-center max-w-4xl mx-auto">
            {section.description}
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
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
          onClick={() => onImageClick(section.image, section.alt)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <img
            src={section.image}
            alt={section.alt}
            className="relative w-full max-h-64 sm:max-h-80 lg:max-h-96 object-contain rounded-2xl sm:rounded-3xl border-4 border-white/20 shadow-2xl group-hover:border-purple-400/50 transition-all duration-300 bg-black/20"
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
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">
            {section.title}
          </h3>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base text-center lg:text-left">
            {section.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSectionItem;
