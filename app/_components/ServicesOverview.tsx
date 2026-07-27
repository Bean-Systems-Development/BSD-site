import { Monitor, Server, Cpu, Shield, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesOverview() {
  const services = [
    {
      icon: Monitor,
      title: "Frontend Engineering",
      desc: "High-speed Next.js and React web applications built with micro-interactions and optimized Core Web Vitals.",
    },
    {
      icon: Server,
      title: "Backend & Systems",
      desc: "Robust microservices, Node.js APIs, serverless architectures, and relational or document database design.",
    },
    {
      icon: Cpu,
      title: "Full-Stack Development",
      desc: "End-to-end custom software development designed from scratch for your business requirements.",
    },
    {
      icon: Shield,
      title: "Cloud & Security",
      desc: "Secure infrastructure deployment, automated CI/CD pipelines, and cloud scalability on modern hosts.",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-8 bg-slate-900/50 border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
              Core Capabilities
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight">
              Engineering Solutions for Growth
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm"
          >
            All Technical Services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
