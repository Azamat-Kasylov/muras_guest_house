import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import RoomsSection from "./RoomsSection";
import ServicesSection from "./ServicesSection";
import FeedbackSection from "./FeedbackSection";
import GallerySection from "./GallerySection";

// const GallerySection = lazy(() => import("./GallerySection"));

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Hero />
      <RoomsSection />
      <GallerySection />
      <ServicesSection />
      <FeedbackSection />
    </div>
  );
};

export default HomePage;
