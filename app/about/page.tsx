import type { Metadata } from "next";
import { Users, Target, Shield, Lightbulb, Lock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About — ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
  description: `Learn about ${process.env.NEXT_PUBLIC_COMPANY_NAME}, our values, and the team behind our digital products.`,
};

const values = [
  {
    icon: Lock,
    title: "Reliability",
    description:
      "We write code that runs according to what you asked for. We cater for the edge cases and plan for the unexpected.",
  },
  {
    icon: Target,
    title: "Scalability",
    description:
      "We plan our systems so they can be easily expanded. We know that creativity tak",
  },
  {
    icon: Users,
    title: "Communication",
    description:
      "We aim to clearly communicate with you to make sure you're happy with the final product. We build in phases to make sure your vision is not lost along the way.",
  },
  {
    icon: Lightbulb,
    title: "Optimization",
    description:
      "We use modern tools and practices to ensure your system gets maximum output with minimal resources.",
  },
];

const team = [
  {
    name: "Nathan",
    role: "Founder & Lead Developer",
    initials: "NDG",
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-4 font-mono">
          About us
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="font-display text-5xl font-700 text-text-primary leading-tight mb-6">
              A small team solving problems for you
            </h1>
          </div>
          <div>
            <p className="text-text-secondary leading-relaxed mb-4">
              {process.env.NEXT_PUBLIC_COMPANY_NAME} is a software development company based in Bloemfontein. We build websites and apps for businesses that want high-quality software.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We work across the full stack and take a long-term view on everything we build. Maintenance and upgrades aren't an afterthought, they're built into how we work from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Values */}
      <div className="bg-navy-900 w-full">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-600 uppercase tracking-widest text-text-muted mb-10 font-mono">
            What we stand for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                key={value.title}
                className="rounded-xl border border-white/5 bg-navy-900 p-7 hover:border-electric/20 transition-colors"
                >
                  <Icon className="h-5 w-5 text-electric-bright mb-4" />
                  <h3 className="font-display text-base font-600 text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-600 uppercase tracking-widest text-text-muted mb-10 font-mono">
            The team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-white/5 bg-navy-950 p-7"
              >
                {/* Avatar placeholder */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 ring-1 ring-electric/20">
                  <span className="font-display font-700 text-electric-bright text-sm">
                    {member.initials}
                  </span>
                </div>
                <p className="font-display font-600 text-text-primary">{member.name}</p>
                <p className="text-xs text-electric-bright font-mono mt-1 mb-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-900 w-full">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-700 text-text-primary mb-4">
            Want to work with us?
          </h2>
          <p className="text-text-secondary mb-8">
            We're always open to interesting projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-electric px-7 py-3.5 text-sm font-600 text-white hover:bg-electric-bright transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
