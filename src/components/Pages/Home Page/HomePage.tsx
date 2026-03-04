import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import RoomsSection from "./RoomsSection";
import ServicesSection from "./ServicesSection";
import FeedbackSection from "./FeedbackSection";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <RoomsSection />
      <Gallery />
      <ServicesSection />
      <FeedbackSection />
    </div>
  );
};

export default HomePage;
