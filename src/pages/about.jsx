import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function About() {
  const disciplines = [
    "Product Manager",
    "Data Scientist",
    "Digital Marketer",
    "Front End Developers",
    "Mobile Developer",
    "Cybersecurity Analyst",
    "Product Designers",
    "Back End Developers",
  ];

  const stats = [
    {
      number: "9",
      label: "People on the team",
    },
    {
      number: "12",
      label: "Projects delivered",
    },
    {
      number: "2",
      label: "Live projects at a time",
    },
    {
      number: "4",
      label: "Years working together",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Frame the problem",
      text: "We start with the constraint, not the feature list. A week of interviews, workflow mapping and a written brief everyone signs on.",
    },
    {
      number: "02",
      title: "Design in the open",
      text: "Low fidelity first, to mid fidelity, then high fidelity screens in a shared file. You see the work as it forms, not at a reveal.",
    },
    {
      number: "03",
      title: "Build in slices",
      text: "Vertical slices shipped weekly to a staging build, so the thing is real and testable long before launch.",
    },
    {
      number: "04",
      title: "Hand over property",
      text: "Documentation, analytics, and a support window. We would rather you own it than depend on us.",
    },
  ];

  // =========================
  // ANIMATION VARIANTS
  // =========================

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pillAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const statAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* =========================
          ABOUT HERO
      ========================== */}

      <motion.section
        className="bg-[#163527] text-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
          <motion.span
            variants={fadeUp}
            className="inline-flex border-b border-[#f2a93b] pb-1 text-[10px] font-medium uppercase tracking-wide text-white/80"
          >
            About Team Name
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-2xl text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Nine people who would rather build one useful thing than pitch ten
            clever ones.
          </motion.h1>
        </div>
      </motion.section>

      {/* =========================
          ABOUT CONTENT
      ========================== */}

      <main className="bg-[#f8f9f9]">
        <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.25fr_0.9fr] md:gap-12">

            {/* LEFT SIDE */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="max-w-xl text-sm font-medium leading-6 text-[#163527]"
              >
                We formed around a single stubborn belief: most software fails
                for want of clear thinking; not clear engineering.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-sm leading-6 text-gray-700"
              >
                KOVA is a mobile bookkeeping and VAT compliance app built for
                Nigerian small business owners to record sales and expenses,
                track inventory, monitor debts and see their profit.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-sm leading-6 text-gray-700"
              >
                KOVA is a mobile bookkeeping and VAT compliance app built for
                Nigerian small business owners to record sales and expenses,
                track inventory, monitor debts and see their profit.
              </motion.p>
            </motion.div>

            {/* RIGHT SIDE */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[20px] font-medium uppercase text-gray-600"
              >
                Discipline In-House
              </motion.p>

              {/* DISCIPLINES */}

              <motion.div
                variants={staggerContainer}
                className="mt-2 flex flex-wrap gap-2"
              >
                {disciplines.map((discipline) => (
                  <motion.span
                    key={discipline}
                    variants={pillAnimation}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="cursor-default rounded-full border border-[#b8c7bd] px-3 py-1.5 text-[12px] font-medium text-[#163527]"
                  >
                    {discipline}
                  </motion.span>
                ))}
              </motion.div>

              {/* STATS */}

              <motion.div
                variants={staggerContainer}
                className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={statAnimation}
                    whileHover={{
                      y: -3,
                    }}
                    className="cursor-default"
                  >
                    <p className="text-2xl font-medium leading-none text-[#163527]">
                      {stat.number}
                    </p>

                    <p className="mt-1 text-[12px] text-gray-500">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* =========================
              HOW WE WORK
          ========================== */}

          <motion.section
            className="mt-10 border-t border-gray-300 pt-7"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[20px] font-bold uppercase text-[#163527]"
            >
              How We Work
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
            >
              {process.map((item) => (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                  }}
                  className="cursor-default"
                >
                  <p className="text-[12px] text-gray-500">
                    {item.number}
                  </p>

                  <h3 className="mt-1 text-sm font-medium text-[#163527]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-5 text-gray-500">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default About;