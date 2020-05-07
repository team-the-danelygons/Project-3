const {Client, Status} = require("@googlemaps/google-maps-services-js");
const env = require("env-variable");
env({
  GOOGLE_MAPS_API_KEY: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
});
const router = require("express").Router();

const client = new Client({});

router.get("/",  (req, res) => {
  client
  .placesNearby({
    params: {
      location: { lat: 39.7337, lng: -104.9799 },
      radius: 100000,
      type: "restaurant",
      key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
    },
    timeout: 1000, // milliseconds
  })
  .then((result) => {
    console.log(result.data.results)
    res.json(result.data.results)})
  .catch(err => {
    console.error(err)
    res.status(422).json(err)});
})
module.exports = router;