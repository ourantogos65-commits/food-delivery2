import { model, Schema } from "mongoose";

const OrderSchemas = new Schema(
  {
    totalPrice: { type: Number },
     user:{type: Schema.Types.ObjectId ,ref:"User"}
  },
  { timestamps: true }
);

export const Order = model("order", OrderSchemas);
