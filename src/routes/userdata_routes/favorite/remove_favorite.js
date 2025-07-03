const UserData = require("../../../models/user_model");
const ProductData = require("../../../models/product_model");

async function removeFavorite(req, res) {
  try {
    const { userId, productId } = req.body;

    // Validate input
    if (!userId || !productId) {
      return res
        .status(400)
        .json({ message: "Both userId and productId are required" });
    }

    // Find the user
    const user = await UserData.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the product
    const product = await ProductData.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the product exists in the user's favorites
    const productIndex = user.favorites.findIndex(
      (fav) => fav.toString() === productId
    );
    if (productIndex === -1) {
      return res
        .status(404)
        .json({ message: "Product not found in favorites" });
    }

    // Remove the product from the favorites list
    user.favorites.splice(productIndex, 1);

    // Save the updated user document
    await user.save();
    // Populate the favorites with product details
    const updatedUser = await UserData.findById(userId).populate("favorites");

    res.status(200).json({
      status: 200,
      message: "Product removed from favorites successfully",
      favorites: updatedUser.favorites,
    });
  } catch (error) {
    console.error("Error removing favorite:", error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { removeFavorite };
