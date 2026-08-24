import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ExecutedProjects from "../components/executedProjects";
import AboutTeam from "../components/aboutTeam";
import TeamMembers from "../components/TeamMembers";
import OngoingProject from "../components/ongoingProjects";
import IntershipCTA from "../components/internShipCta";
import Testimonials from "../components/Testimonials";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.8 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <ExecutedProjects />
      <AboutTeam />
      <TeamMembers />
      <OngoingProject />
      <IntershipCTA />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
