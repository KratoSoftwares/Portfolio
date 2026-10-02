import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/variants";
import Mockup from "../assets/Mockup.png";

function FlagshipWork() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.span
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#163527]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Flagship Work
        </motion.span>

        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="aspect-4/3 w-full rounded-xl sm:w-1/2"
          >
            <img
              src={Mockup}
              alt="image"
              className="w-full object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="sm:w-1/2"
          >
            <h3 className="text-xl font-semibold tracking-tight text-[#163527]">
              KOVA
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              A mobile bookkeeping and VAT compliance app that records sales and
              expenses, tracks inventory, monitors debts, and shows real profit.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              <span>Web & Mobile App</span>
              <span>2026</span>
            </div>

            <a
              href="/projects"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#163527] transition-all hover:gap-2.5"
            >
              View all projects
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FlagshipWork;