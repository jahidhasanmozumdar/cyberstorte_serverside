const mongoose = require("mongoose");

// Define the schema
const productSchema = new mongoose.Schema(
  {
    name: String, // Product name, e.g., "Apple MacBook Pro With Touch Bar MF841DSN/A 13″"
    description: String, // Product description
    price: Number, // Product price, e.g., $1,259
    image_url: String, // URL of the product image
    category: String, // Product category, e.g., "Laptop & Tablet"
    sku: String, // Product SKU, e.g., "ABC123"
    weight: String, // Product weight, e.g., "1 kg"
    dimensions: String, // Product dimensions, e.g., "10 × 10 × 15 cm"
  },
  {
    timestamps: true,
  }
);

// Create a model using the schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
