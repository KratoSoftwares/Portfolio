const stats = [
  { value: "9", label: "Specialists" },
  { value: "2026", label: "Founded" },
  { value: "Lagos", label: "Headquarters" },
  { value: "4", label: "Core Practices" },
];

function Stats() {
  return (
    <section className=" py-10 sm:py-12 border-b border-b-[#dddfd7] bg-[faf8f3]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight text-[#163527] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-normal uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
