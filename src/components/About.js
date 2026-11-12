import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import NICLogo from './assets/nic-logo.png';
import { developerInfo } from '../utils/data.js';
import {
  FaMapMarkerAlt,
  FaLightbulb,
  FaLayerGroup,
  FaBullseye,
  FaGraduationCap
} from 'react-icons/fa';

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Full-Stack Developer profile, credentials, and engineering background from my resume"
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Summary & Career Goal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
          >
            <div>
              {/* Active Role Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <img
                    src={NICLogo}
                    alt="NIC Logo"
                    className="h-4 w-auto object-contain bg-white px-1.5 py-0.5 rounded shadow-xs"
                  />
                  <span>{developerInfo.currentRole} at {developerInfo.currentCompany}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10">
                  <FaMapMarkerAlt className="text-rose-500 text-xs" />
                  <span>{developerInfo.location}</span>
                </div>
              </div>

              {/* Title & Resume Summary */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                Engineering sustainable and scalable web solutions
              </h3>

              <p className="text-base text-slate-700 dark:text-gray-300 leading-relaxed font-normal mb-5">
                {developerInfo.bio}
              </p>

              {/* Education Quick Guide Callout */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  <FaGraduationCap />
                  <span>Academic Qualifications (Resume Quick Guide)</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 space-y-1">
                  <div>• <strong>MCA (Master of Computer Applications)</strong>, Cotton University (2023–2025) — <strong>8.35 CGPA</strong></div>
                  <div>• <strong>BCA (Bachelor of Computer Applications)</strong>, Gauhati University (2020–2023) — <strong>8.96 CGPA</strong></div>
                </div>
              </div>

              {/* Career Goal from Resume */}
              <div className="p-4 rounded-2xl bg-sky-500/10 dark:bg-sky-500/5 border border-sky-500/20 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 text-base flex-shrink-0 mt-0.5">
                  <FaBullseye />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider mb-1">
                    Career Goal
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                    {developerInfo.careerGoal}
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 mt-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
              <FaLightbulb className="text-amber-500 flex-shrink-0" />
              <span>{developerInfo.funFact}</span>
            </div>
          </motion.div>

          {/* Right Column: Key Stats Bento from Resume */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {developerInfo.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="glass-card p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-center items-center text-center hover:border-sky-500/40 transition-all shadow-sm"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gradient-rainbow mb-2 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-gray-300">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Core Tech Stack Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card p-5 rounded-3xl border border-slate-200/80 dark:border-white/10 text-left"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                <FaLayerGroup className="text-sky-500" />
                <span>Core Full-Stack Ecosystem</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'Inertia.js', 'React', 'Django', 'PostgreSQL', 'Metabase', 'REST API', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
