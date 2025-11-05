import { User } from "../models/Usermodel.js";


export const getUser=async(req,res)=>{
  const user=await User.find()
  res.send(user)
}

// // export const signUp = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     const hashedPass =await bcrypt.hashSync(password, 10);
// //     const user = await User.create({ email, password: hashedPass });
// //     const token =jwt.sign({id:user})
// //     res.status(201).send({ ...user });
// //   } catch (error) {
// //     console.log("error", error);
// //     res.status(500).send({ message: "Server error", error });
// //   }
// // };

// export const signUp = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ message: "User already exists" });
//     }

//     const hashedPass = bcrypt.hashSync(password, 10);

//     const user = await User.create({ email, password: hashedPass });

//     const token = jwt.sign(
//       { id: user.id, email: user.email },

//       { expiresIn: "1h" }
//     );
//     res.status(201).send({
//       message: "User created successfully",
//       data: { id: user.id, email: user.email, token },
//     });
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).send({ message: "Server error", error });
//   }
// };

