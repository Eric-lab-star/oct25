import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  password: { type: String },
  email: { type: String },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 6);
});
const User = mongoose.model("User", userSchema);

export default User;
