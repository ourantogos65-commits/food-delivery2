import { User } from "../models/Usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get all users
export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Sign up new user
export const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "This email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User successfully created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

// Log in existing user
export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not registered" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

// Update user by ID
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

// Get user by ID
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

// import { User } from "../models/Usermodel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const getUser = async (req, res) => {
//   const user = await User.find();
//   res.send(user);
// };
// export const signUp = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const isRegistered = await User.findOne({ email: email });
//     if (!isRegistered) {
//       const hashedPassword = bcrypt.hashSync(password, 10);
//       console.log("hashedpass", hashedPassword);
//       User.create({
//         email: email,
//         password: hashedPassword,
//       });
//       res.status(200).send("User successfully created");
//     } else {
//       res.status(401).send("this email has already been registered");
//     }
//   } catch (error) {
//     res.status(500).send("error with creating a user");
//     console.log("error", error);
//   }
// };

// export const logIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const isRegistered = await User.findOne({ email: email });

//     if (!isRegistered) {
//       res.status(404).send("email hasnt been registered");
//     }
//     const isCorrectPass = await bcrypt.compare(password, isRegistered.password);
//     if (isCorrectPass) {
//       const token = jwt.sign(isRegistered.toObject(), "secret-key", {
//         expiresIn: "1h",
//       });
//       res.status(200).send({ res: isRegistered, token: token });
//     } else {
//       res.status(401).send("wrong password");
//     }
//   } catch (error) {
//     res.status(500).send(error, "error");
//   }
// };
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndUpdate(id, req.body);
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send("error", error);
//   }
// };

// export const getUserByid = async (req, res) => {
//   try {
//     const result = await User.findById(req.params.id);
//     console.log(result, "resuslt");
//     const token = jwt.sign({ ...result }, "secret-key", { expiresIn: "1h" });
//     console.log(token, "token");
//     res.send({ ...result, token });
//   } catch (error) {
//     res.send(error);
//   }
// };
