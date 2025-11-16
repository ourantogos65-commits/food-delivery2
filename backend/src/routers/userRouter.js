import { Router } from "express";
import { getUser, getUserById, signup, updateUser } from "../controlled/user.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouters = Router();

userRouters
.post ("/sigup" ,signup)
  .get("/user", getUser)
  .put("user/:id", updateUser)
  // .get("/user/:id", verifyToken, getUserById);
