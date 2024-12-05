import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        form.reset();
        window.location.href = '/success.html';
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.", {
        style: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl space-y-6 lg:w-1/2"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label htmlFor="name" className="block text-base md:text-lg font-medium text-white mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-white/20 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent text-white placeholder-white/50"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base md:text-lg font-medium text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white/20 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent text-white placeholder-white/50"
          placeholder="Votre email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-base md:text-lg font-medium text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/20 border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-white/40 focus:border-transparent text-white placeholder-white/50"
          placeholder="Votre message"
        ></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1.5 h-4 w-4 rounded border-white/20 bg-white/20 text-white focus:ring-white/40"
        />
        <label htmlFor="privacy" className="text-sm text-white/90">
          J'accepte que mes données soient traitées conformément à votre{' '}
          <a href="/privacy" className="underline hover:text-white">politique de confidentialité</a>{' '}
          (et je sais qu'elles ne seront pas confiées à un pigeon voyageur 🕊️)
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-colors text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            Envoi en cours...
          </>
        ) : (
          'Envoyer le message'
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;