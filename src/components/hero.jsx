import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.png";
import HomeFrame from "../assets/homeFrame.png";

function Hero() {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false); // false = text/green, true = hero1
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const textDurationMs = 2500;
  const imageDurationMs = 2500;

  useEffect(() => {
    if (isHovering) return; // pause the alternation while hovering

    timerRef.current = setTimeout(
      () => setShowImage((v) => !v),
      showImage ? imageDurationMs : textDurationMs
    );

    return () => clearTimeout(timerRef.current);
  }, [showImage, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowImage(false); // force back to text/green state immediately
  };

  return (
    <section
      className="relative overflow-hidden bg-[#204d2f] min-h-[600px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Full-screen hero image layer */}
      <AnimatePresence mode="wait">
        {showImage && (
          <motion.div
            key="image"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={hero1}
              alt="Kratos hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#163527]/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text + HomeFrame layer */}
      <AnimatePresence mode="wait">
        {!showImage && (
          <motion.div
            key="text"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 mx-auto flex w-full max-w-6xl flex-col sm:flex-row items-center gap-8 px-5 py-20 sm:px-6 sm:py-32"
          >
            <div className="flex flex-col items-start max-w-2xl sm:w-1/2">
              <span className="mb-4 inline-flex max-w-fit gap-2 border-t border-t-[#f2b632] py-1.5 text-xs font-semibold uppercase tracking-wide text-[#f2b632]">
                Kratos Software Technologies
              </span>

              <h1 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
                We build <span className="text-[#f2a93b]">solutions</span>. We build{" "}
                <span className="text-[#f2a93b]">people</span>. We build{" "}
                <span className="text-[#f2a93b]">businesses</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                A software firm in Lagos designing and delivering SaaS products and
                custom applications, while training the next generation of
                developers through hands-on internships.
              </p>

              <div className="mt-6 flex flex-row gap-4">
                <button
                  onClick={() => navigate("/projects")}
                  className="rounded-2xl bg-[#f2a93b] px-4 py-3 text-sm font-medium text-[#163527] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  See our work
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="rounded-2xl border border-white px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Start a project
                </button>
              </div>
            </div>

            <div className="w-full max-w-xs mx-auto sm:mx-0 sm:w-1/2 sm:max-w-sm">
              <div className="aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                <img
                  src={HomeFrame}
                  alt="Kratos product preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;