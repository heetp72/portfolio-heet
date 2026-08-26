import React from 'react';

const projects = [
  {
    title: "AI Resume Analyzer",
    subtitle: "ATS Matcher & Resume Intelligence Engine",
    period: "AI / ML Project",
    tag: "React, Node & Python",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    tech: ["React", "Node.js", "Express.js", "Python", "pypdf", "NLP"],
    description: "Automated ATS resume intelligence application that compares resumes against job descriptions, calculates match percentages, detects missing skills, and delivers structural improvement insights.",
    highlights: [
      "Compares resumes against job descriptions to calculate match percentage and missing skill gaps.",
      "Automated text extraction from PDF and text-based resume files using Python and pypdf.",
      "Delivers ATS-focused recommendations, structural insights, action-verb analysis, and measurable impact tracking."
    ],
    github: "https://github.com/heetp72/AI-resume-analyzer",
    live: null
  },
  {
    title: "QuickServe",
    subtitle: "On-Demand Local Services & Booking Platform",
    period: "Web Application",
    tag: "PHP, MySQL & Bootstrap",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    description: "Web-based on-demand platform enabling users to discover, browse, and book nearby service professionals (electricians, plumbers, carpenters) with user authentication and booking management.",
    highlights: [
      "User authentication system with signup, secure login, password validation, and modal forms.",
      "Browse and book local service professionals directly with streamlined scheduling workflows.",
      "Integrated MySQL relational database for user records, service categories, and booking data."
    ],
    github: "https://github.com/heetp72/QuickServe",
    live: null
  },
  {
    title: "Railway Ticket Reservation System",
    subtitle: "Train Booking & Reservation Platform",
    period: "Full Stack System",
    tag: "PHP & MySQL Web App",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    description: "Provides detailed information about trains and supports functionalities such as booking and canceling tickets, along with seat management and payment integration.",
    highlights: [
      "Engineered relational database schemas in MySQL to manage train schedules, passenger records, and seat allocations.",
      "Implemented seamless ticket booking, cancellation, and train search workflows with fare calculation.",
      "Crafted responsive and intuitive web interfaces using Bootstrap, HTML5, CSS3, and JavaScript."
    ],
    github: "https://github.com/heetp72/Railway-Ticket-Reservation-System",
    live: null
  },
  {
    title: "Sabras - Mukhwas",
    subtitle: "E-Commerce Platform",
    period: "10/2025",
    tag: "MERN Stack E-Commerce",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    description: "Built a full-stack e-commerce web application featuring user authentication, product catalog, and CRUD capabilities designed with intuitive UX principles.",
    highlights: [
      "Built a full-stack application with authentication and CRUD features.",
      "Designed user-friendly interfaces considering basic UX principles.",
      "Contributed to feature development and enhancement based on usability needs."
    ],
    github: "https://github.com/heetp72/Sabras-Mukhwas",
    live: null
  },
  {
    title: "Portfolio - Website",
    subtitle: "Personal Portfolio & Showcase",
    period: "08/2025",
    tag: "React & Tailwind CSS",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    tech: ["React", "Tailwind CSS"],
    description: "Developed a responsive portfolio website using React.js and Tailwind CSS to showcase resume, skills, credentials, and projects with modern aesthetics.",
    highlights: [
      "Developed a responsive portfolio website using React.js and Tailwind CSS to showcase resume, skills, and projects.",
      "Crafted modern glassmorphic UI components, animated statistics, and responsive layouts.",
      "Engineered an interactive developer terminal and smooth section navigation."
    ],
    github: "https://github.com/heetp72/portfolio-heet",
    live: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Projects</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Featured Projects</h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          On-demand service portals, AI & NLP analyzers, full-stack database-driven platforms, e-commerce systems, and modern frontend user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-bold rounded-full border ${proj.badgeColor}`}>
                  {proj.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  {proj.period}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {proj.title}
              </h4>
              <p className="text-xs font-semibold text-emerald-400/80 mb-3">{proj.subtitle}</p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights:</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 text-xs">✔</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 mb-5 border-t border-slate-800/80">
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
