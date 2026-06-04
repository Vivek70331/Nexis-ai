import React, { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'FREE',
    price: '₹0',
    period: 'forever',
    desc: 'For students exploring AI-powered learning.',
    features: [
      '10 AI conversations / day',
      'PDF Intelligence (2 docs)',
      'Mock Tests (basic)',
      'Resume Analyzer (1 review)',
      'Community support',
    ],
    cta: 'GET STARTED',
    highlight: false,
    color: 'zinc',
    usagePercent: 20,
  },
  {
    name: 'PRO',
    price: '₹499',
    period: '/month',
    desc: 'For serious students and job seekers.',
    badge: 'MOST POPULAR',
    features: [
      'Unlimited AI conversations',
      'PDF Intelligence (unlimited)',
      'Tech Interview Simulator',
      'Adaptive Mock Tests',
      'Resume Analyzer (unlimited)',
      'Career Predictor',
      'Vision AI & Code & GitHub',
      'Personalised memory system',
    ],
    cta: 'START PRO',
    highlight: true,
    color: 'white',
    usagePercent: 78,
  },
  {
    name: 'TEAM',
    price: '₹299',
    period: '/user/month',
    desc: 'For colleges, coaching centres and teams.',
    features: [
      'Everything in Pro',
      'Admin dashboard',
      'Bulk student management',
      'Progress analytics',
      'Custom branding (optional)',
      'Priority support',
      'Minimum 10 seats',
    ],
    cta: 'CONTACT SALES',
    highlight: false,
    color: 'zinc',
    usagePercent: 55,
  },
];

const comparisonFeatures = [
  { feature: 'AI Conversations', free: '10/day', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'PDF Intelligence', free: '2 docs', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'Mock Tests', free: 'Basic', pro: 'Adaptive', team: 'Adaptive' },
  { feature: 'Resume Analyzer', free: '1 review', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'Interview Simulator', free: false, pro: true, team: true },
  { feature: 'Career Predictor', free: false, pro: true, team: true },
  { feature: 'Vision AI & Code', free: false, pro: true, team: true },
  { feature: 'Memory System', free: false, pro: true, team: true },
  { feature: 'Admin Dashboard', free: false, pro: false, team: true },
  { feature: 'Progress Analytics', free: false, pro: false, team: true },
  { feature: 'Custom Branding', free: false, pro: false, team: true },
  { feature: 'Priority Support', free: false, pro: false, team: true },
];

const valueMetrics = [
  { label: 'Avg. Interview Score Boost', value: 42, suffix: '%', desc: 'after 30 days on Pro' },
  { label: 'Resume Shortlist Rate', value: 3.8, suffix: 'x', decimals: 1, desc: 'vs unassisted applications' },
  { label: 'Time Saved Per Week', value: 8, suffix: 'hrs', desc: 'on prep & documentation' },
  { label: 'Mock Test Accuracy', value: 94, suffix: '%', desc: 'on adaptive assessments' },
];

// Bar chart for plan comparison
function UsageBar({ percent, highlight, animate }) {
  return (
    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-4">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${percent}%` : '0%',
          background: highlight
            ? 'linear-gradient(90deg, #e4e4e7, #ffffff)'
            : 'linear-gradient(90deg, #3f3f46, #71717a)',
          transitionDelay: '300ms',
        }}
      />
    </div>
  );
}

function useCountUp(target, duration = 1600, decimals = 0, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(+(e * target).toFixed(decimals));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, decimals]);
  return count;
}

function ValueCard({ metric, active, index }) {
  const decimals = metric.decimals || 0;
  const count = useCountUp(metric.value, 1600, decimals, active);
  return (
    <div
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms`,
      }}
      className="border border-zinc-800 bg-zinc-900/30 p-6 rounded-sm"
    >
      <div className="text-3xl font-black tracking-tight text-zinc-100 tabular-nums mb-1">
        {decimals > 0 ? count.toFixed(1) : Math.round(count)}{metric.suffix}
      </div>
      <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-1">{metric.label}</div>
      <div className="text-xs text-zinc-600 font-light">{metric.desc}</div>
    </div>
  );
}

// Mini sparkline SVG chart
function SparkLine({ data, color }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 120, h = 36;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h * 0.8 - h * 0.1;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle
        cx={w}
        cy={h - ((data[data.length - 1] - min) / (max - min || 1)) * h * 0.8 - h * 0.1}
        r="2.5"
        fill={color}
      />
    </svg>
  );
}

// Radial progress ring
function RadialRing({ percent, highlight }) {
  const r = 18, circ = 2 * Math.PI * r;
  const [prog, setProg] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setProg(percent), 200); obs.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [percent]);
  return (
    <svg ref={ref} width="48" height="48" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r={r} fill="none" stroke="#27272a" strokeWidth="3" />
      <circle
        cx="24" cy="24" r={r}
        fill="none"
        stroke={highlight ? '#e4e4e7' : '#52525b'}
        strokeWidth="3"
        strokeDasharray={circ}
        strokeDashoffset={circ - (prog / 100) * circ}
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
        style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 400ms' }}
      />
      <text x="24" y="24" textAnchor="middle" dominantBaseline="central" fill={highlight ? '#f4f4f5' : '#71717a'} fontSize="9" fontFamily="monospace" fontWeight="bold">
        {percent}%
      </text>
    </svg>
  );
}

// Check / X icons
const Check = () => (
  <svg className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const Cross = () => (
  <svg className="w-3 h-3 text-zinc-700 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const planSparkData = {
  FREE: [2, 4, 3, 5, 4, 6, 5],
  PRO: [4, 7, 9, 8, 11, 13, 15],
  TEAM: [6, 8, 10, 13, 15, 17, 20],
};

export default function Pricing() {
  const sectionRef = useRef(null);
  const valueRef = useRef(null);
  const [cardsActive, setCardsActive] = useState(false);
  const [valueActive, setValueActive] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setCardsActive(true); obs1.disconnect(); } }, { threshold: 0.1 });
    if (sectionRef.current) obs1.observe(sectionRef.current);

    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setValueActive(true); obs2.disconnect(); } }, { threshold: 0.2 });
    if (valueRef.current) obs2.observe(valueRef.current);

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section id="pricing" className="bg-zinc-950 text-zinc-100 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 space-y-2">
          <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">PRICING</h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Honest pricing. No surprises.
          </h3>
          <p className="text-zinc-500 text-sm font-light max-w-xl pt-1">
            Choose the plan that matches your ambition. Upgrade or cancel anytime — no lock-ins.
          </p>
        </div>

        {/* Plan Cards */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              style={{
                opacity: cardsActive ? 1 : 0,
                transform: cardsActive ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${idx * 120}ms, transform 0.5s ease ${idx * 120}ms`,
              }}
              className={`relative rounded-sm flex flex-col transition-colors duration-300 ${
                plan.highlight
                  ? 'border border-zinc-600 bg-zinc-900/60 p-8'
                  : 'border border-zinc-900 bg-zinc-900/20 p-8 hover:border-zinc-700/60 hover:bg-zinc-900/40'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[9px] font-mono tracking-widest bg-zinc-100 text-zinc-950 px-3 py-1 font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-mono tracking-widest text-zinc-500">{plan.name}</p>
                  <RadialRing percent={plan.usagePercent} highlight={plan.highlight} />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black tracking-tight text-zinc-100">{plan.price}</span>
                  <span className="text-zinc-500 text-xs font-mono">{plan.period}</span>
                </div>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">{plan.desc}</p>
              </div>

              {/* Sparkline growth chart */}
              <div className="mb-5 pb-5 border-b border-zinc-800/60">
                <p className="text-[9px] font-mono tracking-widest text-zinc-600 mb-2">GROWTH TREND</p>
                <SparkLine
                  data={planSparkData[plan.name]}
                  color={plan.highlight ? '#e4e4e7' : '#52525b'}
                />
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-zinc-400 text-xs font-light leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Usage bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] font-mono text-zinc-600 tracking-widest">USER ADOPTION</span>
                  <span className="text-[9px] font-mono text-zinc-500">{plan.usagePercent}%</span>
                </div>
                <UsageBar percent={plan.usagePercent} highlight={plan.highlight} animate={cardsActive} />
              </div>

              <button
                className={`w-full py-3 text-[10px] font-bold tracking-widest rounded-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-zinc-100 text-zinc-950 hover:bg-white'
                    : 'border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-[10px] font-mono tracking-widest mt-8 mb-16">
          ALL PLANS INCLUDE 7-DAY FREE TRIAL · NO CREDIT CARD REQUIRED
        </p>

        {/* Value Metrics Section */}
        <div ref={valueRef} className="mb-16">
          <div className="mb-8">
            <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-2">MEASURABLE IMPACT</h2>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
              Results our Pro users see
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {valueMetrics.map((m, i) => (
              <ValueCard key={i} metric={m} active={valueActive} index={i} />
            ))}
          </div>
        </div>

        {/* Bar Chart — Feature Depth Visual */}
        <div className="mb-16 border border-zinc-900 bg-zinc-900/20 p-8 rounded-sm">
          <div className="mb-6">
            <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-2">FEATURE DEPTH</h2>
            <h3 className="text-lg font-bold tracking-tight text-zinc-100">What each plan unlocks</h3>
          </div>
          <div className="space-y-5">
            {[
              { label: 'AI Conversations', free: 15, pro: 100, team: 100 },
              { label: 'Document Intelligence', free: 20, pro: 100, team: 100 },
              { label: 'Career Tools', free: 10, pro: 90, team: 100 },
              { label: 'Analytics & Insights', free: 0, pro: 60, team: 100 },
              { label: 'Team Management', free: 0, pro: 0, team: 100 },
            ].map((row, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-zinc-400 font-light">{row.label}</span>
                  <div className="flex gap-3">
                    <span className="text-[9px] font-mono text-zinc-600">FREE</span>
                    <span className="text-[9px] font-mono text-zinc-500">PRO</span>
                    <span className="text-[9px] font-mono text-zinc-400">TEAM</span>
                  </div>
                </div>
                <div className="relative h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  {/* Team bar (widest, behind) */}
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      width: cardsActive ? `${row.team}%` : '0%',
                      background: 'linear-gradient(90deg, #3f3f46, #52525b)',
                      transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 80 + 200}ms`,
                    }}
                  />
                  {/* Pro bar */}
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      width: cardsActive ? `${row.pro}%` : '0%',
                      background: 'linear-gradient(90deg, #71717a, #a1a1aa)',
                      transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 80 + 400}ms`,
                    }}
                  />
                  {/* Free bar */}
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      width: cardsActive ? `${row.free}%` : '0%',
                      background: 'linear-gradient(90deg, #a1a1aa, #d4d4d8)',
                      transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 80 + 600}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex gap-6 mt-6">
            {[['#d4d4d8', 'FREE'], ['#a1a1aa', 'PRO'], ['#52525b', 'TEAM']].map(([color, label]) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-3 h-1.5 rounded-full" style={{ background: color }} />
                <span className="text-[9px] font-mono text-zinc-500 tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table Toggle */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-1">FULL COMPARISON</h2>
            <h3 className="text-lg font-bold tracking-tight text-zinc-100">Side-by-side breakdown</h3>
          </div>
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-[10px] font-mono tracking-widest border border-zinc-700 text-zinc-400 px-4 py-2 rounded-sm hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-200"
          >
            {showComparison ? 'HIDE TABLE ↑' : 'SHOW TABLE ↓'}
          </button>
        </div>

        {showComparison && (
          <div className="border border-zinc-900 rounded-sm overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-6 text-[10px] font-mono tracking-widest text-zinc-500 font-normal">FEATURE</th>
                  {['FREE', 'PRO', 'TEAM'].map((p) => (
                    <th key={p} className={`py-4 px-6 text-[10px] font-mono tracking-widest font-bold text-center ${p === 'PRO' ? 'text-zinc-100 bg-zinc-900/40' : 'text-zinc-500'}`}>
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className={`border-b border-zinc-900/60 ${i % 2 === 0 ? 'bg-zinc-900/10' : ''}`}>
                    <td className="py-3 px-6 text-zinc-400 font-light">{row.feature}</td>
                    {['free', 'pro', 'team'].map((key) => (
                      <td key={key} className={`py-3 px-6 text-center ${key === 'pro' ? 'bg-zinc-900/40' : ''}`}>
                        {typeof row[key] === 'boolean' ? (
                          row[key]
                            ? <span className="flex justify-center"><Check /></span>
                            : <span className="flex justify-center"><Cross /></span>
                        ) : (
                          <span className="text-zinc-400 font-light">{row[key]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom CTA strip */}
        <div className="mt-16 border border-zinc-800 bg-zinc-900/20 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-100 tracking-tight">Not sure which plan fits you?</p>
            <p className="text-xs text-zinc-500 font-light mt-0.5">Talk to us — we'll help you find the right fit in under 5 minutes.</p>
          </div>
          <button className="text-[10px] font-bold tracking-widest border border-zinc-600 text-zinc-300 px-8 py-3 rounded-sm hover:bg-zinc-800 hover:text-white hover:border-zinc-400 transition-all duration-200 whitespace-nowrap">
            TALK TO US →
          </button>
        </div>
      </div>
    </section>
  );
}
