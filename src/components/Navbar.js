import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.js';
import HKD from './assets/HKD-removebg-preview.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { sounds } from '../utils/soundEffects.js';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certification', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 dark:bg-[#030611]/85 border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Brand */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => sounds.playClick(500, 0.03)}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={HKD}
            alt="Him Kishan Das Logo"
            className="h-10 w-auto filter dark:invert transition-all"
          />
          <div className="text-left hidden sm:block">
            <div className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Him Kishan Das
            </div>
            <div className="text-[10px] text-slate-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
              Full-Stack Developer @ NIC
            </div>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * i }}
              onClick={() => sounds.playClick(550, 0.02)}
              className="text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}

          <ThemeToggle />
        </nav>

        {/* Mobile / Tablet Toggle */}
        <div className="flex xl:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 dark:bg-[#050814]/95 border-b border-slate-200 dark:border-white/10 px-6 py-5 space-y-2 text-left shadow-xl"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  sounds.playClick(550, 0.02);
                  setMobileMenuOpen(false);
                }}
                className="block py-2 text-sm uppercase tracking-wider font-semibold text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 border-b border-slate-100 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
