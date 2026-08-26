import React from 'react';
import Terminal from './Terminal';

const Home = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative">
    {/* Background Ambient Cosmic Stage Glow */}
    <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
    <div className="absolute top-32 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    {/* Top Greeting & Availability Status Badge */}
    <div className="flex flex-wrap items-center justify-start gap-3 mb-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-medium shadow-md">
        <span className="text-base animate-bounce">👋</span>
        <span>Hello! I'm</span>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-medium shadow-lg shadow-emerald-950/40">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
        </span>
        <span>Immediate Joiner • Open to Full-Time Roles</span>
      </div>
    </div>

    {/* Hero Bento Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full">
      {/* Left Column (Headline + Pitch + Musical Emoji Stage + CTAs) - 7 Columns */}
      <div className="lg:col-span-7 text-left space-y-6">
        
        {/* Main Name & Guitarist Jamming Avatar Stage */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                Heet Patel
              </span>
            </h1>

            {/* Creative Jamming Guitarist Emoji Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass-card border border-emerald-500/40 bg-slate-950/80 shadow-xl relative group hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Floating Music Notes */}
              <span className="absolute -top-3 -right-2 text-emerald-400 text-xs animate-bounce [animation-duration:2s]">🎵</span>
              <span className="absolute -bottom-2 -left-2 text-teal-300 text-xs animate-pulse [animation-duration:1.5s]">🎶</span>

              {/* Animated Emoji Rocker & Guitar */}
              <div className="flex items-center select-none animate-rocker">
                <span className="text-3xl sm:text-4xl" role="img" aria-label="rocker">
                  🧑‍🎤
                </span>
                <span className="text-3xl sm:text-4xl -ml-2 animate-guitar drop-shadow-[0_4px_10px_rgba(16,185,129,0.5)]" role="img" aria-label="guitar">
                  🎸
                </span>
              </div>

              <div className="text-left">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                  Lead Musician
                </span>
                <span className="text-xs font-extrabold text-white tracking-wide">
                  Full-Stack Rhythms
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle / Role */}
          <div className="text-lg sm:text-xl font-bold text-slate-200 flex flex-wrap items-center gap-2 pt-1">
            <span>Full Stack Developer</span>
            <span className="text-emerald-400">•</span>
            <span className="text-teal-300">REST API Architect</span>
            <span className="text-emerald-400">•</span>
            <span className="text-indigo-300">Music Enthusiast</span>
          </div>

          {/* Mini Soundwave Equalizer */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Master Rhythm:</span>
            <div className="flex items-end gap-1 h-5 px-2 py-0.5 bg-slate-950/80 rounded-md border border-slate-800">
              {[10, 18, 8, 20, 14, 16, 12, 18, 6, 14].map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-emerald-500 to-teal-400"
                  style={{
                    height: `${h}px`,
                    animation: `equalizerWave 0.9s ease-in-out infinite alternate ${i * 0.08}s`
                  }}
                ></div>
              ))}
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">120 BPM Live</span>
          </div>
        </div>

        {/* Narrative Pitch */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
          Harmonizing robust backend architectures, dynamic React frontends, and clean <strong className="text-white">OOP fundamentals</strong> into scalable, production-grade applications with precision across <span className="text-emerald-400 font-semibold">React, Node.js, Express.js, Nest.js, Python, PostgreSQL,</span> and <span className="text-emerald-400 font-semibold">MongoDB</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-layer-group"></i>
            Explore Projects
          </a>
          <a
            href="/Heet_KaPatel_Resume.pdf"
            download="Heet_Patel_FullStack_Developer_Resume.pdf"
            className="px-7 py-3.5 glass-card hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-file-arrow-down text-emerald-400"></i>
            Download CV (PDF)
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 glass-card hover:bg-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-slate-700 flex items-center gap-2 text-sm"
          >
            <i className="fas fa-paper-plane text-indigo-400"></i>
            Get in Touch
          </a>
        </div>

        {/* Quick Social & Stack Chips */}
        <div className="flex items-center gap-4 pt-4 text-slate-400 text-sm">
          <span>Connect:</span>
          <a href="https://github.com/heetp72" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
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
            Full Stack & Music
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
          <span className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-mono">5</span>
          <i className="fas fa-code-branch text-slate-600 group-hover:text-yellow-400 transition-colors"></i>
        </div>
        <div className="text-sm font-semibold text-white">Featured Projects</div>
        <div className="text-xs text-slate-400 mt-1">AI Resume, QuickServe, Railway, Sabras, Portfolio</div>
      </div>
    </div>
  </section>
);

export default Home;
