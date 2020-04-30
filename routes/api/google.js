import {Client, Status} from "@googlemaps/google-maps-services-js";
const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    if (r.data.status === Status.OK) {
      console.log(r.data.results[0].elevation);
    } else {
      console.log(r.data.error_message);
    }
  })
  .catch((e) => {
    console.log(e);
  });