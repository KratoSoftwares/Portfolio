import { fadeUp, staggerContainer } from "../animations/variants";
import { motion } from "framer-motion";

const stats = [
  { value: "9", label: "Specialists" },
  { value: "2026", label: "Founded" },
  { value: "Lagos", label: "Headquarters" },
  { value: "4", label: "Core Practices" },
];

function Stats() {
  return (
    <section className="py-10 sm:py-12 border-b border-b-[#dddfd7] bg-[faf8f3]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((stat) => (
            <motion.div variants={fadeUp} key={stat.label}>
              <p className="text-2xl font-bold tracking-tight text-[#204d2f] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-normal uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;