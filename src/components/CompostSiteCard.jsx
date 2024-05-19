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
  } = site;

  const { coord } = site;

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
      {site.distance && (
        <div>{((site.distance / 1000) * 0.62).toFixed(1)} miles away</div>
      )}
      <div>
        {/* <Link to={website} target="blank">
          Click to go to website
        </Link> */}
      </div>
      <div></div>
    </div>
  );
};

export default CompostSiteCard;
