const UserData = require("../../../models/user_model");

async function allFavorite(req, res) {
  try {
    const { userId } = req.body;
    console.log("userId =======>", userId);
    if (!userId) {
      res.status(400).json({ message: "userId is requide" });
    }
    const favoriteList = await UserData.findById(userId).populate("favorites");
    res.status(200).json({
      status: 200,
      message: "getting all favorite data",
      favoriteList,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = { allFavorite };
