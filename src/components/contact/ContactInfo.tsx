import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, title, content }) => (
  <div className="flex items-start">
    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
      <Icon size={28} />
    </div>
    <div className="ml-6">
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <p className="text-white/90 mt-1">{content}</p>
    </div>
  </div>
);

const ContactInfo = () => {
  const contactItems = [
    { icon: Mail, title: 'Email', content: 'oueslati.nadhem@gmail.com' },
    { icon: Phone, title: 'Téléphone', content: '+33 7 69 34 53 88' },
    { icon: MapPin, title: 'Adresse', content: '41 rue des meuniers 75012 PARIS' },
  ];

  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <ContactInfoItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ContactInfo;