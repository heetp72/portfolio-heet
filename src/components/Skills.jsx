import React from 'react';

const softSkills = [
  {
    skill: "Communication Skills",
    detail: "Clear, effective verbal and written communication for technical problem-solving and cross-team collaboration.",
    icon: "fas fa-comments text-emerald-400"
  },
  {
    skill: "Teamwork",
    detail: "Active collaborator in agile environments, working seamlessly with developers, mentors, and stakeholders.",
    icon: "fas fa-users text-teal-400"
  },
  {
    skill: "Presentation Skills",
    detail: "Confident at presenting technical demos, feature walkthroughs, and architectural ideas effectively.",
    icon: "fas fa-chalkboard-user text-indigo-400"
  },
  {
    skill: "Adaptability",
    detail: "Quick learner adaptable to evolving project requirements, fast-paced workflows, and modern technology stacks.",
    icon: "fas fa-arrows-spin text-yellow-400"
  }
];

const languages = [
  { name: "English", level: "Professional Working Proficiency", flag: "🇬🇧" },
  { name: "Gujarati", level: "Native / Mother Tongue", flag: "🇮🇳" },
  { name: "Hindi", level: "Fluent Working Proficiency", flag: "🇮🇳" }
];

const Skills = () => (
  <section id="soft-skills" className="py-20 max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Interpersonal & Communication</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Soft Skills & Languages</h3>
      <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
        Key professional strengths and multilingual communication capabilities.
      </p>
    </div>

    {/* Soft Skills Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
      {softSkills.map((item, idx) => (
        <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
            <i className={item.icon}></i>
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {item.skill}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Languages Row */}
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
      <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
        <i className="fas fa-globe text-emerald-400"></i> Languages Known
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languages.map((lang, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <span className="text-2xl">{lang.flag}</span>
            <div>
              <p className="text-sm font-bold text-white">{lang.name}</p>
              <p className="text-xs text-slate-400">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
