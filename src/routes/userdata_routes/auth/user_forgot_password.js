require("dotenv").config();
const UserData = require("../../../models/user_model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    const user = await UserData.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

    user.resetToken = token;
    user.resetTokenExpire = Date.now() + 15 * 60 * 1000; // 15 mins
    await user.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "testing989298@gmail.com",
        pass: "qtzi uzfv kkdw ugys",
      },
    });

    const mailOptions = {
      from: "testing989298@gmail.com",
      to: email,
      subject: "Reset Your Password",
      html: `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset password</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: 200, message: "Reset email sent", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { forgotPassword };
