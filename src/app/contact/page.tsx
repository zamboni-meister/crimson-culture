"use client";

import { useState } from "react";

const reasons = [
  "Commission a project",
  "Collaboration",
  "Exhibition / Residency",
  "Press & Editorial",
  "Purchase a print",
  "General enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c0392b]">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">Get in Touch</h1>
        <p className="mt-4 max-w-xl text-zinc-400 leading-relaxed">
          For commissions, collaborations, exhibition enquiries, or anything else — send
          a message and I&apos;ll get back to you within a few days.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-[#c0392b]/30 bg-[#c0392b]/5 p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c0392b]/20">
                <svg className="h-6 w-6 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Message sent.</h2>
                <p className="mt-2 text-zinc-400">
                  Thanks for reaching out. I&apos;ll be in touch soon.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Reason pills */}
              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Reason for contact
                </legend>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((reason) => (
                    <button
                      type="button"
                      key={reason}
                      onClick={() => setSelectedReason(reason)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                        selectedReason === reason
                          ? "border-[#c0392b] bg-[#c0392b]/15 text-[#c0392b]"
                          : "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Name + Email row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Name <span className="text-[#c0392b]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#c0392b] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Email <span className="text-[#c0392b]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#c0392b] focus:outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Brief subject line"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#c0392b] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Message <span className="text-[#c0392b]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me what you have in mind..."
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#c0392b] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#c0392b] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#e74c3c] hover:shadow-[0_0_20px_rgba(192,57,43,0.3)] sm:w-auto sm:px-10"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Response Time
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I aim to respond within 2–3 business days. For urgent commissions, please
              mention it in your message.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Based in
            </h3>
            <p className="text-sm text-zinc-400">London &amp; Sheffield, UK</p>
            <p className="mt-1 text-xs text-zinc-600">Available for travel</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Socials
            </h3>
            <ul className="space-y-2">
              {[
                { label: "@alex.morrow", platform: "Instagram" },
                { label: "@alexmorrow_", platform: "Twitter" },
                { label: "alexmorrow.bandcamp.com", platform: "Bandcamp" },
              ].map(({ label, platform }) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="flex items-center justify-between text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    <span>{label}</span>
                    <span className="text-xs text-zinc-700">{platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
