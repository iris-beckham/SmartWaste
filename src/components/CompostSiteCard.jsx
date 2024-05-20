import React from "react";
import { Link } from "react-router-dom";

const CompostSiteCard = ({ site }) => {
  const {
    borough,
    ntaname,
    location,
    open_months,
    operation_day_hours,
    website,
    coord,
    distance,
  } = site;
  console.log("WEBSITE", website);
  return (
    <div className="bg-green-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
      <div>Location: {coord ? coord.borough : borough}</div>
      <div>Neighborhood: {coord ? coord.ntaname : ntaname}</div>
      <div>Address: {coord ? coord.location : location}</div>
      <div>Open: {coord ? coord.open_months : open_months}</div>
      <div>
        Times of operation:{" "}
        {coord ? coord.operation_day_hours : operation_day_hours}
      </div>
      {distance && (
        <div>{((distance / 1000) * 0.62).toFixed(1)} miles away</div>
      )}
    </div>
  );
};

export default CompostSiteCard;
