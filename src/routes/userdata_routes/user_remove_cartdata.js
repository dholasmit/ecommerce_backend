const CartData = require("../../models/cart_model");

async function removeCartData(req, res) {
  try {
    const { userid, productid } = req.body;

    if (!userid || !productid) {
      return res
        .status(400)
        .json({ message: "User ID and Product ID are required" });
    }

    // Assuming CartData is a model that has a method to remove items
    const result = await CartData.deleteOne({ userid, productid });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    res.status(200).json({
      status: 200,
      message: "Item removed from cart successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { removeCartData };   