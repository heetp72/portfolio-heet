import React, { useState } from 'react';

const projects = [
  {
    title: "Earthmover – Heavy Fleet & Logistics ERP",
    category: "PERN Stack / ERP",
    featured: true,
    tag: "Enterprise Production ERP",
    tech: ["React 19", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "TanStack Query", "jsPDF", "ExcelJS"],
    description: "Full-scale enterprise logistics ERP managing vehicle fleet dispatches, excavation measurements, challan billing, and fuel consumption.",
    highlights: [
      "Double-entry ledger accounting handler for debit/credit vouchers & supplier invoice reconciliation.",
      "Dynamic Rent Rate Change versioning engine preserving historical billing integrity.",
      "Live trip rate resolution decoupled from client payloads for zero-tamper calculations.",
      "Audited fuel deduction formulas (Balance = Revenue - Fuel - Expenses) with 2-decimal precision safety.",
      "Trilingual localization (English, Hindi, Gujarati) with Noto Sans fonts and accessible keyboard ergonomics."
    ],
    github: "https://github.com/Heet-Kapatel",
    live: null
  },
  {
    title: "Medical CRM – Healthcare SaaS Platform",
    category: "Healthcare & AI",
    featured: true,
    tag: "AI Audio & Telehealth",
    tech: ["React 19", "NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Redis", "Socket.io", "Sarvam AI", "Puppeteer"],
    description: "Comprehensive clinic and telehealth SaaS featuring AI consultation transcripts, doctor scheduling, and automated PDF medical records.",
    highlights: [
      "Integrated Sarvam AI speech-to-text API for automated doctor-patient audio transcription and quota tracking.",
      "Engineered automated server-side headless A4 clinical PDF report generation with Puppeteer & Playwright.",
      "Implemented Axios silent JWT token-refresh interceptors for seamless 401 error recovery.",
      "Built hierarchical Tree Tables for tracking deep patient follow-up histories and split-installment billing.",
      "Doctor availability scheduling with recurring weekly slots and Asia/Kolkata (IST) timezone conversions."
    ],
    github: "https://github.com/Heet-Kapatel",
    live: null
  },
  {
    title: "OMS – Multi-Tenant Organization Management SaaS",
    category: "Multi-Tenant SaaS",
    featured: true,
    tag: "Multi-Tenant Orchestrator",
    tech: ["NestJS", "React", "TypeScript", "Prisma ORM", "PostgreSQL", "Vite", "RESTful APIs"],
    description: "Cloud multi-tenant admin platform featuring header-based tenant resolution, database migrations, and GST verification provider modules.",
    highlights: [
      "Header-based tenant resolution (`x-tenant-id`) with AES-256 database password encryption.",
      "Automated tenant database provisioning and safe reset workflows with progress tracking.",
      "GST Verification Provider integration with usage limits, plan quotas, and rate-limiting.",
      "Granular Role-Based Access Control (RBAC) and JSONB mutation audit logging."
    ],
    github: "https://github.com/Heet-Kapatel",
    live: null
  },
  {
    title: "Sabras Mukhwas – Full Stack E-Commerce Platform",
    category: "E-Commerce",
    featured: false,
    tag: "MERN Stack E-Commerce",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    description: "Complete full-stack e-commerce web application featuring user authentication, product catalog filtering, cart state management, and order checkout.",
    highlights: [
      "JWT authentication and protected user profile routes.",
      "Dynamic catalog search, category filtering, and inventory tracking.",
      "Persistent cart state and order management CRUD workflows."
    ],
    github: "https://github.com/Heet-Kapatel",
    live: null
  }
];

const categories = ["All", "PERN Stack / ERP", "Healthcare & AI", "Multi-Tenant SaaS", "E-Commerce"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Featured Work</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Enterprise & Full Stack Projects</h3>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/80 rounded-2xl max-w-2xl mx-auto border border-slate-800 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {proj.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {proj.category}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {proj.title}
              </h4>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Engineering Highlights:</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">✔</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-slate-800/80">
                {proj.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs font-mono rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              {/* Link CTA */}
              <div className="flex items-center gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2 group-hover:border-emerald-500/50"
                >
                  <i className="fab fa-github"></i>
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
