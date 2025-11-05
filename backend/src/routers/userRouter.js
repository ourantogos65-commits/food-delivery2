import { Router } from "express";
import {  getUser } from "../controlled/user.js";


export const userRouters = Router();

userRouters
  
  .get("/user", getUser)
  


//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
