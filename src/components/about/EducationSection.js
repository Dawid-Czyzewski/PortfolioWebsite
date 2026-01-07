import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const EducationSection = ({ education, title }) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <SectionTitle icon={AcademicCapIcon} title={title} iconColor="text-pink-400" />
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-pink-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{edu.degree}</h3>
              <span className="text-pink-400 font-semibold">{edu.period}</span>
            </div>
            <h4 className="text-xl text-pink-300 font-semibold mb-2">{edu.school}</h4>
            <p className="text-white/70">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
