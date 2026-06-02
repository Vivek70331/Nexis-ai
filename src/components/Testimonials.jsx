import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Nexis completely changed how I prep for interviews. The AI adapts to exactly where I'm weak — I got my SDE-2 offer at Google after 3 weeks.",
    name: 'ARJUN MEHTA',
    role: 'Software Engineer, Google',
    initials: 'AM',
  },
  {
    quote: "I used to dread reading research papers. Now I chat with them. PDF Intelligence saves me 4 hours every single week.",
    name: 'SHREYA KAPOOR',
    role: 'PhD Candidate, IISc Bangalore',
    initials: 'SK',
  },
  {
    quote: "The mock tests are brutally accurate. It found gaps in my OS knowledge that I didn't even know existed. Cleared GATE with 98.7 percentile.",
    name: 'ROHIT DESAI',
    role: 'MTech Student, IIT Bombay',
    initials: 'RD',
  },
  {
    quote: "Career Predictor mapped out a path from data analyst to ML engineer. Three months later, I have the offer letter to prove it works.",
    name: 'PRIYA NAIR',
    role: 'ML Engineer, Swiggy',
    initials: 'PN',
  },
  {
    quote: "Pasted my entire codebase link. Nexis explained the architecture, flagged three bugs, and suggested a refactor — all in under 2 minutes.",
    name: 'DANISH KHAN',
    role: 'Full Stack Developer, Razorpay',
    initials: 'DK',
  },
  {
    quote: "My resume was getting rejected constantly. After one session with Resume Analyzer I had 6 interview calls in a week. The ATS feedback is gold.",
    name: 'ANANYA SINGH',
    role: 'Product Manager, Zepto',
    initials: 'AS',
  },
];

const LOGOS = ['IIT BOMBAY', 'IISc', 'IIT DELHI', 'NIT TRICHY', 'BITS PILANI', 'IIM AHMEDABAD'];

export default function Testimonials() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = refs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 70);
            o.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  return (
    <section id="testimonials" className="bg-zinc-950 text-zinc-100 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">SOCIAL PROOF</h2>
            <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
              Students don't lie.
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-zinc-100 font-bold text-sm">4.9</span>
            <span className="text-zinc-500 text-xs font-mono">/ 50,000+ students</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={el => refs.current[i] = el}
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
              className="bg-zinc-900/20 border border-zinc-900 p-6 rounded-sm hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Quote marks */}
              <span className="text-zinc-700 text-4xl font-serif leading-none select-none">"</span>
              <p className="text-zinc-300 text-sm leading-relaxed font-light flex-1 -mt-4">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-900">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[9px] font-bold text-zinc-400 tracking-wider flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-zinc-200">{t.name}</p>
                  <p className="text-[9px] font-mono text-zinc-500 tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by logos */}
        <div className="border-t border-zinc-900 pt-12">
          <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-600 text-center mb-8 uppercase">Trusted by students from</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {LOGOS.map((logo) => (
              <div key={logo} className="text-center">
                <span className="text-[9px] font-black tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors duration-200 cursor-default">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
