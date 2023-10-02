const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello world !!");
});

app.listen(port, () => {
  console.log(`Saver running on port ${port}`);
});
