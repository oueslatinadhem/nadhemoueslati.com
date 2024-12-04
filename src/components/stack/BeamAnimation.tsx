import React from 'react';
import { motion } from 'framer-motion';

interface BeamProps {
  isAnimating: boolean;
  lineIndex: number;
  currentLine: number;
}

const Beam: React.FC<BeamProps> = ({ isAnimating, lineIndex, currentLine }) => {
  const isCurrentLine = lineIndex === currentLine;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isCurrentLine && isAnimating ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute h-24 w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        style={{
          top: `${lineIndex * 8}rem`,
        }}
        initial={{ x: '-100%' }}
        animate={{
          x: isCurrentLine && isAnimating ? '100%' : '-100%',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: 0,
        }}
      />
    </motion.div>
  );
};

export default Beam;