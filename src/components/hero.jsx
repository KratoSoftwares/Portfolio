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

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:px-6 sm:py-16 sm:gap-10">
        <div className="flex flex-col sm:w-1/2">
          <span className="mb-4 inline-flex max-w-fit gap-2 border-t border-t-[#f2a93b] py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f2a93b]">
            Kratos Software Technologies
          </span>

          <h1 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
            We build <span className="text-[#f2a93b]">solutions</span>. We
            build <span className="text-[#f2a93b]">people</span>. We build{" "}
            <span className="text-[#f2a93b]">businesses</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            A software firm in Lagos designing and delivering SaaS products
            and custom applications, while training the next generation of
            developers through hands-on internships.
          </p>

          <div className="mt-6 flex flex-row gap-4">
            <button className="rounded-2xl bg-[#f2a93b] px-4 py-3 text-sm font-medium text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              See our work
            </button>
            <button className="rounded-2xl border border-white px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Start a project
            </button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white sm:w-1/2">
          {/* swap for a real hero image */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
