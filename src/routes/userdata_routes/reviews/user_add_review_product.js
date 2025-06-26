const addReviewData = require("../../../models/add_review_model");

async function addReview(req, res) {
  try {
    const { userid, productid, rating, review } = req.body;

    if (!userid || !productid || !rating || !review) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Assuming you have a Review model to handle reviews
    const newReview = await addReviewData.create({
      userid,
      productid,
      rating,
      review,
    });
    await newReview.save();

    res.status(200).json({
      status: 200,
      message: "Review added successfully",
      review: newReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { addReview };
