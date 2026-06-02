import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  { year: '2023', label: 'Founded in Bangalore with a single mission: make world-class AI accessible to every Indian student.' },
  { year: 'Q1 2024', label: 'Launched PDF Intelligence and Mock Tests. Reached 5,000 active users in 60 days.' },
  { year: 'Q3 2024', label: 'Introduced Tech Interview Simulator. First batch of users placed at FAANG companies.' },
  { year: '2025', label: 'Crossed 50,000 students. Launched Team plan for institutions. Series A closed.' },
];

const values = [
  { label: 'STUDENT-FIRST', desc: 'Every decision starts with one question: does this make a student\'s life better?' },
  { label: 'RADICAL HONESTY', desc: 'We tell you what\'s wrong with your resume. Your AI coach doesn\'t sugarcoat.' },
  { label: 'PRIVACY BY DESIGN', desc: 'Your data is yours. We never train on it. Delete it anytime, instantly.' },
];

export default function Philosophy() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-950 text-zinc-100 py-32 border-t border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6">

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">OUR PHILOSOPHY</h2>
            <blockquote className="text-2xl md:text-4xl font-light tracking-tight text-zinc-100 leading-tight max-w-xl">
              "Intelligence should be invisible yet omnipresent."
            </blockquote>
            <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-md">
              We believe every student deserves the same AI advantage as the top 1%. Nexis was built to close that gap — not with gimmicks, but with tools that actually make you sharper, faster, and more employable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-l border-zinc-800 pl-8 lg:pl-16">
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-zinc-100">99.8%</p>
              <p className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">SYSTEM ACCURACY</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-zinc-100">10ms</p>
              <p className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">RESPONSE LATENCY</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-zinc-100">8</p>
              <p className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">CORE TOOLS</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-zinc-100">50K+</p>
              <p className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">ACTIVE STUDENTS</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-10">MILESTONES</h3>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800"/>
            <div className="space-y-10 pl-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
                  }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-600"/>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1">{m.year}</span>
                  <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-2xl">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-10">TEAM VALUES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 100 + 300}ms, transform 0.5s ease ${i * 100 + 300}ms`,
                }}
                className="border-t border-zinc-800 pt-6"
              >
                <p className="text-[10px] font-black tracking-widest text-zinc-200 mb-2">{v.label}</p>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
