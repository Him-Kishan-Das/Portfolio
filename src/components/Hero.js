import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaBuilding,
  FaCode
} from 'react-icons/fa';
import { developerInfo } from '../utils/data.js';
import NICLogo from './assets/nic-logo.png';
import HKDLogo from './assets/HKD-removebg-preview.png';
import { sounds } from '../utils/soundEffects.js';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % developerInfo.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column: Intro & Action */}
          <div className="lg:col-span-7">
            {/* Status Pill with interactive hover */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 backdrop-blur-md mb-6 hover:border-sky-500/60 transition-all cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <img
                src={NICLogo}
                alt="NIC"
                className="h-3.5 w-auto object-contain bg-white px-1 py-0.5 rounded shadow-xs"
              />
              <span>Available for high-impact roles • {developerInfo.currentCompany}</span>
            </motion.div>

            {/* Title & Animated Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
                Hi, I'm <span className="text-gradient-rainbow">{developerInfo.name}</span>
              </h1>

              {/* Animated Role Cycler */}
              <div className="h-10 sm:h-12 flex items-center mb-6">
                <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mr-2.5">
                  I am a
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={developerInfo.roles[roleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400 border-b-2 border-sky-500/40 pb-0.5"
                  >
                    {developerInfo.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Intro Paragraph from Resume */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl font-normal">
                {developerInfo.bio}
              </p>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={() => sounds.playClick(600, 0.04)}
                className="btn-primary"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/Him-Kishan-Das-CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => sounds.playClick(650, 0.04)}
                className="btn-glass"
              >
                <FaDownload className="text-xs text-sky-500" />
                <span>Download Resume</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick(500, 0.03)}
                  className="p-3 rounded-full bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick(520, 0.03)}
                  className="p-3 rounded-full bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-sm"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href={developerInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick(540, 0.03)}
                  className="p-3 rounded-full bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all shadow-sm"
                  title="Twitter"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Interactive Developer Bento Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-300/80 dark:border-white/10 shadow-2xl p-6 sm:p-7 relative text-left"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Developer Header Bar */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-0.5 shadow-md flex items-center justify-center">
                    <img
                      src={HKDLogo}
                      alt="HKD"
                      className="w-full h-full object-contain filter invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {developerInfo.name}
                    </h3>
                    <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1.5">
                      <FaBuilding className="text-[10px]" />
                      <span>{developerInfo.currentCompany}</span>
                    </div>
                  </div>
                </div>

                <div className="w-14 h-9 bg-white rounded-xl p-1 border border-slate-200 shadow-xs flex items-center justify-center flex-shrink-0">
                  <img
                    src={NICLogo}
                    alt="NIC"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Bento Grid Info */}
              <div className="space-y-4 relative z-10 text-xs">
                {/* Academic Highlights */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider text-[10px]">
                    <FaGraduationCap className="text-sky-500" />
                    <span>Education Credentials</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium">
                    <span>Cotton University MCA</span>
                    <span className="font-bold text-sky-600 dark:text-sky-400">8.35 CGPA</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium">
                    <span>Gauhati University BCA</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">8.96 CGPA (1st Class)</span>
                  </div>
                </div>

                {/* Core Full-Stack Tech Pills */}
                <div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-2">
                    <FaCode className="text-purple-500" />
                    <span>Core Engineering Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Laravel', 'Inertia.js', 'React', 'Django', 'PostgreSQL', 'Metabase'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resume Production Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-center">
                    <div className="text-xl font-extrabold text-sky-600 dark:text-sky-400">6 Modules</div>
                    <div className="text-[10px] text-slate-600 dark:text-gray-300 font-medium mt-0.5">NIC Enterprise Systems</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <div className="text-xl font-extrabold text-purple-600 dark:text-purple-400">5 Apps</div>
                    <div className="text-[10px] text-slate-600 dark:text-gray-300 font-medium mt-0.5">Independent Web Apps</div>
                  </div>
                </div>

                {/* Availability Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-gray-400 border-t border-slate-200 dark:border-white/10">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Actively Open to Work</span>
                  </span>
                  <span>Guwahati, Assam</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
