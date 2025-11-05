import {model,Schema} from "mongoose";



const userSchemas = new Schema(
  {
    email: { type: String, required: true, required: true },
    password: { type: String, required: true, required: true },
    phoneNumber: { type: Number },
    address: { type: String },
    role: { type: String, enum: ["USER", "ADMIN"] },
    orderedFoods: { type: [Schema.ObjectId] },
    isVerified: { type: Boolean },
 
  },
  { timestamps: true }
);

export const User = model("User", userSchemas);
