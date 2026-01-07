import { motion } from 'framer-motion';

const ProjectInfo = ({ title, description, technologies, delay = 0.2 }) => {
  return (
    <motion.div
      className="mb-12 sm:mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
          {title}
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 text-center">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {technologies.map((tech) => (
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
  );
};

export default ProjectInfo;
