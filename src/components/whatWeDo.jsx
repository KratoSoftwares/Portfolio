import { useNavigate } from "react-router-dom";
const services = [
  {
    title: "SaaS Products",
    description:
      "We design, build, and scale subscription-based software products from the first prototype to a platform that carries real customers.",
    tags: ["Product strategy", "Multi-tenant architecture", "Billing & analytics"],
  },
  {
    title: "Custom Application Development",
    description:
      "Tailored web, mobile, and backend solutions built around your operations, not around a template.",
    tags: ["Web platforms", "iOS & Android apps", "APIs and integrations"],
  },
  {
    title: "Data & AI Integration",
    description:
      "We integrate analytics and AI where they add value, surfacing insight, automating work, and supporting better decisions.",
    tags: ["Analytics & dashboards", "Machine learning", "Predictive modelling"],
  },
  {
    title: "Talent Development",
    description:
      "Structured internships that train developers into independent, industry-ready professionals through real project work.",
    tags: ["Mentored internships", "Real client delivery", "Code review culture"],
  },
];

function WhatWeDo() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          What We Do
        </span>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#163527]">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {service.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#dddfd7] px-2.5 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          href="/services"
          onClick={()=>{navigate("/services")}}
          className="mt-6 hover:cursor-pointer inline-flex items-center gap-1.5 text-sm font-semibold text-[#163527] transition-all hover:gap-2.5"
        >
          Explore our services
          <span>→</span>
        </p>
      </div>
    </section>
  );
}

export default WhatWeDo;
