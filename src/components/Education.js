import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import CottonLogo from './assets/cotton university logo.png';
import GauhatiLogo from './assets/gauhati univeristy logo.png';
import { educationList } from '../utils/data.js';
import { FaGraduationCap, FaCalendarAlt, FaAward, FaBookOpen } from 'react-icons/fa';

export default function Education() {
  // Cotton University logo for Cotton University MCA (idx 0)
  // Gauhati University logo for Gauhati University BCA (idx 1)
  const logos = [CottonLogo, GauhatiLogo, null, null];

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic degrees, percentages, and coursework exactly from my resume"
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6 text-left">
          {educationList.map((ed, i) => (
            <motion.div
              key={ed.degree + ed.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {logos[i] ? (
                    <img
                      src={logos[i]}
                      alt={ed.institution + ' logo'}
                      className="w-14 h-14 object-contain rounded-2xl p-1.5 bg-white border border-slate-200 shadow-sm flex-shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl flex-shrink-0">
                      <FaGraduationCap />
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {ed.institution}
                    </h4>
                    <div className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400">
                      {ed.degree}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col sm:items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    <FaAward className="text-xs" />
                    {ed.grade}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                    <FaCalendarAlt className="text-sky-500" />
                    {ed.period}
                  </span>
                </div>
              </div>

              {/* Coursework exactly from resume */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-gray-400 mb-2">
                  <FaBookOpen className="text-sky-500" />
                  <span>Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ed.coursework.split(',').map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
                    >
                      {course.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
