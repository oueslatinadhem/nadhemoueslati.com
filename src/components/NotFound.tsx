import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const shakeAnimation = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      rotate: [0, -3, 3, -3, 3, 0],
      transition: {
        y: { duration: 0.6, delay: 0.2 },
        rotate: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    hover: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-8xl md:text-9xl font-bold text-white mb-8"
          >
            404
          </motion.h1>

          <motion.div
            variants={shakeAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="w-48 h-48 mx-auto mb-8"
          >
            <img
              src="/nadhem404.png"
              alt="404 Error"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/90 mb-12"
          >
            Oups, vous êtes perdu ? Cette page est aussi introuvable qu'un dimanche sans café ☕. 
            Essayez de revenir en arrière ou suivez un autre chemin !
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;