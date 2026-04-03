import { Routes, Route } from "react-router-dom";
import Spinner from "./Spinner";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./Pages/Home Page/HomePage"));
const HeroPage = lazy(() => import("./Pages/HeroPage/HeroPage"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage/ServicesPage"));
const RoomsPage = lazy(() => import("./Pages/RoomsPage/RoomsPage"));

const Main: React.FC = () => {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
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
