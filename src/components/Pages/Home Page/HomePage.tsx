import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import RoomsSection from "./RoomsSection";
import ServicesSection from "./ServicesSection";
import FeedbackCarousel from "./FeedbackCarousel";
import Gallery from "./Gallery";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <RoomsSection />
      <Gallery />
      <ServicesSection />
      <FeedbackCarousel />
    </div>
  );
};

export default HomePage;
