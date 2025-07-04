const ProductData = require("../../../models/product_model");

async function searchProduct(req, res) {
  try {
    console.log(req.query);
    const productDeatils = req.query.productDeatils;

    if (!productDeatils) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Case-insensitive search in name or description
    const isNumeric = !isNaN(productDeatils);
    const conditions = [
      { productname: { $regex: productDeatils, $options: "i" } },
      { productcolor: { $regex: productDeatils, $options: "i" } },
    ];

    if (isNumeric) {
      conditions.push({ price: Number(productDeatils) });
      conditions.push({ size: Number(productDeatils) });
    }
    const products = await ProductData.find({ $or: conditions });

    res.status(200).json({
      status: 200,
      message: "Search results",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { searchProduct };
