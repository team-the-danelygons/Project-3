const router = require("express").Router();
const bizRoutes = require("./biz");

// Book routes
router.use("/business", bizRoutes);

module.exports = router;