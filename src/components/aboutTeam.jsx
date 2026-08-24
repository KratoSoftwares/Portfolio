import { Link } from "react-router-dom";

const roles = [
  {
    label: "Back End Developer",
    position: "top-[0%] right-0",
    yellow: false,
  },
  {
    label: "Product Manager",
    position: "top-[15%] left-[35%]",
    yellow: true,
  },
  {
    label: "Digital Marketer",
    position: "top-[30%] left-[5%]",
    yellow: false,
  },
  {
    label: "Mobile Developer",
    position: "top-[45%] right-[20%]",
    yellow: false,
  },
  {
    label: "Product Designers",
    position: "top-[60%] left-[12%]",
    yellow: true,
  },
  {
    label: "Data Analyst",
    position: "top-[75%] right-[10%]",
    yellow: true,
  },
  {
    label: "Front End Developer",
    position: "top-[85%] left-[24%]",
    yellow: false,
  },
];

function AboutTeam() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 sm:px-6 md:grid-cols-2 md:gap-10">

        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
            About Team
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#163527] sm:text-3xl">
            Who we are
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
            KOVA is a mobile bookkeeping and VAT compliance app built for
            Nigerian small business owners to record sales and expenses,
            track inventory, monitor debts and see their profit.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
            KOVA is a mobile bookkeeping and VAT compliance app built for
            Nigerian small business owners to record sales and expenses,
            track inventory, monitor debts and see their profit.
          </p>

          <Link
            to="/team"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#163527] transition-all hover:gap-2.5"
          >
            Read more about the team
            <span>→</span>
          </Link>
        </div>

        {/* Floating roles */}
        <div className="relative min-h-[320px] overflow-hidden">

          {/* Desktop */}
          <div className="relative hidden h-full min-h-[300px] md:block">
            {roles.map((role) => (
              <span
                key={role.label}
                className={`
                  absolute ${role.position}
                  whitespace-nowrap
                  rounded-lg
                  px-4 py-2
                  text-xs
                  font-semibold
                  text-white
                  shadow-sm
                  transition-transform
                  hover:-translate-y-0.5
                  ${
                    role.yellow
                      ? "bg-[linear-gradient(to_right,#163527_0%,#163527_76%,#f2a93b_100%)]"
                      : "bg-[#163527]"
                  }
                `}
              >
                {role.label}
              </span>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-wrap gap-2.5 md:hidden">
            {roles.map((role) => (
              <span
                key={role.label}
                className={`
                  rounded-lg
                  px-3.5 py-2
                  text-xs
                  font-semibold
                  text-white
                  shadow-sm
                  ${
                    role.yellow
                      ? "bg-[linear-gradient(to_right,#163527_0%,#163527_76%,#f2a93b_100%)]"
                      : "bg-[#163527]"
                  }
                `}
              >
                {role.label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutTeam;