import React from 'react';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "SWC INFOTECH",
    location: "Vadodara, Gujarat",
    period: "04/2026 – 08/2026",
    badge: "240+ Commits Delivered",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: [
      "Delivered 240+ production commits across Earthmover ERP, OMS SaaS, and Medical CRM platforms using React 19, TypeScript, NestJS, Prisma ORM, and PostgreSQL.",
      "Engineered double-entry ledger accounting modules, versioned Rent Rate Change algorithms, and live vehicle trip rate calculations.",
      "Audited and resolved critical financial formula bugs (Balance = Revenue - Fuel - Expenses) with strict decimal precision safety.",
      "Integrated Sarvam AI for consultation audio transcriptions, Puppeteer for automated headless A4 PDF reports, and Axios JWT silent token refresh interceptors.",
      "Built multi-lingual localization (English, Hindi, Gujarati) with Noto Sans fonts and accessible keyboard ergonomics using custom useModalFocusTrap."
    ],
    tech: ["React 19", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "TanStack Query", "Sarvam AI", "Puppeteer", "Redis", "i18next"]
  },
  {
    role: "Web Development Intern",
    company: "Svaapta Ally IT Solutions Pvt Ltd",
    location: "Alkapuri, Vadodara",
    period: "01/2026 – 03/2026",
    badge: "Frontend Architecture",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    description: [
      "Developed responsive, accessible web interfaces and complex enterprise forms using HTML5, CSS3, and modern JavaScript (ES6+).",
      "Implemented client-side validation, sanitization, and responsive UI layouts for seamless user onboarding."
    ],
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Form Validation", "Responsive Design"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Sparks To Ideas Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "05/2025 – 06/2025",
    badge: "UI Components",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description: [
      "Engineered mobile-responsive UI components utilizing HTML5, CSS3, JavaScript, and Bootstrap framework.",
      "Optimized cross-browser compatibility and page rendering performance across device form factors."
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "UI Optimization"]
  }
];

const Experience = () => (
  <section id="experience" className="py-20 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Track Record</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Experience</h3>
    </div>

    <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-slate-800 before:to-transparent">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative flex items-start md:items-center">
          {/* Timeline Node */}
          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-950 shadow-[0_0_12px_#34d399] z-10"></div>

          {/* Experience Card */}
          <div className={`ml-12 md:ml-0 md:w-[46%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300`}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className={`px-3 py-1 text-xs font-bold rounded-full border ${exp.badgeColor}`}>
                {exp.badge}
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                {exp.period}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
            <div className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-1.5">
              <span>{exp.company}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-normal text-xs">{exp.location}</span>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-slate-300">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1 text-xs">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-900/90 text-slate-300 text-xs font-mono rounded-lg border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
