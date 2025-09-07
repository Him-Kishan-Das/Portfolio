import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiJavascript, SiTypescript, SiPhp, SiLaravel, SiCodeigniter, SiInertia,
  SiDjango, SiBootstrap, SiTailwindcss, SiPostman, SiHtml5, SiCss3, SiGithub
} from 'react-icons/si'
import { MdApi } from 'react-icons/md'
import Section from './Section.js'

const techs = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL / SQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "PHP", icon: <SiPhp className="text-violet-700" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-orange-600" /> },
  { name: "Inertia.js", icon: <SiInertia className="text-indigo-600" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "REST API", icon: <MdApi className="text-emerald-700" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
]

export default function TechStack() {
  return (
    <Section
      id="techstack"
      title="Tech Stack"
      subtitle="Technologies I love working with"
      className="bg-[#101213] py-24"
    >
      <div className="
        max-w-6xl mx-auto px-4
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        gap-6
        place-items-center
        pb-12
      ">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 18, scale: 0.84 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.04, type: "spring", duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{
              scale: 1.12,
              rotate: [-2, 2, -2],
              transition: { yoyo: Infinity, duration: 0.6 }
            }}
            className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="text-5xl mb-2 group-hover:drop-shadow-lg transition-all">
              {tech.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 mt-1 text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}