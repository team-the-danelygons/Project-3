const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const {Client, Status} = require("@googlemaps/google-maps-services-js");
const env = require("env-variable");
env({
  GOOGLE_MAPS_API_KEY: "AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ"
});
const client = new Client({});

const nocache = require('nocache')
app.use(nocache())

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const routes = require("./routes");
app.use("/", routes);

app.get("/api/test", function (request, response) {
  response.json("hello test")
})


// connect to MongoDB
//const db = require("./config/keys").mongoURI;
var connectionString = process.env.MONGODB_URI || "mongodb://localhost/safestance"
mongoose.connect(
  connectionString,
  { useNewUrlParser: true }
)
.then(() => console.log("MongoDB sucessfully connected")
).catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
