function IntershipCTA() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-6">

        <div className="relative overflow-hidden rounded-2xl bg-[#163527] px-6 py-10 text-center shadow-md sm:px-8">

          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(500px circle at 100% 0%, rgba(242,169,59,0.25), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative">

            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Collaborate With Us{" "}
              <span className="text-[#f2a93b]">•</span>{" "}
              Internship
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/60">
              Are you new in UI/UX, Back End Dev, Mobile App Dev, Web Dev,
              Digital Marketing, Product Management, Data Science, etc and
              seeking for where to grow your skill? Start an internship with
              us today.
            </p>

            <button className="mt-6 rounded-full bg-[#f2a93b] px-7 py-3 text-sm font-semibold text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Apply for Internship
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default IntershipCTA;