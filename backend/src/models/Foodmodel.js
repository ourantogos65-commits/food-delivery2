import { model, Schema } from "mongoose";

const FoodSchemas = new Schema(
  {
  foodName:{type:String},
  price:{type:Number},
  image:{type:String},
  ingredients:{type:String},
  createdAt:{type:Date},
  updatedAt:{type:Date}
  },
  { timestamps: true }
);

export const Food = model("Food", FoodSchemas);
