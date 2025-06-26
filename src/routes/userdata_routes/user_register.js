require("dotenv").config();
const UserData = require("../../models/user_mode");
const bcrypt = require("bcrypt");

// 1 Register User
async function userRegister(req, res) {
  try {
    const { image, name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserData({
      image,
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ status: 201, message: "User crate successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { userRegister };
