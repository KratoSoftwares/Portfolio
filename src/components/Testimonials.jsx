const testimonials = [
  {
    id: 1,
    text: "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
  },
  {
    id: 2,
    text: "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
  },
  {
    id: 3,
    text: "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">

        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Our Testimonials
        </span>

        <div className="mt-5 grid grid-cols-1 items-center gap-5 sm:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <article
              key={testimonial.id}
              className={`rounded-xl p-5 text-center shadow-sm transition-shadow hover:shadow-md ${
                i === 1 ? "bg-[#0f2a1d] sm:py-8" : "bg-[#163527]"
              }`}
            >
              <p className="text-sm leading-6 text-white/75">
                {testimonial.text}
              </p>

              <span className="mx-auto mt-5 block h-1 w-10 rounded-full bg-[#f2a93b]" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;