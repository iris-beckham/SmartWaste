import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import SWlocationsCard from "./SWlocationsCard";
import Geolocation from "./Geolocation";

const SpecialWaste = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [wasteDropOffCenters, setWasteDropOffCenters] = useState([]);
  const [sortedSitesByDistance, setSortedSitesByDistance] = useState([]);
  // this usestate sets index of carousel images
  const [currentIndex, setCurrentIndex] = useState(0);
  //this useState sets array of images
  const imagesArrayUrls = [
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1716179628/a3skvrvbvs613yixdbbo.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1716179584/e8jjwnyi90apz276oscr.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1716179357/it0wayxkkega88ntfbqf.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1716179313/pospqd3dioa4at19gwii.jpg",
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

  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/242c-ru4i.json")
      .then((res) => res.json())
      .then((data) => setWasteDropOffCenters(data));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setCurrentLocation(userCoords);
      },
      (error) => {
        console.error("Error getting the current location:", error);
      }
    );
  }, []);

  console.log("CURRENT", currentLocation);
  console.log("Data", wasteDropOffCenters);

  return (
    <div className="min-h-screen mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="bg-white col-span-1 md:col-span-3">
          <div className=" bg-amber-300 m-5 rounded-xl overflow-y-auto h-3/4">
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
            <hr className="flex border-2 border-slate-900 mx-5 rounded" />
            <div className="p-5 grid grid-cols-2">
              <div className="w-3/4">
                <h3 className="text-2xl">Can:</h3>
                <div className="border-2 border-black rounded-lg">
                  <ul className="list-disc px-5 py-1">
                    <li>Automotive Batteries</li>
                    <li>Batteries</li>
                    <li>Electronics</li>
                    <li>Fluorescent Tubes & CFLs</li>
                    <li>Motor Oil & Transmission Fluid</li>
                    <li>Paint Latex-Based</li>
                    <li>Thermostats & Thermometers</li>
                    <li>Tires</li>
                  </ul>
                </div>
              </div>
              <div className="w-3/4">
                <h3 className="text-2xl">Can't:</h3>
                <div className="border-2 border-black rounded-lg">
                  <ul className="list-disc px-5 py-1">
                    <li>Appliances</li>
                    <li>Appliances with CFCs</li>
                    <li>Asbestos</li>
                    <li>Cleaning Products</li>
                    <li>Gas Cylinders</li>
                    <li>Lawn & Garden Care Products</li>
                    <li>Medical Waste</li>
                    <li>Paint-Oil-Based</li>
                    <li>Pest Control</li>
                    <li>Asbestos</li>
                    <li>Asbestos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white">
          <div className="bg-black m-5 rounded-xl h-3/4">
            <div className="text-3xl py-7 mx-5 text-center text-white">
              SpecialWaste Drop Off Sites
            </div>
            <hr className="border-4 border-white mb-10 mx-5 rounded" />
            <div className="flex">
              <Geolocation
                data={wasteDropOffCenters}
                currentLocation={currentLocation}
                setSortedSitesByDistance={setSortedSitesByDistance}
              />
              <div className="text-center text-white ml-auto mr-5 text-lg font-bold py-3">
                {wasteDropOffCenters.length} Locations
              </div>
            </div>
            <div className="overflow-y-auto h-120 grid gap-4">
              {wasteDropOffCenters.length > 0 &&
              sortedSitesByDistance.length === 0
                ? wasteDropOffCenters.map((loc) => (
                    <SWlocationsCard key={loc.boro} loc={loc} />
                  ))
                : sortedSitesByDistance.map((loc) => (
                    <SWlocationsCard key={loc.coord.boro} loc={loc} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialWaste;
