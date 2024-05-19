import { orderByDistance, getDistance } from "geolib";

const Geolocation = ({ data, setSortedSitesByDistance, currentLocation }) => {
  const handleSort = async () => {
    const findDistances = data.map((coord) => {
      return {
        latitude: coord.latitude,
        longitude: coord.longitude,
        coord,
        distance: getDistance(currentLocation, coord),
      };
    });

    // console.log("DISTANCE", findDistances);

    const sortedLatAndLongArrAscendingByDistance = orderByDistance(
      currentLocation,
      findDistances
    );
    await setSortedSitesByDistance(sortedLatAndLongArrAscendingByDistance);
  };

  return (
    <div>
      <button
        className="text-black mb-5 ml-5 hover:bg-green-300 bg-white p-3 rounded-lg font-bold"
        onClick={handleSort}
      >
        Sort by distance
      </button>
    </div>
  );
};

export default Geolocation;
