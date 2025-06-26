const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productImage: { type: String, required: true },
    productname: { type: String, required: true },
    productcolor: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
 module.exports = mongoose.model("ProductData", ProductSchema);