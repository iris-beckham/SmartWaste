import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import CompostSiteCard from "./CompostSiteCard";

const URL = import.meta.env.VITE_BASE_API_URL;

const Compost = () => {
  const [compostingSites, setCompostingSites] = useState([]);
  // this usestate sets index of carousel images
  const [currentIndex, setCurrentIndex] = useState(0);
  //this useState sets array of images
  const imagesArrayUrls = [
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715910744/iyeuenoyhbrhdlurc6vu.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715910792/xc1vdrupxx5j3a5kyw9c.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715910835/gwnykgyowkye2g7jxybx.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715910894/bjmmjoqfbbr6mwaai8uh.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715910966/vdeflqdt28ivrq5iksbr.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715911036/uoai9xfvc47h2rxiyeui.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715911065/sq9mlnbl0xlojoilqhob.jpg",
    "https://res.cloudinary.com/dnqfg86zq/image/upload/v1715911222/xfemxuwfkpgvuvxr5eip.jpg",
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
      `${URL}?$query=SELECT%20borough%2C%20ntaname%2C%20food_scrap_drop_off_site%2C%20location%2C%20hosted_by%2C%20open_months%2C%20operation_day_hours%2C%20notes%2C%20website%2C%20bin%2C%20latitude%2C%20longitude%2C%20object_id`
    )
      .then((res) => res.json())
      .then((data) => setCompostingSites(data));
  }, []);

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
            <hr className="flex border-2 border-slate-900 mx-5 rounded" />
            <div className="p-5">
              <div className="text-2xl">Can:</div>
              <div>
                <div>Fruits</div>
                <div>Vegetables</div>
                <div>Eggshells</div>
                <div>Coffee grounds/tea bags</div>
                <div>Bread</div>
                <div>Rice</div>
                <div>Pasta</div>
                <div>Leaf and yard waste/houseplants</div>
              </div>
              <div className="text-2xl">Can't:</div>
              <div>
                <div>Meat</div>
                <div>Bones</div>
                <div>Dairy</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-emerald-600">
          <div className="bg-sky-300 m-5 rounded-xl h-2/4">
            <div className="text-3xl py-7 mx-5 text-center">
              Waste Drop Off Sites
            </div>
            <hr className="border-4 border-black mb-10 mx-5 rounded" />
            <div>
              {/* //THIS ONE! */}
              <div className="overflow-y-auto h-72 grid gap-4">
                {compostingSites.map((site) => (
                  <CompostSiteCard key={site.object_id} site={site} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compost;
