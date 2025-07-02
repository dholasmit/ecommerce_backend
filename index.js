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

/// how to use this function in this file
// app.use((err, res, req, next) => {
//   console.error("ERROR STACK ==>", err.stack);
//   console.log("REQUEST METHOD  ==>", req.method);
//   console.log("REQUEST URL  ==>", req.url);
//   console.log(" NEXT FUNCTRION ==>", next);
//   res.satus(500).json({
//     status: "error",
//     message: err.message || "Internal Server Error",
//   });
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
