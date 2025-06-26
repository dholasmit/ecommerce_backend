const OrderData = require("../../../models/order_model");

async function allOrder(req, res) {
  try {
    const orders = await OrderData.find();
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all orders",
      orders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { allOrder };
