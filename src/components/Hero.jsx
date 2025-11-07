import React from 'react';
import Spline from '@splinetool/react-spline';

const WHATSAPP_NUMBER = '447508519328';
const WA_TEXT = encodeURIComponent("Hello FANIABELLA LTD, I'd like to book a care service.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M12 7.5c1.2-1.7 3.1-2.8 5.3-2.8 2.8 0 5 2.2 5 5 0 4.7-4.7 8.6-10.3 13.1" stroke="currentColor" strokeWidth="1.2" opacity=".3"/>
        </svg>
      </div>
      <div className="leading-tight">
        <p className="text-white font-semibold text-lg tracking-tight">FANIABELLA LTD</p>
        <p className="text-cyan-100 text-xs">Restoring Health, One Step at a Time</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="hover:text-white">Book</a>
          </nav>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20 3H4a1 1 0 0 0-1 1v16l4-4h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </header>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Compassionate Home Care in Slough
            </h1>
            <p className="mt-4 text-slate-200 text-base md:text-lg max-w-prose">
              For families and referrers seeking trustworthy support. CQC-aligned care from dedicated professionals who put dignity first.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Book via WhatsApp
              </a>
              <a href="#services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40">
                Explore Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Trained & Vetted Carers
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                CQC-Aligned Standards
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Based in Slough, UK
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-sm text-slate-200">
                <p className="font-medium text-white">Business Details</p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <div>
                    <p className="text-slate-400">Company</p>
                    <p>FANIABELLA LTD</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Director</p>
                    <p>Bertha Mapunda</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-slate-400">Address</p>
                    <p>70 Spackmans Way, Slough, SL1 2SB, England, UK</p>
                  </div>
                  <div>
                    <p className="text-slate-400">SIC</p>
                    <p>86900 — Other human health activities</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Tagline</p>
                    <p>“Restoring Health, One Step at a Time”</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-medium px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
