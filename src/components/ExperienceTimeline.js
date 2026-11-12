import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import NICLogo from './assets/nic-logo.png';
import { experiencesTimeline } from '../utils/data.js';
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      title="Experience Timeline"
      subtitle="Production software engineering roles, enterprise impact, and technologies at NIC Assam State Centre"
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4 text-left">
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experiencesTimeline.map((item, idx) => {
            const isCurrent = item.period.includes('Present');

            return (
              <motion.div
                key={item.role + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Vertical Timeline Node Marker */}
                <div
                  className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-[var(--bg)] transition-transform group-hover:scale-125 ${
                    isCurrent
                      ? 'bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.8)]'
                      : 'bg-purple-500'
                  }`}
                />

                {/* Timeline Card */}
                <div
                  className={`glass-card p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                    isCurrent
                      ? 'border-sky-500/50 dark:border-sky-500/40'
                      : 'border-slate-200/80 dark:border-white/10'
                  }`}
                >
                  {/* Top Bar with Role & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Official NIC Logo Container */}
                      <div className="w-16 h-12 rounded-xl p-1.5 bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                        <img
                          src={NICLogo}
                          alt="National Informatics Centre Logo"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                          <FaBuilding className="text-xs" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 font-medium">
                        <FaCalendarAlt className="text-sky-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5 font-medium">
                        <FaMapMarkerAlt className="text-rose-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
                    <div className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
