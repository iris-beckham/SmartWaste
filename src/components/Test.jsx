import { orderByDistance, getDistance } from "geolib";

const Test = () => {
  const coords = [
    { id: 1, latitude: 52.516272, longitude: 13.377722 },
    { id: 2, latitude: 51.518, longitude: 7.45425 },
    { id: 3, latitude: 51.503333, longitude: -0.119722 },
  ];

  const originalPoint = { latitude: 51.515, longitude: 7.453619 };

  console.log("SORT", orderByDistance(originalPoint, coords));

  console.log(
    "DISTANCE",
    coords.map((coord) => {
      return { id: coord.id, ["distance"]: getDistance(originalPoint, coord) };
    })
  );

  return <div>Test</div>;
};

export default Test;
