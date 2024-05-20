import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { useState } from "react";



const RecyclingDosAndDonts = () => {
    // this usestate sets index of carousel images
    const [currentIndex, setCurrentIndex] = useState(0);
    //this useState sets array of images
    const imagesArrayUrls = [
        // "https://res.cloudinary.com/dl9889wtn/image/upload/v1715965817/img_pejvte.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1715965738/maxresdefault_apdzrk.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716206788/bigstock-Recyclable-Materials-A-Select-364185454-1-825x510_q3gmoc.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716206377/ghows-PJ-3530caa6-cb6f-4a83-e053-0100007f7d97-e82199ad_kgyoyk.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716206884/Post-Consumer-Plastik-Abfall_bgdnff.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716205816/Glass_20Jars-no_20drop_20shadow_slptlo.png",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716205969/CC_FB_Cartons_1200x630_ubmrrf.jpg",
        "https://res.cloudinary.com/dl9889wtn/image/upload/v1716205472/simplesort-16gal-05NYC_x8ol6x.jpg",
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
    return (
        <>
            <div className=" col-span-1 md:col-span-3">
                <div className="bg-sky-300 m-5 rounded-xl overflow-y-auto h-192 text-black">
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
                    <h2 className='text-2xl text-center mt-3'>Paper Recycling Receptacles</h2>
                    <div className="p-5 grid grid-cols-2">
                        <div className="w-3/4">

                            <h3 className="text-2xl">Paper</h3>
                            <div className="border-2 border-black rounded-lg">
                                <ul className="list-disc px-5 py-1">
                                    <li>newspapers</li>
                                    <li>magazines</li>
                                    <li>White and Colored Paper (staples are ok)</li>
                                    <li>Envelopes</li>
                                    <li>Wrapping paper</li>
                                    <li>Paperback books</li>
                                    <li>Hardcover books with the covers removed</li>
                                    <li>Notebooks with metal or plastic binding removed</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-3/4">
                            <h3 className="text-2xl">Cardboard</h3>
                            <div className="border-2 border-black rounded-lg">
                                <ul className="list-disc px-5 py-1">
                                    <li>Corrugated carboard</li>
                                    <li>Shipping, shoe, and gift boxes</li>
                                    <li>File folders</li>
                                    <li>Paper cups that have been emptied and dried</li>
                                    <li>lightly soiled pizza boxes</li>
                                    <li>Note: Beverage and liquid food cartons (like milk cartons and juice boxes) should be recycled with metal, glass, and plastic, NOT with paper.</li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <h2 className='text-2xl text-center mt-3'>Metal, Glass, and Plastic, and Cartons Recycling Receptacles</h2>
                    <div className="p-5 grid grid-cols-2">
                        <div className="w-3/4">
                            <h3 className="text-2xl">Metal</h3>
                            <div className="border-2 border-black rounded-lg">
                                <ul className="list-disc px-5 py-1">
                                    <li>Aluminum foil and trays</li>
                                    <li>Metal caps and lids</li>
                                    <li>Empty aerosol and paint cans</li>
                                    <li>Wire hangers</li>
                                    <li>Pots and pans</li>
                                    <li>Metal hardware</li>
                                </ul>
                            </div></div>
                        <div className="w-3/4">
                            <h3 className="text-2xl">Plastic</h3>
                            <div className="border-2 border-black rounded-lg">
                                <ul className="list-disc px-5 py-1">
                                    <li>Food and drink containers</li>
                                    <li>Caps and lids</li>
                                    <li>Cups and bowls</li>
                                    <li>Toys with batteries removed</li>
                                    <li>Consumer packaging</li>
                                    <li>Acetate Boxes</li>
                                </ul>
                            </div></div>
                    </div>
                    <div className="p-5 grid grid-cols-2">
                        <div className="w-3/4">
                            <h3 className="text-2xl">Glass</h3>
                            <div className="border-2 border-black rounded-lg">
                                <ul className="list-disc px-5 py-1">
                                    <li>Can: glass bottles and jars</li>
                                    <li>Can't: drinking glasses, eyeglasses, glass furniture, mirrors, light bulbs</li>
                                </ul>
                            </div></div>
                        <div className="w-3/4">
                            <h3 className="text-2xl">Cartons</h3>
                            <div className="border-2 border-black rounded-lg p-2">
                                You can recycle beverage and liquid food cartons like milk and soup cartons and juice boxes. These are lined with a plastic film to make them leak-proof, and the plastic layer can be removed and recycled.
                            </div></div>
                    </div>

                    <h2 className='text-2xl text-center mt-3'>Items that CANNOT be recycled and must be thrown in the trash:</h2>
                    <div className="border-2 border-black rounded-lg mx-20 my-5">
                        <ul className="list-disc px-5 py-1">
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
                </div></div>
        </>
    )
}

export default RecyclingDosAndDonts