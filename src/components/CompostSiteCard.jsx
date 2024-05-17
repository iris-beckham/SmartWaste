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

  return (
    <div className="bg-orange-500 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
      <div>Location: {borough}</div>
      <div>Neighborhood: {ntaname}</div>
      <div>Address: {location}</div>
      <div>Open: {open_months}</div>
      <div>Times of operation: {operation_day_hours}</div>
      <div>
        <Link to={website}>Visit website</Link>
      </div>
      <div></div>
    </div>
  );
};

export default CompostSiteCard;
