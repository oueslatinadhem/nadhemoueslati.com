import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/experiences';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="text-center md:text-left md:w-2/3 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4 md:mb-6">Expériences professionnelles</h2>
              <p className="text-base md:text-xl text-white/90 max-w-3xl">
                Mon parcours professionnel reflète mon engagement constant dans la gestion de projets digitaux innovants. 
                Chaque expérience a contribué à enrichir mon expertise et ma compréhension des enjeux du numérique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: 20, zIndex: -1 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/3 relative z-10"
            >
              <img
                src="/nadhemoueslatixppro.png"
                alt="Experience"
                className="w-[250px] h-auto object-contain mx-auto"
              />
            </motion.div>
          </div>
        </div>

        <div className="bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden relative z-20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 md:border-r border-white/10">
              <div className="flex md:flex-col overflow-x-auto hide-scrollbar">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    className={`flex-shrink-0 md:flex-shrink text-left p-4 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/60 hover:bg-white/5'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex items-center justify-between ${activeIndex === index ? 'gap-4' : 'gap-2'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`flex-shrink-0 bg-white/10 rounded-lg transition-all duration-300 ${
                          activeIndex === index ? 'w-20 h-12 p-[0.2rem]' : 'w-16 h-10 p-[0.1rem]'
                        }`}>
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className={`w-full h-full object-contain transition-all rounded-[5px] ${
                              activeIndex === index ? 'opacity-100' : 'opacity-50 grayscale'
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium whitespace-nowrap transition-all duration-300">
                            {exp.company}
                          </h4>
                          <p className="text-sm whitespace-nowrap transition-all duration-300">
                            {exp.years}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 md:p-8"
                >
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl text-white mb-2">{experiences[activeIndex].position}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-white/60">
                      <span>{experiences[activeIndex].company}</span>
                      <span>•</span>
                      <span>{experiences[activeIndex].location}</span>
                      {experiences[activeIndex].type && (
                        <>
                          <span>•</span>
                          <span>{experiences[activeIndex].type}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experiences[activeIndex].description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-6 text-sm md:text-base text-white/80 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-white/30 before:rounded-full"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;