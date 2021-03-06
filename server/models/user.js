
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  image: { type: String},
  categoryOne: { type: String },
  categoryTwo: { type: String },
  bio: { type: String},
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);