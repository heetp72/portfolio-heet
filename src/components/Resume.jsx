import React from 'react';

const Resume = () => (
  <section id="resume" className="py-20 max-w-4xl mx-auto text-center">
    <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
        <i className="fas fa-file-pdf"></i> Official Curriculum Vitae
      </div>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
        Download My Official Resume
      </h3>
      <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        Explore my technical skills, professional internship experience at SWC Infotech, Svaapta Ally, and Sparks To Ideas, academic qualifications, and full-stack projects.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Direct Download Button */}
        <a
          href="/Heet_KaPatel_Resume.pdf"
          download="Heet_Patel_FullStack_Developer_Resume.pdf"
          className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2 text-sm"
        >
          <i className="fas fa-download"></i>
          Download Resume (PDF)
        </a>

        {/* View / Open PDF in New Tab */}
        <a
          href="/Heet_KaPatel_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 glass-card hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all duration-300 border border-slate-700 hover:scale-105 flex items-center gap-2 text-sm"
        >
          <i className="fas fa-arrow-up-right-from-square text-emerald-400"></i>
          Preview in Browser
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
