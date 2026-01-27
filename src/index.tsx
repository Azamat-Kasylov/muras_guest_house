import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root") as any);
root.render(
  <BrowserRouter basename="/muras_guest_house">
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
