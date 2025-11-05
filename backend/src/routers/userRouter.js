import { Router } from "express";
import {  signUp } from "../controlled/user.js";


export const Routers = Router();

Routers
  
  .post("/signup", signUp)
  


//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
