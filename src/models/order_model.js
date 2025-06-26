const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("CrateOrderData", OrderSchema);
