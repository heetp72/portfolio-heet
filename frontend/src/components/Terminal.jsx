import React, { useState, useEffect } from 'react';

const commands = [
  {
    cmd: "heet.getCurrentStatus()",
    output: `{
  "availability": "Immediate Joiner (0 Days Notice)",
  "openTo": ["Ahmedabad", "Vadodara", "GIFT City", "Remote"],
  "targetRole": "Full Stack Developer (PERN & MERN)",
  "status": "Ready to build & deploy"
}`
  },
  {
    cmd: "heet.getTechStack()",
    output: `{
  "backend": ["NestJS", "Node.js", "TypeScript", "Express.js", "REST APIs"],
  "frontend": ["React 19", "TanStack Query", "Tailwind CSS", "Vite", "i18next"],
  "database": ["PostgreSQL", "Prisma ORM (Multi-tenant)", "MongoDB", "Redis"],
  "specialties": ["Double-Entry ERP", "Sarvam AI Speech-to-Text", "Puppeteer PDFs"]
}`
  },
  {
    cmd: "heet.getProductionMetrics()",
    output: `{
  "totalCommits": 247,
  "velocity": "~3.5 production commits/day",
  "platformsDelivered": ["Earthmover ERP", "Medical CRM", "OMS SaaS"],
  "architecture": "Clean Architecture & Strict TypeScript"
}`
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
          <span className="text-[11px] text-slate-400 font-sans ml-2 font-medium">bash - heet@enterprise-terminal</span>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-1.5">
          {["status.js", "stack.json", "metrics.sh"].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                activeTab === idx
                  ? "bg-slate-800 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 bg-[#070b14]/95 text-slate-300 min-h-[220px] overflow-x-auto">
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
