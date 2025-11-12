import { Router } from "express";
import { getUser, getUserById, updateUser } from "../controlled/user.js";
import { verifyToken } from "../middleware/auth.js";

export const userRouters = Router();

userRouters

  .get("/user", getUser)
  .put("user/:id", updateUser)
  // .get("/user/:id", verifyToken, getUserById);
