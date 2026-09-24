import { useNavigate } from "react-router-dom";
import internshipCTA from "../assets/internshipCTA.png";

function InternshipCTA() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Internship
        </span>

        <div className="mt-5 flex flex-col justify-between gap-8 sm:flex-row sm:items-center sm:gap-16">
          <div className="sm:w-1/2">
            <h2 className="text-2xl font-bold tracking-tight text-[#163527] sm:text-3xl">
              Collaborate with us, or train with us.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
              Our internship programme puts developers, analysts, and security
              engineers on real client work with real mentorship, the fastest
              route from learning to shipping.
            </p>

            <button
              onClick={() => navigate("/intern")}
              className="hover:cursor-pointer mt-6 rounded-full bg-[#f2a93b] px-6 py-3 text-sm font-semibold text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Apply for internship
            </button>
          </div>

          <div className="w-full sm:w-1/2">
            <img
              src={internshipCTA}
              alt="Internship"
              className="h-80 w-full max-w-[370px] rounded-xl object-cover sm:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipCTA;