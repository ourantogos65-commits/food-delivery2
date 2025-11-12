import { model, Schema } from "mongoose";

const CategorySchemas = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

export const Category = model("Category", CategorySchemas);
