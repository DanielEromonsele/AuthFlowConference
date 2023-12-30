import { Schema, model } from "mongoose";
import { iUserData } from "../Utils/Interfaces";

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    AdminCode: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("clients", userModel);
