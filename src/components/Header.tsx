import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuItems = [
    { href: "#expertise", text: "Expertise" },
    { href: "#experience", text: "Expérience" },
    { href: "#diplomes", text: "Diplômes" },
    { href: "#stack", text: "Stack" },
    { href: "#temoignages", text: "Témoignages" },
    { href: "#contact", text: "Contact" },
  ];

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed w-full z-50">
      <div className={`${isMenuOpen ? 'mobile-menu-gradient' : 'backdrop-blur-sm'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="logo-font text-white">Nadhem Oueslati</h1>

            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-white/80 hover:text-[#00ffd0] transition-colors hover-lift"
                >
                  {item.text}
                </a>
              ))}

              <div className="flex items-center space-x-4 ml-8">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return link.onClick ? (
                    <motion.button
                      key={index}
                      onClick={link.onClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/80 hover:text-[#00ffd0] transition-colors p-2"
                      aria-label={link.label}
                    >
                      <Icon size={24} />
                    </motion.button>
                  ) : (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/80 hover:text-[#00ffd0] transition-colors p-2"
                      aria-label={link.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </nav>

            <motion.button
              className="lg:hidden text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={32} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-0 top-[72px] mobile-menu-gradient"
          >
            <motion.div 
              className="flex flex-col space-y-4 p-6"
              variants={menuVariants}
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  {item.text}
                </motion.a>
              ))}
              <motion.div 
                className="flex space-x-4 pt-4"
                variants={itemVariants}
              >
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
                      <Icon size={24} />
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
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;