import React from "react";
import Navbar from "../component/Navbar";
import Details from "../component/Details";
import Info from "../component/Info";
import Nex from "../component/Nex";
import Btn from "../component/btn";
import SkillsCarousel from "../component/SkillsCarousel";
import Tech from "../component/Tech";
import Services from "../component/Services";
import Service from "../Section/Service";
import Accordion from "../Section/Accordion";

function Home() {
  return (
    <div className="bg-black min-h-screen md:max-sm:flex p-10">
      <Navbar />
      <Details />
      <Info />
      <Nex />
      <Btn />
      <Tech />
      <SkillsCarousel />
      <Services />
      <Service />
      <Accordion/>

    </div>
  );
}

export default Home;
