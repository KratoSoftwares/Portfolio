import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";

function Intern() {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: "",
  });
  const clearInputs = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        role: "",
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

  const formContainer = {
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
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {/* =========================
                LEFT SIDE
            ========================== */}

            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={formContainer}
            >
              {/* LABEL */}

              <motion.span
                variants={fadeLeft}
                className="w-fit border-b border-[#f2a93b] pb-1 text-[10px] font-medium uppercase tracking-wide text-[#163527]"
              >
                Internship
              </motion.span>

              {/* HEADING */}

              <motion.h1
                variants={fadeLeft}
                className="mt-5 max-w-md text-3xl font-normal leading-tight text-[#163527] sm:text-4xl"
              >
                Learn by doing real work.
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={fadeLeft}
                className="mt-5 max-w-md text-xs leading-6 text-gray-600"
              >
                Join our team and work on real products, solve real problems,
                and learn alongside people who are building things that matter.
              </motion.p>

              <motion.p
                variants={fadeLeft}
                className="mt-5 max-w-md text-xs leading-6 text-gray-600"
              >
                We are looking for curious people who are willing to learn,
                contribute, and take ownership of their work.
              </motion.p>

              {/* WHAT YOU WILL DO */}

              <motion.div variants={fadeUp} className="mt-7">
                <h2 className="text-[10px] font-medium uppercase text-[#163527]">
                  What you will do
                </h2>

                <motion.ul
                  variants={formContainer}
                  className="mt-3 space-y-2 text-xs text-gray-600"
                >
                  <motion.li variants={listAnimation}>
                    • Work on real projects with the team
                  </motion.li>

                  <motion.li variants={listAnimation}>
                    • Learn from experienced team members
                  </motion.li>

                  <motion.li variants={listAnimation}>
                    • Contribute ideas and solutions
                  </motion.li>

                  <motion.li variants={listAnimation}>
                    • Build practical experience
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>

            {/* =========================
                RIGHT SIDE - FORM
            ========================== */}

            <motion.div
              className="bg-[#496d52] p-7 sm:p-9"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeRight}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-7 sm:grid-cols-2"
                variants={formContainer}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Internship application"
                />
                {/* NAME */}

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="name"
                    className="text-[10px] font-medium uppercase text-white/75"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    name="name"
                    type="text"
                    className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                  />
                </motion.div>

                {/* EMAIL */}

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="email"
                    className="text-[10px] font-medium uppercase text-white/75"
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

                {/* AREA OF INTEREST */}

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="role"
                    className="text-[10px] font-medium uppercase text-white/75"
                  >
                    Area of Interest
                  </label>

                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    defaultValue=""
                    className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none focus:border-[#f2a93b]"
                  >
                    <option value="" disabled className="text-black">
                      Select an area
                    </option>

                    <option value="frontend" className="text-black">
                      Front End Development
                    </option>

                    <option value="backend" className="text-black">
                      Back End Development
                    </option>

                    <option value="design" className="text-black">
                      Product Design
                    </option>

                    <option value="marketing" className="text-black">
                      Digital Marketing
                    </option>

                    <option value="data" className="text-black">
                      Data Analysis
                    </option>
                  </select>
                </motion.div>

                {/* PORTFOLIO */}

                <motion.div variants={fieldAnimation}>
                  <label
                    htmlFor="portfolio"
                    className="text-[10px] font-medium uppercase text-white/75"
                  >
                    Portfolio / GitHub
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

                {/* MESSAGE */}

                <motion.div variants={fieldAnimation} className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-medium uppercase text-white/75"
                  >
                    Tell us about yourself
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

                <motion.div variants={fieldAnimation} className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="rounded-full bg-[#f2a93b] px-5 py-2 text-xs font-bold text-[#163527]"
                  >
                    Apply for Internship
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
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
