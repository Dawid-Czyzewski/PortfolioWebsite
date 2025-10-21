import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline';
import mainPagePhotoAnkietDev from '../assets/ankietDev/mainPage.png';
import mainPagePhotoNeoCasino from '../assets/neoCasino/mainPage.png';

const ProjectsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('projects')}`;
  }, [t]);

  const projects = [
    {
      title: 'AnkietDev',
      technologies: ['PHP', 'React', 'Tailwind', 'MySQL', 'JavaScript'],
      image: mainPagePhotoAnkietDev,
      link: '#/project/ankietDev'
    },
    {
      title: 'NeoCasino',
      technologies: ['React', 'CSS', 'HTML', 'JavaScript'],
      image: mainPagePhotoNeoCasino,
      link: '#/project/neoCasino'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t('projects')}
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon className="w-4 h-4" />
                    {t('projectsView')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('projectsComingSoon')}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('projectsComingSoonDescription')}
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RocketLaunchIcon className="w-5 h-5" />
              {t('projectsContactMe')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;