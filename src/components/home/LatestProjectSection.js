import { motion } from 'framer-motion';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import mainPagePhotoDevLink from '../../assets/devLink/mainPage.png';

const LatestProjectSection = ({ onViewportEnter, onViewportLeave }) => {
  const { t } = useTranslation();

  const technologies = ['PHP', 'React', 'Tailwind', 'MySQL', 'JavaScript'];

  return (
    <div className="relative z-10 pt-0 pb-20 px-4 sm:px-6 lg:px-8" data-project-section>
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          onViewportEnter={onViewportEnter}
          onViewportLeave={onViewportLeave}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t('latestProjectTitle')}
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t('latestProjectSubtitle')}
          </p>
        </motion.div>

        <motion.div
          className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10"></div>
              <img 
                src={mainPagePhotoDevLink} 
                alt="DevLink"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                DevLink
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {t('devLinkDescription')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href="#/project/devLink"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EyeIcon className="w-5 h-5" />
                {t('latestProjectView')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestProjectSection;
