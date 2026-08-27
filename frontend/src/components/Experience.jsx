import React from 'react';

const experiences = [
  {
    role: "Internship - Full Stack Developer",
    company: "SWC INFOTECH",
    location: "Vadsar, Vadodara",
    period: "04/2026 – 08/2026",
    badge: "Full Stack Development",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: [
      "Architected, built, and deployed 3 enterprise-grade full-stack systems: Earthmover ERP, Earthmover OMS, and Medica CRM.",
      "Engineered robust, high-throughput RESTful APIs utilizing NestJS to handle complex enterprise workflows, patient records, and real-time order processing.",
      "Designed and optimized PostgreSQL relational database schemas, query indexing, data validation pipelines, and secure authentication for seamless React frontend integration."
    ],
    deployedProjects: [
      {
        id: "earthmover-erp",
        name: "Earthmover ERP",
        category: "Enterprise Resource Planning",
        badge: "Live ERP",
        url: "https://earthmover-erp.swcinfotech.com",
        displayUrl: "earthmover-erp.swcinfotech.com",
        role: "Full Stack & Database Architecture",
        description: "Comprehensive ERP platform managing enterprise resources, operations, and analytical reporting.",
        tech: ["React", "NestJS", "PostgreSQL", "REST APIs"]
      },
      {
        id: "earthmover-oms",
        name: "Earthmover OMS",
        category: "Order Management System",
        badge: "Live OMS",
        url: "https://earthmover-oms.swcinfotech.com",
        displayUrl: "earthmover-oms.swcinfotech.com",
        role: "Order Pipeline & Inventory Fulfillment",
        description: "Order management and fulfillment tracking system with automated status workflows.",
        tech: ["React", "NestJS", "PostgreSQL", "Workflow Engine"]
      },
      {
        id: "medica-crm",
        name: "Medica CRM",
        category: "Healthcare CRM Platform",
        badge: "Live CRM",
        url: "https://joyzen-stage.swcinfotech.com/",
        displayUrl: "joyzen-stage.swcinfotech.com",
        role: "Patient Record & Healthcare Workflows",
        description: "Healthcare CRM platform for patient data handling, medical workflows, and records management.",
        tech: ["React", "NestJS", "PostgreSQL", "Role-Based Access"]
      }
    ],
    tech: ["React", "Nest.js", "PostgreSQL", "REST APIs", "JavaScript", "SQL", "Tailwind CSS"]
  },
  {
    role: "Internship - Web Development",
    company: "Svaapta Ally IT Solutions Pvt Ltd",
    location: "Alkapuri, Vadodara",
    period: "01/2026 – 03/2026",
    badge: "Web Development",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    description: [
      "Developed corporate-level web forms with client-side validation using HTML, CSS, and JavaScript, covering fields such as first name, last name, password, and gender."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Client-side Validation", "Web Forms"]
  },
  {
    role: "Internship",
    company: "Sparks To Ideas Pvt Ltd",
    location: "Ahmedabad",
    period: "05/2025 – 06/2025",
    badge: "Frontend UI",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description: [
      "Contributing to the development of responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive UI"]
  }
];

const LiveProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/40 rounded-2xl p-4 transition-all duration-300 shadow-md group/card">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <h5 className="text-sm font-bold text-white tracking-tight group-hover/card:text-emerald-400 transition-colors">
            {project.name}
          </h5>
        </div>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          {project.badge}
        </span>
      </div>

      <p className="text-xs text-slate-300 mb-1.5 font-medium">{project.role}</p>
      <p className="text-xs text-slate-400 mb-3 leading-relaxed">{project.description}</p>

      {/* Live Link Button */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full px-3.5 py-2.5 mb-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-500/60 rounded-xl transition-all shadow-sm group/link"
      >
        <span className="flex items-center gap-2 truncate">
          <i className="fas fa-globe text-emerald-400"></i>
          <span className="truncate font-mono text-[11px]">{project.displayUrl}</span>
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 group-hover/link:translate-x-0.5 transition-transform flex-shrink-0 font-medium">
          <span>Live Demo</span>
          <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
        </span>
      </a>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800/70">
        {project.tech.map((t, idx) => (
          <span key={idx} className="px-2 py-0.5 bg-slate-950 text-slate-400 text-[10px] font-mono rounded border border-slate-800">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-20 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Experience</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Experience</h3>
      <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
        Hands-on industry internships spanning full-stack application development, RESTful APIs, and responsive frontend interfaces.
      </p>
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

            {/* Live Deployed Projects Showcase */}
            {exp.deployedProjects && exp.deployedProjects.length > 0 && (
              <div className="mb-6 pt-5 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-rocket text-emerald-400 text-xs"></i>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                      Live Enterprise Projects
                    </h5>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    3 Live Demos
                  </span>
                </div>
                <div className="space-y-3.5">
                  {exp.deployedProjects.map((proj) => (
                    <LiveProjectCard key={proj.id} project={proj} />
                  ))}
                </div>
              </div>
            )}

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
