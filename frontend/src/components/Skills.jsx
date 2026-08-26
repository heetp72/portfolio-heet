import React from 'react';

const professionalTraits = [
  { trait: "Rapid Feature Delivery & Velocity", detail: "Averaging ~3.5 production commits/day with clean git hygiene and atomic commits." },
  { trait: "Full-Stack Ownership", detail: "Independent management from PostgreSQL schema design & NestJS DTOs to React 19 UI." },
  { trait: "Financial & Domain Precision", detail: "Rigorous auditing of double-entry accounting ledgers and live rate calculations." },
  { trait: "Accessibility & Ergonomics", detail: "Building keyboard-first hotkeys, modal focus traps, and WCAG-compliant UI components." }
];

const Skills = () => (
  <section id="skills" className="py-20 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Work Ethic & Delivery</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Engineering Practices</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {professionalTraits.map((item, idx) => (
        <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <i className="fas fa-check text-sm"></i>
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">{item.trait}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
