import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs py-20 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-xs font-black tracking-[0.3em] text-zinc-100">NEXIS AI</h3>
          </div>
          <p className="text-zinc-500 leading-relaxed max-w-sm font-light">
            An advanced AI co-pilot for students, developers, and career-driven individuals. Built in India for the world.
          </p>
          <div className="flex gap-4 pt-2">
            {['TWITTER', 'LINKEDIN', 'GITHUB'].map(s => (
              <a key={s} href="#" className="text-[9px] font-mono tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-zinc-200 text-[10px] font-bold uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li><a href="#" className="hover:text-zinc-100 transition-colors">About Us</a></li>
            <li><a href="#pricing" className="hover:text-zinc-100 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-zinc-100 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-zinc-100 transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-200 text-[10px] font-bold uppercase tracking-widest mb-4">Policy</h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li><a href="#" className="hover:text-zinc-100 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-zinc-100 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-200 text-[10px] font-bold uppercase tracking-widest mb-4">Support</h4>
          <p className="text-zinc-300 font-mono text-xs tracking-wider mb-2">+91 97124 77777</p>
          <a href="mailto:support@nexisai.in" className="text-zinc-500 hover:text-zinc-300 transition-colors">support@nexisai.in</a>
          <div className="mt-4">
            <a href="#faq" className="text-[9px] font-mono tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors">VIEW FAQ →</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] font-mono tracking-widest text-zinc-600">
        <p>© 2026 NEXIS AI SYSTEMS. ALL RIGHTS RESERVED.</p>
        <p>MADE WITH ♥ IN INDIA</p>
      </div>
    </footer>
  );
}
