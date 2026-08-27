import React from 'react';

const About = () => (
  <section id="about" className="py-20 max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Profile & Background</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: Summary */}
      <div className="md:col-span-2 glass-card p-8 rounded-3xl space-y-5 text-slate-300 text-base leading-relaxed border border-slate-800">
        <p>
          I am a <strong className="text-white">Full Stack Developer</strong> with strong <span className="text-emerald-400 font-semibold">OOP fundamentals</span> and hands-on experience in <span className="text-emerald-400 font-semibold">REST API development</span>.
        </p>
        <p>
          During my professional internship at <strong className="text-emerald-400">SWC INFOTECH</strong>, I engineered, integrated, and deployed 3 live enterprise applications: <strong className="text-white">Earthmover ERP</strong>, <strong className="text-white">Earthmover OMS</strong>, and <strong className="text-white">Medica CRM</strong> (Joyzen) using React, NestJS, and PostgreSQL. I developed scalable RESTful APIs, implemented complex workflow automations, and designed optimized relational database schemas ensuring data integrity, high availability, and secure enterprise recordkeeping.
        </p>
        <p>
          Additionally, through internships at <strong className="text-white">Svaapta Ally IT Solutions</strong> and <strong className="text-white">Sparks To Ideas</strong>, I gained extensive experience building corporate-level web forms with robust client-side validation and responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap.
        </p>
        <p>
          I hold a <strong className="text-white">B.Tech in Information Technology</strong> from Sardar Vallabhbhai Patel Institute of Technology (CGPA: 8.17) and a <strong className="text-white">Diploma in Computer Engineering</strong> from Bhailalbhai and Bhikhbhai Institute of Technology (CGPA: 8.45).
        </p>

        <div className="pt-4 flex flex-wrap gap-3">
          <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-emerald-400">
            <i className="fas fa-check-circle mr-1.5"></i> RESTful API Architecture
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-indigo-400">
            <i className="fas fa-check-circle mr-1.5"></i> OOP Fundamentals
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-teal-400">
            <i className="fas fa-check-circle mr-1.5"></i> PostgreSQL & MongoDB
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-yellow-400">
            <i className="fas fa-check-circle mr-1.5"></i> React & NestJS
          </span>
        </div>
      </div>

      {/* Right Column: Key Details Card */}
      <div className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-slate-800 space-y-6">
        <div>
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-id-badge text-emerald-400"></i> Quick Facts
          </h4>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Role:</span>
              <span className="font-semibold text-emerald-400">Full Stack Developer</span>
            </li>
            <li className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Location:</span>
              <span className="font-medium text-white">Nadiad, Gujarat</span>
            </li>
            <li className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Languages:</span>
              <span className="font-medium text-white">English, Gujarati, Hindi</span>
            </li>
            <li className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">B.Tech CGPA:</span>
              <span className="font-semibold text-yellow-400">8.17 / 10.0</span>
            </li>
            <li className="flex justify-between pb-1">
              <span className="text-slate-400">Diploma CGPA:</span>
              <span className="font-semibold text-teal-400">8.45 / 10.0</span>
            </li>
          </ul>
        </div>

        <a
          href="https://github.com/heetp72"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
        >
          <i className="fab fa-github text-base"></i> View GitHub Profile
        </a>
      </div>
    </div>
  </section>
);

export default About;
