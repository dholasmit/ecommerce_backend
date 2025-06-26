const UserData = require("../../models/user_mode");

async function getAllUsers(req, res) {
  try {
    const users = await UserData.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved all users",
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
 module.exports = { getAllUsers };