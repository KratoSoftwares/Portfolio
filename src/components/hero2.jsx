

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

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-16">

        <span className="mb-4 inline-flex items-center  gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f2a93b]">
         Executed Projects
        </span>

        <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
          Things we built, and what changed because of them
        </h1>

    </div>

        

        
     
    </section>
  );
}

export default Hero2;