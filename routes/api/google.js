const { Client, Status } = require("@googlemaps/google-maps-services-js");
const env = require("env-variable");
env({
  GOOGLE_MAPS_API_KEY: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
});
const router = require("express").Router();

const client = new Client({});
const db = require("../../models");

router.get("/:lat/:lng", (req, res) => {
  let places = [];
  let lat = req.params.lat;
  let lng = req.params.lng;

  client
    .placesNearby({
      params: {
        location: { lat: lat, lng: lng },
        radius: 4000,
        type: "store",
        key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
      },
      timeout: 1000, // milliseconds
    })
    .then((resultOne) => {
      console.log("First next page call");
      //  console.log("Results", result.data.results)
      places = places.concat(resultOne.data.results);
      client
        .placesNearby({
          params: {
            location: { lat: lat, lng: lng },
            radius: 4000,
            type: "liquor_store",
            key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
          },
          timeout: 1000, // milliseconds
        })
        .then((resultTwo) => {
          console.log("Second next page call");

          console.log("Places=", places[0])

          places = places.concat(resultTwo.data.results);
          client
            .placesNearby({
              params: {
                location: { lat: lat, lng: lng },
                radius: 4000,
                type: "bar",
                key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
              },
              timeout: 1000, // milliseconds
            })
            .then((resultThree) => {
              console.log("Gottum All!");

              places = places.concat(resultThree.data.results);
              client
                .placesNearby({
                  params: {
                    location: { lat: lat, lng: lng },
                    radius: 4000,
                    type: "department_store",
                    key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
                  },
                  timeout: 1000, // milliseconds
                })
                .then((resultFour) => {
                  console.log("Four")
                  places = places.concat(resultFour.data.results);
                  client
                    .placesNearby({
                      params: {
                        location: { lat: lat, lng: lng },
                        radius: 4000,
                        type: "convenience_store",
                        key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
                      },
                      timeout: 1000, // milliseconds
                    })
                    .then((resultFive) => {
                      console.log("Four")
                      places = places.concat(resultFive.data.results);
                      client
                        .placesNearby({
                          params: {
                            location: { lat: lat, lng: lng },
                            radius: 4000,
                            type: "restaurant",
                            key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
                          },
                          timeout: 1000, // milliseconds
                        })
                        .then((resultSix) => {
                          console.log("Four")
                          places = places.concat(resultSix.data.results);
                          client
                            .placesNearby({
                              params: {
                                location: { lat: lat, lng: lng },
                                radius: 4000,
                                type: "clothing_store",
                                key: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
                              },
                              timeout: 1000, // milliseconds
                            })
                        .then((resultSeven) => {
                          console.log("Five")
                          places = places.concat(resultSeven.data.results);

                          syncPlacesWithDb(places)
                        })
                    })
                })
            })
          })
        })
    })
    .catch(err => {
      console.error(err)
      res.status(422).json(err)
    });


  syncPlacesWithDb = (places) => {
   // console.log("PLacesIDs:", places.map(place => place.id))
    let dbPromises = places.map(place => {

      // check to see if place exists in DB
      return db.Business.findOne({ bizname: place.name, address: place.vicinity })
        .then(async result => {
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

    Promise.all(dbPromises).then(dbModels => res.json(dbModels)) .catch(error => console.error(error));
    //return res.json("Okay so far")
  }
})

module.exports = router;