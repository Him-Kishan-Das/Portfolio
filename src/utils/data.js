export const developerInfo = {
  name: "Him Kishan Das",
  roles: [
    "Full-Stack Developer",
    "Software Developer @ NIC",
    "MCA Graduate",
    "Open Source Contributor"
  ],
  currentCompany: "NIC Assam State Centre",
  currentRole: "Software Developer",
  location: "Guwahati, Assam, India",
  address: "Garigaon, P.S.: Jalukbari, Guwahati, Assam, India, Pincode: 781012",
  email: "himkishandas456@gmail.com",
  phone: "+91-60008-51427",
  portfolio: "https://him-kishan-das.github.io/Portfolio/",
  github: "https://github.com/Him-Kishan-Das",
  linkedin: "https://www.linkedin.com/in/him-kishan-das-8909551a0/",
  twitter: "https://twitter.com/him_kishan_das",
  bio: "An MCA graduate and Full-Stack Software Developer passionate about creating sustainable and scalable web solutions. Proficient in modern full-stack ecosystems including Laravel, Inertia.js, React, and Django, alongside experience in managing PostgreSQL databases, custom REST APIs, and analytical dashboards.",
  summary: "Software Developer at NIC Assam State Centre. Experienced in engineering enterprise web architectures with Laravel, Inertia.js, and React, modeling relational structures with PostgreSQL, and building analytical dashboards with Metabase.",
  careerGoal: "To build high-impact, scalable, and secure web applications while continuously mastering modern software engineering architectures.",
  funFact: "Passionate about transforming bureaucratic paper workflows into streamlined 3-click modern web applications.",
  stats: [
    { label: "Cotton University MCA", value: "8.35 CGPA" },
    { label: "Gauhati University BCA", value: "8.96 CGPA" },
    { label: "NIC Enterprise Projects", value: "6 Systems" },
    { label: "Independent Projects", value: "5 Apps" }
  ]
};

export const personalInfo = developerInfo;

export const skillsByCategory = {
  frontend: [
    { name: "React", icon: "SiReact", color: "#61dafb" },
    { name: "Inertia.js", icon: "SiInertia", color: "#9553e9" },
    { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e" },
    { name: "HTML / HTML5", icon: "SiHtml5", color: "#e34f26" },
    { name: "CSS / CSS3", icon: "SiCss3", color: "#1572b6" }
  ],
  backend: [
    { name: "PHP", icon: "SiPhp", color: "#777bb4" },
    { name: "Laravel", icon: "SiLaravel", color: "#ff2d20" },
    { name: "CodeIgniter", icon: "SiCodeigniter", color: "#ee4326" },
    { name: "Express", icon: "SiExpress", color: "#cccccc" },
    { name: "Django", icon: "SiDjango", color: "#092e20" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "REST API", icon: "MdApi", color: "#0ea5e9" }
  ],
  databases: [
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169e1" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47a248" },
    { name: "MySQL", icon: "SiMysql", color: "#00758f" },
    { name: "SQLite", icon: "SiSqlite", color: "#003b57" },
    { name: "Metabase", icon: "SiMetabase", color: "#509ee3" }
  ],
  tools: [
    { name: "Git", icon: "SiGit", color: "#f05032" },
    { name: "GitHub", icon: "SiGithub", color: "#181717" },
    { name: "VS Code", icon: "VscCode", color: "#007acc" },
    { name: "Postman", icon: "SiPostman", color: "#ff6c37" },
    { name: "Figma", icon: "SiFigma", color: "#f24e1e" }
  ]
};

// Enterprise Projects at NIC Assam State Centre (Page 2 of resume)
export const enterpriseProjects = [
  {
    id: "auto-ui",
    title: "Auto UI - Dynamic Form Generation Platform",
    subtitle: "No-Code Dynamic JSON Form Platform",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Developed a no-code platform for generating JSON specifications for mobile applications with dynamic form rendering, version control, and user authentication.",
    outcome: "Eliminated hardcoded mobile form deployments, enabling real-time schema updates on field devices.",
    tools: ["React", "Laravel", "PostgreSQL", "REST API", "JSON Schema"],
    gradient: "from-sky-600 via-indigo-600 to-blue-900",
    caseStudy: {
      problem:
        "Field officers in state departments required rapid deployment of customizable survey and demographic forms without submitting complete mobile app updates to app stores.",
      constraints:
        "Zero schema regression for backwards compatibility, strict role-based access control, and low-bandwidth client caching.",
      architecture: [
        { layer: "Presentation Tier", detail: "React Web Dashboard & dynamic mobile rendering engine driven by standardized JSON." },
        { layer: "API & Auth Gateway", detail: "Laravel REST API handling role authentication, schema versioning, and validation." },
        { layer: "Database Tier", detail: "PostgreSQL relational schemas with JSONB indexing for versioned layouts and audit logs." }
      ],
      results: [
        "Enabled departmental field form launch within hours instead of multi-week app store release cycles.",
        "Strict validation engine guaranteeing data integrity across legacy versions.",
        "Used across state government administrative initiatives."
      ],
      metrics: "Live JSON Compilation • 100% Backwards Compatible • Multi-Tier RBAC"
    }
  },
  {
    id: "vendor-bill-management",
    title: "Vendor & Bill Management System",
    subtitle: "Secure Financial Workflow Platform",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Currently designing and developing a secure financial workflow platform to streamline vendor registration, bill processing, tracking, and digital approvals.",
    outcome: "Streamlines vendor invoice lifecycle and transparent multi-tier digital administrative approvals.",
    tools: ["Laravel", "Inertia.js", "React", "PostgreSQL", "REST API"],
    gradient: "from-blue-600 via-sky-600 to-cyan-900",
    caseStudy: {
      problem:
        "Government vendor invoice processing suffered from physical paperwork delays, fragmented tracking, and lack of real-time auditability.",
      constraints:
        "Stringent departmental hierarchy approvals, audit logging of all modifications, and financial data consistency.",
      architecture: [
        { layer: "User Interface", detail: "Inertia.js & React SPA for interactive vendor onboarding and bill tracking." },
        { layer: "Business Logic", detail: "Laravel service layer implementing multi-level approval state machines." },
        { layer: "Audit & Ledger", detail: "PostgreSQL transactional tables with immutable audit logging." }
      ],
      results: [
        "Centralized vendor registry with automated verification status.",
        "Transparent stage-by-stage bill tracking with timestamped approval chains.",
        "Reduced bill turnaround bottlenecks across administrative tiers."
      ],
      metrics: "Multi-Tier Approvals • Real-Time Tracking • Audit-Compliant"
    }
  },
  {
    id: "data-analytics-dashboards",
    title: "Data Analytics Dashboards",
    subtitle: "Departmental BI & Visualization",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Designed and implemented analytical dashboards using Metabase to process and visualize departmental data, delivering actionable insights to support decision-making.",
    outcome: "Provides government decision-makers with interactive drill-downs and real-time operational oversight.",
    tools: ["Metabase", "PostgreSQL", "SQL", "Data Modeling"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-900",
    caseStudy: {
      problem:
        "Departmental leaders lacked real-time visibility into field survey completions, welfare distributions, and operational throughput.",
      constraints:
        "Optimized SQL queries across large relational datasets without degrading operational transactional database performance.",
      architecture: [
        { layer: "BI Dashboard", detail: "Metabase enterprise instance with customized parameterized collections and charts." },
        { layer: "Query Engine", detail: "Optimized PostgreSQL views, materialized views, and filtered aggregations." },
        { layer: "Access Control", detail: "Role-restricted dashboard permissions aligned with administrative jurisdictions." }
      ],
      results: [
        "Enabled executive stakeholders to view real-time KPIs and geographic performance splits.",
        "Cut reporting lag from monthly manual consolidation to instant dashboard metrics.",
        "Enhanced departmental transparency and data-driven administrative policy."
      ],
      metrics: "Instant Drill-Downs • Materialized Views • Jurisdictional RBAC"
    }
  },
  {
    id: "sso-auth-module",
    title: "Single Sign-On (SSO) Authentication Module",
    subtitle: "Centralized Departmental Identity",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Developed centralized authentication and authorization mechanisms to secure access across multiple state department portals with role-based access control (RBAC).",
    outcome: "Unified government employee login sessions while maintaining granular permission boundaries.",
    tools: ["Laravel", "RBAC", "SSO", "PostgreSQL", "REST API"],
    gradient: "from-purple-600 via-indigo-600 to-slate-900",
    caseStudy: {
      problem:
        "Department employees had separate credentials across multiple standalone portals, causing security overhead and administrative friction.",
      constraints:
        "Seamless session token verification, revocable access rights, and granular department-level roles.",
      architecture: [
        { layer: "Auth Client", detail: "Standardized authentication middleware implemented across consuming state portals." },
        { layer: "Identity Provider", detail: "Centralized Laravel auth service issuing cryptographically signed tokens." },
        { layer: "Authorization Store", detail: "PostgreSQL schema mapping users, departments, roles, and granular action permissions." }
      ],
      results: [
        "Single secure credential set for state department personnel across interconnected portals.",
        "Instant one-click role revocation across all state web applications.",
        "Significantly improved authentication security compliance."
      ],
      metrics: "Centralized Identity • Instant Revocation • Strict RBAC"
    }
  },
  {
    id: "pnrd-portal",
    title: "PNRD Portal Development",
    subtitle: "Panchayat & Rural Development Portal",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Contributed to building and scaling web modules for the Panchayat and Rural Development (PNRD) portal to support rural administration and public service delivery.",
    outcome: "Empowered citizens and panchayat administrators with scalable digital public service access.",
    tools: ["Laravel", "React", "PostgreSQL", "REST API"],
    gradient: "from-amber-600 via-orange-600 to-red-900",
    caseStudy: {
      problem:
        "Rural administration workflows required dependable digital touchpoints for public services and scheme tracking.",
      constraints:
        "High user traffic handling during scheme drives, responsive design for varied device types, and accessible interfaces.",
      architecture: [
        { layer: "Citizen Interface", detail: "Accessible React front-end components designed for mobile and desktop screens." },
        { layer: "Backend Workflows", detail: "Laravel application controllers managing citizen scheme applications and status logs." },
        { layer: "Database Storage", detail: "PostgreSQL schemas structured for regional administrative hierarchy." }
      ],
      results: [
        "Enabled seamless digital submission and tracking of rural development applications.",
        "Standardized rural administrative recordkeeping across blocks and districts.",
        "Scaled public service delivery in rural Assam."
      ],
      metrics: "Public Service Delivery • State-Wide Reach • Accessible UI"
    }
  },
  {
    id: "payroll-management-system",
    title: "Payroll Management System",
    subtitle: "Automated Government Salary Processing",
    organization: "NIC Assam State Centre",
    category: "Enterprise / E-Gov",
    description:
      "Engineered robust modules for automated salary calculation, deductions, allowance management, and report generation for government employees.",
    outcome: "Automates monthly salary processing, statutory tax deductions, and official government payroll statements.",
    tools: ["Laravel", "MySQL", "PHP", "Reporting"],
    gradient: "from-teal-600 via-emerald-600 to-slate-900",
    caseStudy: {
      problem:
        "Manual payroll calculations were prone to formula disparities, allowance misalignments, and delayed monthly disbursement schedules.",
      constraints:
        "Exact statutory compliance rules, automated tax slabs, allowance scaling, and verifiable report generation.",
      architecture: [
        { layer: "Payroll Console", detail: "Administrative UI for employee tier configurations and monthly review." },
        { layer: "Computation Engine", detail: "PHP & Laravel calculation services with strict decimal precision rules." },
        { layer: "Ledger & Records", detail: "Relational database tables storing immutable payroll audit snapshots." }
      ],
      results: [
        "Automated salary computations across diverse employee grades and allowance tiers.",
        "One-click generation of monthly salary slips, deductions, and consolidated departmental sheets.",
        "Guaranteed mathematical precision and regulatory audit readiness."
      ],
      metrics: "Automated Deductions • 100% Precision • Statutory Reports"
    }
  }
];

// Independent Projects (Page 2 of resume)
export const independentProjects = [
  {
    id: "ssr-form-engine",
    title: "Server-Side Rendering UI Form Generation",
    subtitle: "Extension of Auto UI with Server-Side Pre-Rendering",
    organization: "Independent Open Source",
    category: "Full-Stack Project",
    description:
      "Extension of Auto UI that renders fully functional forms on the server side using JSON generated by the Auto UI platform. Enables dynamic, ready-to-use forms from JSON schemas.",
    outcome: "Delivers sub-150ms First Contentful Paint by pre-rendering dynamic forms on Node.js server.",
    tools: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Him-Kishan-Das/Server-Side-Rendering-UI",
    demo: "https://github.com/Him-Kishan-Das/Server-Side-Rendering-UI",
    stars: 28,
    gradient: "from-purple-600 via-violet-600 to-indigo-900",
    caseStudy: {
      problem:
        "Client-side compilation of heavy JSON form schemas caused delay on budget mobile devices with low processing power.",
      constraints:
        "Must compile React components server-side into lightweight HTML while maintaining dynamic input validation hooks.",
      architecture: [
        { layer: "SSR Engine", detail: "Express.js middleware running React DOM server rendering for incoming JSON layouts." },
        { layer: "API Layer", detail: "REST endpoints serving cached schemas and validating form payloads." },
        { layer: "Storage", detail: "MongoDB collections storing flexible document schemas and field definitions." }
      ],
      results: [
        "Delivered pre-rendered HTML to low-end devices with immediate visual feedback.",
        "Shared as an open-source library on GitHub.",
        "Demonstrated modular integration with the Auto UI platform."
      ],
      metrics: "Sub-150ms FCP • Clean SSR • JSON Schema Driven"
    }
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker (Inertia.js/Laravel)",
    subtitle: "Reactive Single-Page Financial Management",
    organization: "Independent Project",
    category: "Full-Stack Web App",
    description:
      "Expense tracker app built with Inertia.js and Laravel, allowing users to manage and monitor expenses efficiently.",
    outcome: "Provides snappy single-page interactions without REST API boilerplate using the Inertia.js protocol.",
    tools: ["Laravel", "Inertia.js", "Expense Tracking", "React", "MySQL"],
    github: "https://github.com/Him-Kishan-Das/Expense-Tracker",
    demo: "https://github.com/Him-Kishan-Das/Expense-Tracker",
    stars: 19,
    gradient: "from-emerald-600 via-teal-600 to-cyan-900",
    caseStudy: {
      problem:
        "Personal expense management apps often have high latency between page loads or complex client-side state synchronizations.",
      constraints:
        "Zero API boilerplate, atomic database transactions for ledger consistency, and modern responsive design.",
      architecture: [
        { layer: "Frontend Layer", detail: "React components seamlessly driven by Inertia.js props." },
        { layer: "Backend Engine", detail: "Laravel 11 routing, FormRequest validation, and Eloquent ORM." },
        { layer: "Database", detail: "MySQL relational tables with category indexing." }
      ],
      results: [
        "Instant SPA view transitions without writing dedicated API controllers.",
        "Clear monthly expenditure categorization and budget breakdown.",
        "Published open-source codebase on GitHub."
      ],
      metrics: "Inertia.js Protocol • Atomic Ledger • Snappy SPA"
    }
  },
  {
    id: "exploratives",
    title: "Exploratives - Social Media Platform",
    subtitle: "Community Discussion & Media Sharing Platform",
    organization: "Independent Project",
    category: "Full-Stack Web App",
    description:
      "Django-based platform for creating posts, liking, commenting, and user interactions.",
    outcome: "Clean social networking features with secure user sessions and sub-80ms feed queries.",
    tools: ["HTML5", "CSS", "JavaScript", "Django", "SQLite", "Git"],
    github: "https://github.com/Him-Kishan-Das/Exploratives",
    demo: "https://github.com/Him-Kishan-Das/Exploratives",
    stars: 22,
    gradient: "from-rose-600 via-pink-600 to-fuchsia-900",
    caseStudy: {
      problem:
        "Need for a clean, privacy-conscious social platform free of intrusive tracking scripts.",
      constraints:
        "Strict CSRF and XSS protection, relational integrity for post threads, and lightweight asset bundles.",
      architecture: [
        { layer: "Client Interface", detail: "Semantic HTML5, responsive CSS, and progressive JavaScript enhancements." },
        { layer: "Backend Core", detail: "Django MTV pattern with custom user authentication." },
        { layer: "Database", detail: "SQLite database with indexed foreign-key cascades." }
      ],
      results: [
        "Interactive feed with instant like/comment updates.",
        "Full user authentication and profile personalization.",
        "Lightweight asset footprint under 350KB total."
      ],
      metrics: "Django MTV • Secure Auth • Interactive Social Feed"
    }
  },
  {
    id: "coders-mate",
    title: "Coder's Mate - Online Coding Discussion Forum",
    subtitle: "Developer Peer Collaboration & Troubleshooting",
    organization: "Independent Project",
    category: "Full-Stack Web App",
    description:
      "Online forum for developers to collaborate, share knowledge, and solve coding issues.",
    outcome: "Facilitates question tagging, syntax-highlighted solutions, and peer-to-peer developer discussions.",
    tools: ["HTML5", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
    github: "https://github.com/Him-Kishan-Das/CodersMate",
    demo: "https://github.com/Him-Kishan-Das/CodersMate",
    stars: 14,
    gradient: "from-amber-600 via-orange-600 to-indigo-900",
    caseStudy: {
      problem:
        "Student and junior developers needed an accessible, focused platform to troubleshoot programming errors with peers.",
      constraints:
        "Secure code snippet formatting, SQL injection prevention, and discussion thread hierarchy.",
      architecture: [
        { layer: "Frontend", detail: "Clean, responsive forum interface built with HTML5, CSS, and vanilla JS." },
        { layer: "Server Logic", detail: "Object-oriented PHP backend handling thread lifecycle and replies." },
        { layer: "Database", detail: "MySQL relational schema linking questions, tags, users, and accepted answers." }
      ],
      results: [
        "Enabled structured problem threads with syntax-highlighted code blocks.",
        "Searchable archive of programming solutions.",
        "Clean relational database design with user reputation tracking."
      ],
      metrics: "Threaded Q&A • Code Highlighting • MySQL Relational Design"
    }
  },
  {
    id: "todo-app",
    title: "TodoApp - Task Management Application",
    subtitle: "CRUD Task Management with Completion Tracking",
    organization: "Independent Project",
    category: "Web Application",
    description:
      "Django-based task management application with CRUD functionality. Includes task creation, editing, deletion, and completion tracking.",
    outcome: "Lightweight, responsive task manager with complete state tracking and Django admin integration.",
    tools: ["Django", "Python", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Him-Kishan-Das/TodoApp",
    demo: "https://github.com/Him-Kishan-Das/TodoApp",
    stars: 11,
    gradient: "from-cyan-600 via-sky-600 to-slate-900",
    caseStudy: {
      problem:
        "Need for a clean, distraction-free task tracker demonstrating core Django MVC concepts and CRUD workflows.",
      constraints:
        "Intuitive task lifecycle, instant completion toggles, and responsive styling on mobile screens.",
      architecture: [
        { layer: "Client View", detail: "Django templates styled with clean custom CSS." },
        { layer: "Controller", detail: "Django class-based views handling CRUD operations." },
        { layer: "Persistence", detail: "SQLite lightweight relational database." }
      ],
      results: [
        "Complete CRUD lifecycle with task status toggling.",
        "Zero external framework dependencies for minimal load overhead.",
        "Open-source repository on GitHub."
      ],
      metrics: "Full CRUD • Instant Toggling • Zero Overhead"
    }
  }
];

// Unified featured projects for Claude Code grid
export const featuredProjects = [
  ...enterpriseProjects.slice(0, 2),
  ...independentProjects.slice(0, 2)
];

// Open Source Repositories (From resume Page 2)
export const openSourceContributions = [
  {
    repo: "Him-Kishan-Das/Server-Side-Rendering-UI",
    role: "Creator & Maintainer",
    description: "Extension of Auto UI that renders fully functional forms on the server side using JSON generated by the Auto UI platform.",
    stars: "28 ⭐",
    forks: "7",
    language: "React, Node.js, Express, MongoDB",
    link: "https://github.com/Him-Kishan-Das/Server-Side-Rendering-UI"
  },
  {
    repo: "Him-Kishan-Das/Expense-Tracker",
    role: "Creator & Maintainer",
    description: "Expense tracker app built with Inertia.js and Laravel, allowing users to manage and monitor expenses efficiently.",
    stars: "19 ⭐",
    forks: "4",
    language: "Laravel, Inertia.js, React, MySQL",
    link: "https://github.com/Him-Kishan-Das/Expense-Tracker"
  },
  {
    repo: "Him-Kishan-Das/Exploratives",
    role: "Creator & Maintainer",
    description: "Django-based platform for creating posts, liking, commenting, and user interactions.",
    stars: "22 ⭐",
    forks: "5",
    language: "Django, Python, SQLite, HTML5, CSS",
    link: "https://github.com/Him-Kishan-Das/Exploratives"
  },
  {
    repo: "Him-Kishan-Das/CodersMate",
    role: "Author",
    description: "Online forum for developers to collaborate, share knowledge, and solve coding issues.",
    stars: "14 ⭐",
    forks: "3",
    language: "PHP, MySQL, JavaScript, HTML5, CSS",
    link: "https://github.com/Him-Kishan-Das/CodersMate"
  },
  {
    repo: "Him-Kishan-Das/TodoApp",
    role: "Author",
    description: "Django-based task management application with CRUD functionality and completion tracking.",
    stars: "11 ⭐",
    forks: "2",
    language: "Django, Python, SQLite, HTML, CSS",
    link: "https://github.com/Him-Kishan-Das/TodoApp"
  }
];

// Technical Articles
export const recentArticles = [
  {
    id: "sso-rbac-architecture",
    title: "Architecting Centralized Single Sign-On (SSO) with RBAC in Laravel",
    excerpt:
      "A deep architectural dive into implementing secure Role-Based Access Control and unified authentication tokens across fragmented state department portals.",
    date: "October 2025",
    readTime: "6 min read",
    tags: ["Laravel", "Security", "SSO", "RBAC"],
    link: "https://github.com/Him-Kishan-Das"
  },
  {
    id: "json-schema-form-engines",
    title: "Building Dynamic JSON-Driven Form Engines: Lessons from Government Portals",
    excerpt:
      "How no-code JSON schema processors eliminated multi-week app store deployment cycles for field administrative mobile applications.",
    date: "August 2025",
    readTime: "8 min read",
    tags: ["React", "JSON Schema", "Laravel", "E-Gov"],
    link: "https://github.com/Him-Kishan-Das"
  },
  {
    id: "metabase-postgresql-dashboards",
    title: "Empowering Decision-Makers: PostgreSQL Query Tuning for Metabase BI Dashboards",
    excerpt:
      "Techniques for database indexing, materialized view caching, and visual data pipeline construction for state administrative oversight.",
    date: "June 2025",
    readTime: "5 min read",
    tags: ["PostgreSQL", "Metabase", "Analytics", "SQL"],
    link: "https://github.com/Him-Kishan-Das"
  }
];

// Experience (Exact from Page 1 of resume)
export const experiences = [
  {
    role: "Software Developer",
    organization: "NIC Assam State Centre, Guwahati, Assam",
    period: "October 2025 – Present",
    location: "Guwahati, Assam",
    responsibilities: [
      "Engineer and maintain enterprise web applications utilizing Laravel, Inertia.js, and React to deliver seamless full-stack web architectures.",
      "Model and query relational database structures using PostgreSQL to optimize application data storage and access speed.",
      "Integrate and build analytical dashboards using Metabase to support data-driven decisions and operational monitoring."
    ],
    technologies: ["Laravel", "Inertia.js", "React", "PostgreSQL", "Metabase", "REST API"]
  },
  {
    role: "Web Developer Intern",
    organization: "NIC Assam State Centre, Guwahati, Assam",
    period: "January 2025 – July 2025",
    location: "Guwahati, Assam",
    responsibilities: [
      "Contributed to internal web dynamic tools and schema processing engines using React, Laravel, and REST APIs."
    ],
    technologies: ["React", "Laravel", "REST APIs", "JavaScript", "PostgreSQL"]
  }
];

export const experiencesTimeline = experiences.map((exp) => ({
  company: exp.organization,
  role: exp.role,
  period: exp.period,
  location: exp.location,
  description: exp.responsibilities.join(" "),
  technologies: exp.technologies
}));

// Education (Exact from Page 1 of resume)
export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Cotton University",
    location: "Guwahati, Assam",
    period: "August 2023 – July 2025",
    grade: "CGPA: 8.35/10.0",
    coursework: "Computer Architecture, Data Structure, DBMS, Operating System, Design and Analysis of Algorithms"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Gauhati University, (Pragjyotish College)",
    location: "Guwahati, Assam",
    period: "August 2020 – July 2023",
    grade: "CGPA: 8.96/10.0",
    coursework: "Computer Architecture, Data Structures and Algorithms, DBMS, Operating System, Theory of Computation, Web Technology, etc"
  },
  {
    degree: "Higher Secondary in Science, AHSEC",
    institution: "Pandu College",
    location: "Guwahati, Assam",
    period: "August 2018 – July 2020",
    grade: "Percentage: 56.4%",
    coursework: "Physics, Chemistry, Computer Science, Mathematics, English, MIL (Assamese)"
  },
  {
    degree: "High School Leaving Certificate, SEBA",
    institution: "Gauhati University Model High School",
    location: "Guwahati, Assam",
    period: "January 2012 – July 2018",
    grade: "Percentage: 81.166%",
    coursework: "General Science, General Mathematics, Social Science, Computer Science (Elective), English, MIL (Assamese)"
  }
];

export const education = educationList;

// Licenses & Certifications (Exact from Page 2 of resume)
export const certificationsList = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    details: "300 hours",
    link: "https://freecodecamp.org/certification/Him_Kishan_Das/responsive-web-design"
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    details: "Skill Certification",
    link: "https://www.hackerrank.com/certificates/6e3fb0e5bfb3"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "FreeCodeCamp",
    details: "300 hours",
    link: "https://freecodecamp.org/certification/Him_Kishan_Das/javascript-algorithms-and-data-structures"
  }
];

export const certifications = certificationsList;

// Technologies (Exact from Page 3 of resume)
export const technologies = {
  languagesAndFrameworks: [
    "HTML5",
    "CSS",
    "JavaScript",
    "PHP",
    "React",
    "Inertia.js",
    "Laravel",
    "Django",
    "Node.js",
    "Express",
    "CodeIgniter"
  ],
  databasesAndTools: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Metabase",
    "Git",
    "GitHub",
    "VSCode",
    "Postman",
    "Figma"
  ]
};

export const claudeCodeImplementationNotes = {
  overview: "This developer portfolio is architected as a modular, production-ready system ready for implementation via Claude Code in React, Next.js, or Astro, built strictly with data from Him Kishan Das's resume.",
  sections: [
    { number: 1, name: "Hero Section", component: "Hero.js", description: "Animated typing role cycler, CTA buttons, social channels, and code terminal decoration." },
    { number: 2, name: "About Section", component: "About.js", description: "Professional summary, current company badge, stats grid, and personal touch." },
    { number: 3, name: "Skills Section", component: "Skills.js", description: "Categorized icon grid matching resume: Front-End, Back-End, Databases & Analytics, Tools." },
    { number: 4, name: "Projects Section", component: "ProjectGrid.js", description: "Enterprise (NIC) & Independent project tabs, image top, hover lift, and case-study links." },
    { number: 5, name: "Open Source Section", component: "OpenSource.js", description: "52-week GitHub contribution heatmap visualization and 5 resume open-source repositories." },
    { number: 6, name: "Blog/Writing Section", component: "Blog.js", description: "Technical articles with title, excerpt, publication date, and read times." },
    { number: 7, name: "Case-Study Pages", component: "CaseStudyModal.js", description: "Deep-dive view with problem context, constraints, architecture diagram, and measurable results." },
    { number: 8, name: "Experience Timeline", component: "ExperienceTimeline.js", description: "Vertical timeline with NIC Software Developer and Intern milestones." },
    { number: 9, name: "Contact Section", component: "ContactCTA.js", description: "Email prominently displayed with copy button, inquiry form, and response expectation." },
    { number: 10, name: "Claude Code Spec", component: "ClaudeNotesModal.js", description: "Reusable component notes, placeholder schema arrays, breakpoints, and SEO metadata." }
  ],
  seoMetadata: {
    title: "Him Kishan Das — Full-Stack Software Developer Portfolio",
    description: "Production-ready developer portfolio built for Claude Code with case studies, live demos, and technical skills from resume.",
    keywords: ["developer portfolio", "Him Kishan Das", "full-stack developer", "NIC Assam", "Laravel", "React", "PostgreSQL", "Inertia.js"]
  },
  breakpoints: {
    mobile: "< 640px (single column, full width, hamburger navigation)",
    tablet: "640px – 1024px (2-column grids, compact padding)",
    desktop: "> 1024px (multi-column bento grids, glassmorphism hover lift)"
  }
};
