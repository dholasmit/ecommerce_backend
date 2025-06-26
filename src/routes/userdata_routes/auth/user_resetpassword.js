require("dotenv").config();
const UserData = require("../../../models/user_mode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function resetPassword(req, res) {
  try {
    const { token } = req.params;
    const { oldPassword, newPassword } = req.body;
    console.log("Resetting password with token:", process.env.JWT_SECRET);

    console.log("Token received:", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded token:", decoded);
    const userId = decoded.id;
    if (!userId) {
      return res.status(400).json({ message: "Invalid token" });
    }

    // Find user by ID
    const user = await UserData.findById(userId);
    console.log("User found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare old password with the stored password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res
      .status(200)
      .json({ ststus: 200, message: "Password reset successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { resetPassword };
