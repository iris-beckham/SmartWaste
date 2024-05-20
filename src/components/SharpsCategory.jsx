import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

const SharpsCategory = () => {
  // this is the usestate for the sharps disposal centers
  const [
    allSharpsAndMedicalDropOffLocations,
    setAllSharpsAndMedicalDropOffLocations,
  ] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [sortedSitesByDistance, setSortedSitesByDistance] = useState([]);
  // this is the filtered sharps disposal list
  const [filteredDropOffLocations, setFilteredDropOffLocations] = useState([]);
  // this usestate sets index of carousel images
  const [currentIndex, setCurrentIndex] = useState(0);
  //this useState sets array of images
  const imagesArrayUrls = [
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1716174256/pics_syringes_a4psvx.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1716174594/meds_xgekon.jpg",
    "https://res.cloudinary.com/dvmczcg3f/image/upload/v1716174378/lancets_oimu1t.jpg",
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
    fetch(
      `https://data.cityofnewyork.us/resource/edk2-vkjh.json?$query=SELECT%20borough%2C%20ntaname%2C%20site_type%2C%20sitename%2C%20zipcode%2C%20days_hours%2C%20address%2C%20notes%2C%20bin%2C%20latitude%2C%20longitude`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllSharpsAndMedicalDropOffLocations(data);
      })
      .catch((error) => {
        console.error("Error updating state", error);
      });
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
  console.log("CURRENT LOCATION", currentLocation);
  console.log(allSharpsAndMedicalDropOffLocations);

  return (
    <div className="min-h-screen mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="bg-white col-span-1 md:col-span-3">
          <div className=" bg-red-300 m-5 rounded-xl overflow-y-auto h-3/4">
            <div className="text-4xl mt-10 mx-5 mb-3">
              Sharps & Medical Waste Category
            </div>
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
                <h3 className="text-2xl">For Sharps</h3>
                <div className="border-2 border-black rounded-lg">
                  <ul className="list-disc px-5 py-1">
                    <li>Syringes</li>
                    <li>Needles</li>
                    <li>Scalpels</li>
                    <li>Lancets</li>
                    <li>Other Sharp Objects</li>
                  </ul>
                </div>
              </div>
              <div className="w-3/4">
                <h3 className="text-2xl">For Medical Waste</h3>
                <div className="border-2 border-black rounded-lg">
                  <ul className="list-disc px-5 py-1">
                    <li>Medication</li>
                    <li>
                      Radioactive Material & Excretions From Radiation Patients:
                      <ul className="list-disc px-5 py-1">
                        <li>Tissues</li>
                        <li>Diapers</li>
                        <li>Sanitary Napkins</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-5">
              <div className="text-2xl">Useful Links:</div>

              <ul className="list-disc px-5 py-1">
                <li>
                  <a
                    href="https://www.fda.gov/media/87634/download"
                    target={"_blank"}
                    className="text-blue-500"
                  >
                    Be Smart with Sharps Pamphlet (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white">
          <div className="bg-black m-5 rounded-xl h-3/4">
            <div className="text-3xl py-7 mx-5 text-center text-white">
              Waste Drop Off Sites
            </div>
            <hr className="border-4 border-white mb-5 mx-5 rounded" />
            <div className="flex">
              <Geolocation
                data={allSharpsAndMedicalDropOffLocations}
                currentLocation={currentLocation}
                setSortedSitesByDistance={setSortedSitesByDistance}
              />
              <div className="text-center text-white ml-auto mr-5 text-lg font-bold py-3">
                {allSharpsAndMedicalDropOffLocations.length} Locations
              </div>
            </div>
            <div className="overflow-y-auto h-120 grid gap-4 hover:overflow-scroll">
              {allSharpsAndMedicalDropOffLocations.length > 0 &&
              sortedSitesByDistance.length === 0
                ? allSharpsAndMedicalDropOffLocations.map((location) => (
                    <div key={location.bin}>
                      <div className="bg-red-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                        <div className="font-semibold">{location.sitename}</div>
                        <div>Borough: {location.borough}</div>
                        <div>Neighborhood: {location.ntaname}</div>
                        <div>Address: {location.address}</div>
                        <div>Site Type: {location.site_type}</div>
                        {location.distance && (
                          <div>
                            {((location.distance / 1000) * 0.62).toFixed(1)}{" "}
                            miles away
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                : sortedSitesByDistance.map((location) => (
                    <div key={location.bin}>
                      <div className="bg-red-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                        <div className="font-semibold">
                          {location.coord.sitename}
                        </div>
                        <div>Borough: {location.coord.borough}</div>
                        <div>Neighborhood: {location.coord.ntaname}</div>
                        <div>Address: {location.coord.address}</div>
                        <div>Site Type: {location.coord.site_type}</div>
                        {location.distance && (
                          <div>
                            {((location.distance / 1000) * 0.62).toFixed(1)}{" "}
                            miles away
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharpsCategory;
