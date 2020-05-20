const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  bizownerID: {type: String, required: true, default: "none"},
  bizname: { type: String, required: true },
  email: { type: String, required: false },
  address: { type: String, required: true },
  zip: { type: String, required: false },
  image: { type: Array, required: false },
  geometry: { type: Object, required: true },
  types: { type: Array, required: true },
  maskthumbsup: { type: Array, required: true, default: [] },
  maskthumbsdown: { type: Array, required: true, default: [] },
  santhumbsup: { type: Array, required: true, default: [] },
  santhumbsdown: { type: Array, required: true, default: [] },
  disthumbsup: { type: Array, required: true, default: [] },
  disthumbsdown: { type: Array, required: true, default: [] },
  cashthumbsup: { type: Array, required: true, default: [] },
  cashthumbsdown: { type: Array, required: true, default: [] },
  instore: { type: Number, required: true, default: 0 },
  inline: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  opening_hours: { type: Object, required: true, default: 0 },
  storeopen: { type: Number, required: true, default: 9 },
  storeclose: { type: Number, required: true, default: 9 },
  creationdate: { type: Date, default: Date.now },
  saferating: { type: String, required: false },
  bizverified: { type: Boolean, required: true, default: false },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
