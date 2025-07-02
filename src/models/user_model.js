const mongoose = require("mongoose");

const   UserSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductData' }],
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("UserData", UserSchema);
