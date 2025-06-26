const OrderData = require("../../../models/order_model");
async function crateOrder(req, res) {
  try {
    const { productId, userId, quantity, price } = req.body;
    if (!productId || !userId || !quantity || !price)
      return res.status(400).json({ message: "All fields are required" });
    const newOrder = new OrderData({ productId, userId, quantity, price });
    await newOrder.save();
    res
      .status(200)
      .json({ status: 200, message: "Order created successfully", newOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { crateOrder };
