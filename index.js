const express = require("express");
const app = express();
const errorHandler = require("./MIddleware/errorHandler.js");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SK);
app.use(cors());
app.use(express.json());
connectDb();
app.use("/api/product", require("./routes/featuresProduct.js"));
//all product
app.use("/api/allProduct", require("./routes/allProduct.js"));
app.post("/create_payment_intent", async (req, res) => {
  try {
    const { price } = req.body;
    const totalAmount = price * 100; // Convert to cents if necessary

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: totalAmount,
      payment_method_types: ["card"],
    });

    res.send({
      message: "successful",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error.message);
    res.status(500).send({ error: "Failed to create PaymentIntent" });
  }
});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Saver running on port ${port}`);
});
