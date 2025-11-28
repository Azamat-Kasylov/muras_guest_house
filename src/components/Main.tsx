import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import RoomsPage from "./Pages/RoomsPage/RoomsPage";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/main" element={<HomePage />}></Route>
        <Route path="/aboutUs" element={<Hero />}></Route>
        <Route path="/rooms" element={<RoomsPage />}></Route>
        <Route path="/services" element={<ServicesSection />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
