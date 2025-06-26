const ProductData = require("../../models/product_model");

async function getAllProducts(req, res) {   
  try {
    const products = await ProductData.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all products",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllProducts };
