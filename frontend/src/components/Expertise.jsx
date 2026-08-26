import React, { useState, useEffect, useRef, useMemo } from 'react';

// Musical instrument presets with unique emojis, roles, and synthesis timbres
const instrumentModes = [
  {
    id: "guitar",
    name: "Lead Guitar",
    emoji: "🎸",
    avatar: "🧑‍🎤",
    avatarAnim: "animate-rocker",
    instrumentAnim: "animate-guitar",
    role: "Electric Riffs & Solo Shreds",
    themeColor: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.35)",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    waveType: "triangle"
  },
  {
    id: "keys",
    name: "Piano & Synth",
    emoji: "🎹",
    avatar: "🧑‍💻",
    avatarAnim: "animate-rocker",
    instrumentAnim: "animate-keys",
    role: "Harmonic Chords & Melodies",
    themeColor: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99,102,241,0.35)",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    waveType: "sine"
  },
  {
    id: "drums",
    name: "Live Drums",
    emoji: "🥁",
    avatar: "🦹‍♂️",
    avatarAnim: "animate-rocker",
    instrumentAnim: "animate-drum",
    role: "Punchy Beats & Groove Foundation",
    themeColor: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.35)",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    waveType: "sawtooth"
  },
  {
    id: "sax",
    name: "Jazz Saxophone",
    emoji: "🎷",
    avatar: "🧙‍♂️",
    avatarAnim: "animate-rocker",
    instrumentAnim: "animate-sax",
    role: "Soulful Brass & Expression",
    themeColor: "from-yellow-400 to-amber-500",
    glowColor: "rgba(234,179,8,0.35)",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    waveType: "triangle"
  },
  {
    id: "dj",
    name: "DJ Producer",
    emoji: "🎧",
    avatar: "👨‍🚀",
    avatarAnim: "animate-rocker",
    instrumentAnim: "animate-dj",
    role: "Electronic Drops & Sound Design",
    themeColor: "from-pink-500 to-rose-500",
    glowColor: "rgba(236,72,153,0.35)",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    waveType: "square"
  }
];

// Tech Stack items with musical notes, frequencies, and icons
const initialTechItems = [
  { name: "ReactJS", note: "C5", freq: 523.25, icon: "fab fa-react", color: "text-cyan-400", glow: "border-cyan-500/60 shadow-cyan-500/30", category: "Frontend" },
  { name: "Node.js", note: "G4", freq: 392.00, icon: "fab fa-node-js", color: "text-green-400", glow: "border-green-500/60 shadow-green-500/30", category: "Backend" },
  { name: "Nest.js", note: "A4", freq: 440.00, icon: "fas fa-cubes", color: "text-red-400", glow: "border-red-500/60 shadow-red-500/30", category: "Backend" },
  { name: "Python", note: "D4", freq: 293.66, icon: "fab fa-python", color: "text-yellow-400", glow: "border-yellow-500/60 shadow-yellow-500/30", category: "AI & Logic" },
  { name: "JavaScript", note: "E4", freq: 329.63, icon: "fab fa-js", color: "text-yellow-300", glow: "border-amber-500/60 shadow-amber-500/30", category: "Languages" },
  { name: "PostgreSQL", note: "A3", freq: 220.00, icon: "fas fa-database", color: "text-blue-400", glow: "border-blue-500/60 shadow-blue-500/30", category: "Database" },
  { name: "MongoDB", note: "B3", freq: 246.94, icon: "fas fa-leaf", color: "text-emerald-400", glow: "border-emerald-500/60 shadow-emerald-500/30", category: "Database" },
  { name: "PHP", note: "C4", freq: 261.63, icon: "fab fa-php", color: "text-indigo-400", glow: "border-indigo-500/60 shadow-indigo-500/30", category: "Backend" },
  { name: "Tailwind CSS", note: "D5", freq: 587.33, icon: "fab fa-css3-alt", color: "text-teal-400", glow: "border-teal-500/60 shadow-teal-500/30", category: "Frontend" },
  { name: "Bootstrap", note: "E5", freq: 659.25, icon: "fab fa-bootstrap", color: "text-purple-400", glow: "border-purple-500/60 shadow-purple-500/30", category: "Frontend" },
  { name: "MySQL", note: "C3", freq: 130.81, icon: "fas fa-server", color: "text-amber-400", glow: "border-amber-500/60 shadow-amber-500/30", category: "Database" },
  { name: "C++", note: "G4", freq: 392.00, icon: "fas fa-file-code", color: "text-blue-400", glow: "border-blue-500/60 shadow-blue-500/30", category: "Languages" },
  { name: "C", note: "A4", freq: 440.00, icon: "fas fa-code", color: "text-indigo-300", glow: "border-indigo-500/60 shadow-indigo-500/30", category: "Languages" },
  { name: "HTML5", note: "F5", freq: 698.46, icon: "fab fa-html5", color: "text-orange-400", glow: "border-orange-500/60 shadow-orange-500/30", category: "Frontend" },
  { name: "CSS3", note: "G5", freq: 783.99, icon: "fab fa-css3", color: "text-blue-400", glow: "border-blue-500/60 shadow-blue-500/30", category: "Frontend" },
  { name: "Express.js", note: "B4", freq: 493.88, icon: "fas fa-network-wired", color: "text-slate-300", glow: "border-slate-500/60 shadow-slate-500/30", category: "Backend" },
  { name: "NLP / AI", note: "B4", freq: 493.88, icon: "fas fa-brain", color: "text-pink-400", glow: "border-pink-500/60 shadow-pink-500/30", category: "AI & Logic" },
  { name: "Git / GitHub", note: "D3", freq: 146.83, icon: "fab fa-git-alt", color: "text-orange-500", glow: "border-orange-500/60 shadow-orange-500/30", category: "Tools" },
  { name: "XAMPP", note: "E3", freq: 164.81, icon: "fas fa-microchip", color: "text-orange-400", glow: "border-orange-500/60 shadow-orange-500/30", category: "Tools" },
  { name: "REST APIs", note: "F4", freq: 349.23, icon: "fas fa-plug", color: "text-teal-300", glow: "border-teal-500/60 shadow-teal-500/30", category: "Backend" }
];

const orbGalaxies = [
  {
    title: "Lead Melody Spheres",
    subtitle: "Front-End & UI Harmonies",
    themeColor: "border-cyan-500/30 text-cyan-400",
    skills: ["ReactJS", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
  },
  {
    title: "Bass & Rhythm Spheres",
    subtitle: "Back-End & API Engines",
    themeColor: "border-emerald-500/30 text-emerald-400",
    skills: ["Node.js", "Nest.js", "Express.js", "PHP", "REST APIs"]
  },
  {
    title: "Solo Shred Spheres",
    subtitle: "Programming, AI & Core Logic",
    themeColor: "border-yellow-500/30 text-yellow-400",
    skills: ["Python", "JavaScript", "C++", "C", "NLP / AI"]
  },
  {
    title: "Groove Foundation Spheres",
    subtitle: "Databases & DevOps Tools",
    themeColor: "border-blue-500/30 text-blue-400",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Git / GitHub", "XAMPP"]
  }
];

const Expertise = () => {
  const [selectedInstrument, setSelectedInstrument] = useState(instrumentModes[0]);
  const [activeChord, setActiveChord] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isJamming, setIsJamming] = useState(true);
  const [arpeggiating, setArpeggiating] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const containerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // 3D Sphere dynamic positions and velocity state
  const mousePosRef = useRef({ x: 0, y: 0, active: false });
  const velocityRef = useRef({ x: 0.002, y: 0.003 });
  const [sphereNodes, setSphereNodes] = useState([]);

  // Initialize equidistant 3D coordinates using Fibonacci Sphere distribution
  const initialPoints = useMemo(() => {
    const N = initialTechItems.length;
    const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 225;

    return initialTechItems.map((item, i) => {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;

      return {
        ...item,
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        origRadius: radius
      };
    });
  }, []);

  // Web Audio API Multi-Instrument synthesis
  const playInstrumentNote = (freq, name) => {
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
      const wave = selectedInstrument.waveType;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = wave;
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 1.5, now);

      if (selectedInstrument.id === 'drums') {
        osc1.frequency.exponentialRampToValueAtTime(45, now + 0.3);
        gainNode.gain.setValueAtTime(0.4, now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      } else if (selectedInstrument.id === 'keys') {
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.03);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
      } else if (selectedInstrument.id === 'dj') {
        osc1.frequency.setValueAtTime(freq * 1.2, now);
        osc1.frequency.linearRampToValueAtTime(freq * 0.8, now + 0.2);
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      } else {
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.28, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      }

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.5);
      osc2.stop(now + 1.5);
    } catch (e) {
      console.log("Audio waiting for gesture", e);
    }
  };

  // Arpeggiator effect: Plucks each sphere in a rhythmic sequence
  const playArpeggio = () => {
    if (arpeggiating) return;
    setArpeggiating(true);

    initialTechItems.forEach((orb, i) => {
      setTimeout(() => {
        playInstrumentNote(orb.freq, orb.name);
        if (i === initialTechItems.length - 1) {
          setTimeout(() => setArpeggiating(false), 800);
        }
      }, i * 120);
    });
  };

  // 3D Sphere Animation Loop responding smoothly to mouse movement
  useEffect(() => {
    let animationFrameId;
    let points = [...initialPoints];

    const animate = () => {
      const D = 450; // Perspective depth
      let targetVx = 0.0015;
      let targetVy = 0.0025;

      if (mousePosRef.current.active) {
        targetVx = mousePosRef.current.y * 0.012;
        targetVy = -mousePosRef.current.x * 0.012;
      }

      velocityRef.current.x += (targetVx - velocityRef.current.x) * 0.06;
      velocityRef.current.y += (targetVy - velocityRef.current.y) * 0.06;

      const rx = velocityRef.current.x;
      const ry = velocityRef.current.y;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Rotate points in 3D
      points = points.map((p) => {
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;

        const x2 = p.x * cosY + z1 * sinY;
        const z2 = -p.x * sinY + z1 * cosY;

        // Balanced 3D scaling and opacity floor
        const scale = Math.max(0.85, Math.min(1.18, D / (D - z2)));
        const alpha = Math.min(1, Math.max(0.58, (z2 + p.origRadius) / (2 * p.origRadius) * 0.42 + 0.58));
        const zIndex = Math.round(z2 + p.origRadius);

        return {
          ...p,
          x: x2,
          y: y1,
          z: z2,
          projX: x2 * scale,
          projY: y1 * scale,
          scale,
          alpha,
          zIndex
        };
      });

      setSphereNodes([...points]);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [initialPoints]);

  // Mouse / Touch interaction handlers for the 3D Sphere
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mousePosRef.current = { x, y, active: true };
  };

  const handleMouseLeave = () => {
    mousePosRef.current.active = false;
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (touch.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mousePosRef.current = { x, y, active: true };
  };

  return (
    <section id="expertise" className="py-20 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Multi-Instrument Stage Spotlight */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700"
        style={{ background: selectedInstrument.glowColor }}
      ></div>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
          <span>{selectedInstrument.emoji} Multi-Instrument Tech Orchestra</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          Interactive Skill Sphere
        </h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Move your cursor to steer the 3D spherical globe in 360° space. Every tech orb has a clean, bold label!
        </p>
      </div>

      {/* Interactive Musician Instrument Selector Deck */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 p-2 bg-slate-900/90 rounded-2xl max-w-3xl mx-auto border border-slate-800 backdrop-blur-xl mb-10 shadow-2xl">
        {instrumentModes.map((inst) => (
          <button
            key={inst.id}
            onClick={() => {
              setSelectedInstrument(inst);
              playInstrumentNote(440, inst.name);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              selectedInstrument.id === inst.id
                ? `bg-gradient-to-r ${inst.themeColor} text-slate-950 shadow-lg shadow-emerald-500/20 scale-105 font-bold`
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <span className="text-base">{inst.emoji}</span>
            <span>{inst.name}</span>
          </button>
        ))}
      </div>

      {/* 3D Sphere Arena Container */}
      <div className="relative glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl mb-16 overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-xs sm:text-sm font-mono text-slate-300">
              {activeChord ? (
                <span className="text-emerald-400 font-bold">
                  {selectedInstrument.emoji} Plucked: <strong className="text-white text-sm bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{activeChord}</strong> ({selectedInstrument.name})
                </span>
              ) : (
                <span className="text-slate-400">✨ Move cursor to steer • Click any sphere to jam</span>
              )}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Arpeggio Sequence */}
            <button
              onClick={playArpeggio}
              disabled={arpeggiating}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <i className="fas fa-wand-magic-sparkles"></i>
              <span>{arpeggiating ? "Orchestrating..." : "Play All Chords"}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
                soundEnabled 
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400" 
                  : "bg-slate-900 border-slate-800 text-slate-500"
              }`}
            >
              <i className={`fas ${soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
              <span>{soundEnabled ? "Sound ON" : "Muted"}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["All", "Frontend", "Backend", "AI & Logic", "Database", "Languages", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20 scale-105"
                  : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Interactive Rotating Sphere Canvas Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseLeave}
          className="relative min-h-[500px] sm:min-h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        >
          {/* Ambient Cosmic Rings */}
          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-emerald-500/15 pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full border border-teal-500/10 pointer-events-none -z-10"></div>

          {/* Central Active Musician Avatar (Core of the Sphere) */}
          <div className="relative z-10 flex flex-col items-center pointer-events-auto">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-sound-ring -z-10"></div>
            <div className="absolute -inset-6 rounded-full bg-teal-500/10 animate-sound-ring -z-10 [animation-delay:1.2s]"></div>

            <div 
              onClick={() => setIsJamming(!isJamming)}
              title="Click to Toggle Jamming"
              className="w-24 h-24 sm:w-32 sm:h-32 sphere-orb flex flex-col items-center justify-center border-2 border-emerald-500/40 shadow-2xl relative cursor-pointer group hover:scale-105 transition-transform"
            >
              <div className={`flex flex-col items-center select-none ${isJamming ? selectedInstrument.avatarAnim : ''}`}>
                <span className="text-2xl sm:text-4xl drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)]" role="img" aria-label="musician">
                  {selectedInstrument.avatar}
                </span>
                <span className={`text-2xl sm:text-4xl -mt-2 ${selectedInstrument.instrumentAnim} drop-shadow-[0_8px_12px_rgba(16,185,129,0.6)]`} role="img" aria-label="instrument">
                  {selectedInstrument.emoji}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-emerald-400 mt-1 uppercase tracking-wider">
                {selectedInstrument.name}
              </span>
            </div>

            {/* Pulsing Audio Equalizer */}
            <div className="flex items-end gap-1 h-7 mt-3 px-3 py-1 bg-slate-950/90 rounded-full border border-slate-800 shadow-lg">
              {[14, 26, 12, 30, 18, 28, 14, 22].map((h, i) => (
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

          {/* 3D Sphere Interactive Orbiting Nodes: Icon-based Circular Spheres with Crisp Visible Labels */}
          {sphereNodes.map((orb, idx) => {
            const isMatchFilter = activeFilter === "All" || orb.category === activeFilter;
            const isCurrentActive = activeChord === orb.name;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  transform: `translate3d(${orb.projX}px, ${orb.projY}px, 0px) scale(${orb.scale * (isCurrentActive ? 1.2 : 1)})`,
                  opacity: isMatchFilter ? orb.alpha : 0.2,
                  zIndex: isCurrentActive ? 999 : orb.zIndex,
                  pointerEvents: isMatchFilter ? 'auto' : 'none',
                  transition: 'opacity 0.3s ease'
                }}
                className="flex flex-col items-center"
              >
                {/* 3D Circular Spherical Orb */}
                <button
                  onClick={() => playInstrumentNote(orb.freq, orb.name)}
                  onMouseEnter={() => playInstrumentNote(orb.freq, orb.name)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 sphere-orb border flex flex-col items-center justify-center p-1 cursor-pointer transition-all duration-200 relative group shadow-2xl ${
                    isCurrentActive 
                      ? 'sphere-orb-active scale-125 border-emerald-400 bg-slate-900 shadow-emerald-500/40 ring-2 ring-emerald-400' 
                      : `${orb.glow} border-slate-700/90 bg-slate-950/90 hover:border-emerald-400 hover:scale-125`
                  }`}
                >
                  {/* Top-Right Musical Note Badge */}
                  <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-slate-950 border border-slate-700 text-[8px] sm:text-[9px] font-mono font-bold text-emerald-400 shadow-md">
                    ♪ {orb.note}
                  </span>

                  {/* Prominent Tech Icon */}
                  <i className={`${orb.icon} text-xl sm:text-2xl ${orb.color} transition-transform group-hover:scale-110 drop-shadow-md`}></i>

                  {/* Active glowing pulse ring */}
                  {isCurrentActive && (
                    <span className="absolute -inset-2 rounded-full border-2 border-emerald-400 animate-ping pointer-events-none"></span>
                  )}
                </button>

                {/* Bold, Crystal Clear, Fully Visible Text Label */}
                <span className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wide whitespace-nowrap border shadow-lg transition-all duration-200 ${
                  isCurrentActive
                    ? "bg-slate-900 text-emerald-400 border-emerald-500/60 shadow-emerald-500/20 scale-105"
                    : "bg-slate-950/95 text-white border-slate-800/90 hover:text-emerald-400 hover:border-emerald-500/40"
                }`}>
                  {orb.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categorized 3D Spherical Galaxies Deck with Icon Spheres and Clear Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {orbGalaxies.map((galaxy, idx) => (
          <div 
            key={idx} 
            className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col items-center text-center group shadow-xl"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1">
              Galaxy 0{idx + 1}
            </span>
            <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              {galaxy.title}
            </h4>
            <p className="text-xs text-slate-400 mb-6">{galaxy.subtitle}</p>

            {/* Circular Icon Spheres with Text Label Grid */}
            <div className="grid grid-cols-2 gap-3.5 w-full">
              {galaxy.skills.map((skillName, sIdx) => {
                const orbData = initialTechItems.find(o => o.name === skillName) || initialTechItems[0];
                const isActive = activeChord === orbData.name;

                return (
                  <button
                    key={sIdx}
                    onClick={() => playInstrumentNote(orbData.freq, orbData.name)}
                    onMouseEnter={() => playInstrumentNote(orbData.freq, orbData.name)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className={`w-14 h-14 sphere-orb border flex items-center justify-center relative transition-all duration-200 ${
                      isActive 
                        ? 'sphere-orb-active scale-110 border-emerald-400' 
                        : `${orbData.glow} border-slate-700/80 hover:scale-110 hover:border-emerald-400`
                    }`}>
                      <i className={`${orbData.icon} text-xl ${orbData.color}`}></i>
                      <span className="absolute -top-1 -right-1 px-1 rounded-full bg-slate-950 text-[8px] font-mono font-bold text-emerald-400 border border-slate-700">
                        ♪
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold text-white mt-1.5 text-center truncate max-w-[80px] group-hover:text-emerald-400">
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
