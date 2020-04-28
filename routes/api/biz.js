const router = require("express").Router();
const bizController = require("../../controllers/bizController");

// Matches with "/api/business"
router.route("/")
  .get(bizController.findAll)
  .post(bizController.create);

// Matches with "/api/business/:id"
router
  .route("/:id")
  .get(bizController.findById)
  .put(bizController.update)
  .delete(bizController.remove);

module.exports = router;