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

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Projects"
      subtitle="Interactive builds showcasing React, animations, and performance."
    >
      <div className="grid grid-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="card project-card"
            custom={i}
            initial="off"
            whileInView="on"
            viewport={{ once: true, margin: '-80px' }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="project-thumb"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
            />
            <h4 className="project-title">{p.title}</h4>
            <p style={{ color: 'var(--muted)', margin: 0 }}>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <a className="btn btn-outline" href={p.demo} target="_blank" rel="noopener">Live</a>
              <a className="btn btn-outline" href={p.source} target="_blank" rel="noopener">Code</a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}