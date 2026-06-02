import React from 'react';

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-32 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Subtle grid pattern background */}
        <div className="relative rounded-sm border border-zinc-800 overflow-hidden">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 text-center py-24 px-6">
            <span className="inline-block text-[9px] font-mono tracking-[0.3em] text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full mb-8">
              START IN 30 SECONDS
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-100 mb-6 leading-none">
              Your sharpest version<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">starts today.</span>
            </h2>

            <p className="text-zinc-400 text-base font-light max-w-lg mx-auto mb-12 leading-relaxed">
              No credit card. No setup. Just upload your goal and let Nexis build the rest.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-zinc-100 text-zinc-950 font-bold text-xs tracking-wider px-10 py-4 hover:bg-white transition-all duration-200 rounded-sm shadow-2xl shadow-white/10">
                GET STARTED FREE
              </button>
              <button className="border border-zinc-700 text-zinc-300 text-xs tracking-wider font-semibold px-10 py-4 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-200 rounded-sm">
                VIEW PRICING →
              </button>
            </div>

            <p className="text-zinc-600 text-[10px] font-mono tracking-widest mt-8">
              7-DAY FREE TRIAL ON ALL PAID PLANS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
