"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "[email@company.com]",
    href: "mailto:[email@company.com]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "[City, Country]",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

const projectTypes = [
  "New website",
  "New app",
  "Maintenance retainer",
  "Upgrade / migration",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to form API (Resend, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-4 font-mono">
          Contact
        </p>
        <h1 className="font-display text-5xl font-700 text-text-primary leading-tight mb-4">
          Let's talk
        </h1>
        <p className="text-text-secondary max-w-md mb-16 leading-relaxed">
          Tell us about your project. We'll respond within 24 hours with honest thoughts and next steps.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: info */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 ring-1 ring-electric/20">
                    <Icon className="h-4 w-4 text-electric-bright" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-secondary hover:text-electric-glow transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-secondary">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="mt-8 rounded-xl border border-white/5 bg-navy-900 p-6">
              <p className="text-sm font-600 text-text-primary mb-2">Free discovery call</p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Not sure what you need? Book a free 30-minute call and we'll help you figure it out — no commitment required.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-green-500/20 bg-green-500/5 p-16 text-center h-full">
                <CheckCircle2 className="h-10 w-10 text-green-400 mb-4" />
                <h2 className="font-display text-xl font-700 text-text-primary mb-2">
                  Message received!
                </h2>
                <p className="text-sm text-text-secondary max-w-xs">
                  We'll get back to you within 24 hours. Talk soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5 font-mono">
                      Your name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="[Your name]"
                      className="w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5 font-mono">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="[you@company.com]"
                      className="w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5 font-mono">
                      Project type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-text-primary focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30 transition-colors"
                    >
                      <option value="">Select...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5 font-mono">
                      Budget range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-text-primary focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30 transition-colors"
                    >
                      <option value="">Select...</option>
                      <option>Under $5k</option>
                      <option>$5k – $15k</option>
                      <option>$15k – $50k</option>
                      <option>$50k+</option>
                      <option>Prefer to discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5 font-mono">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's the challenge? Any existing codebase?"
                    className="w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-electric/50 focus:outline-none focus:ring-1 focus:ring-electric/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-electric px-7 py-3.5 text-sm font-600 text-white hover:bg-electric-bright transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
