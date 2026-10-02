import Navbar from "../components/navbar";
import Hero2 from "../components/hero2";
import Footer from "../components/footer";
import { motion, AnimatePresence } from "framer-motion";
import DASHME from "../assets/dashme.png";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import kovaplc from "../assets/kovaplc.png";
import kovaplc2 from "../assets/kovaplc2.png";
import kovaplc3 from "../assets/kovaplc3.png";
import kovaplc4 from "../assets/kovaplc4.png";
import kovaplc5 from "../assets/kovaplc5.png";
import kovaplc6 from "../assets/kovaplc6.png";
import { fadeLeft, fadeRight } from "../animations/variants";
import ams1 from "../assets/ams1.png";
import ams2 from "../assets/ams2.png";
import ams3 from "../assets/ams3.png";
import ams4 from "../assets/ams4.png";
import ams5 from "../assets/ams5.png";
import ams6 from "../assets/ams6.png";
import sdrms1 from "../assets/sdrms1.png";
import sdrms2 from "../assets/sdrms2.png";
import sdrms3 from "../assets/sdrms3.png";
import sdrms4 from "../assets/sdrms4.png";
import Medcare1 from "../assets/Medcare1.png";
import medcare2 from "../assets/medcare2.png";
import medcare3 from "../assets/medcare3.png";
import medcare4 from "../assets/medcare4.png";
import medcare5 from "../assets/medcare5.png";
import medcare6 from "../assets/medcare6.png";
import { useState, useEffect, useRef } from "react";

function ProjectCarousel({ slides, title, autoPlayMs = 2500 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hasMultiple = slides.length > 1;

  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!hasMultiple) return;
    timerRef.current = setInterval(goNext, autoPlayMs);
    return () => clearInterval(timerRef.current);
  }, [index, hasMultiple]);

  const currentSlide = slides[index]; // array of 1 or 2 images

  return (
    <div
      className="relative flex items-center justify-center gap-3 overflow-hidden bg-white p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() => {
        if (hasMultiple) timerRef.current = setInterval(goNext, autoPlayMs);
      }}
    >
      {hasMultiple && (
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#dddfd7] text-[#0d2213] hover:bg-[#f5f6f2] transition"
        >
          <BiChevronLeft size={16} />
        </button>
      )}

      <div className="relative flex h-64 w-full max-w-[90%] items-center justify-center gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex w-full items-center justify-center gap-4"
          >
            {currentSlide.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${index + 1}-${i + 1}`}
                className="h-auto max-h-64 w-auto max-w-[48%] object-contain"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {hasMultiple && (
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#dddfd7] text-[#0d2213] hover:bg-[#f5f6f2] transition"
        >
          <BiChevronRight size={16} />
        </button>
      )}

      {hasMultiple && (
        <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-[#0d2213]" : "bg-[#dddfd7]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      title: "DASHME",
      status: "Ongoing",
      problem:
        "Usable items are wasted daily because owners have no easy way to pass them on, and existing platforms(selling app,disorganised social groups) aren't built for local giving, requesting or swapping.",
      solution:
        "Dashme is a dedicated platform for giving requesting and batering items locally with trust and safety built in from the start.Users can give items directly to someone who needs them,request items through searchable listings or swap items for something they actually want",
      techStack: ["React Native", "Node.js"],
      type: "Mobile App",
      year: "2025",
      slides: [[DASHME]],
    },
    {
      number: "02",
      title: "KOVA",
      status: "Executed",
      problem:
        "Nigerian small business owners track  sales, expenses and debts on paper, leaving them without reliable records or VAT compliance.",
      solution:
        "A mobile bookkeeping app and VAT compliance app that records sales and expenses, tracks inventory, monitor debts and show real profit.",
      techStack: ["React Native", "Node.js"],
      type: "Website & Mobile App",
      year: "2026",
      slides: [[kovaplc],[kovaplc2],[kovaplc3],[kovaplc4],[kovaplc5],[kovaplc6]],
    },
    {
      number: "03",
      title: "MedCare",
      status: "Executed",
      problem:
        "Healthcare providers often struggle with fragmented, manual workflows for connecting patients to doctors such as scattered appointment scheduling, no centralized way to manage doctor availability or credentials, and no secure digital record of consultations and prescriptions. Clinics and hospitals need a unified system that gives patients, doctors, and administrators each the tools they need, without compromising oversight or security.",
      solution:
        "Kratos designed and built MedCare, a 3-tier, role-based healthcare management platform that digitizes the patient-to-provider journey. Patients can browse doctors by specialization, book appointments based on real-time availability, and securely access their consultation history, prescriptions, log consultation notes, and generate e-prescriptions. Admins oversee the platform end-to-end, verifying and onboarding doctors, managing specializations, and monitoring users and appointments. The result is a secure, scalable system that removes manual coordination and can be adapted for clinics, hospitals, or health-tech startups needing a similar multi-role booking and records solution.",
      techStack: ["React Native", "Node.js"],
      type: "Mobile App",
      year: "2026",
      slides: [[Medcare1, medcare2],[medcare3, medcare4],[medcare5, medcare6]],
    },
    {
      number: "04",
      title: "Smart Duty Roaster Management System",
      status: "Executed",
      problem:
        "Manual shift scheduling is time-consuming and error-prone, often leading to staff conflicts, uneven workload distribution, and double-booking. Head Nurses and Matrons, in particular, struggled to balance rosters fairly while managing the constant back-and-forth of manual allocation.",
      solution:
        "Kratos built an automated duty roster system that auto-generates staff schedules with one click, using availability and rules-based logic to ensure fair workload distribution and prevent scheduling conflicts. The platform includes staff profile management, role/department assignment, and customizable shift definitions, along with table and calendar views that export to PDF or Excel for easy sharing. Managers retain full control to edit, swap, or override shifts as needed, cutting rostering time by up to 90%. Originally designed for hospital nursing teams, the system is adaptable to any shift-based organization, including pharmacies, hotels, restaurants, and security firms.",
      techStack: ["React", "Node.js"],
      type: "WEB BASED",
      year: "2026",
      slides: [[sdrms1, sdrms2],[sdrms3, sdrms4]],
    },
    {
      number: "05",
      title: "Association Management System",
      status: "Executed",
      problem:
        "Associations, unions, cooperatives, and social groups often rely on manual record-keeping and scattered WhatsApp communication to manage members, finances, and elections. This leads to confusion, financial disputes, and inefficient handling of dues, meetings, and voting processes.",
      solution:
        "The product is a full-featured platform that digitizes and automates association operations end-to-end. It handles member registration and profiling with searchable directories, tracks dues and contributions with automated payment records and financial transparency dashboards, and runs secure digital elections with real-time result collation. A built-in communication module keeps members updated through push notifications, announcements, and meeting scheduling. The result is a single, organized system that lets association leaders manage members, money, and meetings effortlessly.",
      techStack: ["React", "Node.js"],
      type: "WEB BASED",
      year: "2026",
     slides: [[ams1, ams2],[ams3, ams4],[ams5, ams6]],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Hero2 />

      <main className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`grid grid-cols-1 items-start gap-4 py-8 sm:py-10 md:grid-cols-[1fr_1fr] md:gap-6 ${
                index !== projects.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* TEXT */}
              <motion.div variants={fadeLeft} className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium text-gray-400">
                    {project.number}
                  </span>
                  <h2 className="flex flex-row gap-6 sm:gap-20 items-center font-semibold">
                    <span className="text-[#0d2213] text-sm font-light leading-wide">
                      {project.title}
                    </span>
                    <span className="bg-[#dddfd7] rounded-2xl px-3 font-light text-xs py-0.5 text-[#204d2f]">
                      {project.status}
                    </span>
                  </h2>
                </div>

                <p className="mt-3 max-w-md text-sm leading-5 text-[#0d2213]">
                  Problem. {project.problem}
                </p>
                <p className="mt-3 max-w-md text-sm leading-5 text-[#0d2213]">
                  Solution. {project.solution}
                </p>

                {project.slides.length === 1 && project.slides[0].length === 1 && (
                  <>
                    <div className="flex mt-5 text-flex-row items-center gap-5">
                      <span className="border rounded-sm border-[#dddfd7] px-2 text-[#0d2213] text-xs bg-white">
                        {project.techStack[0]}
                      </span>
                      <span className="border rounded-sm border-[#dddfd7] px-2 text-[#0d2213] text-xs bg-white">
                        {project.techStack[1]}
                      </span>
                    </div>

                    <div className="mt-5 flex max-w-md items-center justify-between text-xs text-[#0d2213]">
                      <span className="border-t border-t-[#f2b632] p-1">
                        {project.type}
                      </span>
                      <span className="border-t border-t-[#f2b632] p-1">
                        {project.year}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>

              {/* IMAGE CAROUSEL + META BELOW IT */}
              <motion.div variants={fadeRight} className="flex flex-col gap-3">
                <ProjectCarousel slides={project.slides} title={project.title} />

                {!(project.slides.length === 1 && project.slides[0].length === 1) && (
                  <>
                    <div className="flex items-center gap-5">
                      <span className="border rounded-sm border-[#dddfd7] px-2 text-[#0d2213] text-xs bg-white">
                        {project.techStack[0]}
                      </span>
                      <span className="border rounded-sm border-[#dddfd7] px-2 text-[#0d2213] text-xs bg-white">
                        {project.techStack[1]}
                      </span>
                    </div>

                    <div className="flex max-w-md mt-5 items-center justify-between text-xs text-[#0d2213]">
                      <span className="border-t border-t-[#f2b632] p-1">
                        {project.type}
                      </span>
                      <span className="border-t border-t-[#f2b632] p-1">
                        {project.year}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
