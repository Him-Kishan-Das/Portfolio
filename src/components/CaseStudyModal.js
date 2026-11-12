import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
  FaLayerGroup
} from 'react-icons/fa';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#070b19] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal Header Banner */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all cursor-pointer"
              aria-label="Close case study modal"
            >
              <FaTimes className="text-sm" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/20 backdrop-blur-md">
                {project.organization}
              </span>
              {project.stars && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  ⭐ {project.stars} Stars
                </span>
              )}
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-normal max-w-2xl">
              {project.outcome}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* 1. Problem & User Context */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                <FaShieldAlt />
                <span>Problem & User Context</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-gray-200 leading-relaxed font-normal bg-slate-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                {caseStudy.problem}
              </p>
            </div>

            {/* 2. Constraints & Tradeoffs */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <FaServer />
                <span>Constraints & Engineering Tradeoffs</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-gray-200 leading-relaxed font-normal bg-slate-50 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200 dark:border-white/5">
                {caseStudy.constraints}
              </p>
            </div>

            {/* 3. Architecture & Data-Flow Diagram Area */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
                <FaLayerGroup />
                <span>System Architecture & Data Flow</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {caseStudy.architecture.map((arch, idx) => (
                  <div
                    key={arch.layer}
                    className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/[0.03] dark:to-white/[0.01] border border-slate-200 dark:border-white/10 relative"
                  >
                    <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-gray-400 tracking-wider mb-1">
                      Tier 0{idx + 1}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      {arch.layer}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                      {arch.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Results & Quantifiable Metrics */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
                <FaChartLine />
                <span>Results & Quantifiable Metrics</span>
              </div>

              <div className="mb-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                {caseStudy.metrics}
              </div>

              <ul className="space-y-2.5">
                {caseStudy.results.map((res, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-gray-200"
                  >
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0 text-xs" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Tech Stack Tags */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Technologies & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="p-6 bg-slate-100/80 dark:bg-[#050814]/90 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass text-xs"
                >
                  <FaGithub />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Close Case Study (Esc)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

