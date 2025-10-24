import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import RoomsSection from "./components/RoomsSection";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import GalleryAutoCarousel from "./components/GalleryAutoCarousel";
import FeedbackCarousel from "./components/FeedbackCarousle";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Hero />
      <RoomsSection />
      <GalleryAutoCarousel />
      <ServicesSection />
      <FeedbackCarousel />
      <Footer />
    </div>
  );
};

export default App;
