function Hero2() {
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

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-5 py-12  sm:px-6 sm:py-16">
        <span className="mb-4 max-w-fit  items-center  gap-2  border-t border-t-[#f2b632]   text-xs font-medium uppercase tracking-wide text-[#f2b632]">
          Executed Projects
        </span>

        <h1 className="max-w-2xl text-2xl font-normal leading-tight tracking-tight text-[#f8f7ee] sm:text-3xl">
          Things we built, and what changed because of them
        </h1>
        <p className="max-w-2xl text-xs mt-4 font-extralight text-[#f8f7ee]">
          Four practices, one delivery system. We take a problem from discovery
          through lauch, and keep it secure and supported afterwards
        </p>
      </div>
    </section>
  );
}

export default Hero2;
