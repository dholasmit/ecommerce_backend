const UserData = require("../../../models/user_mode");

// Delete User
async function userDelete(req, res) {
  try {
    const user = await UserData.findByIdAndDelete(req.params.id);

    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json({
      status: 200,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { userDelete };
