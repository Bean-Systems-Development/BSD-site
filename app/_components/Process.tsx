import { MessageSquare, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery call",
    description: "We listen first. We take time to understand your business goals, constraints, and users before touching a keyboard.",
  },
  {
    icon: Lightbulb,
    title: "Proposal & scoping",
    description: "You receive a clear proposal: stack choice, delivery timeline, and a fixed or transparent pricing structure.",
  },
  {
    icon: Code2,
    title: "Build & iterate",
    description: "We ship in short cycles with regular demos. You see progress early and can steer before it matters.",
  },
  {
    icon: Rocket,
    title: "Deploy & launch",
    description: "Production-ready deployment with CI/CD, monitoring, and a smooth handover or ongoing hosting.",
  },
  {
    icon: HeartHandshake,
    title: "Maintain & grow",
    description: "Post-launch support, scheduled maintenance, and a trusted partner when you're ready to add new features.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <p className="text-xs font-600 uppercase tracking-widest text-electric-bright mb-3 font-mono">
          How we work
        </p>
        <h2 className="font-display text-4xl font-700 text-text-primary leading-tight">
          Structured, transparent process
        </h2>
      </div>

      <div className="relative">
        {/* Connector line (desktop) */}
        <div className="absolute left-[22px] top-8 bottom-8 w-px bg-gradient-to-b from-electric/40 via-accent/20 to-transparent hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-6 group">
                <div className="relative flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-lg border border-electric/30 bg-electric/10 z-10">
                  <Icon className="h-5 w-5 text-electric-bright" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 border border-electric/20 text-[10px] font-mono text-electric-bright">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1.5 pb-4 border-b border-white/5 last:border-0 flex-1">
                  <h3 className="font-display text-base font-600 text-text-primary mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
