import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, fadeLeft, fadeRight } from "../animations/variants";
import logo from "../assets/logo.png";

function Contact() {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
  });
  const clearInputs = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xppanbvb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess("Your message has been sent successfully");

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

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <main className="bg-[#e9efe7]">
        <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
          {/* Decorative oversized logo, blurred + faded, sitting behind the content */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-24 z-0 w-[700px] max-w-none select-none opacity-25 blur-3xl"
          />

          <div className="relative z-10">
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
                  className="w-fit border-b border-black pb-1 text-[15px] font-medium uppercase tracking-wide text-[#163527]"
                >
                  Contact Us
                </motion.span>

                {/* HEADING */}

                <motion.h1
                  variants={fadeLeft}
                  className="mt-5 max-w-md text-3xl font-normal leading-tight text-[#163527] sm:text-4xl"
                >
                  Tell us what is not working yet.
                </motion.h1>

                {/* DESCRIPTION */}

                <motion.p
                  variants={fadeLeft}
                  className="mt-5 max-w-md text-sm leading-6 text-gray-600"
                >
                  A paragraph is enough to start. If it is a fit, we will send
                  a short read of the problem, a rough shape of the work and
                  problem; usually within two working days.
                </motion.p>

                {/* EMAIL */}

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-col gap-1"
                >
                  <h5 className="text-[20px] font-medium uppercase tracking-wide text-gray-600">
                    Email
                  </h5>

                  <span className="text-sm text-gray-600">
                    teamname@gmail.com
                  </span>
                </motion.div>

                {/* AVAILABILITY */}

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-col gap-1"
                >
                  <h5 className="text-[20px] font-medium uppercase tracking-wide text-gray-600">
                    Availability
                  </h5>

                  <span className="text-sm text-gray-600">
                    Taking one new project this quarter
                  </span>
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
                  <input type="hidden" name="_suject" value=" Contact form" />
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

                  {/* COMPANY */}

                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="company"
                      className="text-[10px] font-medium uppercase text-white/75"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      name="company"
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
                      Your Email
                    </label>

                    <input
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      name="email"
                      type="email"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* BUDGET */}

                  <motion.div variants={fieldAnimation}>
                    <label
                      htmlFor="budget"
                      className="text-[10px] font-medium uppercase text-white/75"
                    >
                      Budget Range (Optional)
                    </label>

                    <input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      name="budget"
                      type="text"
                      className="mt-4 w-full border-0 border-b border-white/50 bg-transparent px-0 py-2 text-xs text-white outline-none placeholder:text-white/50 focus:border-[#f2a93b]"
                    />
                  </motion.div>

                  {/* PROBLEM */}

                  <motion.div
                    variants={fieldAnimation}
                    className="sm:col-span-2"
                  >
                    <label
                      htmlFor="message"
                      className="text-[10px] font-medium uppercase text-white/75"
                    >
                      The Problem
                    </label>

                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      name="message"
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
                      Send it over
                    </motion.button>
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

export default Contact;
