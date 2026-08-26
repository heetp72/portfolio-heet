import React, { useState, useEffect } from 'react';

const commands = [
  {
    tab: "profile.json",
    cmd: "heet.getProfile()",
    output: `{
  "name": "Heet Patel",
  "role": "Full Stack Developer",
  "profile": "Full Stack Developer with strong OOP fundamentals and experience in REST API development.",
  "location": "Nadiad, Gujarat",
  "email": "heetkapatel1505@gmail.com",
  "phone": "+91 9408355242",
  "links": {
    "github": "https://github.com/Heet-Kapatel",
    "linkedin": "https://linkedin.com/in/Heet-Kapatel"
  }
}`
  },
  {
    tab: "skills.json",
    cmd: "heet.getSkills()",
    output: `{
  "frontEnd": ["ReactJS", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  "backEnd": ["Node.js", "Express.js", "RestAPI", "Nest.js", "PHP"],
  "languages": ["JavaScript", "Python", "C++", "C"],
  "specialties": ["NLP / Resume Parsing", "OOP Fundamentals", "RESTful Architecture"],
  "databases": ["PostgreSQL", "MongoDB", "MySQL"],
  "softSkills": ["Communication Skills", "Presentation Skills", "Teamwork", "Adaptability"]
}`
  },
  {
    tab: "projects.json",
    cmd: "heet.getProjects()",
    output: `[
  {
    "title": "AI Resume Analyzer",
    "stack": ["React", "Node.js", "Express.js", "Python", "pypdf", "NLP"],
    "repo": "https://github.com/heetp72/AI-resume-analyzer"
  },
  {
    "title": "QuickServe",
    "stack": ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    "repo": "https://github.com/heetp72/QuickServe"
  },
  {
    "title": "Railway Ticket Reservation System",
    "stack": ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    "repo": "https://github.com/heetp72/Railway-Ticket-Reservation-System"
  },
  {
    "title": "Sabras - Mukhwas (E-commerce)",
    "stack": ["React", "Node.js", "Express.js", "MongoDB"],
    "repo": "https://github.com/heetp72/Sabras-Mukhwas",
    "period": "10/2025"
  },
  {
    "title": "Portfolio - Website",
    "stack": ["React", "Tailwind CSS"],
    "period": "08/2025"
  }
]`
  },
  {
    tab: "experience.json",
    cmd: "heet.getExperience()",
    output: `[
  {
    "company": "SWC INFOTECH",
    "role": "Internship - Full Stack Developer",
    "period": "04/2026 – 08/2026",
    "keyWork": "Engineered and deployed medical-crm using React, NestJS, PostgreSQL"
  },
  {
    "company": "Svaapta Ally IT Solutions Pvt Ltd",
    "role": "Internship - Web Development",
    "period": "01/2026 – 03/2026",
    "keyWork": "Corporate-level web forms with client-side validation"
  },
  {
    "company": "Sparks To Ideas Pvt Ltd",
    "role": "Internship",
    "period": "05/2025 – 06/2025",
    "keyWork": "Responsive web interfaces using HTML, CSS, JavaScript, Bootstrap"
  }
]`
  }
];

const Terminal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setTyping(true);
    setDisplayedText("");
    let currentIdx = 0;
    const fullText = commands[activeTab].output;

    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIdx + 6));
        currentIdx += 6;
      } else {
        setDisplayedText(fullText);
        setTyping(false);
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 shadow-2xl text-left font-mono text-xs sm:text-sm">
      {/* Terminal Window Top Bar */}
      <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600"></div>
          <span className="text-[11px] text-slate-400 font-sans ml-2 font-medium">bash - heet@developer-terminal</span>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-1.5 overflow-x-auto">
          {commands.map((cmdItem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-colors whitespace-nowrap ${
                activeTab === idx
                  ? "bg-slate-800 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {cmdItem.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 bg-[#070b14]/95 text-slate-300 min-h-[250px] overflow-x-auto">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3">
          <span className="text-slate-500">guest@macbook ~ %</span>
          <span>node {commands[activeTab].cmd}</span>
        </div>

        <pre className="text-slate-300 text-xs sm:text-sm leading-relaxed font-mono whitespace-pre text-emerald-300/90">
          {displayedText}
          {typing && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse"></span>}
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
