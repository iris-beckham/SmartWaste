import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutTheDevs from "./pages/AboutTheDevs";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import CategoryPage from "./pages/CategoryPage";
import Test from "./components/Test";

const App = () => {
  // return <Test />;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutTheDevs />} />
        <Route path="/waste_hub" element={<CategoryPage />} />
      </Routes>
    </>
  );
};

export default App;
