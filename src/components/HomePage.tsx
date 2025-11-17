import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import RoomsSection from "./RoomsSection";
import GalleryAutoCarousel from "./GalleryAutoCarousel";
import ServicesSection from "./ServicesSection";
import FeedbackCarousel from "./FeedbackCarousel";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <RoomsSection />
      <GalleryAutoCarousel />
      <ServicesSection />
      <FeedbackCarousel />
    </div>
  );
};

export default HomePage;
