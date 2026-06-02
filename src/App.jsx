import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Capabilities from './components/Capabilities';
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Capabilities />
        <Testimonials />
        <Philosophy />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
