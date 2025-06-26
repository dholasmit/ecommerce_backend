const ProductData = require("../../models/product_model");

async function getProductByid(req, res) {
  try {
    const product = await ProductData.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      status: 200,
      message: "Product details retrieved successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = { getProductByid };
