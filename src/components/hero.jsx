const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/50.jpg",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#163527]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(242,169,59,0.15), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-16">

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f2a93b]">
          A team of brilliant minds
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          We build digital solutions that solve real problems
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          A passionate team creating modern, scalable and meaningful digital
          experiences.
        </p>

        <button className="mt-6 rounded-full bg-[#f2a93b] px-7 py-3 text-sm font-semibold text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          See our work
        </button>

        <div className="mt-8 flex -space-x-3">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Team member"
              className="h-10 w-10 rounded-full border-2 border-[#163527] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;