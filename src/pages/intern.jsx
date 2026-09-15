import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Kratos from "../assets/Kratos.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";

function Intern() {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "",
    portfolio: "",
    message: "",
  });

  const openTracks = [
    "Back End Development",
    "Digital Marketing",
    "Cyber Security",
    "Product Manager",
    "Product Designers",
    "Front End Development",
    "Mobile Development",
    "Data Science",
  ];

  const clearInputs = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        track: "",
        portfolio: "",
        message: "",
      });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xoeabbap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess("Your application has been sent successfully");

        clearInputs();

        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        setSuccess("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccess("Unable to send your message. Please try again.");
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fieldAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const listAnimation = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="bg-[#f7f8f8]">
        <section className="relative   overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
          {/* Decorative oversized logo, blurred, sitting behind the content */}
          <div
            className="mx-auto pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-center blur-md opacity-60"
            style={{ backgroundImage: `url(${Kratos})` }}
          />

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -30, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -30, x: "-50%" }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-5 z-[100] rounded-lg bg-[#163527] px-5 py-3 text-xs font-medium text-white shadow-lg"
            >
              {success}
            </motion.div>
          )}

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* =========================
                HEADING BLOCK — full width
            ========================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
            >
              {/* LABEL */}

              <motion.span
                variants={fadeLeft}
                className="w-fit border-b border-b-[#0d2213] pb-1 text-[15px] font-medium uppercase tracking-wide text-[#0d2213]"
              >
                Collaboration, Internship
              </motion.span>

              {/* HEADING */}

              <motion.h1
                variants={fadeLeft}
                className="mt-5 max-w-2xl text-3xl font-medium leading-tight text-[#0d2213] sm:text-4xl"
              >
                Are you new in your field and seeking somewhere to grow your
                skill?
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={fadeLeft}
                className="mt-5 max-w-2xl text-sm leading-6 text-[#0d2213]"
              >
                We run a paid three-month internship twice a year. You join a
                live project, you present your own work in the weekly review,
                and you leave with something shipped that you can point at.
              </motion.p>
            </motion.div>

            {/* =========================
                OPEN TRACKS + FORM — flex row below the heading
            ========================== */}

            <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-14">
              {/* OPEN TRACKS */}

              <motion.div
                className="md:w-2/5 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <h2 className="w-fit border-b border-black pb-1 text-sm font-semibold uppercase tracking-wide text-[#0d2213]">
                  Open Tracks
                </h2>

                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-4 space-y-9 text-sm text-[#0d2213] "
                >
                  {openTracks.map((track) => (
                    <motion.li className="border-b border-b-[#0d2213] pb-2" key={track} variants={listAnimation}>
                      {track}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* =========================
                  FORM
              ========================== */}

              <motion.div
                className="rounded-xl bg-[#204d2f]/90 p-7 sm:p-9 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeRight}
              >
                <span className="w-fit border-b border-[#f2b632] pb-1 text-xs font-semibold uppercase tracking-wide text-[#f8f7ee]">
                  Apply Now
                </span>

                <motion.form
                  onSubmit={handleSubmit}
                  className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2"
                  variants={staggerContainer}
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Internship application"
                  />

                  {/* FULL NAME */}

                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="name"
                      className="text-[10px] font-medium uppercase text-[#f8f7ee]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      name="name"
                      type="text"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-[#f8f7ee] outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* EMAIL */}

                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="email"
                      className="text-[10px] font-medium uppercase text-[#f8f7ee]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      type="email"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* TRACK */}

                  <motion.div
                    variants={fieldAnimation}
                    className="sm:col-span-2"
                  >
                    <label
                      htmlFor="track"
                      className="text-[10px] font-medium uppercase text-[#f8f7ee]"
                    >
                      Track
                    </label>

                    <input
                      id="track"
                      name="track"
                      value={formData.track}
                      onChange={(e) =>
                        setFormData({ ...formData, track: e.target.value })
                      }
                      type="text"
                      placeholder="e.g. Front End Development"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* PORTFOLIO */}

                  <motion.div
                    variants={fieldAnimation}
                    className="sm:col-span-2"
                  >
                    <label
                      htmlFor="portfolio"
                      className="text-[10px] font-medium uppercase text-[#f8f7ee]"
                    >
                      Portfolio or Repository Link
                    </label>

                    <input
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolio: e.target.value })
                      }
                      type="text"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* SOMETHING YOU MADE */}

                  <motion.div
                    variants={fieldAnimation}
                    className="sm:col-span-2"
                  >
                    <label
                      htmlFor="message"
                      className="text-[10px] font-medium uppercase text-[#f8f7ee]"
                    >
                      Something You Made and Why It Matters
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows="4"
                      className="mt-4 w-full resize-none border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* BUTTON */}

                  <motion.div
                    variants={fieldAnimation}
                    className="sm:col-span-2"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="rounded-full bg-[#f2a93b] px-5 py-2 text-xs font-bold text-[#204d2f]"
                    >
                      Submit application
                    </motion.button>

                    <p className="mt-3 text-[11px] text-white/60">
                      Or email your details to kratosoftwares@gmail.com. We
                      reply to every applicant.
                    </p>
                  </motion.div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <Footer />
    </div>
  );
}

export default Intern;
