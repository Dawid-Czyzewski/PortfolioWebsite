import { motion } from 'framer-motion';
import { BriefcaseIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const AboutProfile = ({ photo, alt, greeting, description, experience, contactMe }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 w-48 h-56"></div>
              <img
                src={photo}
                alt={alt}
                className="relative w-48 h-56 object-cover object-top rounded-2xl border-2 border-white/20 shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">{greeting}</h2>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4">{description}</p>
            
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300 text-sm font-semibold mb-4 w-fit mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <BriefcaseIcon className="w-4 h-4" />
              {experience}
            </motion.div>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-fit mx-auto lg:mx-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RocketLaunchIcon className="w-4 h-4" />
              {contactMe}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
