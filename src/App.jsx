import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowitWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}