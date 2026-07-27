export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "REST / GraphQL", "PostgreSQL", "Prisma"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Vercel", "AWS / GCP", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 bg-slate-950 border-t border-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
            Technology Ecosystem
          </h2>
          <p className="text-2xl sm:text-3xl font-bold">
            Built with Industry-Leading Tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
