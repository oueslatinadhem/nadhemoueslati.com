import React from 'react';
import { motion } from 'framer-motion';

interface LogoGridProps {
  logos: Array<{ src: string; alt: string }>;
  coloredLogos: Set<string>;
}

const LogoGrid: React.FC<LogoGridProps> = ({ logos, coloredLogos }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {logos.map((logo, index) => {
        const logoId = `logo-${index}`;
        const isColored = coloredLogos.has(logoId);
        
        return (
          <motion.div
            key={index}
            className="flex items-center justify-center relative group"
          >
            <div className="w-24 h-24 relative cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain relative z-10"
                initial={{ filter: 'grayscale(1)', opacity: 0.7 }}
                animate={{
                  filter: isColored ? 'grayscale(0)' : 'grayscale(1)',
                  opacity: isColored ? 1 : 0.7,
                  scale: isColored ? 1.1 : 1,
                }}
                whileHover={{
                  filter: 'grayscale(0)',
                  opacity: 1,
                  scale: 1.1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LogoGrid;