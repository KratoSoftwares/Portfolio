const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, users, requirements, and the relevant data.",
  },
  {
    number: "02",
    title: "Design",
    description: "UX/UI and system architecture that make the solution obvious to use.",
  },
  {
    number: "03",
    title: "Build",
    description: "Agile development across web and mobile, with data and AI where required.",
  },
  {
    number: "04",
    title: "Secure",
    description: "Cybersecurity and QA applied at every stage, not bolted on at the end.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor, and verify the solution against measurable outcomes.",
  },
  {
    number: "06",
    title: "Support",
    description: "Iterate, scale, and train your team to own what we built together.",
  },
];

function OurProcess() {
  return (
    <section className="bg-[#204d2f] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f2a93b]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Our Process
        </span>

        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-t-white/50">
              <span className="text-xs font-semibold text-[#f2a93b]">
                {step.number}
              </span>
              <h3 className="mt-1 text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
