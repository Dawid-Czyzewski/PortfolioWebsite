import { motion } from 'framer-motion';
import { BriefcaseIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutProfile = ({ photo, alt, greeting, description, experience, contactMe }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 w-80 h-60"></div>
          <img
            src={photo}
            alt={alt}
            className="relative w-90 h-100 object-cover object-top rounded-3xl border-4 border-white/20 shadow-2xl sm:w-90 sm:h-100 lg:w-120 lg:h-140"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">{greeting}</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-8">{description}</p>
        
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300 font-semibold mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BriefcaseIcon className="w-5 h-5" />
          {experience}
        </motion.div>
        <motion.a
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-fit cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RocketLaunchIcon className="w-5 h-5" />
          {contactMe}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AboutProfile;
