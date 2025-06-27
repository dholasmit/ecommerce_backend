const paypal = require("@paypal/checkout-server-sdk");
require("dotenv").config();

const env = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(env);
async function paypalPayment(req, res) {
  try {
    const { currency_code, amount, clintId, ProductId } = req.body;
    if (!currency_code || !amount || !clintId || !ProductId) {
      return res
        .status(400)
        .json({ message: "Currency code and amount are required" });
    }
    const requestOrder = new paypal.orders.OrdersCreateRequest();
    console.log(requestOrder);
    requestOrder.prefer("return=representation");
    requestOrder.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code,
            value: amount.toString(),
            clintId,
            ProductId,
          },
        },
      ],
    });

    const order = await client.execute(requestOrder);
    res.status(200).json({
      status: 200,
      message: "PayPal order created successfully",
      order: order.result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { paypalPayment };
