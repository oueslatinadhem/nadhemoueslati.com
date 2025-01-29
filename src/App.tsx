import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Background from './components/Background';
import BackToTop from './components/BackToTop';
import { Toaster } from 'react-hot-toast';

const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const TechnicalStack = lazy(() => import('./components/TechnicalStack'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const NotFound = lazy(() => import('./components/NotFound'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

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
            <Suspense fallback={<div className="min-h-screen" />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen" />}>
              <TechnicalStack />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Contact />
            </Suspense>
            <BackToTop />
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </>
        );
      case '/privacy':
        return (
          <Suspense fallback={<div className="min-h-screen" />}>
            <PrivacyPolicy />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<div className="min-h-screen" />}>
            <NotFound />
          </Suspense>
        );
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="noise" />
      <Background />
      <Toaster position="bottom-center" />
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
      {renderContent()}
    </div>
  );
}

export default App;
