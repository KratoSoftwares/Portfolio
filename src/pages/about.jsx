import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

function About() {
  const values = [
    {
      name: "ship fast",
      desc: "Brief to working build in weeks, not quarters",
    },
    {
      name: "build secure",
      desc: "Security and QA at every stage, not an afterthought",
    },
    {
      name: "teach well",
      desc: "interns leave with real, shipped work behind them",
    },
    {
      name: "own the outcome",
      desc: "we stay accountable to results, not just delivery",
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

  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />

      {/* =========================
          ABOUT HERO
      ========================== */}

      <motion.section
        className="bg-[#163527] text-white "
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className=" mx-auto w-full max-w-6xl flex flex-col gap-2 px-5 py-10 sm:px-6 sm:py-14 items-start">
          <motion.span
            variants={fadeUp}
            className="inline-flex border-b-2 border-[#f2b632] pb-1 text-[20px] font-medium uppercase tracking-wider text-[#f2b632]"
          >
            who we are
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-2xl text-2xl font-normal leading-tight tracking-tight sm:text-4xl md:text-4xl"
          >
            Human-centered technology, built in Lagos
          </motion.h1>
          <p className="text-sm font-medium mt-2 w-full text-[#f8f7ee] max-w-2xl leading-8">
            Kratos software technologies designs and delivers SaaS products and
            custom software to businesses across Africa, while training the next
            generation of tech talents along the way
          </p>
        </div>
      </motion.section>

      {/* =========================
          ABOUT CONTENT
      ========================== */}

      <main className="bg-[#faf8f3]">
        <section className="mx-auto  w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.25fr_0.9fr] md:gap-12">
            {/* LEFT SIDE */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="max-w-fit text-[20px] font-medium leading-6 uppercase text-[#0d2213] border-b-2 border-b-[#f2b632]"
              >
                why we started
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-sm leading-8 text-[#0d2213]"
              >
                Kratos software technologies designs and delivers SaaS products
                and custom software to businesses across Africa,starting with
                Nigerian small business owners. Alongside the products we've
                build,we run structured internship programs that train
                developers into industry ready professionals because we believe
                good software and good people are built the same way:through
                real problems,hands-on work and ownership of the outcome
              </motion.p>
            </motion.div>
          </div>
        </section>


        {/* =========================
              vision and mission
          ========================== */}

        <motion.section
          className="mt-10 flex flex-col md:flex-row py-6 px-5 sm:px-6 md:py-12 gap-6 border-t bg-[#163527]  justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="cursor-default rounded-2xl shadow-sm bg-[#faf8f3] px-4 py-7 w-full max-w-xs min-h-40"
          >
            <h3 className="mt-1 mb-1 max-w-fit border-b border-b-[#163527] text-2xl font-medium text-[#163527]">
              our vision
            </h3>

            <p className="mt-2 text-sm leading-6  text-[#0d2213]">
              Human-centered technology that solves problems and scales
              businesses across Africa
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="cursor-default shadow-sm rounded-2xl bg-[#faf8f3] px-4 py-7 w-full max-w-xs min-h-40"
          >
            <h3 className="mt-1 mb-1 max-w-fit border-b border-b-[#163527] text-2xl font-medium text-[#163527]">
              our mission
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#0d2213]">
              Human-centered technology that solves problems and scales
              businesses across Africa
            </p>
          </motion.div>
        </motion.section>

        {/*====================
          Values
          =====================*/}

        <motion.section className="mx-auto  w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10" initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={staggerContainer}>
          <motion.p
            variants={fadeUp}
            className="max-w-fit text-[20px] mb-4 font-medium leading-6 uppercase text-[#0d2213] border-b-2 border-b-[#f2b632]"
          >
            our values
          </motion.p>
          <div className="mx-auto w-full max-w-4xl  px-6 py-8 md:px-12 md:py-14 grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center">
            {values.map((value) => (
              <motion.div
                key={value.name}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-sm w-full max-w-xs min-h-32 px-4 py-7 flex flex-col justify-center"
              >
                <h3 className="mt-1 mb-1 max-w-fit border-b border-b-[#163527] text-[#163527] text-2xl capitalize font-medium">{value.name}</h3>
                <p className="mt-2 text-[#0d2213]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/*=====================
          The Team
          ======================*/}
          <section className="w-full bg-[#163527] ">
          <motion.div
          className="mx-auto  w-full max-w-6xl  px-5 py-8 sm:px-6 sm:py-10" initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={staggerContainer}>
          <div className="mx-auto w-full flex mb-2.5 flex-row justify-between items-center">
           <span className="text-[#f8f7ee] border-b border-b-[#f2b632] font-medium uppercase">The Team</span>
           <span className="text-sm text-[#f8f7ee] border-b border-b-[#f2b632]">meet the full team</span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <motion.div variants={fadeUp} className="w-40 h-40 rounded-2xl bg-white"/>
            <motion.div variants={fadeUp} className="w-40 h-40 rounded-2xl bg-white"/>
            <motion.div variants={fadeUp} className="w-40 h-40 rounded-2xl bg-white"/>
            <motion.div variants={fadeUp} className="w-40 h-40 rounded-2xl bg-white"/>
            <motion.div variants={fadeUp} className="w-40 h-40 rounded-2xl bg-white"/>
          </div>
          </motion.div>
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
