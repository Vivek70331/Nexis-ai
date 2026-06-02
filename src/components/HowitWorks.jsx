import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload your resume or describe your goal',
    desc: 'Drop in a PDF, paste a GitHub link, or simply type what you want to achieve. Nexis understands context from any format.',
    detail: 'Supports PDFs, code repos, images, and plain text',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI builds your plan',
    desc: 'Nexis analyses your input and assembles a personalised plan — interview questions, study modules, resume tweaks, or code reviews.',
    detail: 'Adaptive to your skill level and timeline',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Track your progress',
    desc: 'Every session is remembered. Weak spots get more attention. You get sharper with every interaction — the AI improves your plan as you grow.',
    detail: 'Memory-first system that learns your patterns',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
            }, i * 150);
            o.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  return (
    <section id="how-it-works" className="bg-zinc-950 text-zinc-100 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-2">
          <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">HOW IT WORKS</h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Three steps. Zero friction.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0"/>

          {steps.map((step, i) => (
            <div
              key={i}
              ref={el => refs.current[i] = el}
              style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
              className="relative z-10 flex flex-col items-start lg:items-center text-center lg:px-10 pb-12 lg:pb-0"
            >
              {/* Step number circle */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 mb-0 group-hover:border-zinc-600 transition-colors">
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[8px] font-mono text-zinc-500">
                  {step.number}
                </span>
              </div>

              <h4 className="text-sm font-bold tracking-wide text-zinc-100 mb-3 lg:text-center text-left">{step.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-light mb-4 lg:text-center text-left max-w-xs">{step.desc}</p>
              <span className="text-[9px] font-mono tracking-widest text-zinc-600 border border-zinc-800 px-2 py-1 rounded">{step.detail}</span>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-zinc-800 mt-8 ml-0"/>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}