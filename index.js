const express = require("express");
const app = express();
const errorHandler = require("./MIddleware/errorHandler.js");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.json());
connectDb();
app.use("/api/product", require("./routes/featuresProduct.js"));
//all product
app.use("/api/allProduct", require("./routes/allProduct.js"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Saver running on port ${port}`);
});
