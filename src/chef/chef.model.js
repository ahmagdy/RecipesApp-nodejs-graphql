// @ts-check
import mongoose from "mongoose";

const mongooseTypes = mongoose.Schema.Types;

const cehfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 70
  },
  position: String,
  phoneNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

export const Chef = mongoose.model("chef", cehfSchema);
