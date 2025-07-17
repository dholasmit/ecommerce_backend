const UserData = require("../../../models/user_model");
const upload = require("../../../all_routes/middleware");

// update user is pending its not working right now
async function updateUser(req, res) {
  try {
    const { name } = req.body;
    const image = req.file ? req.file.filename : null;
    if (!name || !image) {
      return res.status(400).json({ message: "name and image are required" });
    }
    const update = await UserData.findByIdAndUpdate(
      req.params.id,
      { image, name },
      { new: true }
    );
    if (!update) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      status: 200,
      message: "User updated successfully",
      update,
    });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
}
module.exports = { updateUser };
