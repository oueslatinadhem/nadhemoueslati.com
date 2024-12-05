import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import TechnicalStack from './components/TechnicalStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CursorFollower from './components/CursorFollower';
import BackToTop from './components/BackToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';
import CookieConsent from './components/CookieConsent';
import { Toaster } from 'react-hot-toast';

function App() {
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/':
        return (
          <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <TechnicalStack />
            <Testimonials />
            <Contact />
            <BackToTop />
            <Footer />
          </>
        );
      case '/privacy':
        return <PrivacyPolicy />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="noise" />
      <CursorFollower />
      <Background />
      <Toaster position="bottom-center" />
      <CookieConsent />
      {renderContent()}
    </div>
  );
}

export default App;