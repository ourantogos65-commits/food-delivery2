import { Router } from "express";
import { createfood, deleteFood, getFood, updateFood } from "../controlled/foodController.js";


export const foodRouters = Router();

foodRouters
  
  .get("/", getFood)
  .post("/",createfood)
  .put("/:id",updateFood)
  .put("/:id",deleteFood)


//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
