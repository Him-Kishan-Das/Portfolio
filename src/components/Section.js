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
          className="section-title text-3xl sm:text-4xl font-bold mb-2 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        {subtitle && (
          <motion.p
            className="section-subtitle text-lg mb-8 text-gray-600 dark:text-gray-300 transition-colors duration-300"
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