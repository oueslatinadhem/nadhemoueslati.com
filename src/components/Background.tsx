import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(45deg, #818cf8, #c084fc)',
        backgroundImage: `
          linear-gradient(45deg, #818cf8, #c084fc),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0h30v30H0zm30 30h30v30H30z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'normal',
        backgroundAttachment: 'fixed',
      }}
      animate={{
        background: [
          'linear-gradient(45deg, #818cf8, #c084fc)',
          'linear-gradient(45deg, #34d399, #60a5fa)',
          'linear-gradient(45deg, #f472b6, #fb923c)',
          'linear-gradient(45deg, #4ade80, #818cf8)',
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
};

export default Background;