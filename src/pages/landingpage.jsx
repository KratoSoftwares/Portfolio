import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Stats from "../components/stats";
import WhatWeDo from "../components/whatWeDo";
import OurProcess from "../components/ourProcess";
import FlagshipWork from "../components/flagshipwork";
import IntershipCTA from "../components/internShipCta";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeDo />
      <OurProcess />
      <FlagshipWork />
      <IntershipCTA />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
