import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50000, suffix: '+', label: 'STUDENTS ACTIVE', prefix: '' },
  { value: 2.4, suffix: 'M+', label: 'PROBLEMS SOLVED', prefix: '' },
  { value: 4.9, suffix: '', label: 'AVERAGE RATING', prefix: '★ ' },
  { value: 97, suffix: '%', label: 'PLACEMENT RATE', prefix: '' },
];

function useCountUp(target, duration = 1800, decimals = 0, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(+(eased * target).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, decimals]);

  return count;
}

function StatCard({ stat, active, index }) {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const count = useCountUp(stat.value, 1800, decimals, active);
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
      className="border-l border-zinc-800 pl-8 first:border-l-0 first:pl-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
    >
      <p className="text-4xl md:text-5xl font-black tracking-tight text-zinc-100 tabular-nums">
        {stat.prefix}{decimals > 0 ? count.toFixed(1) : Math.round(count)}{stat.suffix}
      </p>
      <p className="text-[9px] font-mono tracking-widest text-zinc-500 mt-2">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-950 border-t border-b border-zinc-900/60 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">BY THE NUMBERS</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
