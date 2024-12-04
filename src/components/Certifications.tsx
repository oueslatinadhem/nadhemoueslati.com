import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certifications } from '../data/certifications';
import { useViewportSlider } from '../hooks/useViewportSlider';
import { useDragSlider } from '../hooks/useDragSlider';

const Certifications = () => {
  const {
    currentIndex,
    direction,
    elementRef,
    setIsHovered,
    goToNext,
    goToPrevious,
    goToSlide
  } = useViewportSlider({
    totalSlides: certifications.length
  });

  const {
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleMouseLeave
  } = useDragSlider({
    onNext: goToNext,
    onPrevious: goToPrevious
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  return (
    <section id="diplomes" className="py-24">
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
              <h2 className="text-4xl md:text-5xl text-white mb-4 md:mb-6">Diplômes & Certifications</h2>
              <p className="text-base md:text-xl text-white/90">
                Cette section présente les diplômes et certifications qui ont jalonné mon parcours, témoignant de ma formation académique et de mes compétences techniques.
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
                src="/nadhemcertifs.png"
                alt="Certifications"
                className="w-[250px] h-auto object-contain mx-auto"
              />
            </motion.div>
          </div>
        </div>

        <div 
          ref={elementRef}
          className="bg-white/10 backdrop-blur-sm rounded-2xl relative z-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseLeave();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-8">
            <div 
              className="relative select-none mobile-scroll-container"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center mobile-scroll-item"
                >
                  <motion.div
                    className="w-80 h-80 bg-white/20 rounded-xl p-8 flex items-center justify-center mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={certifications[currentIndex].logo}
                      alt={certifications[currentIndex].title}
                      className="w-full h-full object-contain"
                      draggable="false"
                    />
                    {/* Navigation arrows - visible only on desktop */}
                    <div className="hidden md:block">
                      <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-32 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </motion.div>
                  <p className="text-white/60 text-base md:text-xl mb-2">{certifications[currentIndex].date}</p>
                  <h3 className="text-xl md:text-2xl text-white font-medium text-center">{certifications[currentIndex].title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;