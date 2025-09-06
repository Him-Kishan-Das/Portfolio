import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.js';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#education', label: 'Education' },
  { href: '#certification', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <motion.a
          href="#home"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="nav-link"
          style={{ fontWeight: 800, color: 'var(--text)' }}
        >
          HKD
        </motion.a>
        <div className="nav-links">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * (i + 1) }}
            >
              {l.label}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}