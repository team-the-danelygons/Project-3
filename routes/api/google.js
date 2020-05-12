const {Client, Status} = require("@googlemaps/google-maps-services-js");
const env = require("env-variable");
env({
  GOOGLE_MAPS_API_KEY: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
});
const router = require("express").Router();

const client = new Client({});
const db = require("../../models");

router.get("/:lat/:lng",  (req, res) => {
  console.log(req.body);
  client
  .placesNearby({
    params: {
      location: { lat: req.params.lat, lng: req.params.lng },
      radius: 4000,
       type: "store",
       key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
    },
    timeout: 1000, // milliseconds
  })
  .then((result) => {
    console.log(result.data.results)
    let dbPromises = result.data.results.map(place => {
      
// check to see if place exists in DB
      return db.Business.findOne ({bizname: place.name, address: place.vicinity})
      .then(async result =>  {
        if (result) {
          result.geometry = place.geometry;
          return result
        }
        return await db.Business.create({
          bizname: place.name,
          address: place.vicinity,
          image: place.photos,
          geometry: place.geometry,
          types: place.types,
          rating: place.rating,
          opening_hours: place.opening_hours
        })
       // dbModel.geometry = 
      })
      .catch(error => console.error(error));
    })

    Promise.all(dbPromises).then(dbModels => res.json(dbModels))
    //return res.json("Okay so far")
  })
  .catch(err => {
    console.error(err)
    res.status(422).json(err)});
})

module.exports = router;