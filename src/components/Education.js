import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.js";
import CottonLogo from './assets/cotton university logo.png';
import GauhatiLogo from './assets/gauhati univeristy logo.png';

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Cotton University",
    year: "2023-25",
    logo: CottonLogo,
    details:
      "Postgraduate degree with focus on advanced software engineering, algorithms, and full stack web development. Completed major projects and internships in web technologies at National Informatics Centre, Assam State Centre.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Gauhati University (Pragjyotish College)",
    year: "2020-23",
    logo: GauhatiLogo,
    details:
      "Undergraduate degree covering computer science fundamentals, programming, and database systems. Built a strong base in software development.",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and qualifications."
      className="py-24 section-gradient transition-colors duration-500"
    >
      <div className="grid gap-8 max-w-4xl mx-auto">
        {educations.map((ed, i) => (
          <motion.div
            key={ed.degree + ed.year}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="card p-8 transition-colors duration-500 flex items-center gap-6"
          >
            <img
              src={ed.logo}
              alt={ed.institution + " logo"}
              className="w-16 h-16 object-contain rounded-full shadow-md border border-gray-200 bg-white flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <div className="card-title font-bold text-xl mb-1">{ed.degree}</div>
              <div className="card-sub font-semibold mb-1">{ed.institution}</div>
              <div className="card-tag text-sm mb-2">{ed.year}</div>
              <div className="card-desc text-gray-300">{ed.details}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}