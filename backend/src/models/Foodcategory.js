import { model, Schema } from "mongoose";

const foodCategorySchemas = new Schema(
  {
    categoryName: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

export const FoodCategory = model("FoodCategory", foodCategorySchemas);
