const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    productid: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartData", CartSchema);
