import Navbar from "../components/navbar";
import Hero2 from "../components/hero2";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "KOVA",
      description:
        "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
      type: "Website & Mobile App",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },

    {
      number: "02",
      title: "KOVA",
      description:
        "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
      type: "Mobile App",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },

    {
      number: "03",
      title: "KOVA",
      description:
        "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
      type: "Web Application",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },

    {
      number: "04",
      title: "KOVA",
      description:
        "KOVA is a mobile bookkeeping and VAT compliance app built for Nigerian small business owners to record sales and expenses, track inventory, monitor debts and see their profit.",
      type: "Digital Product",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* HERO */}

      <Hero2 />

      {/* =========================
          PROJECT LIST
      ========================== */}

      <main className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className={`grid grid-cols-1 items-center gap-4 py-8 sm:py-10 md:grid-cols-[1fr_1fr] md:gap-6 ${
                index !== projects.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* =========================
                  TEXT
              ========================== */}

              <motion.div variants={fadeLeft} className="max-w-xl">
                {/* NUMBER + TITLE */}

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium text-gray-400">
                    {project.number}
                  </span>

                  <h2 className="text-sm font-semibold text-[#163527]">
                    {project.title}
                  </h2>
                </div>

                {/* DESCRIPTION */}

                <p className="mt-2 max-w-md text-sm leading-5 text-gray-500">
                  {project.description}
                </p>

                {/* TYPE + YEAR */}

                <div className="mt-5 flex max-w-md items-center justify-between text-[15px] text-gray-500">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
              </motion.div>

              {/* =========================
                  IMAGE
              ========================== */}

              <motion.div
                variants={fadeRight}
                className="group overflow-hidden"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="aspect-5/2 w-full object-cover"
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </main>

      {/* FOOTER */}

      <Footer />
    </div>
  );
}

export default Projects;
