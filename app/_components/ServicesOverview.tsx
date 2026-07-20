import Link from "next/link";
import { Smartphone, Globe, Wrench, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Pixel-perfect, performant websites built with Next.js, TypeScript, and Tailwind. From marketing sites to full-stack web apps.",
    href: "/services#web",
    accent: "text-electric-bright",
    bg: "bg-electric/10",
    border: "border-electric/20",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform mobile and desktop applications. We architect clean, scalable solutions that grow with your business.",
    href: "/services#apps",
    accent: "text-accent-bright",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Ongoing support, bug fixes, dependency updates, and monitoring. Keep your existing apps and sites healthy and secure.",
    href: "/services#maintenance",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Zap,
    title: "Upgrades & Migrations",
    description:
      "Modernise legacy code, migrate stacks, and add features. We take what you have and make it better — without breaking it.",
    href: "/services#upgrades",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default function ServicesOverview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-3 font-mono">
          What we do
        </p>
        <h2 className="font-display text-4xl font-700 text-text-primary leading-tight mb-4">
          Full-cycle digital product services
        </h2>
        <p className="text-text-secondary leading-relaxed">
          From first commit to long-term care — we cover every phase of building and maintaining software.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative rounded-xl border ${service.border} bg-navy-900 p-7 hover:bg-navy-800 transition-colors`}
            >
              <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg ${service.bg} ring-1 ${service.border}`}>
                <Icon className={`h-5 w-5 ${service.accent}`} />
              </div>
              <h3 className="font-display text-lg font-600 text-text-primary mb-2 group-hover:text-electric-glow transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {service.description}
              </p>
              <span className={`inline-flex items-center gap-1 text-xs font-medium ${service.accent}`}>
                Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
