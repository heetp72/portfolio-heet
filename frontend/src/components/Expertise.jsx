import React, { useState, useRef } from 'react';

// Musical notes and frequencies for interactive Web Audio guitar synth plucks
const techOrbs = [
  { name: "ReactJS", note: "C5", freq: 523.25, icon: "fab fa-react", color: "text-cyan-400", glow: "border-cyan-500/40", ring: "rgba(6,182,212,0.4)", category: "Lead Melody" },
  { name: "Tailwind CSS", note: "D5", freq: 587.33, icon: "fab fa-css3-alt", color: "text-teal-400", glow: "border-teal-500/40", ring: "rgba(20,184,166,0.4)", category: "Lead Melody" },
  { name: "Bootstrap", note: "E5", freq: 659.25, icon: "fab fa-bootstrap", color: "text-purple-400", glow: "border-purple-500/40", ring: "rgba(168,85,247,0.4)", category: "Lead Melody" },
  { name: "HTML5 / CSS3", note: "F5", freq: 698.46, icon: "fab fa-html5", color: "text-orange-400", glow: "border-orange-500/40", ring: "rgba(249,115,22,0.4)", category: "Lead Melody" },
  
  { name: "Node.js", note: "G4", freq: 392.00, icon: "fab fa-node-js", color: "text-green-400", glow: "border-green-500/40", ring: "rgba(34,197,94,0.4)", category: "Bass & Harmony" },
  { name: "Nest.js", note: "A4", freq: 440.00, icon: "fas fa-cubes", color: "text-red-400", glow: "border-red-500/40", ring: "rgba(239,68,68,0.4)", category: "Bass & Harmony" },
  { name: "Express.js", note: "B4", freq: 493.88, icon: "fas fa-server", color: "text-slate-300", glow: "border-slate-500/40", ring: "rgba(148,163,184,0.4)", category: "Bass & Harmony" },
  { name: "PHP", note: "C4", freq: 261.63, icon: "fab fa-php", color: "text-indigo-400", glow: "border-indigo-500/40", ring: "rgba(99,102,241,0.4)", category: "Bass & Harmony" },

  { name: "Python", note: "D4", freq: 293.66, icon: "fab fa-python", color: "text-yellow-400", glow: "border-yellow-500/40", ring: "rgba(234,179,8,0.4)", category: "Solo Riff" },
  { name: "JavaScript", note: "E4", freq: 329.63, icon: "fab fa-js", color: "text-yellow-300", glow: "border-amber-500/40", ring: "rgba(245,158,11,0.4)", category: "Solo Riff" },
  { name: "C++ / C", note: "F4", freq: 349.23, icon: "fas fa-file-code", color: "text-blue-400", glow: "border-blue-500/40", ring: "rgba(59,130,246,0.4)", category: "Solo Riff" },
  { name: "NLP / AI", note: "G5", freq: 783.99, icon: "fas fa-brain", color: "text-pink-400", glow: "border-pink-500/40", ring: "rgba(236,72,153,0.4)", category: "Solo Riff" },

  { name: "PostgreSQL", note: "A3", freq: 220.00, icon: "fas fa-database", color: "text-blue-400", glow: "border-blue-500/40", ring: "rgba(37,99,235,0.4)", category: "Drum & Groove" },
  { name: "MongoDB", note: "B3", freq: 246.94, icon: "fas fa-leaf", color: "text-emerald-400", glow: "border-emerald-500/40", ring: "rgba(16,185,129,0.4)", category: "Drum & Groove" },
  { name: "MySQL", note: "C3", freq: 130.81, icon: "fas fa-server", color: "text-amber-400", glow: "border-amber-500/40", ring: "rgba(217,119,6,0.4)", category: "Drum & Groove" },
  { name: "Git / GitHub", note: "D3", freq: 146.83, icon: "fab fa-git-alt", color: "text-orange-500", glow: "border-orange-500/40", ring: "rgba(234,88,12,0.4)", category: "Drum & Groove" }
];

const orbGalaxies = [
  {
    title: "Lead Melody Spheres",
    subtitle: "Front-End & UI Harmonies",
    themeColor: "border-cyan-500/30 text-cyan-400",
    skills: ["ReactJS", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"]
  },
  {
    title: "Bass & Rhythm Spheres",
    subtitle: "Back-End & API Engines",
    themeColor: "border-emerald-500/30 text-emerald-400",
    skills: ["Node.js", "Nest.js", "Express.js", "PHP"]
  },
  {
    title: "Solo Shred Spheres",
    subtitle: "Programming, AI & Core Logic",
    themeColor: "border-yellow-500/30 text-yellow-400",
    skills: ["Python", "JavaScript", "C++ / C", "NLP / AI"]
  },
  {
    title: "Groove Foundation Spheres",
    subtitle: "Databases & DevOps Tools",
    themeColor: "border-blue-500/30 text-blue-400",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Git / GitHub"]
  }
];

const Expertise = () => {
  const [activeChord, setActiveChord] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isJamming, setIsJamming] = useState(true);
  const [isOrbiting, setIsOrbiting] = useState(true);
  const [arpeggiating, setArpeggiating] = useState(false);
  const audioCtxRef = useRef(null);

  // Web Audio API Guitar/Synth string pluck synthesis
  const playGuitarNote = (freq, name) => {
    setActiveChord(name);

    if (!soundEnabled) return;

    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Primary String Oscillator (Pluck)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'triangle'; // Rich plucked timbre
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine'; // Fundamental acoustic resonance
      osc2.frequency.setValueAtTime(freq * 2, now);

      // Pluck Envelope: Instant attack, smooth exponential acoustic decay
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.3, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.2);
      osc2.stop(now + 1.2);
    } catch (e) {
      console.log("Audio waiting for user gesture", e);
    }
  };

  // Arpeggiator effect: Plucks each sphere in a rhythmic musical sequence
  const playArpeggio = () => {
    if (arpeggiating) return;
    setArpeggiating(true);

    techOrbs.forEach((orb, i) => {
      setTimeout(() => {
        playGuitarNote(orb.freq, orb.name);
        if (i === techOrbs.length - 1) {
          setTimeout(() => setArpeggiating(false), 800);
        }
      }, i * 140);
    });
  };

  return (
    <section id="expertise" className="py-20 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Musical Sphere Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
          <span>🎸 3D Spherical Tech Galaxy</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          Musical Tech Spheres
        </h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Hover or tap any 3D spherical orb to pluck genuine guitar chord frequencies across my full-stack universe!
        </p>
      </div>

      {/* 3D Spherical Jamming Cosmic Stage */}
      <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-slate-800/90 shadow-2xl mb-16 overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-xs sm:text-sm font-mono text-slate-300">
              {activeChord ? (
                <span className="text-emerald-400 font-bold">
                  🎸 Plucking Sphere: <span className="text-white">{activeChord}</span>
                </span>
              ) : (
                <span className="text-slate-400">🎸 Touch any Sphere to trigger acoustic chords</span>
              )}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Arpeggiator Button */}
            <button
              onClick={playArpeggio}
              disabled={arpeggiating}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <i className="fas fa-wand-magic-sparkles"></i>
              <span>{arpeggiating ? "Playing Riff..." : "Arpeggiate All Orbs"}</span>
            </button>

            {/* Orbit Motion Toggle */}
            <button
              onClick={() => setIsOrbiting(!isOrbiting)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                isOrbiting 
                  ? "bg-slate-900 border-emerald-500/40 text-emerald-400" 
                  : "bg-slate-900 border-slate-800 text-slate-400"
              }`}
            >
              <i className={`fas ${isOrbiting ? 'fa-circle-notch fa-spin' : 'fa-circle-pause'}`}></i>
              <span>{isOrbiting ? "3D Orbit Active" : "Orbit Paused"}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                soundEnabled 
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400" 
                  : "bg-slate-900 border-slate-800 text-slate-500"
              }`}
            >
              <i className={`fas ${soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
              <span>{soundEnabled ? "Audio ON" : "Muted"}</span>
            </button>
          </div>
        </div>

        {/* Central 3D Spherical Planetary Stage */}
        <div className="relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center my-6">
          {/* Concentric 3D Spherical Orbit Rings */}
          <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-emerald-500/15 pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-teal-500/10 pointer-events-none -z-10"></div>
          <div className="absolute w-[460px] h-[460px] sm:w-[580px] sm:h-[580px] rounded-full border border-indigo-500/10 pointer-events-none -z-10"></div>

          {/* Central Rocker Avatar Sphere */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Pulsing Acoustic Ripples */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-sound-ring -z-10"></div>
            <div className="absolute -inset-6 rounded-full bg-teal-500/10 animate-sound-ring -z-10 [animation-delay:1.2s]"></div>

            {/* Guitarist Orb Stage */}
            <div 
              onClick={() => setIsJamming(!isJamming)}
              title="Click to Toggle Jamming"
              className="w-28 h-28 sm:w-36 sm:h-36 sphere-orb flex flex-col items-center justify-center border-2 border-emerald-500/40 shadow-2xl relative cursor-pointer group"
            >
              <div className={`flex flex-col items-center select-none ${isJamming ? 'animate-rocker' : ''}`}>
                <span className="text-3xl sm:text-4xl drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)]" role="img" aria-label="rocker">
                  🧑‍🎤
                </span>
                <span className="text-3xl sm:text-4xl -mt-2 animate-guitar drop-shadow-[0_8px_12px_rgba(16,185,129,0.6)]" role="img" aria-label="guitar">
                  🎸
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 mt-1 uppercase tracking-wider">
                Heet Jamming
              </span>
            </div>

            {/* Equalizer Visualizer directly under avatar */}
            <div className="flex items-end gap-1 h-8 mt-4 px-3 py-1 bg-slate-950/80 rounded-full border border-slate-800">
              {[18, 30, 14, 34, 22, 32, 16, 26].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-emerald-500 to-teal-400"
                  style={{
                    height: `${h}px`,
                    animation: isJamming ? `equalizerWave 0.8s ease-in-out infinite alternate ${i * 0.1}s` : '6px'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* 3D Orbiting Planetary Spheres Container */}
          <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${isOrbiting ? 'animate-orbit-slow' : ''}`}>
            {techOrbs.map((orb, idx) => {
              const total = techOrbs.length;
              const angle = (idx / total) * 2 * Math.PI;
              // Responsive orbital radius
              const radius = window.innerWidth < 640 ? 150 : 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const isCurrentActive = activeChord === orb.name;

              return (
                <div
                  key={idx}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    position: 'absolute'
                  }}
                  className="z-30"
                >
                  {/* Counter-rotation to keep sphere content upright during orbital spin */}
                  <div className={isOrbiting ? 'animate-counter-orbit-slow' : ''}>
                    <button
                      onClick={() => playGuitarNote(orb.freq, orb.name)}
                      onMouseEnter={() => playGuitarNote(orb.freq, orb.name)}
                      className={`w-14 h-14 sm:w-20 sm:h-20 sphere-orb border flex flex-col items-center justify-center p-1 cursor-pointer transition-all duration-300 relative group ${
                        isCurrentActive 
                          ? 'sphere-orb-active scale-125' 
                          : `${orb.glow} border-slate-700/80`
                      }`}
                    >
                      {/* Top Musical Note Tag */}
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-400 leading-none">
                        ♪ {orb.note}
                      </span>

                      {/* Tech Icon */}
                      <i className={`${orb.icon} text-base sm:text-xl my-0.5 ${orb.color} transition-transform group-hover:scale-125`}></i>

                      {/* Tech Name Inside / Below Sphere */}
                      <span className="text-[8px] sm:text-[9px] font-bold text-white leading-none text-center truncate max-w-[56px] sm:max-w-[70px] group-hover:text-emerald-400">
                        {orb.name}
                      </span>

                      {/* Active glowing ring on interaction */}
                      {isCurrentActive && (
                        <span className="absolute -inset-2 rounded-full border border-emerald-400 animate-ping pointer-events-none"></span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categorized 3D Spherical Clusters (Planetary Sound Systems) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orbGalaxies.map((galaxy, idx) => (
          <div 
            key={idx} 
            className="glass-card rounded-full p-8 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col items-center text-center group shadow-xl"
          >
            {/* Category Title */}
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
              Galaxy 0{idx + 1}
            </span>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {galaxy.title}
            </h4>
            <p className="text-xs text-slate-400 mb-6">{galaxy.subtitle}</p>

            {/* Spherical Orbs Cluster */}
            <div className="grid grid-cols-2 gap-3.5">
              {galaxy.skills.map((skillName, sIdx) => {
                const orbData = techOrbs.find(o => o.name === skillName) || techOrbs[0];
                const isActive = activeChord === orbData.name;

                return (
                  <button
                    key={sIdx}
                    onClick={() => playGuitarNote(orbData.freq, orbData.name)}
                    onMouseEnter={() => playGuitarNote(orbData.freq, orbData.name)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 sphere-orb border flex flex-col items-center justify-center p-1.5 cursor-pointer relative transition-all duration-300 group ${
                      isActive 
                        ? 'sphere-orb-active scale-110' 
                        : `${orbData.glow} border-slate-700/80`
                    }`}
                  >
                    <span className="text-[9px] font-mono font-bold text-emerald-400">
                      ♪ {orbData.note}
                    </span>
                    <i className={`${orbData.icon} text-base my-0.5 ${orbData.color} group-hover:scale-125 transition-transform`}></i>
                    <span className="text-[8px] sm:text-[9px] font-bold text-white text-center truncate max-w-[58px]">
                      {orbData.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
