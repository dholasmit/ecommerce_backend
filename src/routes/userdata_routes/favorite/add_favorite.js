const UserData = require("../../../models/user_model");
const ProductData = require("../../../models/product_model");

async function addFavorite(req, res) {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      return res.status(400).json({ message: "borth Id is requide" });
    }
    console.log("userId ==========>", userId);
    console.log("productId ==========>", productId);
    const product = await ProductData.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const user = await UserData.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check if product is already in favorites
    if (user.favorites && user.favorites.includes(productId)) {
      return res.status(400).json({ message: "Product already in favorites" });
    }
    // Add product to favorites
    user.favorites = user.favorites || [];
    user.favorites.push(productId);
    await user.save();
    const updatedUser = await ProductData.findById(productId);

    res.status(200).json({
      status:200,
      message: "Product added to favorites",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { addFavorite };
