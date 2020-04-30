const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/safestance");

const bizProfile = [
  {
    bizname: "Safeway",
    email: "joesmith@safeway.com",
    address: "1601 Coalton Rd, Superior, CO",
    zip: "80027",
    thumbsup: 0,
    thumbsdown: 0,
    instore: 0,
    inline: 0,
    storeopen: 9,
    storeclose: 5,
    creationdate: new Date(Date.now()),
  },
  {
    bizname: "Walmart",
    email: "joesmith@safeway.com",
    address: " 500 Summit Blvd, Broomfield, CO",
    zip: "80027",
    thumbsup: 0,
    thumbsdown: 0,
    instore: 0,
    inline: 0,
    storeopen: 9,
    storeclose: 5,
    creationdate: new Date(Date.now()),
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
