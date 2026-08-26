import React from 'react';

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 relative overflow-hidden bg-grid-pattern"
  >
    {/* Ambient Glows */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    {/* Immediate Joiner Status Pill */}
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium animate-pulse">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
      Available Immediately • 0 Days Notice • Open to Ahmedabad / Vadodara / Remote
    </div>

    {/* Main Headline */}
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight max-w-5xl leading-tight">
      Full Stack Developer Building <br className="hidden sm:inline" />
      <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
        Enterprise SaaS & ERP Systems
      </span>
    </h1>

    {/* Subtitle / Pitch */}
    <p className="text-base sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-normal">
      Specializing in <span className="text-emerald-400 font-semibold">React 19, TypeScript, NestJS, Prisma ORM,</span> and <span className="text-emerald-400 font-semibold">PostgreSQL</span>. 
      Delivered <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700">240+ production commits</span> across double-entry ERP ledgers, AI speech-to-text audio transcriptions, and multi-tenant architectures.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      <a
        href="#projects"
        className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2"
      >
        <i className="fas fa-layer-group text-sm"></i>
        Explore Projects
      </a>
      <a
        href="Heet_KaPatel_Resume.pdf"
        download
        className="px-8 py-4 glass-card hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2"
      >
        <i className="fas fa-file-arrow-down text-emerald-400"></i>
        Download Resume
      </a>
      <a
        href="#contact"
        className="px-8 py-4 glass-card hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2"
      >
        <i className="fas fa-envelope text-indigo-400"></i>
        Contact Me
      </a>
    </div>

    {/* Key Stats Counter Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
      <div className="glass-card p-6 rounded-2xl text-center border border-slate-800/80">
        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">240+</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Production Commits</div>
      </div>
      <div className="glass-card p-6 rounded-2xl text-center border border-slate-800/80">
        <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono mb-1">3+</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Enterprise Platforms</div>
      </div>
      <div className="glass-card p-6 rounded-2xl text-center border border-slate-800/80">
        <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono mb-1">0 Days</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Immediate Joiner</div>
      </div>
      <div className="glass-card p-6 rounded-2xl text-center border border-slate-800/80">
        <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-mono mb-1">100%</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Full-Stack TypeScript</div>
      </div>
    </div>
  </section>
);

export default Home;
