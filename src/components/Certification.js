import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import FreeCodeCampCert from './assets/freeCodeCamp.jpg';
import HackerRankCert from './assets/hackerRank.jpeg';
import { certificationsList } from '../utils/data.js';
import { FaExternalLinkAlt, FaClock } from 'react-icons/fa';

const certImages = {
  FreeCodeCamp: FreeCodeCampCert,
  HackerRank: HackerRankCert
};

export default function Certification() {
  return (
    <Section
      id="certification"
      title="Licenses & Certifications"
      subtitle="Accredited technical certifications from FreeCodeCamp and HackerRank as listed on my resume"
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certificationsList.map((cert, i) => {
            const imageSrc = certImages[cert.issuer] || FreeCodeCampCert;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-white/10 hover:border-sky-500/50 transition-all duration-300"
              >
                <div>
                  <div className="w-full h-36 bg-slate-100 dark:bg-black/50 relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-200 dark:border-white/10">
                    <img
                      src={imageSrc}
                      alt={cert.issuer}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                        {cert.issuer}
                      </span>
                      {cert.details && (
                        <>
                          <span className="text-slate-400 text-xs">•</span>
                          <span className="text-[11px] text-slate-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                            <FaClock className="text-[10px] text-purple-500" />
                            {cert.details}
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-gray-200 transition-all shadow-sm"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-[10px] text-sky-500" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
