import React from "react";
import AboutUs from "../components/AboutUs";

const AboutTheDevs = () => {
  return (
    <div className="bg-white">
      <div className="py-12 text-center text-4xl font-bold">Meet the Team</div>
      <hr className="mx-10 border-2 border-black" />
      <AboutUs />
    </div>
  );
};

export default AboutTheDevs;
