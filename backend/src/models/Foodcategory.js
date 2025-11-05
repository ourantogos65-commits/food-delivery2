import { model, Schema } from "mongoose";

const foodCategorySchemas = new Schema(
  {
    categoryName: { type: String },

  },
  { timestamps: true }
);

export const FoodCategory = model("FoodCategory", foodCategorySchemas);
