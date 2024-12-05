import React from 'react';
import { renderToString } from 'react-dom/server';

const OgImage: React.FC = () => (
  <div style={{
    width: '1200px',
    height: '630px',
    background: 'linear-gradient(135deg, #818cf8, #c084fc)',
    display: 'flex',
    padding: '60px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: 'white',
    position: 'relative'
  }}>
    {/* Photo Area */}
    <div style={{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      overflow: 'hidden',
      marginRight: '60px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }}>
      <img 
        src="/avatar.webp" 
        alt="Nadhem OUESLATI"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>

    {/* Content Area */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{
        fontSize: '72px',
        margin: '0 0 20px 0',
        fontFamily: '"Fugaz One", system-ui',
        fontWeight: 'bold'
      }}>
        Nadhem OUESLATI
      </h1>
      
      <h2 style={{
        fontSize: '36px',
        margin: '0 0 30px 0',
        fontWeight: 'normal',
        opacity: 0.9
      }}>
        Chef de Projet Digital
      </h2>
      
      <p style={{
        fontSize: '24px',
        margin: 0,
        opacity: 0.8
      }}>
        E-commerce • Gestion de Projet • Transformation Digitale
      </p>
    </div>

    {/* Experience Badge */}
    <div style={{
      position: 'absolute',
      top: '50px',
      right: '50px',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '1.2'
    }}>
      10+ ans<br />d'expérience
    </div>
  </div>
);

export const generateOgImage = async () => {
  const html = renderToString(<OgImage />);
  
  // You would typically use a service like @vercel/og or puppeteer
  // to convert this to an actual image
  return html;
};