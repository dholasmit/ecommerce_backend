require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const allRoutes = require("./src/all_routes/all_routes");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://smitdhola352000:mongodb7U6z1is@demo.lpal7.mongodb.net/ecommerce_backend",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB Connected"))
  .catch((error) => console.Console(error));

app.use("/api", allRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
