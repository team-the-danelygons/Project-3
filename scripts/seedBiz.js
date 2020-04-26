const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/safestance");

const bizProfile = [
  {
    bizname: "Safeway",
    email: "Smith",
    location: "80027",
    creationdate: new Date(Date.now()),
  },
];

db.Biz
  .remove({})
  .then(() => db.Biz.collection.insertMany(bizProfile))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });