import React from "react";

function SWlocationsCard({ loc }) {
  const { name, city, address, zip, coord, distance } = loc;

  return (
    <div className="bg-amber-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
      <div>Name: {coord ? coord.name : name}</div>
      <div>City: {coord ? coord.address : address}</div>
      <div>Address: {coord ? coord.city : city}</div>
      <div>Zip: {coord ? coord.zip : zip}</div>
      {distance && <div>{distance} miles away</div>}
    </div>
  );
}

export default SWlocationsCard;
