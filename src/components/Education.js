import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Your University Name",
    year: "2023",
    details: "Graduated with strong focus on software development, algorithms, and modern web technologies. Key projects include XYZ."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Your University Name",
    year: "2020",
    details: "Foundations in computer science, programming, and mathematics."
  }
  // Add more as needed
];

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and qualifications."
    >
      <div className="grid">
        {educations.map((ed, i) => (
          <motion.div
            className="card"
            key={ed.degree + ed.year}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.08 }}
            style={{ padding: 24 }}
          >
            <div style={{ fontWeight: 700, fontSize: 20 }}>{ed.degree}</div>
            <div style={{ color: "var(--brand)", fontWeight: 600 }}>{ed.institution}</div>
            <div style={{ color: "var(--muted)", fontSize: 15, marginBottom: 4 }}>{ed.year}</div>
            <div style={{ color: "var(--text)" }}>{ed.details}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}