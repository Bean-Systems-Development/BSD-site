export default function Statistics() {
  const statistics = [
    { value: "[X]+", label: "Projects delivered" },
    { value: "[X]+", label: "Happy clients" },
    { value: "[X]yrs", label: "Experience" },
  ];

  return (
    <div className="mt-14 flex gap-10 border-t border-white/5 pt-10">
      {statistics.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-2xl font-700 text-text-primary">{stat.value}</p>
          <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}