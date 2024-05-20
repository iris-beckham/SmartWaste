import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Filter } from 'lucide-react';
import { capitalizeFirstLetters } from '../helpers.js'


const Recycling = () => {
    const [recyclingBins, setRecyclingBins] = useState([]);
    //modal state for filter options: false = hidden, true = visible  
    const [optionsStatus, setOptionsStatus] = useState(false);
    const [filter, setFilter] = useState(false);
    const [borough, setBorough] = useState([]);
    const [filteredSites, setFilteredSites] = useState([]);
    useEffect(() => {
        fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json`)
            .then((res) => res.json())
            .then((data) => {
                setRecyclingBins([...new Set(data)])
                setFilteredSites([...new Set(data)])
                //NOTE: need to remove BROOKLYN PARK - PIER 1 duplicates
            });
    }, []);

    // this usestate sets index of carousel images
    const [currentIndex, setCurrentIndex] = useState(0);
    //this useState sets array of images
    const imagesArrayUrls = [
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1715965817/img_pejvte.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1715965738/maxresdefault_apdzrk.jpg",
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

    const displayFilterOptions = () => {
        setOptionsStatus(!optionsStatus);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const handleBoroughFilterChange = (e) => {
        setBorough(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let copy = [...filteredSites];
        copy = [...copy.filter((site) => site.dsny_zone === borough)]
        if (filter === "paper") {
            copy = [...copy.filter((site) => site.paper_bins > 0)]
        } else if (filter === "mgp") {
            copy = [...copy.filter((site) => site.mgp_bins > 0)]
        }

        if (copy.length === 0) {
            setFilteredSites(recyclingBins);
            handleSubmit(e);
            //NOTE: user currently has to click "apply filters" twice to first reset then apply new filters
        }
        setFilteredSites([...copy])
    }

    return (
        <div className="min-h-screen mb-0">
            <div className="grid grid-cols-1 md:grid-cols-5 ">
                <div className="bg-amber-400 col-span-1 md:col-span-3">
                    <div className=" bg-violet-500 m-5 rounded-xl overflow-y-auto h-3/4">
                        <div className="text-4xl mt-10 mx-5 mb-3">Public Recycling Bins </div>
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
                            Paper Recycling Receptacles
                            <ul>
                                <li>Paper</li>
                                <ul>
                                    <li>newspapers</li>
                                    <li>magazines</li>
                                    <li>White and Colored Paper (staples are ok)</li>
                                    <li>Envelopes</li>
                                    <li>Wrapping paper</li>
                                    <li>Paperback books</li>
                                    <li>Hardcover books with the covers removed</li>
                                    <li>Notebooks with metal or plastic binding removed</li>
                                </ul>
                                <li>Cardboard</li>
                                <ul>
                                    <li>Corrugated carboard</li>
                                    <li>Shipping, shoe, and gift boxes</li>
                                    <li>File folders</li>
                                    <li>Paper cups that have been emptied and dried</li>
                                    <li>lightly soiled pizza boxes</li>
                                </ul>
                                <li>Note: Beverage and liquid food cartons (like milk cartons and juice boxes) should be recycled with metal, glass, and plastic, NOT with paper.</li>
                            </ul>
                            Metal, Glass, and Plastic, and Cartons Recycling Receptacles
                            <ul>
                                <li>Metal</li>
                                <ul>
                                    <li>Aluminum foil and trays</li>
                                    <li>Metal caps and lids</li>
                                    <li>Empty aerosol and paint cans</li>
                                    <li>Wire hangers</li>
                                    <li>Pots and pans</li>
                                    <li>Metal hardware</li>
                                </ul>
                                <li>Glass</li>
                                <ul>
                                    <li>Can: glass bottles and jars</li>
                                    <li>Can't: drinking glasses, eyeglasses, glass furniture, mirrors, light bulbs</li>
                                </ul>
                                <li>Plastic</li>
                                <ul>
                                    <li>Food and drink containers</li>
                                    <li>Caps and lids</li>
                                    <li>Cups and bowls</li>
                                    <li>Toys with batteries removed</li>
                                    <li>Consumer packaging</li>
                                    <li>Acetate Boxes</li>
                                </ul>
                                <li>Cartons</li>
                                You can recycle beverage and liquid food cartons like milk and soup cartons and juice boxes. These are lined with a plastic film to make them leak-proof, and the plastic layer can be removed and recycled.
                            </ul>

                            Items that CANNOT be recycled and must be thrown in the trash:
                            <ul>
                                <li>Heavily soiled paper plates and pizza boxes</li>
                                <li>Ice cream tubs</li>
                                <li>Foam</li>
                                <li>Packing peanuts</li>
                                <li>Tanglers: Cables, wires, extension cords, string lights, garden hoses, window blinds</li>
                                <li>Bowling balls and any sports balls</li>
                                <li>Cassette and VHS tapes</li>
                                <li>Single-use plastic bags</li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 bg-emerald-600">
                    <div className="bg-sky-300 m-5 rounded-xl h-2/4">
                        <div className="text-3xl py-7 mx-5 text-center">
                            Recycling Drop Off Sites
                        </div>
                        <p className="flex justify-end mr-10 mb-2">
                            {filteredSites.length} Sites
                            <button onClick={() => displayFilterOptions()}><Filter /></button>
                        </p>
                        {optionsStatus ?
                            <div className="flex justify-end mr-10 mb-2">
                                <form action="" onSubmit={handleSubmit}>
                                    <select name="filter" value={filter} onChange={handleFilterChange}>
                                        <option value="all" >Any</option>
                                        <option value="paper">Paper</option>
                                        <option value="mgp">Glass</option>
                                        <option value="mgp">Metal</option>
                                        <option value="mgp">Plastic</option>
                                    </select>
                                    <select name="borough" value={borough} onChange={handleBoroughFilterChange}>
                                        <option value="BKN">Brooklyn North</option>
                                        <option value="BKS">Brooklyn South</option>
                                        <option value="BX">Bronx</option>
                                        <option value="MAN">Manhattan</option>
                                        <option value="QE">Queens East</option>
                                        <option value="QW">Queens West</option>
                                        <option value="SI">Staten Island</option>
                                    </select>
                                    <button type="submit">Apply Filters</button>
                                </form>
                            </div>
                            : ''}
                        <hr className="border-4 border-black mb-10 mx-5 rounded" />
                        <div className="overflow-y-auto h-72 grid gap-4">
                            {filteredSites.map((site) => {
                                const { site_location, partner, dsny_zone, paper_bins, mgp_bins, site_type } = site;
                                return (
                                    <div key={site_location + mgp_bins + paper_bins + site_type} className="bg-orange-500 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                                        {partner === "N/A" ? "" : <p>{capitalizeFirstLetters(partner)}</p>}
                                        <p>{capitalizeFirstLetters(site_location)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recycling