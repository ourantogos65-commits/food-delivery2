import { model, Schema } from "mongoose";

const FoodOrderSchemas = new Schema(
  {
    totalPrice: { type: Number },
     user:{type: Schema.Types.ObjectId ,ref:"User"}
  },
  { timestamps: true }
);

export const FoodOrder = model("Foodorder", FoodOrderSchemas);
