require("dotenv").config();
const UserData = require("../../../models/user_model");
const bcrypt = require("bcrypt");

// 1 Register User
// async function userRegister(req, res) {
//   try {
//     const { image, name, email, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const newUser = new UserData({
//       image,
//       name,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();
//     res
//       .status(201)
//       .json({ status: 201, message: "User crate successfully", newUser });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// module.exports = { userRegister };

async function userRegister(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Path to the uploaded image
    const imagePath = req.file.path;

    // Create a new user
    const newUser = new UserData({
      name,
      image: imagePath,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      status: 201,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { userRegister };
