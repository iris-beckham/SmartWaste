import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutTheDevs from "./pages/AboutTheDevs";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import AboutTheApp from "./pages/AboutTheApp";
import CompostingPage from "./pages/CompostingPage";
import SharpsPage from "./pages/SharpsPage";
import SpecialWastePage from "./pages/SpecialWastePage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about_smart_waste" element={<AboutTheApp />} />
        <Route path="/composting" element={<CompostingPage />} />
        <Route path="/sharps_and_medical" element={<SharpsPage />} />
        <Route path="/special_waste" element={<SpecialWastePage />} />
        {/* <Route path="/recycling" element={<RecyclingPage />} /> */}
        <Route path="/meet_the_team" element={<AboutTheDevs />} />
      </Routes>
    </>
  );
};

export default App;
