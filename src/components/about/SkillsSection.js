import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const SkillsSection = ({ skills, title, t }) => {
  const getSkillDisplay = (skill) => {
    if (typeof skill === 'object' && skill.translate) {
      return t(skill.key);
    }
    return skill;
  };

  const getSkillKey = (skill, index) => {
    if (typeof skill === 'object' && skill.translate) {
      return skill.key;
    }
    return skill || `skill-${index}`;
  };

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <SectionTitle icon={CodeBracketIcon} title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={getSkillKey(skill, index)}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.05 }}
          >
            <span className="text-white font-medium">{getSkillDisplay(skill)}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
