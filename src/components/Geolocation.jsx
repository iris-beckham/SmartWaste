import { useEffect, useState } from "react";
import { orderByDistance, getDistance } from "geolib";

const Geolocation = ({
  compostingSites,
  sortedSitesByDistance,
  setSortedSitesByDistance,
  currentLocation,
  setCurrentLocation,
  test,
  setTest,
}) => {
  const handleSort = async () => {
    const latLongArr = compostingSites.map((site) => {
      return {
        [site.object_id]: {
          latitude: site.latitude,
          longitude: site.longitude,
        },
      };
    });

    const sortedLatAndLongArrAscendingByDistance = orderByDistance(
      currentLocation,
      Object.values(latLongArr)
    );

    console.log("COORD", currentLocation);
    console.log(
      "DISTANCE",
      latLongArr.map((coord, idx) => {
        return {
          id: Object.keys(coord)[0],
          ["distance"]: getDistance(currentLocation, Object.values(coord)[0]),
        };
      })
    );

    console.log("Sorted", sortedLatAndLongArrAscendingByDistance);
    // const copiedCompostingSites = [...compostingSites];
    // setSortedSitesByDistance(
    //   copiedCompostingSites.sort((a, b) => {
    //     return (
    //       sortedLatAndLongArrAscendingByDistance.indexOf(a.object_id) -
    //       sortedLatAndLongArrAscendingByDistance.indexOf(b.object_id)
    //     );
    //   })
    // );
  };

  return (
    <div>
      <button onClick={handleSort}>Sort by distance</button>
    </div>
  );
};

export default Geolocation;
