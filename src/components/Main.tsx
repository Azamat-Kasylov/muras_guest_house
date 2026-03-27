import { Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/Home Page/HomePage";
// import HeroPage from "./Pages/HeroPage/HeroPage";
// import ServicesPage from "./Pages/ServicesPage/ServicesPage";
// import RoomsPage from "./Pages/RoomsPage/RoomsPage";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./Pages/Home Page/HomePage"));
const HeroPage = lazy(() => import("./Pages/HeroPage/HeroPage"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage/ServicesPage"));
const RoomsPage = lazy(() => import("./Pages/RoomsPage/RoomsPage"));

const Preloading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <main>
      <Suspense fallback={<Preloading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/aboutUs" element={<HeroPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
