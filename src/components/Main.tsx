import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HeroPage from "./Pages/HeroPage/HeroPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import RoomsPage from "./Pages/RoomsPage/RoomsPage";

const Main: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/aboutUs" element={<HeroPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
};

export default Main;
