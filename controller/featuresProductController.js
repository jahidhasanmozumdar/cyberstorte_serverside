const asyncHandler = require("express-async-handler");
const Products = require("../Model/productModel");
//get Features product
const getFeaturesProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Products.find({}).sort({ createdAt: -1 }).limit(8);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = { getFeaturesProduct };
