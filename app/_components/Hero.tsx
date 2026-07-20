"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const codeLines = [
  { prefix: "$ ", text: "npx create-next-app@latest my-project", color: "text-accent-bright" },
  { prefix: "  ", text: "✓ TypeScript configured", color: "text-green-400" },
  { prefix: "  ", text: "✓ Tailwind CSS installed", color: "text-green-400" },
  { prefix: "  ", text: "✓ App Router enabled", color: "text-green-400" },
  { prefix: "$ ", text: "pip install fastapi uvicorn sqlalchemy", color: "text-accent-bright" },
  { prefix: "  ", text: "✓ API endpoints ready", color: "text-green-400" },
  { prefix: "$ ", text: "git push origin main && deploy 🚀", color: "text-accent-bright" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);
  console.log("🚀 ~ Hero ~ }:", process.env.NEXT_PUBLIC_COMPANY_NAME)


  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow 
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-3xl pointer-events-none" />
      */}

      <div className="relative mx-auto max-w-6xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-xs text-electric-glow font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright animate-pulse" />
            Available for new projects
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-700 leading-[1.05] tracking-tight text-text-primary mb-6">
            We build software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-accent-bright">
              that ships
            </span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
            {process.env.NEXT_PUBLIC_COMPANY_NAME} crafts high-performance apps and websites using TypeScript, Python, and modern frameworks — then keeps them running at their best.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-electric px-6 py-3 text-sm font-600 text-white hover:bg-electric-bright transition-colors"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/10 transition-colors"
            >
              View services
            </Link>
          </div>

          {/* Stats row */}
          {/* <Statistics /> */}
        </div>

        {/* Right: Terminal */}
        <div className="animate-glow-pulse rounded-xl border border-electric/20 bg-navy-900 overflow-hidden shadow-2xl">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-white/5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <div className="ml-3 flex items-center gap-1.5 text-xs text-text-muted font-mono">
              <Terminal className="h-3 w-3" />
              <span>project-setup</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm min-h-64">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="mb-1.5 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                <span className="text-text-muted">{line.prefix}</span>
                <span className={line.color}>{line.text}</span>
              </div>
            ))}
            {visibleLines < codeLines.length && (
              <span className="text-text-muted">
                <span className="text-accent-bright">$ </span>
                <span className="animate-blink border-r-2 border-electric-bright">&nbsp;</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
