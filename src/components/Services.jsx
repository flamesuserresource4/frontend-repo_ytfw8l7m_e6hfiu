import React from 'react';

const services = [
  {
    title: 'Personal Care',
    desc:
      'Dignified support with bathing, dressing, toileting, mobility, and daily routines to promote independence.',
    benefits: ['Respectful, person-centred', 'Flexible visit times', 'Safety-first approach'],
  },
  {
    title: 'Medication Support',
    desc:
      'Prompting, administering, and monitoring medication with accurate record-keeping and coordination with GPs.',
    benefits: ['MAR sheets', 'Timely reminders', 'Family transparency'],
  },
  {
    title: 'Companionship',
    desc:
      'Friendly conversation, social visits, outings, and wellbeing activities to reduce loneliness and isolation.',
    benefits: ['Meaningful engagement', 'Flexible schedules', 'Community links'],
  },
  {
    title: 'Domestic Assistance',
    desc:
      'Light housekeeping, meal preparation, shopping, laundry, and household tasks to keep life running smoothly.',
    benefits: ['Nutritious meals', 'Clean, safe home', 'Tailored plans'],
  },
  {
    title: 'Live-in Care',
    desc:
      'Round-the-clock support from a dedicated carer for those who need continuous reassurance and practical help.',
    benefits: ['24/7 presence', 'Family peace of mind', 'Continuity of care'],
  },
  {
    title: 'Specialist Care',
    desc:
      'Tailored care for dementia, palliative needs, mental health, learning disabilities, autism, epilepsy, stomach care and complex conditions.',
    benefits: ['Expert guidance', 'Holistic support', 'Close family collaboration'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Our Care Services</h2>
          <p className="mt-3 text-slate-600">
            We support individuals with long-term or multiple healthcare needs across Slough. Our expert team works closely with
            patients and families to improve quality of life and promote well-being.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/447508519328?text=${encodeURIComponent('Hello FANIABELLA LTD, I’d like to enquire about ' + s.title + '.')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
              >
                Book / Enquire
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-emerald-50 p-6 border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-900">Specialist Support</h3>
          <p className="mt-2 text-emerald-900/90 text-sm">
            Caring for a loved one with Alzheimer’s or recovering from a stroke can be overwhelming. Our personalised approach
            enables individuals to remain at home, helping maintain routine, reduce stress, and enhance well-being and memory
            retention.
          </p>
        </div>
      </div>
    </section>
  );
}
