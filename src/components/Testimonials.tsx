import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { useViewportSlider } from '../hooks/useViewportSlider';
import { useDragSlider } from '../hooks/useDragSlider';

const Testimonials = () => {
  const {
    currentIndex,
    direction,
    elementRef,
    setIsHovered,
    goToNext,
    goToPrevious,
    goToSlide
  } = useViewportSlider({
    totalSlides: testimonials.length
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
    <section id="temoignages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="text-center md:text-left md:w-2/3 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 md:mb-6">Ce que l'on dit de moi…</h2>
            <p className="text-base md:text-xl text-white/90">
              Découvrez les témoignages de clients avec qui j'ai eu le plaisir de collaborer sur des projets de création et de refonte web.
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
              src="/nadhemavis.png"
              alt="Avis clients"
              className="w-[250px] h-auto object-contain mx-auto transform scale-105"
            />
          </motion.div>
        </div>

        <div 
          ref={elementRef}
          className="bg-white/10 backdrop-blur-sm rounded-2xl relative z-20 px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseLeave();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-4 md:p-8">
            <div 
              className="relative min-h-[400px] md:min-h-[500px] select-none"
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
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center mb-4 md:mb-8">
                      <p className="text-xs md:text-lg text-gray-700 italic leading-relaxed max-w-3xl text-center">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-3 md:gap-6 mb-3 md:mb-6">
                        <img
                          src={testimonials[currentIndex].author.photo}
                          alt={testimonials[currentIndex].author.name}
                          className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover"
                          draggable="false"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm md:text-xl mb-1 md:mb-2 flex items-center gap-2">
                            {testimonials[currentIndex].author.name}
                            <a
                              href={testimonials[currentIndex].author.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                              aria-label={`LinkedIn de ${testimonials[currentIndex].author.name}`}
                            >
                              <Linkedin size={14} className="opacity-60 hover:opacity-100 transition-opacity" />
                            </a>
                          </h4>
                          {testimonials[currentIndex].author.role.map((line, index) => (
                            <p 
                              key={index}
                              className="text-[10px] md:text-sm text-gray-600 uppercase tracking-wide leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="w-20 h-12 md:w-32 md:h-20 flex items-center justify-center">
                        <img
                          src={testimonials[currentIndex].company.logo}
                          alt="Company logo"
                          className="max-w-full max-h-full object-contain"
                          draggable="false"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
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

export default Testimonials;