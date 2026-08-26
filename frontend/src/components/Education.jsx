import React from 'react';

const educations = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Sardar Vallabhbhai Patel Institute of Technology (SVIT)",
    location: "Vasad, Gujarat",
    period: "2023 – Present",
    score: "CGPA: 8.17 / 10.0",
    scoreColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    courses: "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Web Technologies"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Bhailalbhai and Bhikhbhai Institute of Technology (BBIT)",
    location: "Anand, Gujarat",
    period: "2020 – 2023",
    score: "CGPA: 8.45 / 10.0",
    scoreColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    courses: "C/C++, Core Java, Relational Databases (RDBMS), Software Engineering Fundamentals, System Architecture"
  }
];

const Education = () => (
  <section id="education" className="py-20 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Academic Foundation</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Education</h3>
    </div>

    <div className="space-y-6">
      {educations.map((edu, idx) => (
        <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
            </div>
            <p className="text-sm font-medium text-slate-300 mb-1">{edu.institution}</p>
            <p className="text-xs text-slate-400 mb-3">{edu.location} • <span className="font-mono text-slate-300">{edu.period}</span></p>
            <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-slate-300">Key Coursework:</strong> {edu.courses}</p>
          </div>

          <div className={`px-4 py-2 rounded-2xl border text-sm font-bold font-mono whitespace-nowrap ${edu.scoreColor}`}>
            {edu.score}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
