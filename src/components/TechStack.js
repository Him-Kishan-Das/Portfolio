import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import { technologies } from '../utils/data.js';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiReact,
  SiInertia,
  SiLaravel,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiCodeigniter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiMetabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  PHP: <SiPhp className="text-indigo-500" />,
  React: <SiReact className="text-sky-500" />,
  'Inertia.js': <SiInertia className="text-purple-500" />,
  Laravel: <SiLaravel className="text-red-500" />,
  Django: <SiDjango className="text-emerald-500" />,
  'Node.js': <SiNodedotjs className="text-green-500" />,
  Express: <SiExpress className="text-slate-600 dark:text-gray-300" />,
  CodeIgniter: <SiCodeigniter className="text-orange-600" />,
  PostgreSQL: <SiPostgresql className="text-sky-600" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  MySQL: <SiMysql className="text-blue-600" />,
  SQLite: <SiSqlite className="text-sky-500" />,
  Metabase: <SiMetabase className="text-blue-500" />,
  Git: <SiGit className="text-orange-500" />,
  GitHub: <SiGithub className="text-slate-900 dark:text-white" />,
  VSCode: <VscCode className="text-blue-500" />,
  Postman: <SiPostman className="text-orange-500" />,
  Figma: <SiFigma className="text-pink-500" />
};

export default function TechStack() {
  return (
    <Section
      id="technologies"
      title="Technologies"
      subtitle="Languages, frameworks, databases, and developer tools from my resume"
      className="py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Languages & Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/10">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Languages & Frameworks
              </h4>
              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                {technologies.languagesAndFrameworks.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.languagesAndFrameworks.map((name) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 transition-all flex flex-col items-center justify-center text-center cursor-default"
                >
                  <div className="text-2xl sm:text-3xl mb-1.5">
                    {iconMap[name]}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-gray-200">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/10">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Databases & Tools
              </h4>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                {technologies.databasesAndTools.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.databasesAndTools.map((name) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 transition-all flex flex-col items-center justify-center text-center cursor-default"
                >
                  <div className="text-2xl sm:text-3xl mb-1.5">
                    {iconMap[name]}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-gray-200">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
