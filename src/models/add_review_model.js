const mongoose = require("mongoose");
const addReviewSchema = new mongoose.Schema(
  {
    productid: { type: String, required: true },
    userid: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AddReviewData", addReviewSchema);
