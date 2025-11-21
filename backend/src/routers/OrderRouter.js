import { Router } from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrder,
  updateFoodOrder,
} from "../controlled/OrderController.js";

export const foodOrderRouters = Router();

foodOrderRouters

  .get("/", getFoodOrder)
  .post("/", createFoodOrder)
  .put("/:id", updateFoodOrder)
  .put("/:id", deleteFoodOrder);

//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
