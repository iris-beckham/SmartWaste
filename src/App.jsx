import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutTheDevs from "./pages/AboutTheDevs";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import CategoryPage from "./pages/CategoryPage";
import AboutTheApp from "./pages/AboutTheApp";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about_smart_waste" element={<AboutTheApp />} />
        <Route path="/waste_hub" element={<CategoryPage />} />
        <Route path="/meet_the_team" element={<AboutTheDevs />} />
      </Routes>
    </>
  );
};

export default App;
