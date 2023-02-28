import sampleRide from "@sample-data/sample-ride";

function getRoute() {
  let data;

  for (const index in sampleRide) {
    if (sampleRide[index]?.type == "latlng") {
      data = sampleRide[index]?.data;
    }
  }
  console.log(data);
  return data;
}

export default getRoute;
