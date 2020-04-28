const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  bizname: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: String, required: true },
  thumbsup: { type: Number, required: true, default: 0 },
  thumbsdown: { type: Number, required: true, default: 0 },
  instore: { type: Number, required: true, default: 0 },
  inline: { type: Number, required: true, default: 0 },
  storeopen:{ type: Number, required: true, default: 9 },
  storeclose:{ type: Number, required: true, default: 9 },
  creationdate: { type: Date, default: Date.now }
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;