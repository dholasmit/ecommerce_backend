const OrderData = require("../../../models/order_model");
async function cnacleOrder(req, res) {
  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ message: "Order ID is required" });

    const order = await OrderData.findByIdAndDelete(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({
      status: 200,
      message: "Order cancelled successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { cnacleOrder };