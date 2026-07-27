import { Search, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Architecture",
      desc: "We analyze requirements, identify technical constraints, and define a clear system design before writing code.",
    },
    {
      num: "02",
      icon: Code2,
      title: "Agile Development",
      desc: "Iterative development cycles with continuous feedback, modern clean code standards, and automated testing.",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Deployment & Scaling",
      desc: "Seamless cloud deployment with optimized CI/CD pipelines, security audits, and continuous performance tuning.",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
            How We Work
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Engineering Methodology
          </p>
          <p className="text-slate-400 leading-relaxed">
            A structured, transparent workflow designed to deliver high-quality software predictably and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-800 group-hover:text-slate-700 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Phase Deliverables</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
