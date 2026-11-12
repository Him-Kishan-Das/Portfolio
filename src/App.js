import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import ProjectGrid from './components/ProjectGrid.js';
import ExperienceTimeline from './components/ExperienceTimeline.js';
import Education from './components/Education.js';
import Certification from './components/Certification.js';
import ContactCTA from './components/ContactCTA.js';
import Footer from './components/Footer.js';
import ScrollProgress from './components/ScrollProgress.js';
import InteractiveBackground from './components/InteractiveBackground.js';
import MouseSpotlight from './components/MouseSpotlight.js';
import FloatingDock from './components/FloatingDock.js';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 selection:bg-sky-500/30 bg-grid-pattern pb-16">
      <InteractiveBackground />
      <MouseSpotlight />
      <ScrollProgress />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />
        <ExperienceTimeline />
        <Education />
        <Certification />
        <ContactCTA />
      </main>

      <Footer />

      {/* Interactive macOS / Dynamic Island Style Floating Dock */}
      <FloatingDock />
    </div>
  );
}
