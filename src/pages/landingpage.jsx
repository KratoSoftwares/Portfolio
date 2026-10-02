import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Stats from "../components/stats";
import WhatWeDo from "../components/whatWeDo";
import OurProcess from "../components/ourProcess";
import FlagshipWork from "../components/flagshipwork";
import IntershipCTA from "../components/internShipCta";
import Footer from "../components/footer";



function LandingPage() {
  return (
    <div
     
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
    </div>
  );
}

export default LandingPage;
