import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ScrollProgress from './components/ScrollProgress.js';
import Education from './components/Education.js';
import Certification from './components/Certification.js';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Hero />
          <Education />
          <Certification />
          <Projects />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}