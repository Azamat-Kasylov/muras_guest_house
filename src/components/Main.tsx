import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import RoomsPage from "./Pages/RoomsPage/RoomsPage";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/aboutUs" element={<Hero />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
    </div>
  );
};

export default Main;
