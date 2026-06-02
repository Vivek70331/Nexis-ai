import React from 'react';

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
  },
];

const Check = () => (
  <svg className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-950 text-zinc-100 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-2">
          <h2 className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">PRICING</h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Honest pricing. No surprises.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm flex flex-col transition-all duration-300 ${
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

              <div className="mb-8">
                <p className="text-[10px] font-mono tracking-widest text-zinc-500 mb-3">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black tracking-tight text-zinc-100">{plan.price}</span>
                  <span className="text-zinc-500 text-xs font-mono">{plan.period}</span>
                </div>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-zinc-400 text-xs font-light leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

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

        <p className="text-center text-zinc-600 text-[10px] font-mono tracking-widest mt-10">
          ALL PLANS INCLUDE 7-DAY FREE TRIAL · NO CREDIT CARD REQUIRED
        </p>
      </div>
    </section>
  );
}
