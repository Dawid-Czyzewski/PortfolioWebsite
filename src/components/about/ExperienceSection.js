import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const ExperienceSection = ({ experience, title }) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <SectionTitle icon={BriefcaseIcon} title={title} iconColor="text-blue-400" />
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
              <span className="text-purple-400 font-semibold">{exp.period}</span>
            </div>
            <h4 className="text-xl text-blue-300 font-semibold mb-2">{exp.company}</h4>
            <p className="text-white/70">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
