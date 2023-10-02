const asyncHandler = require("express-async-handler");

//get all product
const getAllProduct = asyncHandler(async (req, res) => {
  res.send("get all product");
});
//create product
const createProduct = asyncHandler(async (req, res) => {
  
});
module.exports = { getAllProduct, createProduct };
