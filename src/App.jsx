import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-white font-semibold">FANIABELLA LTD</p>
          <p className="text-sm mt-1">“Restoring Health, One Step at a Time”</p>
          <p className="text-sm mt-2">70 Spackmans Way, Slough, SL1 2SB, England, UK</p>
          <p className="text-xs mt-2">SIC: 86900 — Other human health activities</p>
        </div>
        <div className="md:text-right text-sm">
          <a
            href={`https://wa.me/447508519328?text=${encodeURIComponent("Hello FANIABELLA LTD, I'd like to book a care service.")}`}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-lg"
            target="_blank"
            rel="noreferrer"
          >
            Book via WhatsApp
          </a>
          <p className="mt-3 opacity-80">
            © {new Date().getFullYear()} FANIABELLA LTD. All rights reserved. • Privacy • Terms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
