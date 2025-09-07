import React from "react";
import { motion } from "framer-motion";
import Section from "./Section.js";

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Your University Name",
    year: "2023",
    details:
      "Graduated with strong focus on software development, algorithms, and modern web technologies. Key projects include XYZ.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Your University Name",
    year: "2020",
    details: "Foundations in computer science, programming, and mathematics.",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and qualifications."
      className="py-24 my-24 transition-colors duration-500"
    >
      <div className="grid gap-8 max-w-4xl mx-auto">
        {educations.map((ed, i) => (
          <motion.div
            key={ed.degree + ed.year}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="card p-8 transition-colors duration-500 "
          >
            <div className="card-title font-bold text-xl mb-1">{ed.degree}</div>
            <div className="card-sub font-semibold mb-1">{ed.institution}</div>
            <div className="card-tag text-sm mb-2">{ed.year}</div>
            <div className="card-desc">{ed.details}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
