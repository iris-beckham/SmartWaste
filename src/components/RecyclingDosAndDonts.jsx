const RecyclingDosAndDonts = () => {
    return (
        <>
            <div className="text-3xl mx-5 mt-10">
                What Can & What Can't Be Dropped Off
            </div>
            <hr className="flex border-2 border-slate-900 mx-5 rounded" />
            <h2 className='text-2xl text-center mt-3'>Paper Recycling Receptacles</h2>
            <div className="p-5 grid grid-cols-2">
                <div className="w-3/4">
                    <h3 className="text-2xl">Paper</h3>
                    <div className="border-2 border-black">
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
                    <div className="border-2 border-black">
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
                    <div className="border-2 border-black">
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
                    <div className="border-2 border-black">
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
                    <div className="border-2 border-black">
                        <ul className="list-disc px-5 py-1">
                            <li>Can: glass bottles and jars</li>
                            <li>Can't: drinking glasses, eyeglasses, glass furniture, mirrors, light bulbs</li>
                        </ul>
                    </div></div>
                <div className="w-3/4">
                    <h3 className="text-2xl">Cartons</h3>
                    <div className="border-2 border-black">
                        You can recycle beverage and liquid food cartons like milk and soup cartons and juice boxes. These are lined with a plastic film to make them leak-proof, and the plastic layer can be removed and recycled.
                    </div></div>
            </div>

            <h2 className='text-2xl text-center mt-3'>Items that CANNOT be recycled and must be thrown in the trash:</h2>
            <div className="border-2 border-black mx-20 my-5">
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

        </>
    )
}

export default RecyclingDosAndDonts