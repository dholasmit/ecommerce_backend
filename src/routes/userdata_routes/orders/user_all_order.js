const OrderData = require("../../../models/order_model");

async function userGetAllOrders(req, res) {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "Order ID is required" });
    }
    const allOrder = await OrderData.find({ userId }).populate("productId");
    if (allOrder.lenth === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({
      ststus: 200,
      message: "All orders retrieved successfully",
      allOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { userGetAllOrders };
