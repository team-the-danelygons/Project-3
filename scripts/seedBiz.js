const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/safestance");

const bizProfile = [
  {bizownerID: "",
    bizname: "Safeway",
    email: "joesmith@safeway.com",
    address: "1601 Coalton Rd, Superior, CO",
    zip: "80027",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNHF0IUOK3yFeKKdHE_JxtRya1nWgP9ICIKWH2R=w426-h240-k-no",
    geometry: {},
    types: [],
    maskthumbsup: 0,
    maskthumbsdown: 0,
    santhumbsup: 0,
    santhumbsdown: 0,
    disthumbsup: 0,
    disthumbsdown: 0,
    cashthumbsup: 0,
    cashthumbsdown: 0,
    instore: 0,
    inline: 0,
    rating: 0,
    opening_hours: {},
    storeopen: 9,
    storeclose: 5,
    creationdate: new Date(Date.now()),
    saferating: "gold",
    bizverified: false,
  },
];

db.Business.remove({})
  .then(() => db.Business.collection.insertMany(bizProfile))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
