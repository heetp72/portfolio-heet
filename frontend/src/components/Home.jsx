import React from 'react';
import Terminal from './Terminal';

const Home = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative">
    {/* Top Location & Availability Badge */}
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-medium shadow-lg shadow-emerald-950/40">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
        </span>
        <span>Full Stack Developer • Nadiad, Gujarat • Open to Opportunities</span>
      </div>
    </div>

    {/* Hero Bento Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full">
      {/* Left Column (Headline + Pitch + CTAs) - 7 Columns */}
      <div className="lg:col-span-7 text-left space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Heet Patel
          </span><br />
          Full Stack Developer.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
          Full Stack Developer with strong <span className="text-emerald-400 font-semibold">OOP fundamentals</span> and extensive experience in <span className="text-emerald-400 font-semibold">REST API development</span> using <span className="text-white font-semibold">ReactJS, Nest.js, Node.js, Express.js, PostgreSQL,</span> and <span className="text-white font-semibold">MongoDB</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-layer-group"></i>
            View Projects
          </a>
          <a
            href="Heet_KaPatel_Resume.pdf"
            download
            className="px-7 py-3.5 glass-card hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-file-arrow-down text-emerald-400"></i>
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 glass-card hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-paper-plane text-indigo-400"></i>
            Contact Me
          </a>
        </div>

        {/* Quick Social & Stack Chips */}
        <div className="flex items-center gap-4 pt-4 text-slate-400 text-sm">
          <span>Connect:</span>
          <a href="https://github.com/Heet-Kapatel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://linkedin.com/in/Heet-Kapatel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="mailto:heetkapatel1505@gmail.com" className="hover:text-emerald-400 transition-colors" title="Email">
            <i className="fas fa-envelope text-lg"></i>
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            React • Nest.js • Node.js
          </span>
        </div>
      </div>

      {/* Right Column (Interactive macOS Terminal) - 5 Columns */}
      <div className="lg:col-span-5 w-full">
        <Terminal />
      </div>
    </div>

    {/* Metric Stat Tiles Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-7xl mx-auto w-full">
      <div className="glass-card p-6 rounded-2xl text-left border border-slate-800/80 hover:border-emerald-500/30 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">8.17</span>
          <i className="fas fa-graduation-cap text-slate-600 group-hover:text-emerald-400 transition-colors"></i>
        </div>
        <div className="text-sm font-semibold text-white">B.Tech IT CGPA</div>
        <div className="text-xs text-slate-400 mt-1">SVIT Vasad (2023 – Present)</div>
      </div>

      <div className="glass-card p-6 rounded-2xl text-left border border-slate-800/80 hover:border-teal-500/30 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">8.45</span>
          <i className="fas fa-award text-slate-600 group-hover:text-teal-400 transition-colors"></i>
        </div>
        <div className="text-sm font-semibold text-white">Diploma CE CGPA</div>
        <div className="text-xs text-slate-400 mt-1">BBIT Anand (2020 – 2023)</div>
      </div>

      <div className="glass-card p-6 rounded-2xl text-left border border-slate-800/80 hover:border-indigo-500/30 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">3</span>
          <i className="fas fa-briefcase text-slate-600 group-hover:text-indigo-400 transition-colors"></i>
        </div>
        <div className="text-sm font-semibold text-white">Industry Internships</div>
        <div className="text-xs text-slate-400 mt-1">SWC Infotech, Svaapta Ally, Sparks To Ideas</div>
      </div>

      <div className="glass-card p-6 rounded-2xl text-left border border-slate-800/80 hover:border-yellow-500/30 transition-all group">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-mono">3</span>
          <i className="fas fa-certificate text-slate-600 group-hover:text-yellow-400 transition-colors"></i>
        </div>
        <div className="text-sm font-semibold text-white">Certifications</div>
        <div className="text-xs text-slate-400 mt-1">HackerRank, AWS & Google Cloud</div>
      </div>
    </div>
  </section>
);

export default Home;
