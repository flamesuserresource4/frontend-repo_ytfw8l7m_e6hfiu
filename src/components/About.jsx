import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">About FANIABELLA LTD</h2>
          <p className="mt-3 text-slate-700">
            We are a registered care agency based in Slough, dedicated to helping people live safely and comfortably at home. Our
            mission is to deliver compassionate, professional care that respects dignity and promotes independence.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 border border-slate-200">
              <p className="text-slate-900 font-semibold">Mission</p>
              <p className="text-slate-600 text-sm mt-1">Provide reliable, person-centred care that enhances daily life.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-slate-200">
              <p className="text-slate-900 font-semibold">Vision</p>
              <p className="text-slate-600 text-sm mt-1">A community where everyone can thrive at home with dignity.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-slate-200">
              <p className="text-slate-900 font-semibold">Values</p>
              <p className="text-slate-600 text-sm mt-1">Compassion, Respect, Reliability, and Excellence.</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-white p-5 border border-slate-200">
            <p className="text-slate-900 font-semibold">Quality & Training</p>
            <p className="text-slate-600 text-sm mt-1">
              We follow CQC standards and invest in continuous training so our carers deliver safe, effective, and responsive
              support. We work closely with families and healthcare professionals.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
              alt="Care professional supporting an older adult"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <p className="text-slate-900 font-semibold">Director: Bertha Mapunda</p>
              <p className="text-slate-600 text-sm mt-1">
                Leading with compassion and professionalism to support families and referrers across Slough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
