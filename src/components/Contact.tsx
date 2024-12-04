import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import MapComponent from './MapComponent';
import { useClipboard } from '../hooks/useClipboard';

const Contact = () => {
  const { copyToClipboard } = useClipboard();

  const contactActions = [
    {
      icon: Mail,
      action: () => copyToClipboard('oueslati.nadhem@gmail.com', 'Email copié !'),
      ariaLabel: 'Copier l\'adresse email'
    },
    {
      icon: Phone,
      href: 'tel:+33769346388',
      ariaLabel: 'Appeler'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/33769346388',
      ariaLabel: 'WhatsApp'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nadhemoueslati/',
      external: true,
      ariaLabel: 'LinkedIn'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 md:mb-6">Contactez-moi</h2>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
            Prêt à démarrer votre prochain projet ? Contactez-moi dès aujourd'hui et créons ensemble quelque chose d'extraordinaire
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl relative overflow-hidden lg:w-1/2 flex flex-col justify-center"
          >
            <div className="relative z-20 p-6 md:p-8">
              <div className="relative">
                <div className="space-y-8 pb-4 md:pb-1">
                  <div className="flex gap-4 mb-0 md:mb-4">
                    {contactActions.map((action, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {action.href ? (
                          <a
                            href={action.href}
                            target={action.external ? "_blank" : undefined}
                            rel={action.external ? "noopener noreferrer" : undefined}
                            className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={action.ariaLabel}
                          >
                            <action.icon size={24} />
                          </a>
                        ) : (
                          <button
                            onClick={action.action}
                            className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={action.ariaLabel}
                          >
                            <action.icon size={24} />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                      <MapPin size={24} />
                    </div>
                    <p className="text-sm md:text-base text-white/90">41 rue des meuniers 75012 PARIS</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -z-10">
                  <style>{`
                    @media (max-width: 768px) {
                      .top-0 {
                        top: 2rem;
                      }
                    }
                  `}</style>
                  <img
                    src="/nadhemcontact.png"
                    alt="Contact"
                    className="w-24 md:w-32 h-auto object-contain"
                  />
                </div>
              </div>
              <MapComponent />
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;