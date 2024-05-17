import React from 'react'
import { useState, useEffect } from 'react'

// function ToxicWasteDropOff() {
//     const [wasteDropOffCenters, setWasteDropOffCenters] = useState([])

//     useEffect(() => {
//         fetch("https://data.cityofnewyork.us/resource/242c-ru4i.json")
//         .then((res) => res.json())
//         .then((data) => setWasteDropOffCenters(data))
//     },[])

//   return (
//     <div></div>
//   )
// }

// export default ToxicWasteDropOff


import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import SWlocationsCard from './SWlocationsCard';

const SpecialWaste = () => {
  // this usestate sets index of carousel images
  const [currentIndex, setCurrentIndex] = useState(0);
  //this useState sets array of images
  const imagesArrayUrls = [
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1712642472/Tale%20Blazers/tarot-cards-profile-pic_fv6p7p.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711650725/chartd_qlhbgr.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711649108/colal-jpg_jzmskc.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1711416478/CourseQuest%20-%20App/circuit_board_pic_kgsrqb.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1706632712/Daily%20Spark%20-%20Landing%20Page%20Landscape%20Photos/vibrant-orange-landscape-of-sand-dunes-and-trees_e96ilu.jpg",
  ];

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        //check if previous index is 0, if it is set currentIndex to the length of allstoryEndings minus one
        prevIndex === 0 ? imagesArrayUrls.length - 1 : prevIndex - 1
      // else decrease currentIndex by one
    );
  };

  const goToNextImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        //check if previous index is equal to length of allStoryendings minus one, if yes set CurrenIndex to zero
        prevIndex === imagesArrayUrls.length - 1 ? 0 : prevIndex + 1
      //else increase currentindex by 1
    );
  };

  const [wasteDropOffCenters, setWasteDropOffCenters] = useState([])

    useEffect(() => {
        fetch("https://data.cityofnewyork.us/resource/242c-ru4i.json")
        .then((res) => res.json())
        .then((data) => setWasteDropOffCenters(data))
    },[])

  return (
    <div className="min-h-screen mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="bg-amber-400 col-span-1 md:col-span-3">
          <div className=" bg-violet-500 m-5 rounded-xl overflow-y-auto h-3/4">
            <div className="text-4xl mt-10 mx-5 mb-3">Waste Category</div>
            <hr className="border-4 border-black mb-10 mx-5 rounded" />
            <div className=" mx-5 rounded-2xl">
              <div className="flex justify-around">
                <button
                  onClick={goToPreviousImage}
                  className="hover:text-zinc-100"
                >
                  <CircleChevronLeft size={56} />
                </button>
                <div className="flex justify-center">
                  <img
                    src={imagesArrayUrls[currentIndex]}
                    alt="image_of_waste"
                    className="h-96 w-140 rounded-lg"
                  />
                </div>
                <button onClick={goToNextImage} className="hover:text-zinc-100">
                  <CircleChevronRight size={56} />
                </button>
              </div>
            </div>
            <div className="text-3xl mx-5 mt-10">
              What Can & What Can't Be Dropped Off
            </div>
            <div className="p-5">
              <div className="text-2xl">Can:</div>
              <div>
                <div>Automotive Batteries</div>
                <div>Batteries</div>
                <div>Electronics</div>
                <div>Fluorescent Tubes & CFLs</div>
                <div>Motor Oil & Transmission Fluid</div>
                <div>Paint Latex-Based</div>
                <div>Thermostats & Thermometers</div>
                <div>Tires</div>
              </div>
              <div className="text-2xl">Can't:</div>
              <div>
                <div>Appliances</div>
                <div>Appliances with CFCs</div>
                <div>Asbestos</div>
                <div>Cleaning Products</div>
                <div>Gas Cylinders</div>
                <div>Lawn & Garden Care Products</div>
                <div>Medical Waste</div>
                <div>Paint-Oil-Based</div>
                <div>Pest Control</div>
                <div>Asbestos</div>
                <div>Asbestos</div>
              </div>
            </div>
            <hr className="flex border-2 border-slate-900 mx-5 rounded" />
           </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-emerald-600">
          <div className="bg-sky-300 m-5 rounded-xl h-2/4">
            <div className="text-3xl py-7 mx-5 text-center">
              SpecialWaste Drop Off Sites
            </div>
            <hr className="border-4 border-black mb-10 mx-5 rounded" />
            <div className="overflow-y-auto h-72 grid gap-4">
              {wasteDropOffCenters.map((loc) => <SWlocationsCard />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialWaste;
