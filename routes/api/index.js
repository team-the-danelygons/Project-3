const router = require("express").Router();
const bizRoutes = require("./biz");
const googleRoutes = require("./google.js");
const users = require("./users")


// Book routes
router.use("/business", bizRoutes);
router.use("/places", googleRoutes);
router.use("/users", users);


module.exports = router;