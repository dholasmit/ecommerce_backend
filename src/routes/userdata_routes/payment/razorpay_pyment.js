const Razorpay = require("razorpay");
require("dotenv").config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function initializePaymentRazorpay(req, res) {
  try {
    const { amount, currency, userId, productId } = req.body;
    if (!amount || !currency || !userId || !productId) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const orders = {
      amount: Math.round(amount * 100),
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId,
        productId,
      },
    };
    const order = await instance.orders.create(orders);
    console.log("Order created:", order);

    res.status(200).json({
      status: 200,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { initializePaymentRazorpay };
