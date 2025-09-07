import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section.js'

// Import your images correctly
import FreeCodeCampCert from './assets/freecodecamp.jpeg'
import HackerRankCert from './assets/hackerRank.jpeg'
import GeeksForGeeksCert from './assets/geeksforgeeks.jpeg'

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    image: FreeCodeCampCert,
    link: "https://www.freecodecamp.org/certification/him_kishan_das/responsive-web-design"
  },
  {
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    year: "2023",
    image: HackerRankCert,
    link: "https://www.hackerrank.com/certificates/f2dedcab1e14"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    image: FreeCodeCampCert,
    link: "https://www.freecodecamp.org/certification/him_kishan_das/javascript-algorithms-and-data-structures"
  },
  {
    title: "HTML Workshop",
    issuer: "GeeksforGeeks",
    year: "2022",
    image: GeeksForGeeksCert,
    link: "https://www.geeksforgeeks.org/certificate/e7fbf8cc922c4a3099918222f7c4af3f?utm_source=socials&utm_medium=cc_link"
  },
]

export default function Certification() {
  return (
    <Section
      id="certification"
      title="Certifications"
      subtitle="Professional courses and credentials."
      className="transition-colors duration-500 section-gradient"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => {
            const card = (
              <motion.div
                key={cert.title + cert.year}
                className="bg-white dark:bg-[#23263a] text-gray-900 dark:text-gray-100 rounded-xl shadow-lg flex flex-col transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl w-full cursor-pointer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.13, duration: 0.5, type: "spring" }}
              >
                <div className="w-full h-28 rounded-t-xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center px-2 py-6 text-center">
                  <div className="text-lg font-semibold text-black dark:text-gray-100 mb-0">
                    {cert.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</div>
                  <div className="text-xs text-gray-400 mt-1">{cert.year}</div>
                </div>
              </motion.div>
            )
            return cert.link ? (
              <a
                key={cert.title + cert.year}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                title={cert.title + " - " + cert.issuer}
              >
                {card}
              </a>
            ) : (
              card
            )
          })}
        </div>
      </div>
    </Section>
  )
}