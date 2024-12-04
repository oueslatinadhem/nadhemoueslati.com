import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const mobileVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.2 }
    }
  };

  if (hasInteracted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop version */}
          <motion.div
            className="fixed right-8 bottom-8 z-50 max-w-sm hidden md:block"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-start gap-4">
                <Cookie className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <p className="text-white/90 text-sm mb-4">
                    Nous utilisons des cookies pour rendre votre expérience aussi douce que possible ! 🍪 En les acceptant, vous nous aidez à mieux vous servir… sans crainte de prendre du poids.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleConsent(true)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm transition-colors"
                    >
                      Accepter
                    </button>
                    <button
                      onClick={() => handleConsent(false)}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors"
                    >
                      Refuser
                    </button>
                    <button
                      onClick={handleClose}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Continuer sans accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile version */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-t-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <p className="text-white/90 text-sm mb-4">
                    Nous utilisons des cookies pour rendre votre expérience aussi douce que possible ! 🍪 En les acceptant, vous nous aidez à mieux vous servir… sans crainte de prendre du poids.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleConsent(true)}
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm transition-colors"
                    >
                      Accepter
                    </button>
                    <button
                      onClick={() => handleConsent(false)}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors"
                    >
                      Refuser
                    </button>
                    <button
                      onClick={handleClose}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      Continuer sans accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;