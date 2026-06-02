import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const navLinks = ['FEATURES', 'PRICING', 'FAQ', 'SUPPORT', 'SCHOOLS'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-zinc-950/90 border-b border-zinc-900/80 shadow-2xl shadow-black/40' : 'backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900/80'
      }`}>
        <div className="flex items-center space-x-12">
          {/* Brand */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <svg className="w-5 h-5 text-zinc-100 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs font-black tracking-[0.4em] text-zinc-100">NEXIS AI</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] tracking-widest font-semibold text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block border border-zinc-800 bg-zinc-900/40 text-[10px] tracking-widest font-bold text-zinc-200 px-4 py-2 hover:bg-zinc-100 hover:text-black hover:border-zinc-100 transition-all duration-300 rounded-sm">
            BACK TO CHAT
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-zinc-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
            <span className={`block w-5 h-px bg-zinc-300 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}/>
            <span className={`block w-5 h-px bg-zinc-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-xl flex flex-col justify-center px-10 transition-all duration-500 md:hidden ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="space-y-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-3xl font-black tracking-widest text-zinc-500 hover:text-zinc-100 transition-all duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms', transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)', opacity: menuOpen ? 1 : 0, transition: `all 0.4s ease ${i * 60}ms` }}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="mt-16 pt-10 border-t border-zinc-800">
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full border border-zinc-700 text-zinc-200 text-sm tracking-widest font-bold py-4 hover:bg-zinc-100 hover:text-black hover:border-zinc-100 transition-all duration-300 rounded-sm"
          >
            BACK TO CHAT
          </button>
        </div>
      </div>
    </>
  );
}
