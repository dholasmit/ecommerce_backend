require("dotenv").config();
const UserData = require("../../../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login user
async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserData.findOne({ email });

    // user find
    if (!user)
      return res.status(400).json({ message: "Invalid Email credentials" });

    // find password
    const isMatchPassword = await bcrypt.compare(password, user.password);

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // referwsh token
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );

    if (!isMatchPassword)
      return res.status(400).json({ message: "Invalid Password credentials" });
    res.status(200).json({
      status: 200,
      message: "Login successful",
      token,
      refreshToken,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { userLogin };
