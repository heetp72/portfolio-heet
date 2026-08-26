import React from 'react';

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: "fas fa-server text-emerald-400",
    skills: ["NestJS (v10)", "Node.js", "TypeScript", "Express.js", "RESTful APIs", "Passport.js / JWT", "Socket.io (WebSockets)", "RBAC Architecture"]
  },
  {
    title: "Frontend Architecture",
    icon: "fab fa-react text-cyan-400",
    skills: ["React.js (v18/v19)", "TanStack React Query", "Tailwind CSS", "React Hook Form", "Zod", "i18next (Multi-lingual)", "Vite", "jsPDF & ExcelJS"]
  },
  {
    title: "Databases & ORM",
    icon: "fas fa-database text-indigo-400",
    skills: ["PostgreSQL", "Prisma ORM (Multi-tenant)", "MySQL", "MongoDB", "Redis Caching", "Schema Migrations", "Query Optimization"]
  },
  {
    title: "DevOps, Tools & AI",
    icon: "fas fa-robot text-yellow-400",
    skills: ["Sarvam AI (Speech-to-Text)", "Puppeteer & Playwright", "Git & GitHub", "Docker", "Postman", "Jest & Vitest", "Cloudinary"]
  }
];

const techIcons = [
  { name: "TypeScript", icon: "fab fa-js-square text-blue-400" },
  { name: "React 19", icon: "fab fa-react text-cyan-400" },
  { name: "Node.js", icon: "fab fa-node-js text-green-500" },
  { name: "NestJS", icon: "fas fa-cubes text-red-500" },
  { name: "PostgreSQL", icon: "fas fa-database text-blue-500" },
  { name: "Prisma", icon: "fas fa-gem text-teal-400" },
  { name: "Tailwind", icon: "fab fa-css3-alt text-cyan-400" },
  { name: "Docker", icon: "fab fa-docker text-blue-400" },
  { name: "Git", icon: "fab fa-git-alt text-orange-500" }
];

const Expertise = () => (
  <section id="expertise" className="py-20 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Technical Capabilities</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Skills & Tech Stack</h3>

      {/* Floating Animated Icons Ribbon */}
      <div className="flex justify-center flex-wrap gap-6 text-3xl sm:text-4xl p-6 glass-card rounded-2xl max-w-4xl mx-auto border border-slate-800">
        {techIcons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
            <i className={`${item.icon} transition-transform duration-300 group-hover:scale-125`}></i>
            <span className="text-[10px] text-slate-400 font-mono group-hover:text-white transition-colors">{item.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Categorized Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg">
                <i className={cat.icon}></i>
              </div>
              <h4 className="text-lg font-bold text-white">{cat.title}</h4>
            </div>

            <ul className="space-y-2">
              {cat.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Expertise;
