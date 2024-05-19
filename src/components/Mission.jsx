import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="p-5 bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-3xl px-8 py-12 bg-white shadow-lg rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl text-center mb-6">
            At Smart Waste, we are dedicated to revolutionizing waste management
            in New York City by providing conscious solutions tailored to the
            needs of residents who prioritize sustainability and environmental
            stewardship. Our mission is to empower and educate NYC residents to
            make informed decisions about waste disposal, fostering a community
            of individuals who care deeply about the environment and strive to
            minimize their ecological footprint.
          </p>
          {/* <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Contact Us
          </Link> */}
        </div>
        <div className="max-w-3xl px-8 pt-12 pb-6 mb-10 mt-5 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Tools and Resources
          </h2>
          <p className="text-lg md:text-xl text-center mb-8">
            At Smart Waste, we pride ourselves on harnessing cutting-edge
            technology and leveraging valuable resources to empower New York
            City residents in conscious waste management. Our platform has been
            meticulously crafted using the wealth of data available through the
            OpenData NYC API, allowing us to provide real-time insights and
            solutions tailored to the unique needs of NYC neighborhoods.
          </p>
          <p className="text-lg md:text-xl text-center mb-8">
            With the combined power of OpenData NYC and DSNY resources, we've
            developed a robust platform that enables users to make informed
            decisions about waste disposal, locate waste disposal centers, and
            engage in sustainable practices that benefit both the community and
            the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
