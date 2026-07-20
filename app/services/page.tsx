import type { Metadata } from "next";
import { Globe, Smartphone, Wrench, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Services — ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
  description: "Web development, app development, maintenance and upgrades using Python, TypeScript and modern frameworks.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    tagline: "Fast, modern, and built to convert.",
    description:
      "We build websites that work hard: marketing sites, content platforms, dashboards, and full-stack web applications. Every project starts with your users and your goals.",
    features: [
      "Next.js App Router with TypeScript",
      "Responsive across all screen sizes",
      "SEO-optimised HTML structure",
      "Tailwind CSS — no bloated CSS frameworks",
      "CMS integration (Sanity, Contentlayer, etc.)",
      "Performance-first architecture",
    ],
    accent: "text-electric-bright",
    border: "border-electric/20",
    bg: "bg-electric/5",
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "App Development",
    tagline: "Products people actually want to use.",
    description:
      "Whether it's a web app, a desktop tool, or a cross-platform mobile application — we architect clean solutions with well-defined APIs, proper state management, and long-term maintainability in mind.",
    features: [
      "TypeScript throughout the stack",
      "Python + FastAPI or Django backends",
      "RESTful and GraphQL APIs",
      "Authentication & authorisation",
      "Database design and migrations",
      "Cloud deployment (Vercel, AWS, GCP, etc.)",
    ],
    accent: "text-accent-bright",
    border: "border-accent/20",
    bg: "bg-accent/5",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance",
    tagline: "Keep it running. Keep it safe.",
    description:
      "Software that ships is software that needs care. We offer scheduled maintenance retainers so your apps and websites stay secure, performant, and dependency-current — without you having to think about it.",
    features: [
      "Dependency and security patches",
      "Bug fixes and regression testing",
      "Uptime and error monitoring",
      "Regular backups and restore drills",
      "Monthly health reports",
      "Priority response SLAs available",
    ],
    accent: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
  },
  {
    id: "upgrades",
    icon: Zap,
    title: "Upgrades & Migrations",
    tagline: "Your existing code, made better.",
    description:
      "Stuck on an old framework? Struggling with tech debt? We safely migrate and upgrade existing codebases — adding features, improving performance, or moving to a modern stack entirely.",
    features: [
      "Framework and runtime upgrades",
      "JavaScript → TypeScript migrations",
      "Monolith → microservice refactoring",
      "Database migrations",
      "Performance profiling and optimisation",
      "Legacy integrations replaced cleanly",
    ],
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
  },
];

const stackGroups = [
  {
    id: "stack",
    label: "Frontend",
    items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "SQLite", "Supabase", "Vercel", "AWS", "Docker"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-4 font-mono">
          Services
        </p>
        <h1 className="font-display text-5xl font-700 text-text-primary leading-tight max-w-2xl">
          Everything you need to build and sustain great software
        </h1>
      </div>

      {/* Service details */}
      <div className="mx-auto max-w-6xl px-6 space-y-6 pb-24">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-xl border ${service.border} ${service.bg} p-8 lg:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className={`mb-4 inline-flex items-center gap-2 ${service.accent}`}>
                    <Icon className="h-5 w-5" />
                    <span className="font-display text-sm font-600 uppercase tracking-wide">
                      {service.title}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-700 text-text-primary mb-3">
                    {service.tagline}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <p className="text-xs font-600 uppercase tracking-widest text-text-muted mb-4 font-mono">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${service.accent}`} />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tech stack */}
      <div className="border-t border-white/5 bg-navy-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-600 uppercase tracking-widest text-text-muted mb-10 font-mono" id="stack">
            Our technology stack
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stackGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-600 text-text-primary mb-4">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-navy-950 px-3 py-1 text-xs font-mono text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-700 text-text-primary mb-4">
          Not sure which service you need?
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Tell us about your project and we'll figure it out together — no sales pressure, no jargon.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-electric px-7 py-3.5 text-sm font-600 text-white hover:bg-electric-bright transition-colors"
        >
          Book a free discovery call
        </Link>
      </div>
    </div>
  );
}
