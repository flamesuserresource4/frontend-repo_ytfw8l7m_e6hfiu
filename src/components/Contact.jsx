import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Contact / Book</h2>
          <p className="mt-3 text-slate-700">
            Have a question or want to book care? Send us a message and we’ll get back to you promptly.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              setStatus('Sending...');
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Postcode</label>
                <input
                  name="postcode"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Service</label>
              <select
                name="service"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Personal Care">Personal Care</option>
                <option value="Medication Support">Medication Support</option>
                <option value="Companionship">Companionship</option>
                <option value="Domestic Assistance">Domestic Assistance</option>
                <option value="Live-in Care">Live-in Care</option>
                <option value="Specialist Care">Specialist Care</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </form>

          <div className="mt-6">
            <a
              href={`https://wa.me/447508519328?text=${encodeURIComponent("Hello FANIABELLA LTD, I'd like to book a care service.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
            >
              Or chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-6 space-y-4">
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="text-slate-900 font-semibold">Visit Us</p>
            <p className="text-slate-600 text-sm mt-1">70 Spackmans Way, Slough, SL1 2SB, England, UK</p>
            <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=70%20Spackmans%20Way%2C%20Slough%20SL1%202SB&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
            <p className="text-slate-900 font-semibold">Privacy & GDPR</p>
            <p className="text-slate-600 text-sm mt-1">
              We only use your details to respond to your enquiry. By submitting this form you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
