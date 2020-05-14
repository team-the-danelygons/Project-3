const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  bizname: { type: String, required: true },
  email: { type: String, required: false },
  address: { type: String, required: true },
  zip: { type: String, required: false },
  image: { type: Array, required: false },
  geometry: { type: Object, required: true },
  types: { type: Array, required: true },
  maskthumbsup: { type: Number, required: true, default: 0 },
  maskthumbsdown: { type: Number, required: true, default: 0 },
  santhumbsup: { type: Number, required: true, default: 0 },
  santhumbsdown: { type: Number, required: true, default: 0 },
  disthumbsup: { type: Number, required: true, default: 0 },
  disthumbsdown: { type: Number, required: true, default: 0 },
  cashthumbsup: { type: Number, required: true, default: 0 },
  cashthumbsdown: { type: Number, required: true, default: 0 },
  instore: { type: Number, required: true, default: 0 },
  inline: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  opening_hours: { type: Object, required: true, default: 0 },
  storeopen: { type: Number, required: true, default: 9 },
  storeclose: { type: Number, required: true, default: 9 },
  creationdate: { type: Date, default: Date.now },
  saferating: { type: String, required: false },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
