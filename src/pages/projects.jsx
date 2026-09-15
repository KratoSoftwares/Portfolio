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
      status:"Executed",
      problem:"Nigerian small business owners track  sales, expenses and debts on paper, leaving them without reliable records or VAT compliance.",
      solution:"A mobile bookkeeping app and VAT compliance app that records sales and expenses, tracks inventory, monitor debts and show real profit.",
      techStack:[
        "React Native","Node.js"
      ],
      type: "Website & Mobile App",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },

    {
      number: "02",
      title: "DASHME",
      status:"Ongoing",
      problem:"Usable items are wasted daily because owners have no easy way to pass them on, and existing platforms(selling app,disorganised social groups) aren't built for local giving, requesting or swapping.",
      solution:"Dashme is a dedicated platform for giving requesting and batering items locally with trust and safety built in from the start.Users can give items directly to someone who needs them,request items through searchable listings or swap items for something they actually want",
      techStack:[
        "React Native","Node.js"
      ],
      type: "Mobile App",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
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

                  <h2 className=" flex flex-row gap-6 sm:gap-20 items-center font-semibold ">
                    <span className="text-[#0d2213] text-sm font-light leading-wide">{project.title}</span>
                    <span className="bg-[#dddfd7] rounded-2xl px-3 font-light text-xs py-0.5 text-[#204d2f]">{project.status}</span>
                  </h2>
                </div>

                {/* DESCRIPTION */}

                <p className="mt-3 max-w-md text-sm leading-5 text-[#0d2213]">
                  Problem.{""}{project.problem}
                </p>
                <p className="mt-3 max-w-md text-sm leading-5 text-[#0d2213]">
                 Solution.{""} {project.solution}
                </p>

                <div className="flex mt-5 text-flex-row items-center gap-5">
                  <span className="border  rounded-sm border-[#dddfd7] px-2 shadown-sm text-[#0d2213] text-xs bg-white">{project.techStack[0,0]}</span>
                  <span className="border rounded-sm box-border border-[#dddfd7] px-2 shadown-sm text-[#0d2213] text-xs bg-white">{project.techStack[0,1]}</span>
                </div>
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
