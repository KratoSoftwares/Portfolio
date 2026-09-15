import HomeFrame from "../assets/homeFrame.png";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#204d2f]">
      

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-16 sm:gap-10">
        <div className="flex flex-col items-start sm:w-1/2">
          <span className="mb-4 inline-flex max-w-fit gap-2 border-t border-t-[#f2b632] py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f2b632]">
            Kratos Software Technologies
          </span>

          <h1 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
            We build <span className="text-[#f2a93b]">solutions</span>. We build{" "}
            <span className="text-[#f2a93b]">people</span>. We build{" "}
            <span className="text-[#f2a93b]">businesses</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            A software firm in Lagos designing and delivering SaaS products and
            custom applications, while training the next generation of
            developers through hands-on internships.
          </p>

          <div className="mt-6 flex flex-row gap-4">
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="rounded-2xl bg-[#f2a93b] px-4 py-3 text-sm font-medium text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              See our work
            </button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="rounded-2xl border border-white px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Start a project
            </button>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-370 h-80 overflow-hidden rounded-xl  sm:w-1/2">
          <img src={HomeFrame} alt="image" className="rounded-xl h-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
