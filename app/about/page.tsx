import type { Metadata } from "next";
import { Users, Target, Shield, Lightbulb } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About — ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
  description: `Learn about ${process.env.NEXT_PUBLIC_COMPANY_NAME}, our values, and the team behind our digital products.`,
};

const values = [
  {
    icon: Target,
    title: "Clarity over cleverness",
    description:
      "We write code that the next developer — or future-us — can understand without a map. Simple solutions to complex problems.",
  },
  {
    icon: Shield,
    title: "Reliability you can measure",
    description:
      "We don't just ship and disappear. We set up monitoring, write tests, and stay accountable for what we build.",
  },
  {
    icon: Lightbulb,
    title: "Honest opinions",
    description:
      "If a technology choice will hurt you in six months, we'll say so. We'd rather lose a sale than watch a client make a mistake.",
  },
  {
    icon: Users,
    title: "Client as collaborator",
    description:
      "The best products come from tight feedback loops. We treat clients as teammates, not ticket-raisers.",
  },
];

const team = [
  {
    name: "[Team Member Name]",
    role: "[Role — e.g. Founder & Lead Engineer]",
    bio: "[Short bio — background, specialties, what you care about in your craft.]",
    initials: "TM",
  },
  {
    name: "[Team Member Name]",
    role: "[Role — e.g. Frontend Developer]",
    bio: "[Short bio — background, specialties, what you care about in your craft.]",
    initials: "TM",
  },
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
              A small team that punches above its weight
            </h1>
          </div>
          <div>
            <p className="text-text-secondary leading-relaxed mb-4">
              {process.env.NEXT_PUBLIC_COMPANY_NAME} is a boutique software studio based in [City, Country]. We build apps and websites for businesses that want high-quality software without the overhead of a large agency.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We work across the full stack — Python on the backend, TypeScript on the front — and we take a long-term view on everything we build. Maintenance and upgrades aren't an afterthought; they're built into how we work from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Values */}
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

      {/* Team */}
      <div className="border-t border-white/5 bg-navy-900 py-20">
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
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            ))}

            {/* Add team member placeholder */}
            <div className="rounded-xl border border-dashed border-white/10 p-7 flex items-center justify-center">
              <p className="text-sm text-text-muted text-center">
                [Add more team members here]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
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
  );
}
