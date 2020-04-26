const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  bizname: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  creationdate: { type: Date, default: Date.now }
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;