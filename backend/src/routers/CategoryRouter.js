import { Router } from "express";
import {
  CreateCategory,
  DeleteCategory,
  getCategory,
  getCategoryById,
  UpdateCategory,
} from "../controlled/CategoryController.js";

export const CategoryRouters = Router();

CategoryRouters
.get("/", getCategory)
.get("/:id",getCategoryById)
  .post("/", CreateCategory)
  .put("/:id", UpdateCategory)
  .put("/:id", DeleteCategory);

//   .post("/create-user", CreateUser)
//   .get("/user", getUserByid)
//   .get("/getFoodOrder", getfoodOrder);

// .get("/user/:id", verifyToken, getUserByid);
