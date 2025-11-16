import { User } from "../models/Usermodel.js";
import bcrypt, { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";



export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};2

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10)
    if (!email || !password) {
      res.status().send({ message: "email and password are required" });
    }
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(200).send({ message: "success", data: user });
  } catch (error) {
    console.error(error);
  }
};
export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not required" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    const token = jwt.sign({ id: user._id, email: user.email }, "secret-key", {
      expiresIn: "1h",
    });
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Wrong password" });
    }

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id, email: user.email }, "secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user" });
  }
};



