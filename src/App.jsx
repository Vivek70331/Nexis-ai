import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowitWorks'; // Changed 'HowItWorks' to 'HowitWorks'
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
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}