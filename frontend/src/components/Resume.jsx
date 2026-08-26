import React from 'react';

const Resume = () => (
  <section id="resume" className="py-20 max-w-4xl mx-auto text-center">
    <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-800 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
        <i className="fas fa-file-pdf"></i> ATS-Optimized 1-Page Resume
      </div>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
        Ready to Build Your Next Product?
      </h3>
      <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Download my updated 1-page resume featuring 240+ production commits, PERN & MERN stack achievements, and enterprise project breakdowns.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="Heet_KaPatel_Resume.pdf"
          download
          className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2"
        >
          <i className="fas fa-download"></i>
          Download Resume (PDF)
        </a>
        <a
          href="#contact"
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-2xl transition-all duration-300 border border-slate-700 hover:scale-105 flex items-center gap-2"
        >
          <i className="fas fa-calendar-check text-emerald-400"></i>
          Schedule Quick Call
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
