const CartData = require("../../../models/cart_model");

async function addCart(req, res) {
  try {
    const { userid, productid, quantity } = req.body;

    if (!userid || !productid || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const cartItem = await CartData.findOneAndUpdate(
      { userid, productid },
      { $inc: { quantity } },
      { new: true, upsert: true }
    );

    res
      .status(200)
      .json({ status: 200, message: "Item added to cart", cartItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { addCart };
