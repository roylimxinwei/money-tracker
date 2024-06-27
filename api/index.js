const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000; // Define the port number

app.use(cors());
app.use(express.json());
// Define a test route
app.get("/api/test", (req, res) => {
  res.send("API test is now working!");
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
