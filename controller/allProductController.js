const asyncHandler = require("express-async-handler");
const Products = require("../Model/productModel");
//get all product
const getAllProduct = asyncHandler(async (req, res) => {
  const product = await Products.find();
  res.status(200).json(product);
});
//create product
const createProduct = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    price,
    image_url,
    category,
    sku,
    weight,
    dimensions,
  } = req.body;
  if (
    !name ||
    !description ||
    !price ||
    !image_url ||
    !category ||
    !sku ||
    !weight ||
    !dimensions
  ) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const Product = await Products.create({
    name,
    description,
    price,
    image_url,
    category,
    sku,
    weight,
    dimensions,
  });
  res.status(201).json(Product);
});
module.exports = { getAllProduct, createProduct };
