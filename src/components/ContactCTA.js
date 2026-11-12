import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import { developerInfo } from '../utils/data.js';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaDownload,
  FaGlobe,
  FaPaperPlane
} from 'react-icons/fa';

export default function ContactCTA() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(developerInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Ready to collaborate? Reach out directly via email, phone, or professional networks"
      className="py-20"
    >
      <div className="max-w-5xl mx-auto px-4 text-left">
        {/* Creative Hero Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 mb-10 border border-slate-200/80 dark:border-white/10 glass-card bg-gradient-to-br from-white/90 via-slate-50/70 to-sky-50/40 dark:from-[#070b19] dark:via-[#091124] dark:to-[#030611] shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              {/* Radar Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for High-Impact Software Engineering Roles</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                Let's build something <span className="text-gradient-rainbow">extraordinary</span> together.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                Whether you have an enterprise opportunity, full-stack opening, e-governance project, or simply want to connect, feel free to drop a direct line.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <a
                href={`mailto:${developerInfo.email}`}
                className="btn-primary py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <FaPaperPlane className="text-xs" />
                <span>Send Direct Email</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/Him-Kishan-Das-CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-glass py-3 px-5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <FaDownload className="text-xs text-sky-500" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: Direct Communication Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Primary Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 transition-all cursor-pointer text-xs flex items-center gap-1.5"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <FaCheck className="text-emerald-500 text-xs" />
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xs" />
                      <span className="text-[11px] font-medium">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
                Email Address
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white break-all mb-2">
                {developerInfo.email}
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Direct inbox checked multiple times daily.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-white/10">
              <a
                href={`mailto:${developerInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
              >
                <span>Compose Message</span>
                <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  <FaPhoneAlt />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 transition-all cursor-pointer text-xs flex items-center gap-1.5"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <FaCheck className="text-emerald-500 text-xs" />
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xs" />
                      <span className="text-[11px] font-medium">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                Phone / Mobile
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {developerInfo.phone}
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Available for phone and instant messaging discussions.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-white/10">
              <a
                href={`tel:${developerInfo.phone}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                <span>Make a Call</span>
                <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Location / Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Assam, India
                </span>
              </div>

              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                Location
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 leading-relaxed">
                {developerInfo.address}
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-normal">
                Guwahati, Assam, India. Pincode: 781012.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-white/10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Timezone: IST (UTC+05:30)</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Network & Social Channels Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-lg">
              <FaGlobe />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Professional Online Profiles
              </div>
              <div className="text-xs text-slate-600 dark:text-gray-400">
                Connect and inspect live repositories across developer platforms
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-all text-xs font-bold shadow-xs cursor-pointer"
            >
              <FaGithub className="text-base" />
              <span>GitHub</span>
            </a>

            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-all text-xs font-bold shadow-xs cursor-pointer"
            >
              <FaLinkedin className="text-base text-sky-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={developerInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 transition-all text-xs font-bold shadow-xs cursor-pointer"
            >
              <FaTwitter className="text-base text-sky-400" />
              <span>Twitter</span>
            </a>

            <a
              href={developerInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all text-xs font-bold shadow-xs cursor-pointer"
            >
              <FaGlobe className="text-base text-emerald-500" />
              <span>Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
