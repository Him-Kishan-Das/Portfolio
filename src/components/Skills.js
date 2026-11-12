import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section.js';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiInertia,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiExpress,
  SiDjango,
  SiNodedotjs,
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
import { FaCode, FaServer, FaDatabase, FaTools, FaNetworkWired, FaProjectDiagram } from 'react-icons/fa';
import { sounds } from '../utils/soundEffects.js';

// Resume contextual mapping for each skill
const skillContextMap = {
  'React': 'Applied across NIC Auto UI Platform, PNRD Portal modules, SSR Form Engine, and Expense Tracker UI.',
  'Inertia.js': 'Employed in NIC Vendor & Bill Management System and the modern Expense Tracker SPA architecture.',
  'JavaScript': 'Core scripting across all NIC enterprise applications, Coder’s Mate, and dynamic DOM engines.',
  'HTML / HTML5': 'Semantic structure across all web applications, Exploratives, and Coder’s Mate forum.',
  'CSS / CSS3': 'Custom responsive styling, layouts, and animations across all production web applications.',
  'PHP': 'Core backend development language used for NIC Laravel modules, CodeIgniter, and Coder’s Mate forum.',
  'Laravel': 'Primary framework for NIC enterprise architectures: Auto UI, Vendor & Bill Mgmt, Single Sign-On (SSO), and Payroll.',
  'CodeIgniter': 'Lightweight MVC PHP framework experience listed on resume for agile web applications.',
  'Express': 'Backend routing and SSR middleware used in Server-Side Rendering UI Form Generation platform.',
  'Django': 'Powers the Exploratives social platform and the CRUD-driven TodoApp task manager.',
  'Node.js': 'High-performance JavaScript runtime powering the SSR Form Generation engine.',
  'REST API': 'Architected secure JSON REST APIs across NIC e-governance systems and Auto UI form compilers.',
  'PostgreSQL': 'Primary relational database at NIC Assam State Centre for relational schema modeling, RBAC, and Metabase queries.',
  'MongoDB': 'Document storage utilized for flexible JSON schemas in Server-Side Rendering UI Form Generation.',
  'MySQL': 'Relational database management for Expense Tracker ledger and Coder’s Mate discussion platform.',
  'SQLite': 'Embedded database engine utilized for lightweight storage in Django Exploratives and TodoApp.',
  'Metabase': 'Designed interactive analytical dashboards at NIC Assam State Centre to visualize departmental throughput.',
  'Git': 'Version control system managing repositories, commits, feature branches, and collaborative workflows.',
  'GitHub': 'Repository hosting, open-source maintainership, code reviews, and project collaboration.',
  'VS Code': 'Primary development environment configured with extensions, linting, and debugging pipelines.',
  'Postman': 'API testing, mock servers, automated testing suites, and REST endpoint payload validation.',
  'Figma': 'UI/UX wireframing, component mockups, and layout design before software implementation.'
};

const categories = [
  {
    id: 'all',
    label: 'All Skills',
    icon: <FaCode />
  },
  {
    id: 'frontend',
    label: 'Front-End',
    icon: <FaCode />,
    items: [
      { name: 'React', icon: <SiReact className="text-sky-400" /> },
      { name: 'Inertia.js', icon: <SiInertia className="text-purple-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'HTML / HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS / CSS3', icon: <SiCss3 className="text-blue-500" /> }
    ]
  },
  {
    id: 'backend',
    label: 'Back-End',
    icon: <FaServer />,
    items: [
      { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
      { name: 'PHP', icon: <SiPhp className="text-indigo-400" /> },
      { name: 'Django', icon: <SiDjango className="text-emerald-700 dark:text-emerald-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-emerald-500" /> },
      { name: 'Express', icon: <SiExpress className="text-slate-700 dark:text-slate-200" /> },
      { name: 'CodeIgniter', icon: <SiCodeigniter className="text-orange-600" /> },
      { name: 'REST API', icon: <FaNetworkWired className="text-sky-500" /> }
    ]
  },
  {
    id: 'databases',
    label: 'Databases & Analytics',
    icon: <FaDatabase />,
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-600" /> },
      { name: 'Metabase', icon: <SiMetabase className="text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-sky-500" /> }
    ]
  },
  {
    id: 'tools',
    label: 'Version Control & Tools',
    icon: <FaTools />,
    items: [
      { name: 'Git', icon: <SiGit className="text-orange-500" /> },
      { name: 'GitHub', icon: <SiGithub className="text-slate-900 dark:text-white" /> },
      { name: 'VS Code', icon: <VscCode className="text-blue-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [inspectedSkill, setInspectedSkill] = useState('Laravel');

  const visibleCategories =
    activeTab === 'all'
      ? categories.filter((c) => c.id !== 'all')
      : categories.filter((c) => c.id === activeTab);

  const handleSelectSkill = (name) => {
    sounds.playClick(620, 0.03);
    setInspectedSkill(name);
  };

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Interactive technology matrix with real-time resume project mappings"
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick(580, 0.03);
                setActiveTab(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-sky-500 text-white shadow-md scale-105'
                  : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Live Skill Context Inspector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 p-5 sm:p-6 rounded-3xl glass-card border border-sky-500/40 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-indigo-500/10 shadow-lg text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              <FaProjectDiagram className="text-sm" />
              <span>Interactive Skill Inspector: <strong>{inspectedSkill}</strong></span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium">
              Click any skill below to inspect its resume application
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-white font-medium leading-relaxed">
            {skillContextMap[inspectedSkill] || 'Core technology actively applied across development workflows.'}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-8 text-left">
          {visibleCategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="text-sky-500 text-base">{cat.icon}</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cat.label}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  {cat.items.length} Technologies
                </span>
              </div>

              {/* Icon Grid with Interactive Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                {cat.items.map((item) => {
                  const isSelected = inspectedSkill === item.name;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleSelectSkill(item.name)}
                      onMouseEnter={() => sounds.playHover()}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className={`p-4 rounded-2xl transition-all flex flex-col items-center justify-center text-center group cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500/15 border-2 border-sky-500 shadow-md scale-105'
                          : 'bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 shadow-xs'
                      }`}
                      title={`Click to view resume applications for ${item.name}`}
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className={`text-xs font-semibold transition-colors ${
                        isSelected
                          ? 'text-sky-600 dark:text-sky-400 font-bold'
                          : 'text-slate-800 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-sky-400'
                      }`}>
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
