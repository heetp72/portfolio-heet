import React, { useEffect, useState } from 'react';

const BackgroundGlow = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300">
      {/* Interactive Mouse Spotlight Glow */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full blur-3xl opacity-30 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      ></div>

      {/* Ambient Moving Aurora Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[140px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="fixed top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/05 blur-[100px]"></div>
    </div>
  );
};

export default BackgroundGlow;
