import { Router } from "express";
import { createfoodCategory, deleteFoodCategory, getFoodCategory, updateFoodCategory } from "../controlled/foodCategoryController";



export const foodCategoryRouters = Router();

foodCategoryRouters
  
  .get("/", getFoodCategory)
  .post("/",createfoodCategory)
  .put("/:id",updateFoodCategory)
  .put("/:id",deleteFoodCategory)


//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
