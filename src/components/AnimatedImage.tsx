import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt }) => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, 0, 0, 0, -100]
  );
  
  const opacity = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.9, 1],
    [0, 0.5, 1, 1, 0.5, 0]
  );

  return (
    <motion.div
      className="absolute right-0 bottom-12 w-[200px]"
      style={{
        y,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
};

export default AnimatedImage;