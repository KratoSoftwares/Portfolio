import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import Favour from "../assets/favour.png";
import Emmanuella from "../assets/Emmanuella.png"
import Tofunmi from "../assets/Tofunmi.png"
import Samuel from "../assets/Samuel.png"
import Hope from "../assets/Hope.png"
import Olamide from "../assets/Olamide.png"

function Team() {
  const Leadership = [
    { name: "Favour Leader", role: "CTO / HEAD OF PRODUCT", img: "" },
  ];

  const products = [
    { name: "Favour Ikechukwu", role: "Product Manager", img: {Favour} },
    { name: "Emmanuel Ogah", role: "Product Designer", img: {Emmanuella} },
    { name: "Tofunmi Emmanuel", role: "Product Designer", img: {Tofunmi} },
  ];

  const Developers = [
    { name: "Egwi Kelvin", role: "Mobile Developer", img: "" },
    { name: "Samuel Ola", role: "Backend Developer", img:{Samuel} },
    { name: "Apochi Godwin", role: "Front End Developer", img: "" },
  ];

  const Publishers = [
    { name: "Nwaji Hope", role: "Digital Marketer", img: {Hope} },
    { name: "Adetola Olamide", role: "Data Scientist", img: {Olamide} },
  ];

  const cardContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Reusable card — keeps every section's sizing identical
  const TeamCard = ({ person }) => (
    <motion.div variants={cardAnimation} className="flex flex-col gap-2.5">
      <div className="aspect-4/5 w-full overflow-hidden rounded-sm bg-gray-100">
        {person.img ? (
          <img
            src={person.img}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <span className="text-xs font-bold uppercase tracking-wide text-[#0d2213]">
        {person.name}
      </span>
      <span className="-mt-2 text-xs text-[#204d2f]">{person.role}</span>
    </motion.div>
  );

  // Reusable section wrapper — label + grid, same shape for every group
  const TeamSection = ({ title, people, cols = "sm:grid-cols-3" }) => (
    <motion.div
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardContainer}
    >
      <span className="mb-4 inline-block border-b border-b-[#f2b632] pb-1 text-xs font-semibold uppercase tracking-widest text-[#0d2213]">
        {title}
      </span>

      <div className={`grid grid-cols-1 gap-6 ${cols}`}>
        {people.map((person) => (
          <TeamCard key={person.name} person={person} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfcf9]">
      <Navbar />

      {/* =========================
          TEAM HERO
      ========================== */}

      <section className="relative overflow-hidden bg-[#204d2f]">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex border-t border-t-[#f2b632] pb-1 text-sm font-medium uppercase tracking-wide text-[#f2b632]"
          >
            Team Members
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-6xl text-3xl font-normal leading-tight text-[#f8f7ee] sm:text-4xl"
          >
            Nine specialists. One delivery system
          </motion.h1>

          <motion.p className="mt-7 max-w-2xl text-sm font-extralight text-[#f8f7ee]">
            Product direction, engineering, growth, data science and security
            organized so every project has the capability it needs
          </motion.p>
        </div>
      </section>

      {/* =========================
          TEAM MEMBERS
      ========================== */}

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-12 sm:px-6">
        <TeamSection title="Leadership" people={Leadership} cols="sm:grid-cols-3" />
        <TeamSection title="Product" people={products} />
        <TeamSection title="Engineering" people={Developers} />
        <TeamSection title="Growth" people={Publishers} cols="sm:grid-cols-2" />

        {/* =========================
            INTERNSHIP CTA
        ========================== */}

        <motion.div
          className="mt-10 border-t border-gray-300 pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="max-w-xl px-1">
            <p className="text-sm font-medium leading-6 text-black sm:text-base">
              We add one person a year, at most. Usually, an intern who
              stayed.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="mt-4 rounded-lg bg-[#163527] px-4 py-2 font-sans text-[10px] font-medium text-white transition-colors hover:bg-[#214b35]"
            >
              Apply for Internship here
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;
