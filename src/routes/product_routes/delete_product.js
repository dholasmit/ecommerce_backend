const ProductData = require("../../models/product_model");

async function deleteProduct(req, res) {
  try {
    const product = await ProductData.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      status: 200,
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { deleteProduct };
