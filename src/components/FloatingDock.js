import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaVolumeUp,
  FaVolumeMute,
  FaSun,
  FaMoon
} from 'react-icons/fa';
import { sounds } from '../utils/soundEffects.js';

export default function FloatingDock() {
  const [soundActive, setSoundActive] = useState(sounds.isEnabled());
  const [isDark, setIsDark] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
    }
  }, []);

  const toggleTheme = () => {
    sounds.playClick(680, 0.04);
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleSound = () => {
    const newState = sounds.toggle();
    setSoundActive(newState);
  };

  const scrollTo = (id) => {
    sounds.playClick(580, 0.03);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { id: 'hero', label: 'Home', icon: <FaHome />, onClick: () => scrollTo('hero') },
    { id: 'about', label: 'About', icon: <FaUser />, onClick: () => scrollTo('about') },
    { id: 'skills', label: 'Skills', icon: <FaCode />, onClick: () => scrollTo('skills') },
    { id: 'projects', label: 'Projects', icon: <FaLaptopCode />, onClick: () => scrollTo('projects') },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase />, onClick: () => scrollTo('experience') },
    { id: 'education', label: 'Education', icon: <FaGraduationCap />, onClick: () => scrollTo('education') },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, onClick: () => scrollTo('contact') }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-[#070b19]/80 backdrop-blur-2xl border border-slate-300/80 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
      >
        {/* Navigation items */}
        {dockItems.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={item.onClick}
              onMouseEnter={() => {
                setActiveTooltip(item.label);
                sounds.playHover();
              }}
              onMouseLeave={() => setActiveTooltip(null)}
              className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200/80 dark:hover:bg-white/10 transition-all hover:scale-125 cursor-pointer text-xs sm:text-sm"
              aria-label={item.label}
            >
              {item.icon}
            </button>

            {activeTooltip === item.label && (
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 whitespace-nowrap shadow-md pointer-events-none transition-all">
                {item.label}
              </span>
            )}
          </div>
        ))}

        {/* Divider */}
        <div className="w-[1px] h-5 bg-slate-300 dark:bg-white/15 mx-0.5" />

        {/* Sound toggle */}
        <div className="relative">
          <button
            onClick={toggleSound}
            onMouseEnter={() => {
              setActiveTooltip(soundActive ? 'Sound: ON' : 'Sound: OFF');
              sounds.playHover();
            }}
            onMouseLeave={() => setActiveTooltip(null)}
            className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-all hover:scale-125 cursor-pointer text-xs sm:text-sm"
            aria-label="Toggle Sound Effects"
          >
            {soundActive ? <FaVolumeUp /> : <FaVolumeMute className="opacity-60" />}
          </button>
          {activeTooltip && activeTooltip.startsWith('Sound') && (
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 whitespace-nowrap shadow-md pointer-events-none transition-all">
              {activeTooltip}
            </span>
          )}
        </div>

        {/* Theme toggle */}
        <div className="relative">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => {
              setActiveTooltip(isDark ? 'Light Theme' : 'Dark Theme');
              sounds.playHover();
            }}
            onMouseLeave={() => setActiveTooltip(null)}
            className="p-2 sm:p-2.5 rounded-full text-slate-700 dark:text-gray-300 hover:text-amber-400 hover:bg-slate-200/80 dark:hover:bg-white/10 transition-all hover:scale-125 cursor-pointer text-xs sm:text-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-sky-500" />}
          </button>
          {activeTooltip && (activeTooltip === 'Light Theme' || activeTooltip === 'Dark Theme') && (
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 whitespace-nowrap shadow-md pointer-events-none transition-all">
              {activeTooltip}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
