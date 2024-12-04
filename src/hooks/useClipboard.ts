import { useState } from 'react';
import toast from 'react-hot-toast';

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string, message: string = 'Copié !') => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success(message, {
        style: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        duration: 2000,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error('Erreur lors de la copie');
    }
  };

  return { isCopied, copyToClipboard };
};