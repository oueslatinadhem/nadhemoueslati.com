import React from 'react';
import { Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('oueslati.nadhem@gmail.com');
    toast.success('Email copié !', {
      style: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nadhemoueslati/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      onClick: copyEmail,
      label: "Email",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/33769346388",
      label: "WhatsApp",
    },
    {
      icon: Phone,
      href: "tel:+33769346388",
      label: "Téléphone",
    },
  ];

  return (
    <footer className="py-16 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="logo-font text-white">Nadhem Oueslati</h3>
            <p className="mt-3 text-lg text-white/80">Créer des expériences numériques qui inspirent</p>
          </div>
          
          <div className="flex space-x-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return link.onClick ? (
                <motion.button
                  key={index}
                  onClick={link.onClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/80 hover:text-white transition-colors p-2"
                  aria-label={link.label}
                >
                  <Icon size={28} />
                </motion.button>
              ) : (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/80 hover:text-white transition-colors p-2"
                  aria-label={link.label}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Nadhem Oueslati. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;