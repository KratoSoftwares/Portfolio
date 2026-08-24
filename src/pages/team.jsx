import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";

function Team() {
  const teamMembers = [
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Apochi Godwin",
      role: "Front End Developer",
      location: "Kaduna",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Apochi Godwin",
      role: "Front End Developer",
      location: "Kaduna",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Apochi Godwin",
      role: "Front End Developer",
      location: "Kaduna",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Egwi Kelvin",
      role: "Back End Developer",
      location: "Lagos",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
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
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f8]">
      <Navbar />

      {/* =========================
          TEAM HERO
      ========================== */}

      <section className="relative overflow-hidden bg-[#f7f8f8]">
        {/* Decorative green shapes */}

        <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[500px] w-[250px] rotate-[35deg] rounded-[50%] bg-[#163527] opacity-95" />

        <div className="pointer-events-none absolute right-[-100px] top-[180px] h-[500px] w-[150px] rotate-[35deg] rounded-[50%] bg-[#163527]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex border-b border-[#f2a93b] pb-1 text-[10px] font-medium uppercase text-[#163527]"
          >
            About Team Members
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              delay: 0.1,
            }}
            className="mt-4 max-w-md text-3xl font-normal leading-tight text-[#163527] sm:text-4xl"
          >
            The people, not the pitch deck.
          </motion.h1>
        </div>
      </section>

      {/* =========================
          TEAM MEMBERS
      ========================== */}

      <section className="relative overflow-hidden bg-[#f7f8f8]">
        {/* Decorative shapes */}

        <div className="pointer-events-none absolute -left-32 top-[420px] h-[500px] w-[170px] rotate-[55deg] rounded-[50%] bg-[#163527]" />

        <div className="pointer-events-none absolute -right-28 top-[700px] h-[500px] w-[150px] rotate-[-25deg] rounded-[50%] bg-[#163527]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-12 sm:px-6">
          {/* =========================
              TEAM GRID
          ========================== */}

          <motion.div
            className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={cardContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.article
                key={`${member.name}-${index}`}
                variants={cardAnimation}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mx-auto w-full max-w-[200px] cursor-default rounded border border-gray-400 bg-white p-2"
              >
                {/* IMAGE */}

                <motion.div className="group aspect-square w-full overflow-hidden rounded border border-gray-400">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* DETAILS */}

                <div className="px-1 pb-1 pt-3">
                  <h2 className="text-[11px] font-bold uppercase text-black">
                    {member.name}
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-600">
                    {member.role}
                  </p>

                  <p className="mt-3 text-[8px] uppercase text-gray-500">
                    {member.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* =========================
              INTERNSHIP CTA
          ========================== */}

          <motion.div
            className="mt-10 border-t border-gray-300 pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
          >
            <div className="max-w-xl px-1">
              <p className="text-sm font-medium leading-6 text-black sm:text-base">
                We add one person a year, at most. Usually, an intern who
                stayed.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.15,
                }}
                className="mt-4 rounded-lg bg-[#163527] px-4 py-2 text-[10px] font-medium text-white transition-colors hover:bg-[#214b35]"
              >
                Apply for Internship here
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;
