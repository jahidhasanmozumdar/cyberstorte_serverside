const express = require("express");
const {
  getFeaturesProduct,
} = require("../controller/featuresProductController");
const router = express.Router();
router.route("/").get(getFeaturesProduct);

module.exports = router;
