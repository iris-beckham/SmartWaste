import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const SharpsCategory = () => {
  // this is the usestate for the sharps disposal centers
  const [
    allSharpsAndMedicalDropOffLocations,
    setAllSharpsAndMedicalDropOffLocations,
  ] = useState([]);
  // this is the filtered sharps disposal list
  const [filteredDropOffLocations, setFilteredDropOffLocations] = useState([]);
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

  useEffect(() => {
    fetch(`https://data.cityofnewyork.us/resource/edk2-vkjh.json`)
      .then((res) => res.json())
      .then((data) => {
        setAllSharpsAndMedicalDropOffLocations(data);
      })
      .catch((error) => {
        console.error("Error updating state", error);
      });
  }, []);

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
                <div className="border-2 border-black">
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
                <div className="border-2 border-black">
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
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white">
          <div className="bg-black m-5 rounded-xl h-3/4">
            <div className="text-3xl py-7 mx-5 text-center text-white">
              Waste Drop Off Sites
            </div>
            <hr className="border-4 border-white mb-10 mx-5 rounded" />
            <div>
              {/* <Geolocation
                data={compostingSites}
                currentLocation={currentLocation}
                setSortedSitesByDistance={setSortedSitesByDistance}
              /> */}
              <div className="text-center text-white ml-auto mr-5 text-lg font-bold py-3">
                {allSharpsAndMedicalDropOffLocations.length} Locations
              </div>
            </div>
            <div className="overflow-y-auto h-72 grid gap-4 hover:overflow-scroll">
              {/* //THIS ONE! */}
              {allSharpsAndMedicalDropOffLocations.map((location) => (
                <div key={location.id}>
                  <div className="bg-red-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                    <div className="font-semibold">{location.sitename}</div>
                    <div>Borough: {location.borough}</div>
                    <div>Neighborhood: {location.ntaname}</div>
                    <div>Address: {location.address}</div>
                    <div>Site Type: {location.site_type}</div>
                    {/* <div>Open: {}</div> */}
                    {/* <div>{location}</div> */}
                    {/* <div>Location: {borough}</div>
                    <div>Neighborhood: {ntaname}</div>
                    <div>Address: {location}</div>
                    <div>Open: {open_months}</div>
                    <div>Times of operation: {operation_day_hours}</div>
                    <div>
                      <Link to={website}>Visit website</Link>
                    </div> */}
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
