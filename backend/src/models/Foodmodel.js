import { model, Schema, SchemaType } from "mongoose";

const FoodSchemas = new Schema(
  {
    foodname: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

export const Food = model("Food", FoodSchemas);
