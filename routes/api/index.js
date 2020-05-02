const router = require("express").Router();
const bizRoutes = require("./biz");
const googleRoutes = require("./google.js");


// Book routes
router.use("/business", bizRoutes);
router.use("/places", googleRoutes);


module.exports = router;