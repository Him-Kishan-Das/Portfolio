import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section.js'
import FreeCodeCampLogo from './assets/freeCodeCamp.jpg'

const certifications = [
  {
    title: "Responsive Web Design - freeCodeCamp",
    issuer: "freeCodeCamp",
    year: "2024",
    image: FreeCodeCampLogo,
    link: "https://freecodecamp.org/certification/your-link"
  },
  {
    title: "SQL (Basic) Certificate - HackerRank",
    issuer: "HackerRank",
    year: "2023",
    image: "/logos/hackerrank.png",
    link: "https://www.hackerrank.com/cert/your-link"
  },
  {
    title: "HTML Workshop - GeeksforGeeks",
    issuer: "GeeksforGeeks",
    year: "2022",
    image: "/logos/gfg.png"
  },
]

export default function Certification() {
  return (
    <Section
      id="certification"
      title="Certifications"
      subtitle="Professional courses and credentials."
      className="my-36 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title + cert.year}
              className="bg-white dark:bg-[#23263a] text-gray-900 dark:text-gray-100 rounded-xl shadow-lg flex flex-col transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl w-full"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.13, duration: 0.5, type: "spring" }}
            >
              <div className="w-full h-28 rounded-t-xl overflow-hidden bg-black">
                <img
                  src={cert.image}
                  alt={cert.issuer}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center px-2 py-6 text-center">
                <div className="text-lg font-semibold text-black dark:text-gray-100 mb-0">
                  {cert.link
                    ? <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{cert.title}</a>
                    : cert.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}