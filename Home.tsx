import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </div>
  );
};

export default Home;