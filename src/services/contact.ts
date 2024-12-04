import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Here you would typically make an API call to your backend
    // For now, we'll simulate an API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Send email using a service like EmailJS, SendGrid, or your own backend
    // For demonstration, we'll just show a success message
    toast.success('Message envoyé avec succès !', {
      style: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
      duration: 5000,
    });

    return true;
  } catch (error) {
    toast.error('Une erreur est survenue. Veuillez réessayer.', {
      style: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
    });
    return false;
  }
};