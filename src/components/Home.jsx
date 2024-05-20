import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          //   className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dvmczcg3f/video/upload/v1716066866/landfill4_pdgcsm.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative inset-y-56 text-white">
          <div className="flex items-center justify-center text-white">
            <div className="text-center border-4 p-5 rounded-2xl bg-black">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                No Waste With,
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-green-300">S</span>
                <span className="text-amber-300">m</span>
                <span className="text-red-300">a</span>
                <span className="text-blue-300">r</span>
                <span className="text-purple-300">t</span> Waste!!!
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Conscious waste management for NYC residents WHO CARE!
              </p>
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                to={"/about_smart_waste"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
