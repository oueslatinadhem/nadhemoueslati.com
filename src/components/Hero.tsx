import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  const imageScale = useTransform(scrollY, [0, 300], [1, 4]);
  const imageOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const imageY = useTransform(scrollY, [0, 300], ['0%', '-25%']);
  const imageX = useTransform(scrollY, [0, 300], ['0%', '-15%']);

  return (
    <section id="accueil" className="min-h-screen flex items-center pt-20 md:pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ opacity: contentOpacity }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left -mt-16 md:mt-0 relative z-10"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl text-white mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Nadhem Oueslati
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl text-white/80 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Chef de projet web confirmé
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Transformer vos idées en expériences numériques exceptionnelles avec des solutions web innovantes
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#expertise"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors text-base sm:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Commencer
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="/CV_Nadhem_OUESLATI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-colors text-base sm:text-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Télécharger le CV
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center relative z-0 mb-[2.6rem] md:mb-0"
            style={{ clipPath: 'inset(0)' }}
          >
            <motion.div
              className="relative w-[60%] md:w-[80%] max-w-[500px]"
              style={{
                scale: imageScale,
                opacity: imageOpacity,
                y: imageY,
                x: imageX,
                transformOrigin: '45% 35%'
              }}
            >
              <img
                src="/avatar.webp"
                alt="Avatar 3D"
                className="w-full h-full object-cover rounded-3xl"
                loading="eager"
                width="500"
                height="500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;