const addReviewData = require("../../../models/add_review_model"); 

async function getAllReviewsProduct(req, res) {
    try {
        const { productid } = req.body;
    
        if (!productid) {
        return res.status(400).json({ message: "Product ID is required" });
        }
    
        const reviews = await addReviewData.find({ productid }).populate("userid");
    
        if (reviews.length === 0) {
        return res.status(404).json({ message: "No reviews found for this product" });
        }
    
        res.status(200).json({
        status: 200,
        message: "Reviews retrieved successfully",
        reviews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllReviewsProduct };