import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import { projects } from '../utils/data.js';

const cardVariants = {
  off: { opacity: 0, y: 24, scale: 0.98 },
  on: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.5 }
  })
};

// Optionally, truncate description to a max word count
function truncateWords(str, maxWords) {
  if (!str) return '';
  const words = str.split(' ');
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(' ') + '...';
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Some of my full-stack projects"
      className="py-24 section-gradient overflow-hidden"
    >
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-8 
        place-items-stretch
        items-stretch
        pb-24
      ">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="card project-card flex flex-col h-full p-7 min-h-[340px] hover:shadow-2xl border-t-4 border-transparent hover:border-blue-400 transition-all duration-300"
            custom={i}
            initial="off"
            whileInView="on"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <h4 className="project-title text-2xl font-extrabold mb-2 ">
              {p.title}
            </h4>
            <p className="project-desc mb-4 ">{truncateWords(p.description, 28)}</p>
            <div className="project-tags flex flex-wrap gap-2 mb-4 ">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="bg-gradient-to-tr from-blue-100 to-pink-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                >
                  #{t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto justify-center">
              <a
                className="px-5 py-2 rounded-lg font-bold transition
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg
                  hover:from-pink-500 hover:to-yellow-500 hover:scale-105"
                href={p.source}
                target="_blank"
                rel="noopener"
              >
                GitHub Repo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}