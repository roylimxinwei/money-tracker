const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 4000; // Define the port number
const Transaction = require("./models/transaction.js");
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.json());
// Define a test route
app.get("/api/test", (req, res) => {
  res.send("API test is now working!");
});

app.post("/api/transaction", async (req, res) => {
  //console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    datetime,
    price,
  });

  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
