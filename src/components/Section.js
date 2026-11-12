import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`section relative transition-colors duration-500 ${className}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h3
          className="section-title text-3xl sm:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        {subtitle && (
          <motion.p
            className="text-base sm:text-lg mb-12 text-slate-600 dark:text-gray-400 font-normal max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}