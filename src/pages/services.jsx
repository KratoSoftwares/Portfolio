import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { useNavigate } from "react-router-dom";
import Image2 from "../assets/image2.png";

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      name: "SaaS Products",
      desc: "Subscription software, designed, built and scaled end to end.",
      dir: "See it in KOVA",
    },
    {
      name: "Custom App Development",
      desc: "Web, mobile, and backend tailored to the business problem.",
      dir: "See our work",
    },
    {
      name: "Data & AI Integration",
      desc: "Analytics, automation and AI features layered in where they add real value.",
      dir: "",
    },
    {
      name: "Talent Development",
      desc: "Structured internships that turn industry-ready developers.",
      dir: "View internship",
    },
  ];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcf9]">
      <Navbar />

      {/* =========================
          SERVICES HERO
      ========================== */}

      <motion.section
        className="relative overflow-hidden bg-[#204d2f]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <motion.span
            variants={fadeUp}
            className="inline-flex border-t border-t-[#f2b632] pb-1 text-sm font-medium uppercase tracking-wide text-[#f2b632]"
          >
            What we do
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-2xl text-3xl font-normal leading-tight text-[#f8f7ee] sm:text-4xl"
          >
            Software, data and the people who ship it.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm font-extralight text-[#f8f7ee]"
          >
            Four practices, one delivery team. We take a problem from discovery
            through launch, and keep it secure and supported afterwards.
          </motion.p>
        </div>
      </motion.section>

      {/* =========================
          WHAT WE DO
      ========================== */}

      <motion.section
        className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 max-w-fit border-b-2 border-b-[#f2b632] text-sm tracking-wide font-medium uppercase leading-6 text-[#0d2213]"
        >
          What we do
        </motion.p>

        <div className="grid grid-cols-1 gap-5 py-7 px-4 sm:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              className="flex flex-col justify-center rounded-2xl bg-white px-6 py-7 sm:py-16 sm:px-12 shadow-sm"
            >
              <h3 className="mb-1 max-w-fit   text-2xl font-medium text-[#204d2f]">
                {service.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#0d2213]">
                {service.desc}
              </p>

              {service.dir && (
                <a
                  href="#"
                  className="mt-4 inline-flex border-b-2 border-b-[#f2b632] w-fit items-center gap-1.5 text-xs font-semibold text-[#0d2213] transition-all hover:gap-2.5"
                >
                  {service.dir} {""}
                  <span>→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* =========================
          WHO WE WORK WITH
      ========================== */}

      <motion.section
        className="relative overflow-hidden mx-auto max-w-6xl w-full border-y-2 border-y-[#dddfd7]/0.75   bg-[#dddfd7]/0.75 px-5 py-8  sm:px-6 sm:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="relative flex flex-col md:flex-row md:justify-between gap-6 md:gap-9 w-full   px-3 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <div className="  flex flex-col w-full max-w-6xl gap-4 justify-start items-start  sm:gap-4">
            <motion.h3
              variants={fadeUp}
              className="mb-4 max-w-fit border-b-2 border-b-[#f2b632] text-sm font-medium uppercase leading-6 text-[#0d2213]"
            >
              Who we work with
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium w-full leading-wide text-[#0d2213] sm:text-2xl"
            >
              Small business owners, startups and growing companies who need
              software that solves a real, specific problem.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="aspect-4/3 w-full mx-auto overflow-hidden rounded-xl shadow-sm sm:w-3xl"
          >
            <img
              src={Image2}
              alt="Small business owner"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* =========================
          CTA BANNER
      ========================== */}

      <motion.section
        className="mx-auto w-full  max-w-6xl px-5 py-12 sm:px-6 sm:py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col items-center mx-auto w-full max-w-3xl gap-4 rounded-2xl bg-[#204d2f] px-6 py-10 text-center">
          <p className="text-lg font-medium text-[#f8f7ee] sm:text-xl">
            Have a problem to solve?
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              navigate("/contact");
            }}
            className="rounded-full bg-[#f2a93b] px-6 py-3 text-sm font-semibold text-[#0d2213] shadow-sm transition hover:shadow-md"
          >
            Start a project
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Services;
