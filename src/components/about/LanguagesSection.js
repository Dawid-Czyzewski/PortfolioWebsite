import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const LanguagesSection = ({ languages, title }) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <SectionTitle icon={GlobeAltIcon} title={title} iconColor="text-green-400" />
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.id}
            className="p-4 px-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-green-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-white">{lang.name}</h3>
              <span className="text-green-400 font-semibold">{lang.level}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguagesSection;
