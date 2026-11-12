import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { developerInfo } from '../utils/data.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100/70 dark:bg-[#02040a] text-slate-600 dark:text-gray-400 py-16 relative z-10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
              {developerInfo.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-md font-normal leading-relaxed">
              {developerInfo.currentRole} at {developerInfo.currentCompany} • {developerInfo.location}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href={developerInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all shadow-sm"
                title="Twitter"
                aria-label="Twitter"
              >
                <FaTwitter className="text-base" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <FaArrowUp className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 dark:text-gray-500">
          <div>
            © {new Date().getFullYear()} Him Kishan Das. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Portfolio • React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
