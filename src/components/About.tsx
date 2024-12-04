import React from 'react';
import { motion } from 'framer-motion';
import { expertise } from '../data/expertise';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl text-white mb-6">Expertise</h2>
          <motion.blockquote 
            className="text-lg italic text-white/80 mb-8 border-l-4 border-white/20 pl-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            « La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie. »
            <footer className="text-sm mt-2 text-white/60">- Sénèque</footer>
          </motion.blockquote>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative p-8 rounded-2xl glass-effect transform-gpu will-change-transform"
              >
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  <Icon size={32} className="transform-gpu" />
                </motion.div>
                <h3 className="text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;