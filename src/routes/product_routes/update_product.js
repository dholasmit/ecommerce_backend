const ProductData = require("../../models/product_model");

async function updateProduct(req, res) {
  try {
    const { productImage, productname, productcolor, size, price } = req.body;
    const update = await ProductData.findByIdAndUpdate(
      req.params.id,
      { productImage, productname, productcolor, size, price },
      { new: true }
    );
    if (!update) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({
      status: 200,
      message: "Product updated successfully",
      update,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { updateProduct };
