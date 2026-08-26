import React from 'react';

const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-slate-950/80 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black text-sm">
          HP
        </div>
        <div>
          <span className="font-bold text-white tracking-tight">Heet Patel</span>
          <span className="text-xs text-slate-400 block">Full Stack Developer</span>
        </div>
      </div>

      <div className="text-xs text-slate-400">
        © {new Date().getFullYear()} Heet Patel. Built with <span className="text-emerald-400 font-semibold">React & Tailwind CSS</span>.
      </div>

      <div className="flex gap-4 text-base text-slate-400">
        <a href="https://github.com/heetp72" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/Heet-Kapatel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:heetkapatel1505@gmail.com" className="hover:text-emerald-400 transition-colors" title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
