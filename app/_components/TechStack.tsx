const stack = [
  { name: "Python", role: "Backend & APIs", color: "text-yellow-400" },
  { name: "TypeScript", role: "Full-stack logic", color: "text-blue-400" },
  { name: "Next.js", role: "Web framework", color: "text-white" },
  { name: "Tailwind CSS", role: "Styling", color: "text-cyan-400" },
  { name: "HTML5", role: "Structure & markup", color: "text-orange-400" },
  { name: "CSS3", role: "Custom styling", color: "text-purple-400" },
  { name: "FastAPI", role: "REST APIs", color: "text-green-400" },
  { name: "PostgreSQL", role: "Database", color: "text-sky-400" },
];

export default function TechStack() {
  return (
    <section className="border-y border-white/5 bg-navy-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-600 uppercase tracking-widest text-text-muted mb-10 font-mono">
          Technologies we work with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="rounded-lg border border-white/5 bg-navy-950 px-5 py-4 hover:border-white/10 transition-colors"
            >
              <p className={`font-display font-700 text-base ${tech.color}`}>{tech.name}</p>
              <p className="text-xs text-text-muted mt-1">{tech.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
