import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

/* Logic for registring the user */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Checking if user with same email already exists
    const ifUserExist = await userModel.findOne({ email });
    if (ifUserExist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating the email & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hashing the user Password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = generateToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "An error occurred" });
  }
};

/* Logic for Login */
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Doesn't Exist" });
    }

    /* Now comparing the passwords the one user enter with the one that are saved in Database */
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.json({ success: false, message: "Invalid Email or Password" });
    }

    /* Now generating the token for the user */
    const token = generateToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: "An error occurred" });
  }
};

export { registerUser, loginUser };
