import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section.js';
import { enterpriseProjects, independentProjects } from '../utils/data.js';
import CaseStudyModal from './CaseStudyModal.js';
import NICLogo from './assets/nic-logo.png';
import { sounds } from '../utils/soundEffects.js';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBookOpen,
  FaStar,
  FaCheck,
  FaCode,
  FaLayerGroup
} from 'react-icons/fa';

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState('enterprise'); // 'enterprise' | 'independent' | 'all'
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects =
    activeTab === 'enterprise'
      ? enterpriseProjects
      : activeTab === 'independent'
      ? independentProjects
      : [...enterpriseProjects, ...independentProjects];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Enterprise & E-Governance systems developed at NIC Assam State Centre and independent full-stack web applications"
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Toggle Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => {
              sounds.playClick(580, 0.03);
              setActiveTab('enterprise');
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === 'enterprise'
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            <img
              src={NICLogo}
              alt="NIC"
              className="h-3.5 w-auto object-contain bg-white px-1 py-0.5 rounded shadow-xs"
            />
            <span>NIC Enterprise Projects ({enterpriseProjects.length})</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(600, 0.03);
              setActiveTab('independent');
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === 'independent'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            <FaCode />
            <span>Independent Projects ({independentProjects.length})</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick(620, 0.03);
              setActiveTab('all');
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            <FaLayerGroup />
            <span>All Resume Projects ({enterpriseProjects.length + independentProjects.length})</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:shadow-2xl hover:border-sky-500/40 transition-all duration-300 group"
              >
                {/* IMAGE TOP: Mockup Banner */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-[10px] text-white/80 font-mono ml-1.5 font-medium">
                        {project.id}.gov.in
                      </span>
                    </div>

                    {project.stars && (
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-200 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-300/30">
                        <FaStar className="text-amber-400 text-[10px]" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-black/30 backdrop-blur-md p-2.5 rounded-xl border border-white/15 my-auto">
                    <div className="text-xs font-semibold text-white truncate">
                      {project.title}
                    </div>
                    <div className="text-[10px] text-sky-200 font-mono mt-0.5">
                      {project.organization}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-medium text-[10px]">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[11px] text-white underline underline-offset-2 hover:text-sky-200 transition-colors font-medium cursor-pointer"
                    >
                      Case Study →
                    </button>
                  </div>
                </div>

                {/* CONTENT BOTTOM */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-normal mb-3">
                      {project.description}
                    </p>

                    {/* Outcome */}
                    <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-medium text-sky-800 dark:text-sky-300 flex items-start gap-1.5">
                      <span className="p-0.5 rounded-full bg-sky-500 text-white text-[9px] mt-0.5">
                        <FaCheck />
                      </span>
                      <span className="text-[11px] leading-snug">
                        <strong>Outcome:</strong> {project.outcome}
                      </span>
                    </div>
                  </div>

                  {/* Tools / Tech Tags & Actions */}
                  <div className="space-y-3 pt-3 border-t border-slate-200/80 dark:border-white/10">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        onClick={() => {
                          sounds.playClick(650, 0.04);
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-all cursor-pointer"
                      >
                        <FaBookOpen className="text-[10px]" />
                        <span>Case Study</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
                            title="GitHub Source"
                            aria-label={`${project.title} GitHub Source`}
                          >
                            <FaGithub className="text-xs" />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-white/10 transition-colors"
                            title="Live Demo / Portal"
                            aria-label={`${project.title} Portal`}
                          >
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Case Study View */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Section>
  );
}
