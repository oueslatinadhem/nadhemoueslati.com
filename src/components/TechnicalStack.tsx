import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalStack } from '../data/technicalStack';
import LogoGrid from './stack/LogoGrid';

const TechnicalStack = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [coloredLogos, setColoredLogos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentLogos = technicalStack[activeTab].logos;
      const availableLogos = currentLogos
        .map((_, index) => `logo-${index}`)
        .filter(id => !coloredLogos.has(id));

      if (availableLogos.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableLogos.length);
        const logoId = availableLogos[randomIndex];
        setColoredLogos(prev => new Set([...prev, logoId]));
      } else {
        setColoredLogos(new Set());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [activeTab, coloredLogos]);

  return (
    <section id="stack" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 md:mb-6">Mon stack technique</h2>
          <p className="text-base md:text-xl text-white/90 max-w-4xl mx-auto">
            Je suis passionné par mon domaine et ai acquis une maîtrise approfondie de divers outils essentiels qui m'ont permis de mener à bien des projets avec succès.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 mb-12">
            {technicalStack.map((stack, index) => (
              <motion.button
                key={index}
                className={`px-4 py-3 rounded-full text-base md:text-lg transition-all text-center ${
                  activeTab === index
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white'
                } ${index === 0 ? 'col-span-2' : ''}`}
                onClick={() => {
                  setActiveTab(index);
                  setColoredLogos(new Set());
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {stack.category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <LogoGrid
                logos={technicalStack[activeTab].logos}
                coloredLogos={coloredLogos}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalStack;