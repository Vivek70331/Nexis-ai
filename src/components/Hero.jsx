import React, { useState, useEffect } from 'react';

const PHRASES = [
  'Practice interviews.',
  'Read smarter.',
  'Code faster.',
  'Ace your exams.',
  'Build your career.',
];

export default function Hero() {
  const pillars = ['ADAPTIVE PRACTICE', 'PDF INTELLIGENCE', 'CODE CO-PILOT', 'VISION AI', 'CAREER PATH', 'PRIVACY FIRST'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex(p => (p + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section className="relative bg-zinc-950 text-zinc-100 pt-16 pb-12 overflow-hidden border-b border-zinc-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-25 grayscale filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950 z-10"/>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Hero core */}
        <div className="text-center my-24 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-xl">
            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-ping"/>
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">PLATFORM CORE SYSTEM v4.0.0</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 py-2">
            NEXIS AI
          </h1>

          {/* Typewriter subtitle */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-zinc-400 ml-0.5 align-middle animate-pulse"/>
            </p>
          </div>

          <p className="text-zinc-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            An advanced cognitive architecture engineered to build, evaluate, and scale human potential.
          </p>

          <div className="flex justify-center items-center gap-4 pt-4">
            <button className="bg-zinc-100 text-zinc-950 font-bold text-xs tracking-wider px-8 py-3.5 hover:bg-white transition-all duration-200 rounded-sm shadow-lg shadow-white/10">
              START FREE
            </button>
            <button className="border border-zinc-700 bg-zinc-900/60 backdrop-blur-md font-semibold text-xs tracking-wider px-8 py-3.5 hover:bg-zinc-800 hover:text-white transition-all duration-200 rounded-sm">
              WATCH DEMO
            </button>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-20 border-t border-zinc-800/60 pt-16">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-zinc-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300">INTELLIGENCE</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">Systems that integrate seamlessly into the human experience.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-zinc-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7s0 4 8 10z"/></svg>
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300">PRECISION</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">Clinical efficiency meets sophisticated AI architecture.</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-zinc-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300">IMPACT</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">High-performance tools for the world's leading minds.</p>
          </div>
        </div>

        {/* Pillars bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-800/50 p-px rounded-sm border border-zinc-800/80 mt-20 backdrop-blur-sm">
          {pillars.map((pillar) => (
            <div key={pillar} className="text-center py-4 bg-zinc-950/90 hover:bg-zinc-900/80 transition-colors duration-200 cursor-pointer">
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 font-medium">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
