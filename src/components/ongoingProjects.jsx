const KOVA_DESCRIPTION =
  "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
];

function OngoingProject() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">

        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Ongoing Projects
        </span>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt="KOVA project"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <span className="text-xs font-semibold text-white">
                    KOVA
                  </span>

                  <span className="text-xs text-white/80">
                    2026
                  </span>
                </div>
              </div>

              <p className="p-3 text-xs leading-5 text-gray-500">
                {KOVA_DESCRIPTION}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OngoingProject;