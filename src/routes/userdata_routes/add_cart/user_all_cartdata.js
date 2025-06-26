const CartData = require("../../../models/cart_model");

async function showCartData(req, res) {
  try {
    const { userid } = req.body;

    if (!userid) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const cartData = await CartData.find({ userid }).populate("productid");

    if (cartData.length === 0) {
      return res.status(404).json({ message: "No items found in cart" });
    }

    res.status(200).json({
      status: 200,
      message: "Cart data retrieved successfully",
      cartData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { showCartData };
