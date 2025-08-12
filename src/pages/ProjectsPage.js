import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const BASE_URL = 'https://dawid-developer.pl/#';

const projects = [
  {
    title: 'AnkietDev',
    link: `${BASE_URL}/project/ankietDev`,
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('projects')}`;
  }, [t]);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center text-white bg-black py-20 px-4 min-h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 max-w-5xl w-full space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-10 pb-5 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg text-center"
          variants={itemVariants}
        >
          {t('projectsTitle')}
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-12">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              rel="noopener noreferrer"
              variants={itemVariants}
              className="aspect-square w-full sm:w-[340px] lg:w-[400px] bg-gradient-to-br from-indigo-700 via-blue-600 to-teal-500 shadow-2xl rounded-3xl flex flex-col items-center justify-center border-2 border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="text-3xl font-bold text-white text-center group-hover:text-teal-200 transition-colors px-4"
                style={{ lineHeight: '1.2', paddingBottom: '0.15em' }}
              >
                {project.title}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;