export default function Statistics() {
  const stats = [
    { label: "Uptime & Reliability", value: "99.9%" },
    { label: "Performance Score Target", value: "95+" },
    { label: "Modern Stack Standards", value: "100%" },
    { label: "Dedicated Engineering", value: "24/7" },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
