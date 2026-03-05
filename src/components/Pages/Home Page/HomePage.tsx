import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import RoomsSection from "./RoomsSection";
import ServicesSection from "./ServicesSection";
import FeedbackSection from "./FeedbackSection";
// import Gallery from "./Gallery";
import GalleryStatic from "./GallerySection";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <RoomsSection />
      {/* <Gallery /> */}
      <GalleryStatic />
      <ServicesSection />
      <FeedbackSection />
    </div>
  );
};

export default HomePage;
