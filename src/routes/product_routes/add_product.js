const ProductData = require("../../models/product_model");

// router.post("/addProductData", async (req, res) => {
async function addProduct(req, res) {
  try {
    const { productImage, productname, productcolor, size, price } = req.body;
    const newProductData = new ProductData({
      productImage,
      productname,
      productcolor,
      size,
      price,
    });
    await newProductData.save();
    res.status(200).json({
      status: 200,
      message: "successfully add product",
      newProductData,
    });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
}

module.exports = { addProduct };
